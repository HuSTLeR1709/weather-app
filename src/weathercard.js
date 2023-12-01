import React, { useEffect, useState } from "react";
import "./App.css";
const WeatherCard = ({weatherinfo})=>{
    const [weatherstate, setweatherstate] = useState('')

    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      } = weatherinfo;
      useEffect(()=>{
        if(weathermood){
            switch(weathermood){
                case "Clouds": setweatherstate("wi wi-day-cloudy")
                break;
                case "Clear": setweatherstate("wi wi-day-sunny")
                break;
                case "Fog": setweatherstate("wi wi-day-fog")
                break;
                case "Rain": setweatherstate("wi wi-day-rain")
                break;
                case "Haze": setweatherstate("wi wi-day-haze")
                break;
                case "Mist": setweatherstate("wi wi-day-light-wind")
                break;
                default : setweatherstate("wi wi-day-sunny")
                break;
            }
        }

      },[weathermood])
      let sec = sunset*1000;
      let date = new Date(sec);
      let timestr = `${date.getHours()}:${date.getMinutes()}`
    return(
    <>
    <div className='container w-3/5 h-4/5 bg-slate-300 rounded-3xl shadow-black shadow-2xl'>
    <div className='upperdisplay h-1/2 flex justify-center items-center'>
    <div className="icon  text-9xl">
        <i className={`wi ${weatherstate}`}  ></i>
    </div>
    
    </div>
    <div className='midarea h-1/4 flex'>
      <div className='weatherinfo h-full bg-black w-4/6 flex flex-row items-center justify-evenly gap-20'>
    <h1 className='temperature text-white text-6xl'>{temp}&deg;</h1>
    <div className='info'>
    <h1 className='sky text-3xl text-white '>{weathermood}</h1>
    <h1 className='city text-white text-xl'> {name},{country}</h1>
    </div>
    </div>
    <div className=' date w-2/6 bg-teal-400 flex justify-center items-center'>
    <h1 className='text-5xl text-center'>{new Date().toLocaleString()}</h1>

    </div>
    </div>
    <div className='bottom w-full h-1/4 flex flex-row'>
      <div className='extra w-1/4 h-full flex justify-center items-center gap-6'>
      <i class="wi wi-sunset text-teal-400 text-3xl"></i>
      <div>
        <p className='text-2xl'>Sunset</p>
        <p className='text-2xl'>{timestr} PM</p>
      </div>

      </div>
      <div className='extra w-1/4 h-full flex justify-center items-center gap-6'>
      <i class="wi wi-humidity text-teal-400 text-3xl"></i>
      <div>
        <p className='text-2xl'>Humidity</p>
        <p className='text-2xl'>{humidity}</p>
      </div>
      </div>
      <div className='extra w-1/4 h-full flex justify-center items-center gap-6'>

      <i class="wi wi-barometer text-teal-400 text-3xl"></i>
      <div>
        <p className='text-2xl'>Pressure</p>
        <p className='text-2xl'>{pressure}</p>
      </div>
      </div>
      <div className='extra w-1/4 h-full flex justify-center items-center gap-6'>
      <i class="wi wi-strong-wind text-teal-400 text-3xl"></i>
      <div>
        <p className='text-2xl'>Wind</p>
        <p className='text-2xl'>{speed}</p>
      </div>
      
      </div>
    

    </div>

    </div>
    </>
    )
}

export default WeatherCard;

