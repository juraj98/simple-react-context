import React from 'react';

export default contexts =>
  function ContextProvider(props) {
    return Object.values(contexts).reduce(
      (accumulator, context) => (
        <context.Provider>{accumulator}</context.Provider>
      ),
      props.children,
    );
  };
