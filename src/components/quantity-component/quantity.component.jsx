import React from 'react';
import './quantity.styles.scss'
class Quantity extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {value: this.props.quantity}
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      
    }
    
    increment() {
      this.setState(prevState => ({value: ++prevState.value}),()=>this.props.handleClick(this.state.value));
    }
    
    decrement() {
      this.setState(prevState => ({value: prevState.value > 1? --prevState.value : 1}),()=>this.props.handleClick(this.state.value));
    }
    
    render() {
      return (
        <div>

        <div className="quantity-input">
          <button className="quantity-input__modifier quantity-input__modifier--left" onClick={()=>{
            this.decrement()
            
            }}>
            &#8722;
          </button>
          <input className="quantity-input__screen" type="text" value={this.state.value} readOnly />
          <button className="quantity-input__modifier quantity-input__modifier--right" onClick={()=>{
            this.increment()
            
            }}>
            &#xff0b;
          </button>  
        </div>  
        </div>
      );
    }
  }
  
  export default Quantity