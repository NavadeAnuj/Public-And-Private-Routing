import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/LoginPage/Login';
import PrivateRoutes from './Routes/PrivateRoutes/PrivateRoutes';
import Dashboard from './Pages/Dashboard/Dashboard';
import About from './Pages/About/About';
import PublicRoutes from './Routes/PublicRoutes/PublicRoutes';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes/>}>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Route>
      <Route element={<PublicRoutes/>}>
        <Route path='/login' element={<Login/>}/>
      </Route>
    </Routes>
  );
}

export default App;
