import Axios from './caller.service'

let getAllPosts = () => {
    return Axios.get('/')
}

let createPost = (post)  => {
    return Axios.put('/', post)
} 

let deletePost = (id) => {
    return Axios.delete('/'+ id)
}

export const postService = {
    getAllPosts,
    createPost,
    deletePost,
}