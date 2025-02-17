import ListIntegrantes from './components/ListIntegrantes'
import './App.css'

function App() {
  const integrantes = [
    {
      nombre: 'Juan',
      rol: 'Frontend Developer',
      descripcion: 'Juan es un desarrollador frontend con experiencia en React y Angular',
    },
    {
      nombre: 'Ana',
      rol: 'Backend Developer',
      descripcion: 'Ana es una desarrolladora backend con experiencia en NodeJS y Python',
    },
    {
      nombre: 'Luis',
      rol: 'Fullstack Developer',
      descripcion: 'Luis es un desarrollador fullstack con experiencia en React, NodeJS y MongoDB',
    },
  ]

  return (
    <>
      <h1>Práctica 4</h1>
      <ListIntegrantes integrantes={integrantes} />
    </>
  )
}

export default App
