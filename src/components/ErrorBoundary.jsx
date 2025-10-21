import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-content">
            <i className="bx bx-error-circle"></i>
            <h2>Oops! Something went wrong</h2>
            <p>We're sorry for the inconvenience. Please refresh the page to try again.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="error-button"
            >
              <i className="bx bx-refresh"></i> Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
