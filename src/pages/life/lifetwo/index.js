import React, { PureComponent } from 'react';
import {Link} from "react-router-dom";

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
        默认life2
      </div>
    )
  }
}