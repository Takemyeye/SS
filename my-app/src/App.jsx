import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './styles/App.css';
import MyComponent from './components/Mycomponent';
import { JJK } from './components/JJK';
import { MHA } from './components/MHA';
import { CON } from './components/CallofNight';
import Register from './components/Register';
import Home from './components/Home';
import Shop from './components/Shop';
import NotFound from './components/404'; 

const App = () => {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<MyComponent />} />
        <Route exact path='/jjk' element={user ? <Navigate to="/register"/> : <JJK />} />
        <Route exact path='/mha' element={user ? <Navigate to="/register"/> : <MHA />} />
        <Route exact path='/con' element={user ? <Navigate to="/register"/> : <CON />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/home' element={user ? <Navigate to="/register"/> : <Home />} />
        <Route path='/shop' element={user ? <Navigate to="/register"/> : <Shop />}>
          <Route path=':selectedImage' element={user ? <Navigate to="/register"/> : <Shop />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;