import React from 'react';
// import './App.css';
import Form from './Form';
import LoginForm from './LoginForm';
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom';



function App() {  
   return (
    <Router>
      <div className="App">
        <div className="here">
          <Routes>
            <Route exact path="/" element={<Form />} />
            <Route exact path="/login" element={<LoginForm />} />            
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;