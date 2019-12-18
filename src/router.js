import React from 'react';
import { BrowserRouter, Route, Switch,Link} from 'react-router-dom';
import Bundle from './bundle';
import Front from './pages/front'

// const Front = (props) => (<Bundle load={() => import('./pages/front')}>{(Front) => <Front {...props}/>}</Bundle>);
const Home = (props) => (<Bundle load={() => import('./pages/home')}>{(Home) => <Home {...props}/>}</Bundle>);
const Life = (props) => (<Bundle load={() => import('./pages/life')}>{(Life) => <Life {...props}/>}</Bundle>);
const Life1 = (props) => (<Bundle load={() => import('./pages/life/lifeone')}>{(Life1) => <Life1 {...props}/>}</Bundle>);
const Life2 = (props) => (<Bundle load={() => import('./pages/life/lifetwo')}>{(Life2) => <Life2 {...props}/>}</Bundle>);
const Header = (props) => (<Bundle load={() => import('./components/header')}>{(Header) => <Header {...props}/>}</Bundle>);

const Apps = () => (
    <ul className="app-list">
      <li>
        <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
      </li>
      <li>
        <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
      </li>
    </ul>
  );

const BasicRoute = () => (
    <div>
<BrowserRouter>
    <Header/>
        <Link to="/">Home</Link>|
        <Link to="/apps">Application List</Link>
      <br/>
      <div>
      <Switch>
        <Route path="/apps" component={Apps} />
        <Route exact path="/" component={Home}/>
        <Route path={["/front"]} component={Front}/>
        <Route path="/life" component={Life}/>
        <Route  path="/home" component={Home}/>
        <Route render={() => <span>Home Page1111</span>} />

      </Switch>
      </div>
    {/* <Switch>
    
    </Switch> */}
  </BrowserRouter>

    </div>
  );


export default BasicRoute;