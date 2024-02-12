import './App.css';
import Home from './component/home';
import Login from './component/login';
import Register from './component/register';
import CompanyList from './component/companyList';
import CompanyPage from './component/companyList';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import UserRegister from './component/userRegister';
function App() {
  return (
    <>
    <BrowserRouter>
    {/* <ul>
      <li><Link to='/' >Home</Link></li>
      <li><Link to='/login' >Login</Link></li>
      <li><Link to='/register' >Register</Link></li>
      <li><Link to='/companylist'>GetCompanyDeta</Link></li>

    </ul> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/companylist' element={<CompanyList/>}/>
      <Route path='/userregister' element={<UserRegister/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
