import React, { useEffect, useState } from 'react'
import { creatEmp, getEmp, updateEmployee } from '../services/EmpSer';
import {useNavigate, useParams} from 'react-router-dom'

const EmployeeComp = () => {

    const [fname,setFName]=useState("");
    const [lname,setLName]=useState("");
    const [email,setEmail]=useState("");


     const [err,setErr]=useState({
         fname:'',
         lname:'',
         email:''
     })

     function validateForm(){
      let valid=true;
       const errCop={...err};

       if(fname.trim())
       {
         errCop.fname='';
       }else
       {
         errCop.fname='First Name is required';
         valid=false;
       }
       if(lname.trim())
       {
         errCop.lname='';
       }else
       {
         errCop.lname='LastName is required';
         valid=false;
       }
       if(email.trim())
       {
         errCop.email='';
       }else
       {
         errCop.email='Email is required';
         valid=false;
       }

          setErr(errCop);

          return valid;

     }


    const nav= useNavigate();
   
    const saveUpdateEmp=(e)=>{
        e.preventDefault();

         if(validateForm())
        {
        const emp={fname,lname,email};
            console.log(emp);

            if(id)
            {
              updateEmployee(id,emp).then((res)=>{
                console.log(res.data);
                nav('/employees')
              }).catch((err)=>{
                console.log(err);
              })
            }
            else
            {
              
            creatEmp(emp).then((res)=>{ console.log(res.data)
              nav('/employees')
            }).catch((err)=>{
                console.log(err);});
            
            }
          }
       
        
        }
    

    const {id}=useParams();

    function pageTitle()
    {
      return id ? <h2 className='text-center'>Update Employee</h2> : <h2 className='text-center'>Add Employee</h2>;
    }

    useEffect(()=>{
      if(id)
      {
        getEmp(id).then((res)=>{
          setFName(res.data.fname);
          setLName(res.data.lname);
          setEmail(res.data.email);
        }).catch((error)=>{
          console.log(error);
        })
      }
    },[id])

  return (
    <div className='container'>
        <br></br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {pageTitle()}
                <div className='card-body'>
                   <form>
                      <div className='form-group mb-2'>
                         <label className='form-label'>First Name</label>
                         <input type='text' placeholder='Enter Employee First Name' name='fname' 
                         value={fname} className={`form-control ${err.fname ? 'is-invalid':''}`}
                          onChange={(e)=>setFName(e.target.value)}></input>
                          {err.fname && <div className='invalid-feedback'> {err.fname}</div>}
                      </div>
                      <div className='form-group mb-2'>
                         <label className='form-label'>Last Name</label>
                         <input type='text' placeholder='Enter Employee Last Name' name='lname'  
                         value={lname} className={`form-control ${err.lname ? 'is-invalid':''}`} onChange={(e)=>setLName(e.target.value)}></input>
                         {err.lname && <div className='invalid-feedback'> {err.lname}</div>}
                      </div>
                      <div className='form-group mb-2'>
                         <label className='form-label'>Email:</label>
                         <input type='email' placeholder='Enter Employee Email' name='email'  
                         value={email} className={`form-control ${err.email ? 'is-invalid':''}`} onChange={(e)=>setEmail(e.target.value)}></input>
                         {err.email && <div className='invalid-feedback'> {err.email}</div>}
                      </div>

                      <button className='btn btn-success' onClick={saveUpdateEmp}>Submit</button>
                   </form>
                </div>

            </div>
        </div>

    </div>
  )
}

export default EmployeeComp