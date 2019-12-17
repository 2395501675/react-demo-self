import React, { PureComponent } from 'react';
import {Link, Route, Switch} from "react-router-dom";

import {_getMessage} from "../../services/user"
import Bcrumb from "../bcrumb"

export default class Default extends PureComponent {
  state = {
    name : ''
  }
  async getMessage() {
    const res = await _getMessage()
    console.log(res)
  }
  componentDidMount = async () => {
    this.getMessage()
  }

  render() {
    return (
      <div className="g-default">
        welcome to route link:
        <Link to={`/home`}>返回</Link>|
        <Link to={`/front`}>前沿</Link>|
        <Link to={`/life`}> 生活</Link>
        <hr/>
        <Bcrumb />
        <hr/>

      </div>
    )
  }
}