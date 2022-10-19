import axios from "axios";

export class UsersService {
  static serverURL = "http://localhost:9000";

  static getAllEmployees() {
    let dataURL = `${this.serverURL}/Employees?_sort=firstName&_order=asc`;
    return axios.get(dataURL);
  }

  static addEmployee(details) {
    let dataURL = `${this.serverURL}/Employees`;
    return axios.post(dataURL, details);
  }

  static getEmployee(employeeID) {
    let dataURL = `${this.serverURL}/Employees/${employeeID}`;
    return axios.get(dataURL);
  }

  static editEmployee(details, employeeID) {
    let dataURL = `${this.serverURL}/Employees/${employeeID}`;
    return axios.put(dataURL, details);
  }

  static deleteEmployee(employeeID) {
    let dataURL = `${this.serverURL}/Employees/${employeeID}`;
    return axios.delete(dataURL);
  }
}
