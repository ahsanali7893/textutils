import Header from './components/layout/Header';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import TextUtils from './components/layout/TextUtils';
import About from './components/layout/About';

function App() {
  return (
    <>
   <BrowserRouter>
     <Header/>
     <TextUtils/>
     <About/>
     </BrowserRouter>
    </>
  );
}

export default App;
