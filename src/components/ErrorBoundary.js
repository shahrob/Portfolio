import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          textAlign: 'center', 
          padding: '50px', 
          color: 'white',
          backgroundColor: '#1a1a2e'
        }}>
          <h2>Oops! Something went wrong.</h2>
          <p>We're sorry for the inconvenience. Please refresh the page or try again later.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              background: '#c770f0',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
