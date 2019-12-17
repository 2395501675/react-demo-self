import React, { PureComponent } from 'react';
import {login1} from "../../services/user"
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
// import Life1 from './lifeone'
import Life2 from './lifetwo'
const life1 = () => (
  <div>life1</div>
);
export default class Default extends PureComponent {
  state = {
    name : ''
  }
  async getMessage() {
    // const res = await login1()
    // console.log(res)
  }
  componentDidMount = async () => {
    // this.getMessage()
  }

  render() {
    return (
      <div className="g-default">
        默认life页
        <div className="demo-nav">
        <Link to="/life/lifeone">life1</Link>
        <Link to="/life/lifetwo">life2</Link>
      </div>
        <br />
        life
        <Switch>
          <Route path="/life/lifeone" component={life1}/>
          <Route path="/life/lifetwo" component={Life2} />
        </Switch>
        <br/>
      </div>
    )
  }
}