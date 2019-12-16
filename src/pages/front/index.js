import React from 'react';
import './App.css';
import axios from 'axios'
// import {_getMessage} from './services/user'
class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name:' new Date()'}
  }
  render() {
    return (
      <div>
  <h2>hello,{this.state.name}</h2>
        <Child name={this.state.name}/>
      </div>
    )
  }
}
class Child extends React.Component {
  constructor(){
    super()
    this.state = {
      childName: '菜鸟'
    }
  }
  async getMessage() {
    // const res = await _getMessage()
    // console.log(res)
  }
  componentDidMount() {
    this.getMessage()
    axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
    .then(function (response) {
      console.log(response)
     
    })
  }
  preventPop = (name,e) =>{
    e.preventDefault()
    this.setState((prevState, props) =>{
      console.log(prevState, props)
       return {childName: prevState.childName + 1 + props.name}
    })
    // alert(this.state.childName,name)
  }
  render() {
  return (<a href="" onClick={this.preventPop.bind(this, this.props.name)}>{this.props.name}{this.state.childName}</a>
  )
  }
}
function App() {
  const element = <Father/>
  return element
}

export default App;
