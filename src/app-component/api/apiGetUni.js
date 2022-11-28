import axios from 'axios';

const apiGetUni = (name) => {
    var config = {
        method: 'get',
        url: 'http://universities.hipolabs.com/search?country=Malaysia',
        headers: { }
    };

    return axios(config)
}

export default apiGetUni;