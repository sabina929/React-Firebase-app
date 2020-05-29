export const createProject = (project) => {
    // return {
    //     type: "ADD_PROJECT",
    //     project
    // }

    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //async call to DB
        const firestore = getFirestore()

        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid

        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId,
            createdAt: new Date(),
            
        }).then(() => {
            dispatch({type: "CREATE_PROJECT", project})
        }).catch((err) => {
            dispatch({type: 'CRATE_PROJECT_ERROR', err})
        })

        
    }
}