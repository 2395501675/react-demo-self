import React, { PureComponent } from 'react';
import {Link, Route, Switch} from "react-router-dom";
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
        默认home页
        <br />
        {/* <Route>
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/front" component={Front}/>
            <Route exact path="/life" component={Life}/>
            <Route exact path="/home" component={Home}/>
            <Route exact component={Home}/>
          </Switch>
        </Route> */}
        
      </div>
    )
  }
}