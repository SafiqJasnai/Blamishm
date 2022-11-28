import axios from 'axios';

const apiPredictNationality = (name) => {
    var config = {
        method: 'get',
        url: 'https://api.nationalize.io?name=nathaniel',
        headers: { }
    };

    return axios(config)
}

export default apiPredictNationality;