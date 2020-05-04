import React, { Component } from 'react';

export default childComponent => {
    class ComposedComponent extends Component {
        componentDidMount() {
            this.shouldNavigateAway();
        }
        componentDidUpdate() {
            this.shouldNavigateAway();
        }
        shouldNavigateAway() {
            if (!this.props.auth) {
                this.props.history.push('/');
            }
        }
        render() {
            return <childComponent />
        }
    }
    return ComposedComponent;
}