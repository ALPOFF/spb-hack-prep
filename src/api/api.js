import * as axios from "axios";

const instance =  axios.create({
    withCredentials: true,
    baseURL: 'https://',
    headers: {}
});

export const taskAPI = {
    expData () {
        return instance.delete(``)
    }

}
