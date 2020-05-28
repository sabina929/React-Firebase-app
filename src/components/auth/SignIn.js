import React, { Component } from 'react'
import { connect } from "react-redux"
import { signIn } from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'

class SignIn extends Component {
    state={
        email: "",
        password: ""

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        this.props.signIn(this.state)

    }
    render() {
        const {authError, auth} = this.props
        if(auth.uid) return <Redirect to='/'/>
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="black-text">Sign In</h5>
                    <div className="input-field">
                        <input type="email" id="email" onChange={this.handleChange} className="validate" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" autoComplete="true" className="validate" onChange={this.handleChange}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field">
                        <button type="submit" className="btn waves-effect waves-light deep-purple darken-3 z-depth-0">Login</button>
        <div className="red-text center">{
            authError ? <p>{authError}</p> : null
        }</div>
                    </div>
                    
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(SignIn)