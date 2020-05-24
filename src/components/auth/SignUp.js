import React, { Component } from 'react'

export default class SignUp extends Component {
    state={
        email: "",
        password: "",
        firstName: "",
        lastName: ""

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="black-text">Sign Up</h5>
                    <div className="input-field">
                        <input type="text"  id="firstName" onChange={this.handleChange} className="validate"/>
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" id="lastName" onChange={this.handleChange} className="validate"/>
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="input-field">
                        <input type="email" id="email"  onChange={this.handleChange} className="validate"/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" autoComplete="true" id="password" className="validate" onChange={this.handleChange}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field">
                        <button type="submit" className="btn waves-effect waves-light deep-purple darken-3 z-depth-0">Sign up</button>
                    </div>
                    
                </form>
                
            </div>
        )
    }
}
