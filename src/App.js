import NavBar from './Components/NavBar';
import Header from './Components/Header';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Header />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
