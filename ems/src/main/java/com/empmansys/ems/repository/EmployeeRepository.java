package com.empmansys.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.empmansys.ems.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long>{

}
