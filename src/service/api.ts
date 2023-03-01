import axios from "axios";

const http = axios.create({
    baseURL: 'http://200.169.68.106:9992/api/'
})

export default http