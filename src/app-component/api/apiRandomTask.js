import axios from 'axios';

const apiRandomTask = (name) => {
    var config = {
        method: 'get',
        url: 'https://www.boredapi.com/api/activity',
        headers: { }
    };

    return axios(config)
}

export default apiRandomTask;