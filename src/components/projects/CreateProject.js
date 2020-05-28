import React, { Component } from 'react'
import {connect} from "react-redux"
import {createProject} from '../../store/actions/projectActions'
import {Redirect} from "react-router-dom"

class CreateProject extends Component {
    state={
        title: "",
        content: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        this.props.createProject(this.state)

    }
    render() {

        const { auth } = this.props
        if(!auth.uid) return <Redirect to='/signin'/>

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="black-text">Create Project</h5>
                    <div className="input-field">
                        <input type="text" id="title" onChange={this.handleChange} className="validate"/>
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="input-field">
                        <textarea id="content" onChange={this.handleChange} className="materialize-textarea"></textarea>
                        <label htmlFor="content">Content</label>
                    </div>
                   
                    <div className="input-field">
                        <button type="submit" className="btn waves-effect waves-light deep-purple darken-3 z-depth-0">Create</button>
                    </div>
                    
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)