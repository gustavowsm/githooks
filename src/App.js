import React, { useState, useEffect } from 'react';




export default function App(){

    //declarando o estado
    const [location, setLocation] = useState({});

    useEffect(() => {
      //ouve a localização e altera o estado com base nela
        const watchId = navigator.geolocation.watchPosition(handlePositionReceived)
        //vai executar toda vez que o componente for alterado
        return() => navigator.geolocation.clearWatch(watchId)
      }, []);

      //segura a posição da localização 
    function handlePositionReceived({ coords }){
      const {latitude, longitude} = coords;

      setLocation({ latitude, longitude });
    }
      //retorna ao usuário a latitude e longitude
    return (
      <>
      Latitude: {location.latitude} <br/>
      Longitude: {location.longitude}
      </>
    );
}
  /** 
  //declarando o estado
    const [repositories, setRepositories] = useState([]);

    //sobrescrever todos o valor armazenado no estado com os dados do github
    useEffect(async ()=>{
      //puxando dados da API
        const response =  await fetch('https://api.github.com/users/diego3g/repos');
        const data= await response.json();
      //o array vazio significa que não vai executar mais de uma vez, garantindo apenas um load inicial
        setRepositories(data);
    }, []);

    //disparar toda vez que o estado de repositories alterar, caso contrário não executa
    useEffect(()=> {
      //filtrar apenas os favoritos
      const filtered = repositories.filter(repo => repo.favorite);
      //atualiza o titulo da página com a quantidade de favoritos
      document.title = `Você tem ${filtered.length} favoritos`;
    }, [repositories]);

    //mostrando ao usuário que está marcado como favorito
  function handleFavorite(id) {
      const newRepositories = repositories.map(repo => {
        return repo.id === id ? {... repo, favorite: !repo.favorite} : repo
      });

      setRepositories(newRepositories);
  } 
    return (
  
    <ul>
      {repositories.map (repo => (
        <li key={repo.id}>
          {repo.name} 
          {repo.favorite && <span>(Favorito) </span>}
          <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
          </li>
      ))}

    </ul>
  
  )
*/

 