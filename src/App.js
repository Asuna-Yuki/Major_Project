import "./App.css";
import { Form } from "./component/Form";
import { Table } from "./component/Table";

function App() {
  return (
    <>
      <div className='main'>
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
      </div>
    </>
  );
}

export default App;
