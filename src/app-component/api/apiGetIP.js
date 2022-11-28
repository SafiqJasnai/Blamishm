import axios from 'axios';

const apiGetIP = (name) => {
    var config = {
        method: 'get',
        url: 'https://api.ipify.org?format=json',
        headers: { }
    };

    return axios(config)
}

export default apiGetIP;