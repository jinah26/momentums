import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components'
import moment from 'moment'
import Sky from '../image/sky.png'
import Weather from './Weather';

const TimeBlock = styled.div`
   
    width : 100%;
    //세로 100%로가 안먹힘
    height: 950px;
    display: flex;
    background: url(${Sky});
    background-repeat: no-repeat;
    background-size: cover;
   
`

const Times = styled.div`
    text-align:center;
    font-size: 35px;
    color: white;
    margin: 0 auto;
    //세로는 가운데 정렬 xx 내가 맞춤
`;



function Time ({name}, {addlist}) {
    
    const [todo, setTodo] = useState('')
    const nowTime = moment().format('HH:mm');
    console.log(nowTime);

    const form = () => {
        let validated = true;
        if(!todo) {
            setTodo('')
            validated = false;
        }

        return validated;
    }

    const addSumbit = (e) => {
        e.preventDefault();
        if(form()) {
            addlist({
                todo: todo
            })
        }
    }

    const appClick = (e) => {
        window.location.replace('/Todo')
    } 

    const appKeypress = (e) => {
        if(e.key ==='Enter') {
            appClick();
        }
    }

    //name 불러오기
    // const getUser = localStorage.setItem("users");
    // JSON.parse(getUser)

    //todo 저장하기
    localStorage.getItem(todo, JSON.stringify(todo));

    


    return(
        <>
        <TimeBlock>
        <Weather />
            <Times>
            <p style={{fontSize:"170px"}}>{nowTime}</p>
            <p style={{fontSize:"50px"}}>Good afternoon, {name}.</p>
            <p>What is your main focus for today?</p>
            <div onSubmit={addSumbit}>
                    <input 
                        type="text" 
                        value={todo}  
                        style={{color:"white", borderLeft :"none", borderRight:"none", borderTop:"none", borderBottom:"3px solid white", width:"500px",fontSize:"35px",background:"none"}} 
                        onChange = { e =>  setTodo(e.target.value)}
                        onKeyPress={appKeypress}
                        />
                        </div>
            </Times>
        </TimeBlock>
        </>
    )
}

export default Time;