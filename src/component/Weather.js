import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import APIKey from '../config/key';

const WeatherWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 20px;
  margin-top: 10px;
  
  font-size: 1.625rem;
  font-weight: 400;
`;

const Temp = styled.div`
  display: inline-block;
  margin-left: 5px;
`;

const Locale = styled.div`
  font-size: 13px;
  text-align: right;
  margin-right: 10px;
`;
function Weather() {
    const [weather, setWeather] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${'Seoul'}&appid=${APIKey}`)
        .then( res => {
            setWeather(res.data);
            setIsLoading(false);
        })
        .catch( err => console.log(err))
    }, [])

    return(
        <WeatherWrapper>
            {(weather && !isLoading) && (
                <>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={"http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"} alt={'icon'}/>
                        <Temp>{Math.ceil(weather.main.temp - 273.15)}°</Temp>
                    </div>
                    <Locale>{weather.name}</Locale>
                </>
            )}
        </WeatherWrapper>
    );
};

export default Weather;