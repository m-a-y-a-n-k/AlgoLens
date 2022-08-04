import React from 'react';

export default class Link extends React.Component {
  render() {
    let ico = null;
    switch (this.props.direction.toLowerCase()) {
      case 'left':
        ico = <i className='ico left'></i>;
        break;
      case 'up':
        ico = <i className='ico up'></i>;
        break;
      case 'down':
        ico = <i className='ico down'></i>;
        break;

      default:
        ico = <i className='ico right'></i>;
    }

    return (
      <div>
        <div className='link-label'>{this.props.label}</div>
        <div className='link'>{ico}</div>
      </div>
    );
  }
}
