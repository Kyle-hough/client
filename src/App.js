import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import TestComponent from "./views/TestComponent";
import Dashboard from "./views/Dashboard";
import Create from "./views/Create";

function App() {
  return (
    <div>
      <BrowserRouter>
      <h1>Song FS Demo</h1>
      <Link to="/test/api">Test backend </Link> |
      <Link to="/songs">Songs Dashbaord </Link> |
      <Link to="/songs/new">Create new song </Link> |


      <Routes>
        <Route path="/test/api" element={ <TestComponent /> } />
        <Route path="/songs" element={ <Dashboard /> } />
        <Route path="/songs/new" element={ <Create /> } />

      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
