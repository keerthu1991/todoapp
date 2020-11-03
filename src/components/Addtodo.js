import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Addtodo extends Component {
    state={
        title:''
    }
    onChange=(e)=>this.setState({[e.target.name]:e.target.value});
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }
    render() {
        return (
            <form 
            onSubmit={this.onSubmit}
            style={{display:'flex',padding:'5px'}}>
               <input type="text" 
               name="title" 
               placeholder="Add Todo..."
               style={{flex:'10'}}
               value={this.state.title}
               onChange={this.onChange}/>
               <input 
               type="submit" 
               value="Submit"
               className="btn" 
               style={{flex: '1'}}/>
            </form>
        )
    }
}
Addtodo.propTypes={
    addTodo:PropTypes.func.isRequired
}

export default Addtodo