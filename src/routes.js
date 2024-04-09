import Menu from './componentes/Menu'
import './App.css';
import SobreMim from './paginas/SobreMim';
import Inicio from './paginas/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rodape from 'componentes/Rodape';
import PaginaPadrao from 'componentes/PaginaPadrao';
import Post from './paginas/Post'
import NaoEncontrada from 'paginas/NaoEncontrada';



function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu/>

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/sobremim' element={<SobreMim/>}/>
          
        </Route>
        <Route path= '/posts/:id' element={<Post/>}/>

        {/* Na rota "/" a estrutura a ser renderizada é
        <Pagina Padrao>
          <Inicio />
        <Pagina Padrao/>

        /* Na rota "/sobremim" a estrutura a ser renderizada é
        <Pagina Padrao>
          <SobreMim />
        <Pagina Padrao/>
        */}
        
        <Route path='*' element={<NaoEncontrada/>}/>

      </Routes>

      <Rodape/>
    </BrowserRouter>
    );
}

export default AppRoutes;
