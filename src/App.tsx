import {Routes,Route} from 'react-router-dom';
import  PrivateRoute  from './Components/PrivateRoutes/PrivateRoute';
import EditArchiveNotes from './Components/ShowEditModel/EditArchiveNotes';
import EditModel from './Components/ShowEditModel/EditModel';
import Archive from './Screens/Archive';
import GoogleKeep from './Screens/GoogleKeep';
import Label from './Screens/Label';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Trash from './Screens/Trash';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path = "/" element={<Login/>}/>
          <Route path = "/signup" element={<Signup/>}/>
          <PrivateRoute path = "/archive" element = {<Archive/>}/>
          <PrivateRoute path ="/home" element ={<GoogleKeep/>}/>
          <PrivateRoute path ="/trash" element={<Trash/>}/> 
          <PrivateRoute path = "/label/:labelName" element={<Label/>}/>
          <PrivateRoute path = "/note/:from/:noteId" element ={<EditArchiveNotes/>}/>
          <PrivateRoute path = "/home/:from/:noteId" element ={<EditModel/>}/>
        </Routes>
    </div>
  );
}

export default App;
