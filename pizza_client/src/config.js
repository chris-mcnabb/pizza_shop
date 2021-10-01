import axios from  'axios'

const URL = window.location.hostname === `localhost`
    ? `http://localhost:3040`
    : `http://IP_ADDRESS_OF_YOUR_DROPLET`

const customInstance = axios.create({
    baseURL: URL,
    headers: { 'Accept': 'application/json' }
})

export default customInstance;
