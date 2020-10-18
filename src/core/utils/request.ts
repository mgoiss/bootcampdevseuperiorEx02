import axios, {Method} from 'axios';

type ResquestParams = {
    url: string;
    method?: Method
}

const BASE_URL = ' https://api.github.com/users/';

export const makeRequest = ({url, method = 'GET'}: ResquestParams) => {
    return axios({
        url: `${BASE_URL}${url}`,
        method
    })
}