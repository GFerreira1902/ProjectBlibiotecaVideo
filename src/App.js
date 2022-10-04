import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Lancamento from './pages/lancamentos/Lancamento';
import LancamentoVideo from './pages/lancamentos/LancamentoVideo';
import LancamentoEdit from './pages/lancamentos/LancamentoEdit';
import Filme from './pages/categorias/Filme';
import Musicas from './pages/categorias/Musicas';
import Jogos from './pages/categorias/Jogos';
import Entretenimento from './pages/categorias/Entretenimento';
import Index from "./pages/Index";
import './App.css';
import Suporte from "./pages/suporte/Suporte";
import Avaliacao from "./pages/suporte/Avalicacao";
import MusicasEdit from "./pages/categorias/MusicasEdit";
import MusicasVideo from "./pages/categorias/MusicasVideo";
import EntretenimentoEdit from "./pages/categorias/EntretenimentoEdit";
import EntretenimentoVideo from "./pages/categorias/EntretenimentoVideo";
import FilmeEdit from "./pages/categorias/FilmeEdit";
import FilmeVideo from "./pages/categorias/FilmeVideo";
import JogosEdit from "./pages/categorias/JogosEdit";
import JogosVideo from "./pages/categorias/JogosVideo";

function App() {
  return (
    <div className='App-header'>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Index />}/>             
            <Route path="/all" element={<Lancamento />} />
            <Route path="/all/:id" element={<LancamentoVideo />} />
            <Route path="/all/edit/:id" element={<LancamentoEdit />} />
            <Route path="/categoria/musica/edit/:id" element={<MusicasEdit />} />
            <Route path="/categoria/musicas/:id" element={<MusicasVideo />} />
            <Route path="/categoria/filmes" element={<Filme />} />
            <Route path="/categoria/musicas" element={<Musicas />} />
            <Route path="/categoria/entretenimento" element={<Entretenimento />} />
            <Route path="/categoria/entretenimento/edit/:id" element={<EntretenimentoEdit />} />
            <Route path="/categoria/entretenimento/:id" element={<EntretenimentoVideo />} />
            <Route path="/categoria/filme/edit/:id" element={<FilmeEdit />} />
            <Route path="/categoria/filme/:id" element={<FilmeVideo />} />
            <Route path="/categoria/jogos" element={<Jogos />} />
            <Route path="/categoria/jogos/edit/:id" element={<JogosEdit />} />
            <Route path="/categoria/jogos/:id" element={<JogosVideo />} />
            <Route path="/suporte" element={<Suporte />} />
            <Route path="/avaliacao" element={<Avaliacao />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
