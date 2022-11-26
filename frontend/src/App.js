import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './views/HomePage'
import SignIn from './views/Auth/SignIn';
import SignUp from './views/Auth/SignUp';
import Landing from './views/Landing';
import Profile from './views/Profile';
import SetAccount from './views/SetAccount'
import Store from './views/Store';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Landing />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/dashboard' element={<HomePage />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/change-profile' element={<SetAccount />}/>
        <Route path='/store' element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
