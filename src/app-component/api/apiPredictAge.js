import axios from 'axios';

const apiPredictAge = ({ user }) => {
    const name = new URLSearchParams(user);
    console.log(user)
    var config = {
        method: 'get',
        url: `https://api.agify.io?${name}`,
        headers: { }
    };

    return axios(config)
}

export default apiPredictAge;