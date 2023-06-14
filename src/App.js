import logo from './logo.svg';
import Labs from "./labs"
import Tuiter from './tuiter';
import { BrowserRouter, Route , Routes, Link, Navigate} from 'react-router-dom';
import Assignment3 from './labs/a3';
import Assignment4 from './labs/a4';
import Navigation from "./nav1";
import HelloWorld from './labs/a3/hello-word';
import Todos from './todos';
import {Provider} from "react-redux";
import LoginScreen from './tuiter/users/login';
import RegisterScreen from './tuiter/users/register';
import ProfileScreen from './tuiter/users/profile';
import userReducer from "./tuiter/users/user-reducer";
import authReducer from "./tuiter/reducers/auth-reducer";
import whoReducer from "./tuiter/reducers/who-reducer";
import tuitsReducer from "./tuiter/reducers/tuits-reducer";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer, users: userReducer, auth: authReducer}});


//import './App.css';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <Navigation/>
        <Routes>
          {/* <Route path="/todos-redux/*" element={<TodosRedux />} /> */}
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/todos/*" element={<Todos />} />
          <Route path="/" element={<Navigate to="/labs/a3" />} />
          <Route path="/tuiter/*" element={<Tuiter />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/labs/a3" element={<Assignment3 />} />
          <Route path="/labs/a4" element={<Assignment4 />} />
          
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;
