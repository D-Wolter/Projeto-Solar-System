import React from 'react';

class Title extends React.Component {
  render() {
    const { headline } = this.props;

    return (
      <header>
        <h2>{ headline }</h2>
      </header>
    );
  }
}

export default Title;
