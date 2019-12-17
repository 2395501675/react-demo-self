import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Bundle from './bundle';


const Front = (props) => (<Bundle load={() => import('./pages/front')}>{(Front) => <Front {...props}/>}</Bundle>);
const Home = (props) => (<Bundle load={() => import('./pages/home')}>{(Home) => <Home {...props}/>}</Bundle>);
const Life = (props) => (<Bundle load={() => import('./pages/life')}>{(Life) => <Life {...props}/>}</Bundle>);
const Header = (props) => (<Bundle load={() => import('./components/header')}>{(Header) => <Header {...props}/>}</Bundle>);



const BasicRoute = () => (
  <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/front" component={Front}/>
      <Route  path="/life" component={Life}/>
      <Route exact path="/home" component={Home}/>
      
      {/* <Route exact component={Home}/> */}
    </Switch>
  </BrowserRouter>
);


export default BasicRoute;