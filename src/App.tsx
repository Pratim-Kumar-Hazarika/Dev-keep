import GoogleKeep from './Screens/GoogleKeep';
import {Routes,Route} from 'react-router-dom';
import Profile from './Screens/Profile';
import Trash from './Screens/Trash';
import Archive from './Screens/Archive';
import Login from './Screens/Login';
import Signup from './Screens/Signup';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path ="/" element ={<GoogleKeep/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path ="/trash" element={<Trash/>}/>
          <Route path = "/archive" element = {<Archive/>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/signup" element={<Signup/>}/>
        </Routes>
    </div>
  );
}

export default App;
