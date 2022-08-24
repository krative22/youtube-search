import axios from 'axios'

const KEY = "AIzaSyABE5SSK799sRIMwiObK5Pt9OEKUlAoNhY";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY,
        
    }
})
 