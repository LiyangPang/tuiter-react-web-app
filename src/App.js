import logo from './logo.svg';
import Labs from "./labs"
import Tuiter from './tuiter';
import { BrowserRouter, Route , Routes, Link, Navigate} from 'react-router-dom';
import Assignment3 from './labs/a3';
import Assignment4 from './labs/a4';
import Navigation from "./nav1";
import HelloWorld from './labs/a3/hello-word';
import Todos from './todos';
//import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navigation/>
        <Routes>
          {/* <Route path="/todos-redux/*" element={<TodosRedux />} /> */}
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
  );
}

export default App;
