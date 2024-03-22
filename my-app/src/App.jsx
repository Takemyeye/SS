import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/App.css';
import './styles/Preloader.css'
import './styles/Shop.css';
import MyComponent from './components/Mycomponent';
import { JJK } from './components/JJK';
import { MHA } from './components/MHA';
import { CON } from './components/CallofNight';
import  Register  from './components/Register';
import Home from './components/Home';
import Shop from './components/Shop';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<MyComponent/>} />
        <Route exact path='/JJK' element={<JJK />} />
        <Route exact path='/MHA' element={<MHA />} />
        <Route exact path='/CON' element={<CON />} />
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/Home' element={<Home/>}/>
        <Route exact path='/Shop' element={<Shop/>}/>
      </Routes>
    </Router>
  );
};

export default App;