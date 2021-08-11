import GoogleKeep from './Screens/GoogleKeep';
import {Routes,Route} from 'react-router-dom';
import Profile from './Screens/Profile';
import Trash from './Screens/Trash';
import Archive from './Screens/Archive';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import { Label } from './Screens/Label';
import { useGoogleKeep } from './Context/GoogleKeepProvider';
import { EditNote } from './Components/EditNote/EditNote';
import { EditModel } from './Components/ShowEditModel/EditModel';
import { EditArchiveNotes } from './Components/ShowEditModel/EditArchiveNotes';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path ="/home" element ={<GoogleKeep/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path ="/trash" element={<Trash/>}/>
          <Route path = "/archive" element = {<Archive/>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/signup" element={<Signup/>}/>
          <Route path = "/label/:labelName" element={<Label/>}/>
          <Route path = "/home/:from/:noteId" element ={<EditModel/>}/>
          <Route path = "/note/:from/:noteId" element ={<EditArchiveNotes/>}/>
        </Routes>
    </div>
  );
}

export default App;
