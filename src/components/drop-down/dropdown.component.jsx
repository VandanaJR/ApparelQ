import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const sizeOptions = [
  {
    key: 'Choose an option',
    text: 'Choose an option',
    value: 'Choose an option'
  },
  {
    key: 'Size S',
    text: 'Size S',
    value: 'Size S'
  },
  {
    key: 'Size M',
    text: 'Size M',
    value: 'Size M'
  },
  {
    key: 'Size L',
    text: 'Size L',
    value: 'Size L'
  },
  {
    key: 'Size XL',
    text: 'Size XL',
    value: 'Size XL'
  },
  {
    key: 'Size XXL',
    text: 'Size XXL',
    value: 'Size XXL'
  },
  
]

class  DropdownSelection extends React.Component{
  constructor(props){
    super(props)
    this.state={
      value:''
    }
  }
  //console.log(value)
  handleChange = (event,data)=>{
    const {name,value}= data;
    this.setState({[name]:value})
    this.props.sizeSelected(value)
  }
  render(){
    return(
    <Dropdown
    placeholder='Choose an option'
    fluid
    selection
    options={sizeOptions}
    onChange= {this.handleChange}
    name ="value"/>
    )
  }
  }

export default DropdownSelection
