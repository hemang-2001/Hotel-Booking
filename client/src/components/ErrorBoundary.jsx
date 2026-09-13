import React from 'react';
import AppErrorState from './AppErrorState';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Application error captured by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <AppErrorState
          title="Unable to load Smart Stays"
          message="We hit an unexpected issue while rendering this page."
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
