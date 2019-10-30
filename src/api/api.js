import * as axios from "axios";

const instance =  axios.create({
    withCredentials: true,
    baseURL: 'localhost',
    headers: {}
});

export const taskAPI = {
    sendTask(selectedEmployee, empTask, taskTime, taskAddress) {
        return instance.post(``, {selectedEmployee, empTask, taskTime, taskAddress});
    },

    getTasks() {
        return instance.get(``);
    },

    getWorkers() {
        return instance.get(``);
    },

    geodecode(coordPoint) {
        return axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=a2b8af4a-0675-4706-aafc-c386bc1661ee&geocode=${coordPoint[1]},${coordPoint[0]}`)
    }
};
