import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers :{
        Authorization:'Client-ID 82212e7d993a5c6970094467c4465c479ae8a785834886628dde3224b4a201fe'
    }
})