import React, { Suspense, lazy } from 'react';
import {Routes,Route} from 'react-router-dom';
import  PrivateRoute  from './Components/PrivateRoutes/PrivateRoute';
const Login = lazy(()=>import('./Screens/Login'))
const Trash = lazy(()=>import("./Screens/Trash"))
const Archive = lazy(()=>import('./Screens/Archive'))
const Signup = lazy(()=>import('./Screens/Signup'))
const GoogleKeep = lazy(()=>import('./Screens/GoogleKeep'))
const Label = lazy(()=>import('./Screens/Label'))
const EditArchiveNotes = lazy(()=>import('./Components/ShowEditModel/EditArchiveNotes'))
const EditModel = lazy(()=>import('./Components/ShowEditModel/EditModel'))
function App() {
  return (
    <div className="App">
        <Routes>
         <Suspense fallback={<div>Loading...</div>}>
         <Route path = "/" element={<Login/>}/>
         </Suspense>
         <Suspense fallback={<div>Loading...</div>}>
         <Route path = "/signup" element={<Signup/>}/>
         </Suspense>
         <Suspense fallback={<div>Loading...</div>}>
         <PrivateRoute path = "/archive" element = {<Archive/>}/>
         </Suspense>
         <Suspense fallback={<div>Loading...</div>}>
          <PrivateRoute path ="/home" element ={<GoogleKeep/>}/>
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
          <PrivateRoute path ="/trash" element={<Trash/>}/> 
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
          <PrivateRoute path = "/label/:labelName" element={<Label/>}/>
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
          <PrivateRoute path = "/note/:from/:noteId" element ={<EditArchiveNotes/>}/>
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
          <PrivateRoute path = "/home/:from/:noteId" element ={<EditModel/>}/>
          </Suspense>
        </Routes>
    </div>
  );
}

export default App;
