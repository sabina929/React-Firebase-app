export const createProject = (project) => {
    // return {
    //     type: "ADD_PROJECT",
    //     project
    // }

    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //async call to DB
        const firestore = getFirestore()
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'S',
            authorLastName: 'A',
            authorId: '123456',
            createdAt: new Date(),
            
        }).then(() => {
            dispatch({type: "CREATE_PROJECT", project})
        }).catch((err) => {
            dispatch({type: 'CRATE_PROJECT_ERROR', err})
        })

        
    }
}