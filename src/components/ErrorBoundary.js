import {Component} from "react";

class ErrorBoundary extends Component {

    constructor() {
        super();
        this.state = { hasError: false };
    }

    /** This is a lifecycle method, can be added to any class-based component and it turns it into a error boundary component
     * it can't be added to functional components */
    componentDidCatch(error, errorInfo) {
        console.log(error);
        this.setState({hasError: true})
    }


    render() {
        if(this.state.hasError) {
          return <p>Something went wrong</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
