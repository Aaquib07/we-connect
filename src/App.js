import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import NavBar from './components/navBar/NavBar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';


function App() {

  const currentUser = true

  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{display: "flex"}}>
          <LeftBar />
          <div style={{flex:6}}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  }


  const ProtectedRoute = ({ children }) => {
    // If the user is not logged in, we navigate the user to Login page.
    if (!currentUser) {
      return <Navigate to={'/login'} />
    }
    // If the user is logged in , we render the Home page and Profile page.
    return children
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }>
            <Route path='/' element={<Home />} />
            <Route path='/profile/:id' element={<Profile />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
