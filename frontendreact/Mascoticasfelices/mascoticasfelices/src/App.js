//import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm'
import Footer from './components/Footer'
import Navbar from './components/NavBar'
import PlanForm from './components/PlanForm'
import SucursalForm from './components/SucursalForm'
import UserLogin from './components/login'



function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container' style={{textAlign: '-webkit-center', marginBottom: '5%', marginTop: '5%'}}>
      <UserLogin />
      </div>      
      <Footer />
    </div>
  )
}

export default App
