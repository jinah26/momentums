import React,{useState} from 'react';
import {Button, Modal} from 'react-bootstrap'
import axios from 'axios';

function Weather() {

    // const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=bea9a160a1389b9ca9f30eb010b60bd4";

	//axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent('Seoul')}&appid=${encodeURIComponent('bea9a160a1389b9ca9f30eb010b60bd4')}`)
    const [weatherIcon, setWeatherIcon] = useState();
    const [weatherSpan, setWeatherSpan] = useState();

    const [weather, setWeather] = useState('');
    const [temp, setTemp] = useState('');
    const [wind, setWind] = useState('');

    const [open, setOpen] = useState(false);

    const Openadd = () => {
        setOpen(true);
    }


    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${'Seoul'}&appid=${'bea9a160a1389b9ca9f30eb010b60bd4'}`)
        .then( res => res.json())
        .then(data => {
            const weathers = data.weather[data.weather.length-1];
            weatherIcon.src = `https://openweathermap.org/img/wn/${weathers.icon}@2x.png`;
            weatherSpan.innerHTML = `${weathers.main}`
            weather = data.Weather[0].main;
            temp = data.temp;
            wind = data.wind.speed;

            console.log(data);
        })
        .catch( err => console.log(err))

        //modal창

        const ModalContent = () =>{

            return(
                <Modal open={open}>
                    <Modal.Header closeButton>
                        h2
                    </Modal.Header>
                    <Modal.Body>
                        dd
                    </Modal.Body>
                </Modal>
            )
        }
    

    return(
        <>
        <h1 style={{color:"white"}} >
            d
            </h1>
            <Button onClick={Openadd} open={open}>

            </Button>
            {open && (
                <ModalContent />
            )}
        <img src={weatherIcon} /> ;
        <p>{weather}</p>
        <p>{temp}</p>
        <p>{wind}</p>
        </>
    );
};

export default Weather;