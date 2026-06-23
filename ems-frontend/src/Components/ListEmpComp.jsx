import React, { useEffect, useState } from 'react'
import { empList, deleteEmployee } from '../services/EmpSer';
import { useNavigate } from 'react-router-dom';

const ListEmpComp = () => {

    const [emps,setEmps]=useState([]);

    useEffect(()=>{
       getAllEmps();
    },[])
 

    function getAllEmps(){
        empList().then((res)=> {setEmps(res.data);})
                .catch((err)=> {console.log(err);})
    }
    

    const navigator=useNavigate();

    function addNewEmp(){
        navigator("/addEmployees");
    }

    function updateEmp(id){
        navigator(`/editEmp/${id}`)
    }

    function deleteEmp(id){
        deleteEmployee(id).then((res)=>{
            getAllEmps();
            console.log(res.data);
        }).catch((error)=>{console.log(error)});
    }
  return (
    <div className='container'>
        <h1 className='text-center'>List of Employees data</h1>
        <button className='btn btn-primary mb-2' onClick={addNewEmp}>Add Employee</button>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    emps.map((emp)=> <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.fname}</td>
                        <td>{emp.lname}</td>
                        <td>{emp.email}</td>
                        <td>
                            <button className='btn btn-info' 
                            onClick={()=>updateEmp(emp.id)}>Update</button>
                            <button className='btn btn-danger' style={{marginLeft:"5px"}} 
                            onClick={()=>deleteEmp(emp.id)}>Delete</button>
                        </td>
                        
                    </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmpComp