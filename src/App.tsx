import Header from './components/layout/Header';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import TextUtils from './components/layout/TextUtils';

function App() {
  return (
    <>
   <BrowserRouter>
     <Header/>
     <TextUtils/>
     </BrowserRouter>
    </>
  );
}

export default App;
