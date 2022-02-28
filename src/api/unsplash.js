import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { 
        Authorization: 
        'Client-ID DR7WQXTwNSHV7fDLmZhag0tH6KWS7CyykLXs9eZXmEE'
    }
});