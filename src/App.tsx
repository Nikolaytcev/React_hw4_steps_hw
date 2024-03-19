import { useRef, useState } from 'react'
import './App.css'
import Form from './components/Form/Form';
import { Table } from './components/Table/Table';

function App() {
  const [form, setForm] = useState({})

  let distancesList = useRef<object[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    distancesList.current.push(form)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({...prevForm, [name]: value}))
  }

  return (
    <>
      <Form changeField={handleChange} submit={handleSubmit}/>
      <Table distancesList={distancesList.current}/>
    </>
  )
}

export default App
