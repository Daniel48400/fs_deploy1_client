import axios from 'axios'

const Axios = axios.create({
    baseURL:  "http://localhost:8888/posts",
    
})


export default Axios