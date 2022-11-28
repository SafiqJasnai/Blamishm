import axios from 'axios';

const apiPredictGender = (name) => {
    var config = {
        method: 'get',
        url: 'https://api.genderize.io?name=luc',
        headers: { }
    };

    return axios(config)
}

export default apiPredictGender;