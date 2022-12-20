import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';

function App() {

  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [formSubmit, setFormSubmit] = useState(false);

  const ShowForm = () => {
    setShow(true);
  }

  return (
    <>
      <Header
        formSubmit={formSubmit}
        ShowForm={ShowForm}
        form={form}
      />
      <Form
        setFormSubmit={setFormSubmit}
        form={form} setForm={setForm}
        show={show} setShow={setShow}
        ShowForm={ShowForm}
      />
    </>
  );
}

export default App;
