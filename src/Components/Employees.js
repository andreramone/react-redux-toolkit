import React, { useState } from "react";
import { EmployeesService } from "../services/EmployeeService";

let Employees = () => {
  let [state, setState] = useState({
    employees: EmployeesService.getAllEmployees(),
  });

  let { employees } = state;

  let updateSelected = (empId) => {
    let selectedEmployees = employees.map(employee => {
      if (employee.id === empId) {
        return {
          ...employee,
          isSelected: !employee.isSelected
        }
      } 
      else return employee;
    });
    setState({
      ...state, employees: selectedEmployees
    });
  };


  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(employees)}</pre> */}
      <div className="container mt-3">
        <div className="row">
          <div className="col"></div>
          <p className="h3 text-primary">Employees</p>
          <p>
            lorem ipsum dolor sit amet lorem ipsus dolor sit amet lorem ipsum
            dolor sit amet
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-group">
              {employees.length > 0 &&
                employees.map((employee) => {
                  return (
                    <li className="list-group-item" key={employee.id}>
                      <input
                        onChange={() => updateSelected(employee.id)}
                        type="checkbox"
                        className="form-check-input me-2"
                      ></input>
                      {employee.name}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="col-md-6">
            {employees.length > 0 &&
              employees.map((employee) => {
                return (
                  <div key={employee.id}>
                    {employee.isSelected && (
                      <div className="card">
                        <div className="card-body">
                          <ul className="list-group">
                            <li className="list-group-item">
                              Name:{" "}
                              <span className="fw-bold">{employee.name}</span>
                            </li>
                            <li className="list-group-item">
                              Email:{" "}
                              <span className="fw-bold">{employee.email}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Employees;
