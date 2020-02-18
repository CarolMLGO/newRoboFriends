import React, { Component } from 'react';

interface IEbProps {

}

interface IEbState {
    hasError: boolean
}

class ErrorBoundary extends Component < IEbProps, IEbState > {
    constructor(props: IEbProps) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1> Something went wrong! </h1>
        }
        return this.props.children
    }
};

export default ErrorBoundary;