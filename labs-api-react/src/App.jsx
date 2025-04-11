import { use, useState } from 'react'
import Card from './components/Cards/Card.jsx'
import { useEffect } from 'react';

function App() { 

  // const formatToUpper = (format) => format.toUpperCase();
  // const cards = [
  //   {
  //     title: 'Card Title',
  //     description: 'This is a description of the card. 1',
  //     imageUrl: './src/assets/react.svg',
  //   },
  //   {
  //     title: 'Card Title',
  //     description: 'This is a description of the card. 2',
  //     imageUrl: './src/assets/react.svg',
  //   },
  //   {
  //     title: 'Card Title',
  //     description: 'This is a description of the card. 3',
  //     imageUrl: './src/assets/react.svg',
  //   }
  // ]

  // const [usuarios, setUsuarios] = useState([]); // Estado para almacenar los usuarios
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users') // API de prueba para obtener usuarios
  //   .then(resultado => resultado.json()) // Convierte la respuesta a JSON
  //   .then(setUsuarios) // Actualiza el estado con los usuarios obtenidos
  //   .catch(error => console.log(error)) // Maneja errores
  // }, []);

  // const guardarNombreEnLocal = () => {
  //   localStorage.setItem('nombre', 'Javier'); // Guarda el nombre en el local storage
  // }

  // const obtenerNombreDeLocal = () => {
  //   const nombre = localStorage.getItem('nombre'); // Obtiene el nombre del local storage
  //   console.log(nombre); // Muestra el nombre en la consola
  // }
  
 



  return (
    <>
      {/* Propiedades que se le pasan al componente Card */}
      {/* <Card title={card.title} description={card.description} imageUrl={card.imageUrl} />  */}
      {/* <h1>Hola</h1>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          format={formatToUpper(card.title)}
        />
      ))} */}




    </>
  )
}

export default App;
