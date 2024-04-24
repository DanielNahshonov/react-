export const addPost = (name,body)=> {
    return{
        type:'ADD_POST',
        payload:{name,body}
    }

}

export const deletePost = (id)=>{
    return{
        type:"DELETE_POST",
        payload:{id}
    }
}

export const editPost = (id,body)=>{
    return{
        type:"EDIT_POST",
        payload:{id,body}
    }
}