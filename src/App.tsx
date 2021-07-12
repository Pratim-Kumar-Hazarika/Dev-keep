import React from 'react';
import GoogleKeep from './Screens/GoogleKeep';
import {Routes,Route} from 'react-router-dom';
import Profile from './Screens/Profile';


function App() {
  return (
    <div className="App">
        <GoogleKeep/>
        <Routes>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </div>
  );
}

export default App;
