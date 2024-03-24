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
        <Route exact path='/jjk' element={<JJK/>} />
        <Route exact path='/mha' element={<MHA />} />
        <Route exact path='/con' element={<CON />} />
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}>
          <Route path=':selectedImage' element={<Shop />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;