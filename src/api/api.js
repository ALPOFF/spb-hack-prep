import * as axios from "axios";

const instance =  axios.create({
    withCredentials: true,
    baseURL: 'http://',
    headers: {}
});

export const taskAPI = {
    getTaskData() {
        return instance.get(``).then(response => {
            return response.data
        })
    },

    geodecode(coordPoint) {
        return axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=a2b8af4a-0675-4706-aafc-c386bc1661ee&geocode=${coordPoint[1]},${coordPoint[0]}`)
    }
}
