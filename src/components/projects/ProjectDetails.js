import React from 'react'

const ProjectDetails = (props) => {
    // console.log(props)
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Sabina Abbasova</div>
                    <div>23rd May, 9PM</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
