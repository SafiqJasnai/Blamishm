import axios from 'axios';

const apiGetIPLocation = (name) => {
    var config = {
        method: 'get',
        url: 'https://ipinfo.io/103.95.33.75/geo',
        headers: { }
    };

    return axios(config)
}

export default apiGetIPLocation;