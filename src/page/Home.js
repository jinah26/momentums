import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

import Time from '../component/Time';
import Weather from "../component/Weather";
import Todo from '../component/Todo';

const HomeWrapper = styled.div`
    width : 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background: url(https://source.unsplash.com/category/nature/1600x900);
    background-repeat: no-repeat;
    background-size: cover;
   
`

const NameWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align:center;
    font-size: 50px;
    color: white;
    //세로는 가운데 정렬 xx 내가 맞춤

    input {
      color:white;
      border: none; 
      border-bottom:3px solid white;
      width:500px;
      font-size:50px;
      background: none;
      outline: none;
      text-align: center;
    }
`;


const Home = () => {
    const [name, setName] = useState("");

    const onKeypress = (e) => {
        if (e.key === 'Enter') {
            setName(e.target.value);
            localStorage.setItem('name', e.target.value);
        }
    };

    useEffect(() => {
        const localName = localStorage.getItem('name') || [];

        if (localName.length > 0) {
            setName(localName);
        }
    }, []);

    return (
        <HomeWrapper>
            <NameWrapper>
                {name.length > 0
                    ? (
                        <>
                            <Time name={name}/>
                            <Weather/>
                            <Todo/>
                        </>
                    )
                    : (
                        <>
                            <p>Hello, what's your name?</p>
                            <input
                                type="text"
                                onKeyPress={onKeypress}
                            />
                        </>
                    )
                }
            </NameWrapper>
        </HomeWrapper>
    );
};

export default Home;