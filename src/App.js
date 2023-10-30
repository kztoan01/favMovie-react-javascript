import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Film from './components/Film'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import About from './components/About'
import Contact from './components/Contact'
import Detail from './components/Detail'
import News from './components/News'
import Login from './components/Login';
import { AuthContextProvider } from './components/authConfig/AuthContext';
import Protected from './components/protected/Protected';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import Edit from './components/Edit';
function App() {
  return (
    <>
    <AuthContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<><Film /></>}/>
          <Route path='/detail/:id' element={<><Detail /></>}></Route>
          <Route path='/contact' element={<><Contact /></>}></Route>
          <Route path='/about' element={<><About /></>}></Route>
          <Route path='/news' element={<><News /></>}></Route>
          <Route path='/login' element={<><Login /></>}></Route>
          <Route path='/dashboard' element={<><Protected><Dashboard /></Protected></>}></Route>
          <Route path='/edit/:id' element={<><Protected><Edit /></Protected></>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
