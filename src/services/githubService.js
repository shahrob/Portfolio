const GITHUB_USERNAME = 'shahrob';
const GITHUB_API_BASE = 'https://api.github.com';

// GitHub API service
export class GitHubService {
  static async fetchUserRepos(username = GITHUB_USERNAME) {
    try {
      const response = await fetch(
        `${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=100`
      );
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      const repos = await response.json();
      return repos.filter(repo => !repo.fork); // Filter out forked repos
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
      return [];
    }
  }

  static async fetchUserProfile(username = GITHUB_USERNAME) {
    try {
      const response = await fetch(`${GITHUB_API_BASE}/users/${username}`);
      if (!response.ok) throw new Error('Failed to fetch user profile');
      return await response.json();
    } catch (error) {
      console.error('Error fetching GitHub profile:', error);
      return null;
    }
  }

  static extractTechStack(languages, repoName, description) {
    const techStack = [];
    
    // Add languages from GitHub API
    Object.keys(languages || {}).forEach(lang => {
      techStack.push(lang);
    });

    // Detect additional technologies from description and repo name
    const content = `${repoName} ${description || ''}`.toLowerCase();
    
    const techKeywords = {
      'React': ['react', 'jsx', 'react.js'],
      'React Native': ['react native', 'react-native', 'expo'],
      'Node.js': ['node', 'nodejs', 'node.js', 'express'],
      'MongoDB': ['mongodb', 'mongo', 'mongoose'],
      'PostgreSQL': ['postgresql', 'postgres', 'pg'],
      'MySQL': ['mysql'],
      'Firebase': ['firebase', 'firestore'],
      'AWS': ['aws', 'amazon web services'],
      'Docker': ['docker', 'container'],
      'GraphQL': ['graphql', 'apollo'],
      'Next.js': ['next', 'nextjs', 'next.js'],
      'Vue.js': ['vue', 'vuejs', 'vue.js'],
      'Angular': ['angular'],
      'Laravel': ['laravel'],
      'Django': ['django'],
      'Flask': ['flask'],
      'FastAPI': ['fastapi'],
      'TailwindCSS': ['tailwind', 'tailwindcss'],
      'Bootstrap': ['bootstrap'],
      'Material-UI': ['material-ui', 'mui'],
      'Redux': ['redux'],
      'Zustand': ['zustand'],
      'Prisma': ['prisma'],
      'Socket.io': ['socket.io', 'websocket'],
      'Stripe': ['stripe', 'payment'],
      'JWT': ['jwt', 'jsonwebtoken'],
      'API': ['api', 'rest', 'restful']
    };

    Object.entries(techKeywords).forEach(([tech, keywords]) => {
      if (keywords.some(keyword => content.includes(keyword))) {
        if (!techStack.includes(tech)) {
          techStack.push(tech);
        }
      }
    });

    return techStack;
  }

  static processRepoForPortfolio(repo) {
    const techStack = this.extractTechStack(
      repo.languages, 
      repo.name, 
      repo.description
    );

    // Determine if repo has a live demo
    const hasDemo = repo.homepage || 
                   repo.description?.includes('demo') || 
                   repo.description?.includes('live') ||
                   repo.has_pages;

    // Generate demo URL
    const demoUrl = repo.homepage || 
                   (repo.has_pages ? `https://${GITHUB_USERNAME}.github.io/${repo.name}` : null);

    return {
      id: repo.id,
      name: repo.name,
      title: this.formatTitle(repo.name),
      description: repo.description || 'A project built with modern technologies.',
      techStack,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      githubUrl: repo.html_url,
      demoUrl,
      hasDemo: !!demoUrl,
      createdAt: new Date(repo.created_at),
      updatedAt: new Date(repo.updated_at),
      size: repo.size,
      isPrivate: repo.private,
      topics: repo.topics || [],
      openIssues: repo.open_issues_count,
      defaultBranch: repo.default_branch,
      isGitHubProject: true
    };
  }

  static formatTitle(repoName) {
    // Convert repo name to readable title
    return repoName
      .split(/[-_]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  static categorizeProjects(projects) {
    const categories = {
      'Web Applications': [],
      'Mobile Apps': [],
      'Backend/APIs': [],
      'Full Stack': [],
      'Tools & Utilities': [],
      'Featured': [],
      'Other': []
    };

    projects.forEach(project => {
      const { techStack, description, name, stars, forks } = project;
      const content = `${name} ${description}`.toLowerCase();
      
      // Featured projects (high engagement)
      if (stars > 3 || forks > 1 || project.hasDemo) {
        categories['Featured'].push(project);
      }
      
      if (techStack?.includes('React Native') || content.includes('mobile') || content.includes('app')) {
        categories['Mobile Apps'].push(project);
      } else if (techStack?.includes('React') && (techStack?.includes('Node.js') || techStack?.includes('MongoDB'))) {
        categories['Full Stack'].push(project);
      } else if (techStack?.includes('React') || techStack?.includes('Vue.js') || techStack?.includes('Angular')) {
        categories['Web Applications'].push(project);
      } else if (techStack?.includes('Node.js') || techStack?.includes('API') || content.includes('api')) {
        categories['Backend/APIs'].push(project);
      } else if (content.includes('tool') || content.includes('utility') || content.includes('cli')) {
        categories['Tools & Utilities'].push(project);
      } else {
        categories['Other'].push(project);
      }
    });

    // Remove empty categories
    Object.keys(categories).forEach(key => {
      if (categories[key].length === 0) {
        delete categories[key];
      }
    });

    return categories;
  }
}
