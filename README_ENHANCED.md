# Muhammad Shahrob Abbas - Portfolio Website

Personal portfolio of **Muhammad Shahrob Abbas**, Senior Full Stack Developer building web, mobile, SaaS and AI-powered products.

## 🚀 Live Demo
Visit my portfolio: [shahrobabbas.com](https://shahrobabbas.com)

## ✨ Design

The site follows current developer-portfolio conventions: a bento-grid layout, type-led minimalism and restrained motion that puts the work first.

### 🎨 **Look & Feel**
- **Bento grid**: the hero, about, projects and stack sections are built from modular tiles of different sizes
- **Typography**: Geist for text, Geist Mono for labels and Instrument Serif italics for accent words
- **Light & dark themes**: follows the system setting, with a toggle that remembers the visitor's choice
- **Subtle motion**: scroll reveals, a rotating headline word, a tech-stack marquee and a cursor spotlight on cards, all of which respect `prefers-reduced-motion`

### 📱 **Page Layout**
The home page is a single scrolling page with these sections:

1. **Hero**: name, role, availability, CTAs, "Hire me on Upwork / Fiverr" links, photo, current role, key numbers, tech marquee and local time
2. **About**: background, current focus, education, Khurshid Dairy and the GitHub contribution calendar
3. **Selected work**: six highlighted projects, including the MMAREKANI AI image search pipeline
4. **Experience**: timeline of roles and education
5. **Stack**: skills grouped by area, with AI as the current focus
6. **Services**: the services offered, with a "Want something built?" band linking to Upwork and Fiverr
7. **Recommendations**: links to the recommendations on LinkedIn and Upwork
8. **Contact**: "Hire me on Upwork" and "Hire me on Fiverr" cards, contact details and a form that opens the visitor's email app with the message ready

Separate pages:
- **`/projects`**: all client and product work with category filters and search, plus public GitHub repositories loaded from the GitHub API, ending with the Upwork / Fiverr hire band
- **`/resume`**: the resume PDF viewer with a download button

The older routes (`/about`, `/skills`, `/experience`, `/services`, `/testimonials`, `/stats`, `/contact`) still work and scroll to the matching section.

### ⌨️ **Extras**
- **Command menu**: press `⌘K` (or `Ctrl K`) to jump to any section, hire me on Upwork or Fiverr, open a profile, copy the email address, switch theme or download the CV
- **Scroll-spy navigation**: the navbar highlights the section in view

## 🛠 **Technical Notes**
- Content lives in one file, `src/data/profile.js`, kept in sync with LinkedIn and Upwork
- Plain CSS with design tokens (CSS custom properties) for both themes, no UI framework
- The resume viewer (PDF.js) is code-split, so it only loads on `/resume`
- React Helmet for page titles and meta tags
- Error boundary for graceful failures

## 🔧 **Technology Stack**
- React 17
- React Router 6
- Framer Motion 6
- React Icons
- React PDF (resume viewer)
- React GitHub Calendar
- Create React App

## 📁 **Project Structure**

```
src/
├── components/
│   ├── Home/               # Home page sections (Hero, About, SelectedWork, ...)
│   ├── Layout/             # Navbar, Footer, CommandPalette, ScrollManager
│   ├── Projects/           # Projects page and project cards
│   ├── Resume/             # Resume page
│   ├── UI/                 # Card, Section and reveal animation helpers
│   └── ErrorBoundary.js    # Error handling
├── data/profile.js         # All site content
├── hooks/                  # Theme, toast, scroll-spy and local-time hooks
├── services/               # GitHub API client
├── utils/                  # Browser helpers (clipboard, shortcuts)
├── Assets/                 # Images and the resume PDF
├── App.js                  # Routes and app shell
├── index.css               # Design tokens and global styles
└── index.js                # Application entry point
```

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (version 14 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/shahrob/Portfolio.git
cd Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Run tests**
```bash
npm test
```

5. **Build for production**
```bash
npm run build
```

## 📧 **Contact Information**

- **Email**: shahrobk@gmail.com
- **LinkedIn**: [linkedin.com/in/shahrob-abbas](https://linkedin.com/in/shahrob-abbas/)
- **Upwork**: [upwork.com/freelancers/~01589f1d414475058b](https://www.upwork.com/freelancers/~01589f1d414475058b)
- **Fiverr**: [fiverr.com/s/1EKlGDz](https://www.fiverr.com/s/1EKlGDz)
- **GitHub**: [github.com/shahrob](https://github.com/shahrob)
- **Twitter**: [twitter.com/shahrob_abbas](https://twitter.com/shahrob_abbas)

## 🤝 **Contributing**

While this is a personal portfolio, I welcome suggestions and feedback! Feel free to:

1. Open an issue for bugs or suggestions
2. Submit a pull request for improvements
3. Share feedback on design or functionality
4. Connect with me for collaboration opportunities

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Muhammad Shahrob Abbas**

*Senior Full Stack Developer | AI SaaS, Web & Mobile Apps*
