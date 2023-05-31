import logo from './logo.svg';
import Labs from "./labs"
import Tuiter from './tuiter';
import { BrowserRouter, Route , Routes, Link, Navigate} from 'react-router-dom';
import Assignment3 from './labs/a3';
import Assignment4 from './labs/a4';
import Navigation from "./nav1";
import HelloWorld from './labs/a3/hello-word';
//import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/"         element={<Navigate to="/labs"/>}/>
          <Route path="/labs/*"   element={<Labs/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/tuiter/*" element={<Tuiter/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
