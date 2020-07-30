import React, { Component } from 'react';

const countHits = (WrrapedComponent) => {
  class CountHits extends Component {
    state = {
      hits: 0,
    };

    addOne = () => {
      this.setState((prevState) => {
        return {
          hits: prevState.hits + 1,
        };
      });
    };

    componentDidUpdate(prevProps, prevState) {
      if (this.state !== prevState) {
        const componentName = WrrapedComponent.name;
        this.props.reduceHandler(componentName);
      }
    }

    render() {
      return (
        <WrrapedComponent
          addOneHit={this.addOne}
          hocState={this.state}
          {...this.props}
        />
      );
    }
  }

  return CountHits;
};

export default countHits;
