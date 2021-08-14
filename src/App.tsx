import GoogleKeep from './Screens/GoogleKeep';
import {Routes,Route} from 'react-router-dom';
import Profile from './Screens/Profile';
import Trash from './Screens/Trash';
import Archive from './Screens/Archive';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import { Label } from './Screens/Label';
import { EditModel } from './Components/ShowEditModel/EditModel';
import { EditArchiveNotes } from './Components/ShowEditModel/EditArchiveNotes';
import { PrivateRoute } from './Components/PrivateRoutes/PrivateRoute';

function App() {
  return (
    <div className="App">
        <Routes>
         <Route path = "/login" element={<Login/>}/>
          <Route path = "/signup" element={<Signup/>}/>
          <PrivateRoute path ="/home" element ={<GoogleKeep/>}/>
          <PrivateRoute path="/profile" element={<Profile/>}/>
          <PrivateRoute path ="/trash" element={<Trash/>}/>
          <PrivateRoute path = "/archive" element = {<Archive/>}/>
          <PrivateRoute path = "/label/:labelName" element={<Label/>}/>
          <PrivateRoute path = "/home/:from/:noteId" element ={<EditModel/>}/>
          <PrivateRoute path = "/note/:from/:noteId" element ={<EditArchiveNotes/>}/>
        </Routes>
    </div>
  );
}

export default App;
