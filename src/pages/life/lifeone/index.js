import React, { PureComponent } from 'react';

export default class Default extends PureComponent {
  state = {
    name : ''
  }
  async getMessage() {
  }
  componentDidMount = async () => {
  }

  render() {
    return (
      <div className="g-default">
        默认life1
      </div>
    )
  }
}