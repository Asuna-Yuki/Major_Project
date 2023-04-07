import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Form } from "./component/Form";
import { Table } from "./component/Table";
import { Home } from "./component/Home";
import { Crop } from "./component/Crop";
import { Fert } from "./component/Fert";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/crop' element={<Crop />}></Route>
          <Route path='/fert' element={<Fert />}></Route>
        </Routes>
      </Router>
      {/* <div className='main'>
        <div className='form'>
          <section>
            <h1>Smart farming</h1>
            <h2>using ML</h2>
            <div className='table-container'>
              <Table />
              <div className='table'>
                <div className='row'>Delhi</div>
                <div className='row'>45</div>
                <div className='row'>30</div>
                <div className='row'>35</div>
                <div className='row'>8</div>
              </div>
            </div>
          </section>
          <section>
            <h3>Inputs required for crop predictions</h3>
            <Form />
          </section>
        </div>
      </div> */}
      {/* <Home /> */}
    </>
  );
}

export default App;
