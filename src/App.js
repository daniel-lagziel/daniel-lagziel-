import {  useState } from 'react';
import './App.css';
import Favorite from './components/Favorite';
import Header from './components/Header';
import Home from './components/Home';


function App() {
const [show, setShow]=useState({
  cityName:'',
  weatherText:'',
  temp:'',
  favorite:''
})
const [searchCityHistory, setsearchCityHistory] = useState([])
const [names, setNames]=useState(['daniel', 'shlomi','yafit','yavne'])
const [fiveDays, setFiveDays]=useState([
  {
    date:'',
    maxTemp:'',
    minTemp:''
  },
  {
    date:'',
    maxTemp:'',
    minTemp:''
  },
  {
    date:'',
    maxTemp:'',
    minTemp:''
  },
  {
    date:'',
    maxTemp:'',
    minTemp:''
  },
  {
    date:'',
    maxTemp:'',
    minTemp:''
  }
])
const [favoriteCity,setFavoriteCity]=useState([
{cityName:'Tel Aviv',temp:22},{cityName:'Yavne',temp:33}
])
const [scrnFlag, setScrnFlag] = useState('home');
const changeScrn=()=>{
  if(scrnFlag=== 'home'){
    return <Home searchCityHistory={searchCityHistory} setsearchCityHistory={setsearchCityHistory}  names={names} search={search} updateUI={updateUI} show={show} fiveDays={fiveDays} addFavorite={addFavorite} rmoveFavorite={rmoveFavorite}  />
  }
  else if(scrnFlag=== 'favorite'){
    return <Favorite favoriteCity={favoriteCity} search={search} updateUI={updateUI} /> 
  }
}
const key='GKoqbWSmz1of0gTHBYdIu19V2uFmvpMm';
const getWeather= async(id)=>{
  const base='http://dataservice.accuweather.com/currentconditions/v1/';
  const query= `${id}?apikey=${key}`;
  const response= await fetch(base+query)
  const data= await response.json();
  return data[0]
}
const getCity=async(city)=>{
  const base='http://dataservice.accuweather.com/locations/v1/cities/search'
  const query= `?apikey=${key}&q=${city}`;
  const response= await fetch(base+query)
  const data= await response.json();
  return data[0];
}
const getWeatherFiveDays= async (id)=>{
  const base='http://dataservice.accuweather.com/forecasts/v1/daily/5day/'
  const query= `${id}?apikey=${key}`;
  const response= await fetch(base+query);
  const data= await response.json();
  return data;
}
const search= async(city)=>{
  const cityDets= await getCity(city);
  const weather= await getWeather(cityDets.Key);
  const fiveDays= await getWeatherFiveDays(cityDets.Key);
  return{ cityDets,weather, fiveDays}
}
const weatherTelAviv=async(city)=>{
  if (show.cityName===''){
    show.cityName='tel aviv'
    search('tel aviv')
    .then(data=>updateUI(data))
    .catch(err=> console.log(err));
  }
}  
if (show.cityName===''){
  weatherTelAviv('tel aviv') 
}
const updateUI=(data)=>{
  const cityDets= data.cityDets;
  const weather= data.weather;
  const fDays=data.fiveDays.DailyForecasts;
  show.cityName=cityDets.EnglishName;
  show.weatherText=weather.WeatherText;
  show.temp=weather.Temperature.Metric.Value;
  fiveDays.forEach((itam,i,fives)=>{
    fiveDays[i].date=fDays[i].Date.slice(5,10);
    fiveDays[i].maxTemp=fDays[i].Temperature.Maximum.Value+'F';
    fiveDays[i].minTemp=fDays[i].Temperature.Minimum.Value+'F';
  })
  setScrnFlag('favorite');
  setScrnFlag('home')
}
const addFavorite=()=>{ 
  var sum=0
favoriteCity.forEach((itam)=>{
  if (itam.cityName===show.cityName) {
    sum++
    alert ('The city is a favorite');
  }
})
if (sum==0){
  favoriteCity.push({cityName:show.cityName,temp:show.temp})
  console.log(favoriteCity);

}
}
const rmoveFavorite=()=>{
  favoriteCity.forEach((itam,i)=>{
    if (itam.cityName===show.cityName) {
      favoriteCity.splice(-i,1) 

    }
  })
  
}

  return (
    <div className="App">
      <Header setScrnFlag={setScrnFlag}/>
      <hr/>
      {changeScrn()}
</div>
    
  );
}

export default App;
