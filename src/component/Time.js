import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import moment from 'moment'

const TimeWrapper = styled.div`
  font-size: 50px;
  color: white;
  
  p {
    margin: 0;
  }
  
  .time {
    font-size: 150px;
    font-weight: 500;
  };
  
  .name {
    font-size: 40px;
    font-weight: normal;
  }
`


const Time = ({name}) => {
    const [localTime, setLocalTime] = useState(moment().format('HH:mm'))


    useEffect(() => {
        const interval = setInterval(() => {
            setLocalTime(moment().format('HH:mm'));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const Greeting = () => {
        switch (localTime) {
            case localTime >= 3 && localTime < 12:
                return "Good Morning";
            case localTime >= 12 && localTime < 15:
                return "Good Afternoon";
            case localTime >= 15 && localTime < 20:
                return "Good Evening";
            case localTime >= 20 && localTime < 3:
                return "Good Night";
            default:
                return 'Good Night'
        }
    }

    return (
        <TimeWrapper>
            <p className="time">{localTime}</p>
            <p>{<Greeting/>}, {name}</p>
        </TimeWrapper>
    )
}

export default Time;