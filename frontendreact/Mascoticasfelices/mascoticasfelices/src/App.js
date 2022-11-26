//import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm'
import Footer from './components/landing/Footer'
import Navbar from './components/landing/NavBar'
import PlanForm from './components/PlanForm'
import SucursalForm from './components/SucursalForm'
import UserLogin from './components/landing/login'
import Carrouselplan from './components/landing/Carrousel_plan'
import MisionVision from './components/landing/MisionVision'
import PlanListRead from './components/PlanList'
import PlanUpdate from './components/PlanUpdate'
import UserListRead from './components/UserList'
import UserUpdate from './components/UserUpdate'
import SucursalListRead from './components/SucursalList'
import SucursalUpdate from './components/SucursalUpdate'
import ProductForm from './components/ProductoForm'
import ProductListRead from './components/ProductoList'
import ProductUpdate from './components/ProductoUpdate'
import ProspectForm from './components/ProspectoForm'
import ProspectListRead from './components/ProspectoList'
import ProspectUpdate from './components/ProspectoUpdate'
import MascotaForm from './components/MascotaForm'
import MascotaView from './components/MascotaView'
import MascotaListRead from './components/MascotaList'
import MascotaUpdate from './components/MascotaUpdate'
import EstadoUpdate from './components/EstadoUpdate'
import MascotaView2 from './components/MascotaView2'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'



function App() {
  return (
    <div className='App'>
      {/* 
      <div className='container' style={{textAlign: '-webkit-center', marginBottom: '5%', marginTop: '5%'}}>      
      <PlanForm />
      <PlanListRead/>
      </div>       
      
      
       */}
      {/* <Navbar />
      <landing/Carrouselplan/>
      <landing/MisionVision/>
      <ProspectForm/> 
      <MascotaListRead/>*/}
      <Navbar />
      <Carrouselplan/>
      <MisionVision/>
      <ProspectForm/>
      <Footer />
      <Router>
        
      <div>
        {/* <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Link to='/MascotaForm'>
          <h3>Crear</h3></Link>          
        </div>
        <div style={{ marginTop: 20 }}>
        <Link to='/MascotaList'>
          <h3>Listar</h3></Link>        
        </div> */}
        {/* <Link to='/ProspectoUpdate'>
          <h3>Actualizar</h3></Link> */}

          <Routes>
          <Route exact path='/EstadoUpdate' element={<EstadoUpdate/>} />
          </Routes>
          <Routes>
          <Route exact path='/MascotaUpdate' element={<MascotaUpdate/>} />
          </Routes>
          <Routes>
          <Route exact path='/MascotaList' element={<MascotaListRead/>} />
          </Routes>
          <Routes>
          <Route exact path='/MascotaView' element={<MascotaView/>} />
          </Routes>
          <Routes>
          <Route exact path='/MascotaForm' element={<MascotaForm/>} />
          </Routes>
          <Routes>
          <Route exact path='/ProspectoForm' element={<ProspectForm/>} />
          </Routes>
          <Routes>
          <Route exact path='/ProspectoList' element={<ProspectListRead/>} />
          </Routes>
        <Routes>
        <Route path='/ProspectoUpdate' element={<ProspectUpdate/>} />
        </Routes>
          <Routes>
          <Route exact path='/ProductoForm' element={<ProductForm/>} />
          </Routes>
          <Routes>
          <Route exact path='/ProductoList' element={<ProductListRead/>} />
          </Routes>
        <Routes>
        <Route path='/ProductoUpdate' element={<ProductUpdate/>} />
        </Routes>
          <Routes>
          <Route exact path='/SucursalForm' element={<SucursalForm/>} />
          </Routes>
          <Routes>
          <Route exact path='/SucursalList' element={<SucursalListRead/>} />
          </Routes>
        <Routes>
        <Route path='/SucursalUpdate' element={<SucursalUpdate/>} />
        </Routes>
          <Routes>
          <Route exact path='/UserForm' element={<UserForm/>} />
          </Routes>
          <Routes>
          <Route exact path='/UserList' element={<UserListRead/>} />
          </Routes>
        <Routes>
        <Route path='/UserUpdate' element={<UserUpdate/>} />
        </Routes>
          <Routes>
          <Route exact path='/PlanForm' element={<PlanForm/>} />
          </Routes>
          <Routes>
          <Route exact path='/PlanList' element={<PlanListRead/>} />
          </Routes>
        <Routes>
        <Route path='/PlanUpdate' element={<PlanUpdate/>} />
        </Routes>
      </div>
    </Router>

    </div>
  )
}

export default App
