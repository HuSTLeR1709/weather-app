import { useEffect, useState } from 'react';
import './App.css';
import WeatherCard from './weathercard';

function App() {
  const[city, setCity]= useState('Lucknow');
  const[weatherinfo, setweatherinfo]= useState('');
  const getweather = async () =>{
    try{
      let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=100bcffcdf084e3cad1084688805a0e7`;
    const res = await fetch(url);
    const data = await res.json();
    const {temp, humidity, pressure} = data.main;
    const {main :weathermood}= data.weather[0];
    const{name} = data;
    const {speed} = data.wind;
    const {country, sunset} = data.sys;

    const weatherinfo = {
      temp,
      humidity,
      pressure,
      weathermood,
      name,
      speed,
      country,
      sunset,
    }
    setweatherinfo(weatherinfo);
  
    }
    catch(error){
      console.log(error);
    }
    

  }

  useEffect(()=>{
    getweather();
  },[])
  return (
    <>
    <div className='wrapper w-full h-screen flex justify-center items-center flex-col gap-5 bg-slate-700'>
    <div className='search w-1/4 flex justify-between'>
      <input type='text' placeholder=' search...' className=' sarea w-4/5  border-2 outline-none h-full' value={city} onChange={(e)=>setCity(e.target.value)}/>
      <button className=' sbtn border-2 border-black-300 p-1 w-1/5 bg-yellow-200 hover:bg-blue-500 hover:text-white ' onClick={getweather}>Search</button>
    </div>
    <WeatherCard weatherinfo= {weatherinfo}/>
   </div>
   
    </>
  );
}

export default App;
