package com.empmansys.ems.employeeMapper;

import com.empmansys.ems.dto.EmployeeDTO;
import com.empmansys.ems.entity.Employee;

public class EmployeeMap {

    public static EmployeeDTO mapToEmployeeDTO(Employee employee){
        return new EmployeeDTO(
            employee.getId(),
            employee.getFname(),
            employee.getLname(),
            employee.getEmail()
        );
    }

    public static Employee mapTOEmployee(EmployeeDTO employeeDTO){
          Employee employee = new Employee();
          employee.setFname(employeeDTO.getFname());
          employee.setLname(employeeDTO.getLname());
          employee.setEmail(employeeDTO.getEmail());
          return employee;
    }

}
