package com.empmansys.ems.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.empmansys.ems.dto.EmployeeDTO;
import com.empmansys.ems.employeeMapper.EmployeeMap;
import com.empmansys.ems.entity.Employee;
import com.empmansys.ems.exceptions.ResourceNotFoundExcep;
import com.empmansys.ems.repository.EmployeeRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployeeSerImpl implements EmployeeService {

     private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {
        Employee employee=EmployeeMap.mapTOEmployee(employeeDTO);
        Employee savedEmploye=employeeRepository.save(employee);
        return EmployeeMap.mapToEmployeeDTO(savedEmploye);

    }

    @Override
    public EmployeeDTO getEmployeeById(Long id) {
        Employee emp=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundExcep("Employee with this id not exist :" + id));
        return EmployeeMap.mapToEmployeeDTO(emp);
        
    }

    @Override
    public List<EmployeeDTO> getAllEmployees() {
       List<Employee> emps=employeeRepository.findAll();
       List<EmployeeDTO> empDTOs=emps.stream().map((emp)->EmployeeMap.mapToEmployeeDTO(emp)).collect(Collectors.toList());
       return empDTOs;
    }

    @Override
    public EmployeeDTO updateEmployee(Long id, EmployeeDTO empDTO) {
        // TODO Auto-generated method stub
       Employee emp=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundExcep("Employee with this id is not exist:" + id));
         emp.setFname(empDTO.getFname());
         emp.setLname(empDTO.getLname());
         emp.setEmail(empDTO.getEmail());

         Employee updatedEmp=employeeRepository.save(emp);
         return EmployeeMap.mapToEmployeeDTO(updatedEmp);
    }

    @Override
    public void deleteEmployee(Long id) {
         Employee emp=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundExcep("Employee with this id is not exist:" + id));
          employeeRepository.delete(emp);
    }

    

    


}
