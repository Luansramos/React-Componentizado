import ConteudoPrincipal from './Componentes/ConteudoPrincipal';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';
import { Outlet } from 'react-router-dom';



function App() {

  return (
    <>
      <Header />
      <ConteudoPrincipal/>
      <Outlet />
      <Footer />
    </> 
  )
}

export default App
