package com.empmansys.ems.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.empmansys.ems.dto.EmployeeDTO;
import com.empmansys.ems.services.EmployeeService;

import lombok.AllArgsConstructor;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<EmployeeDTO> createEmployee(@RequestBody EmployeeDTO emDTO)
    {
        EmployeeDTO newEmp=employeeService.createEmployee(emDTO);
        return new ResponseEntity<>(newEmp,HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<EmployeeDTO> getEmployeeById(@PathVariable ("id") Long employeeId){
        EmployeeDTO empDT=employeeService.getEmployeeById(employeeId);
        return ResponseEntity.ok(empDT);
    }

    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> getAllEmployees(){
        List<EmployeeDTO> empDTOs=employeeService.getAllEmployees();
        return ResponseEntity.ok(empDTOs);
    }

    @PutMapping("{id}")
    public ResponseEntity<EmployeeDTO> updateEmployee(@PathVariable("id") Long id,@RequestBody EmployeeDTO empDTO){
        EmployeeDTO updatedEmp=employeeService.updateEmployee(id, empDTO);
        return ResponseEntity.ok(updatedEmp);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmp(@PathVariable("id") Long id)
    {
        employeeService.deleteEmployee(id);
        return ResponseEntity.ok("Employee deleted successfully");
    }

}
