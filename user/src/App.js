import React from 'react';
import PublicRoute from './components/PublicRoute';
import 'antd/dist/reset.css';
import ProtectedRoute from './components/ProtectedRoute';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import { useSelector } from 'react-redux';
import Profile from './pages/Profile';

function App() {
  const {loading}=useSelector(state =>state.alerts)
  return (
   <BrowserRouter>
   {loading&&<div className='spinner-parent'>
   <div class="spinner-border" role="status">
  
</div>
   </div>}
   <Toaster
  position="top-center"
  reverseOrder={false}
/>
   <Routes>
   <Route path="/login" element={<PublicRoute><Login/></PublicRoute>}/>
   <Route path="/register" element={<PublicRoute><Register/></PublicRoute>}/>
   <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
   <Route path='/profile' element={<Profile/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
