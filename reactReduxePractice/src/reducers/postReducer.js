let id = 0

export default function postReducer(state=[],action){
    switch(action.type){
        case 'ADD_POST':
            let post = {
                id: id++,
                name:action.payload.name,
                body: action.payload.body
            }
            return[...state,post]
        case 'DELETE_POST':
            return state.filter(post => action.payload.id != post.id)

        case 'EDIT_POST':
            return state.map(val => {
                if(val.id === action.payload.id){
                    return{...val,body:action.payload.body}
                }else{
                    return val
                }
            })

            default:
                return state

    }

}