import { useState } from 'react'
import './App.css';


function App() {

  const [city, setCity] = useState("")

  const [weatherForecast, setWeatherForecast] = useState(null)

 
  const searchForecastWeather = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=208341fbad9f467f864161418212110&q=${city}&lang=pt`).then((response) => {
      if(response.status === 200) {
        return response.json()
      }
    }).then((data) =>{
      setWeatherForecast(data)
    })
  }

  const handleCityChange = (event) => {
    setCity(event.target.value)
  }

  return (

    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a className="navbar-brand" href="#search"> Consulta tempo</a>
      </nav>

      <main className="container" id="search">
        <div className="jumbotron">
          <h1>Verifique agora a previsão do tempo na sua cidade!</h1>
          <p>Digite a sua cidade no campo abaixo e em seguida clique em pesquisar.</p>

          <div className="mb-4">
            <div>
              <input type="text" className="form-control" value={city} onChange={handleCityChange} />
            </div>
          </div>

          <button className="btn btn-lg btn-primary" onClick={searchForecastWeather}>Pesquisar</button>

          {
            weatherForecast ? (
              <div className="mt-4 d-flex align-items-center">
                <div className='col-sm-1'>
                  <img src={weatherForecast.current.condition.icon} alt="Weather icon"/>
                </div>
                <div>
                  <h3>Hoje o dia está: {weatherForecast.current.condition.text}</h3>
                  <p className="lead">  Temperatura: {weatherForecast.current.temp_c}ºC</p>
                  <p className="lead">  Umidade do ar: {weatherForecast.current.humidity}%</p> 
                                

                </div>                
              </div>
            ) : null
          }
        </div>
        <div class="rodape bg-primary text-center py-3">
          <span class="text-light"> © 2021 - Desenvolvido por Viviane Antonio da Silva |
          <a href="https://github.com/VivianeAntonio" title="Confira meus projetos!" class="link"> GitHub </a> |
          <a href="https://www.linkedin.com/in/vivianeantoniodasilva/" title="Me encontre no Linkedin" class="link"> Linkedin </a>
          </span>
        </div>
      </main>
    </div>
  )
}

export default App;
