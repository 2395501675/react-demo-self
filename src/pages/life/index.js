import React, { PureComponent } from 'react';
import {login1} from "../../services/user"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
// import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
// // import Life1 from './lifeone'
// import Life2 from './lifetwo'
// const life1 = () => (
//   <div>life1</div>
// );
// export default class Default extends PureComponent {
//   state = {
//     name : ''
//   }
//   async getMessage() {
//     // const res = await login1()
//     // console.log(res)
//   }
//   componentDidMount = async () => {
//     // this.getMessage()
//   }

//   render() {
//     return (
//       <div className="g-default">
//         默认life页
//         <div className="demo-nav">
//         <Link to="/life/lif1">life1</Link>
//         <Link to="/life/life2">life2</Link>
//       </div>
//         <br />
//         life
       
//         <Switch>
//           <Route path="/life/life1" component={life1}/>
//           <Route path="/life/life2" component={Life2} />
//         </Switch>
//         <br/>
//       </div>
//     )
//   }
// }