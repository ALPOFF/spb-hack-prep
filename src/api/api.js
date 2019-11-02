import * as axios from "axios";

const instance =  axios.create({
    withCredentials: true,
    baseURL: 'https://geotestback.herokuapp.com/',
    headers: {}
});

export const taskAPI = {
    sendTask(taskName, idWorker, description, deadline, taskAddress) {
        return axios.post(`https://geotestback.herokuapp.com/`, {taskName: taskName, idWorker: idWorker, description: description, deadline: deadline, taskAddress: taskAddress});
    },

    getTasks() {
        return axios.get(`https://geotestback.herokuapp.com/task/`);
    },

    getWorkers() {
        return axios.get(`https://geotestback.herokuapp.com/worker/`, { params: {id: "*"}});
    },

    geodecode(coordPoint) {
        return axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=a2b8af4a-0675-4706-aafc-c386bc1661ee&geocode=${coordPoint[1]},${coordPoint[0]}`)
    }
};
