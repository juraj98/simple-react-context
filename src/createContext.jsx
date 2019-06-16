import React, { Component, PureComponent } from 'react';

export default (state, actions, pureComponent = false) => {
  const { Provider, Consumer } = React.createContext();

  class ProviderComponent extends (pureComponent ? PureComponent : Component) {
    constructor(props) {
      super(props);

      this.state = { ...state };
      this.actions = actions(this.setState.bind(this));
    }

    render() {
      return (
        <Provider
          value={{
            state: this.state,
            actions: this.actions,
          }}
        >
          {this.props.children}
        </Provider>
      );
    }
  }

  return { ProviderComponent, Consumer, Provider };
};
