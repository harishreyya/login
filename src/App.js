
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginPage } from './components/loginPage';
import { HomePage } from './components/homePage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/> }/>
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
