import React, { PureComponent } from 'react';
import {Link} from "react-router-dom";
import {login1} from "../../services/user"

export default class Default extends PureComponent {
  state = {
    name : ''
  }
  async getMessage() {
    const res = await login1()
    console.log(res)
  }
  componentDidMount = async () => {
    // this.getMessage()
  }

  render() {
    return (
      <div className="g-default">
        默认显示页
        <br />
        <Link to={`/login`}>
          返回
        </Link>
        <Link to={`/login`}>
          前沿
        </Link>
        <Link to={`/login`}>
          生活
        </Link>
      </div>
    )
  }
}