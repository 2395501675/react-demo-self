import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Bundle from './bundle';
const Home = (props) => (<Bundle load={() => import('./pages/home')}>{(Register) => <Home {...props}/>}</Bundle>);
const Front = (props) => (<Bundle load={() => import('./pages/front')}> {(Front) => <Front {...props}/>}</Bundle>);
const Life = (props) => (<Bundle load={() => import('./pages/life')}>{(Default) => <Life {...props}/>}</Bundle>);
const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
        <Route exact path="/home" component={Home}/>
      <Route exact path="/front" component={Front}/>
      <Route exact path="/life" component={Life}/>

      <Route exact path="/" component={Home}/>
      <Route exact
             component={Home}/>
        </Switch>
    </BrowserRouter>
)
export default BasicRoute;