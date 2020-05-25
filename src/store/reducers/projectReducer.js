const initialState = {
    projects: [
        {id:1, title: "Lorem", content: "Lorem lorem lorem"},
        {id:2, title: "Ipsum", content: "Ipsum ipsum ipsum"},
        {id:3, title: "Dolor", content: "Dolor dolor dolor"}
    ]
}
 
const projectReducer = (state=initialState, action)=>{
    switch(action.type) {
        case "CREATE_PROJECT":
            console.log("created project", action.project)
            // return {
            //     ...state,
            //     projects: 
            // }
        }
        console.log(state)
    return state
}

export default projectReducer