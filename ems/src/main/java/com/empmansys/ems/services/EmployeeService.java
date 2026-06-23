package com.empmansys.ems.services;

import java.util.List;

import com.empmansys.ems.dto.EmployeeDTO;

public interface EmployeeService {

    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO);

    public EmployeeDTO getEmployeeById(Long id);

    public List<EmployeeDTO> getAllEmployees();

    public EmployeeDTO updateEmployee(Long id, EmployeeDTO empDTO);

    public void deleteEmployee(Long id);

}
