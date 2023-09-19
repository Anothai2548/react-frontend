import axios from 'axios'

export default axios.create({
    baseURL: 'htpp://localhost:8080/api', 
    headers: {
        'Content-type' : 'application/json'
    }
})