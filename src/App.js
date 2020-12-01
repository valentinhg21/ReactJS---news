import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header.js'
import Formulario from './components/Formulario.js'
import ListadoNoticias from './components/ListadoNoticias.js'



function App() {
  // Definimos la categoria y noticias
  const [ categoria, guardarCategoria ] = useState('');
  const [ noticias, guardarNoticias  ] = useState([]);

  // Consulta a la API
  useEffect( () => {
    const ConsultarAPI = async () => {
      const url =  `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=35cc5def5023459da7073773f95c8e1e`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json()
      console.log(noticias.articles)
      guardarNoticias(noticias.articles)
    }

    ConsultarAPI()
  }, [categoria])
  return (
      <Fragment>
        <Header
          titulo = 'Buscador de Noticias'
        />
        <div className="container white">
          <Formulario
            guardarCategoria = { guardarCategoria }
          />
          <ListadoNoticias
            noticias = {noticias}
          />
        </div>
      </Fragment>

  )
}

export default App;
