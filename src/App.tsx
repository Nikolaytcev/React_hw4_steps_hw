import { useRef, useState } from 'react'
import './App.css'
import Form from './components/Form/Form';
import { Table } from './components/Table/Table';
import { nanoid } from 'nanoid';
import { sumAndSort } from './sumAndSort';

function App() {
  
  const [form, setForm] = useState({id: '', date: '', distance: ''})

  const distancesList = useRef<{id: string, date: string, distance: string}[]>([{
    id: '',
    date: '',
    distance: ''
  }]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    distancesList.current.push({id: nanoid(), date: form.date, distance: form.distance});
    distancesList.current = sumAndSort(distancesList.current);
    setForm((prevForm) => ({...prevForm}));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({...prevForm, [name]: value}))
  }

  const handleDelete = (e: React.MouseEvent<HTMLImageElement>) => {
    distancesList.current = distancesList.current.filter(raw => raw.id !== e.currentTarget.id)
    setForm((prevForm) => ({...prevForm}));

  }

  return (
    <>
      <Form changeField={handleChange} submit={handleSubmit}/>
      {distancesList.current.length === 0 ? '':
        distancesList.current[0].id !== '' ?
         <Table distancesList={distancesList.current} onDelete={handleDelete}/> : ''}
    </>
  )
}

export default App
