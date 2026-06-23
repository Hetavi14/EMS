
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Hello } from './Hello'
import ListEmpComp from './Components/ListEmpComp'
import HeaderComp from './Components/HeaderComp'
import FooterComp from './Components/FooterComp'
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import EmployeeComp from './Components/EmployeeComp'

function App() {
  

  return (
    <>
     <BrowserRouter>
        <HeaderComp />
        <Routes>
          <Route path="/" element={<ListEmpComp />} />
          <Route path="/employees" element={<ListEmpComp />} />
          <Route path="/addEmployees" element={<EmployeeComp />} />
          <Route path="/editEmp/:id" element={<EmployeeComp />}/>
        </Routes>
        <FooterComp />
      </BrowserRouter>
    </>
  )
}

export default App
