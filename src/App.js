import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Form } from "./component/Form";
import { Table } from "./component/Table";
import { Home } from "./component/Home";
import { Crop } from "./component/Crop";
import { Fert } from "./component/Fert";
import { Test } from "./component/Test";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/crop' element={<Crop />}></Route>
          <Route path='/fert' element={<Fert />}></Route>
          <Route path='/test' element={<Test />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
