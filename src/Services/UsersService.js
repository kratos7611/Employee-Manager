import axios from "axios";

export class UsersService {

    static serverURL = "http://localhost:9000"

    static getAllEmployees() {
        let dataURL = `${this.serverURL}/Employees`
        return axios.get(dataURL)
    }

    static addEmployee(details) {
        let dataURL = `${this.serverURL}/Employees`
        return axios.post(dataURL, details)
    }

    static getEmployee(employeeID) {
        let dataURL = `${this.serverURL}/Employees/${employeeID}`
        return axios.get(dataURL)
    }
}