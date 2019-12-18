// import React from 'react';
// import './App.css';
// import axios from 'axios'
// // import {_getMessage} from './services/user'
// class Father extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {name:' new Date()'}
//   }
//   render() {
//     return (
//       <div>
//         <b>front</b><br/>
//   <span>hello,{this.state.name},</span>
//         <Child name={this.state.name}/>
//       </div>
//     )
//   }
// }
// class Child extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       childName: '菜鸟'
//     }
//   }
//   async getMessage() {
//     // const res = await _getMessage()
//     // console.log(res)
//   }
//   componentDidMount() {
//     this.getMessage()
//     axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
//     .then(function (response) {
//       console.log(response)
     
//     })
//   }
//   preventPop = (name,e) =>{
//     e.preventDefault()
//     this.setState((prevState, props) =>{
//       console.log(prevState, props)
//        return {childName: prevState.childName + 1 + props.name}
//     })
//     // alert(this.state.childName,name)
//   }
//   render() {
//   return (<a href="" onClick={this.preventPop.bind(this, this.props.name)}>{this.props.name}{this.state.childName}</a>
//   )
//   }
// }
// function App() {
//   const element = <Father/>
//   return element
// }

// export default App;
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { match, location, history } = this.props;
    console.log(11,location)
    return <div>You are now at {location.pathname}</div>;
  }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const ShowTheLocationWithRouter = withRouter(ShowTheLocation);

export default function App() {
  return (ShowTheLocationWithRouter)
}