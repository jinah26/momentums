import React, {useState} from 'react';
import styled from 'styled-components'


const NameBlock = styled.div`
   
    width : 100%;
    //세로 100%로가 안먹힘
    height: 980px;
    display: flex;
    background: url(https://source.unsplash.com/category/nature/1600x900);
    background-repeat: no-repeat;
    background-size: cover;
   
`

const Names = styled.div`
    text-align:center;
    font-size: 50px;
    color: white;
    margin: 0 auto;
    padding-top: 300px;
    //세로는 가운데 정렬 xx 내가 맞춤

`;


function Name({addlist}, props) {

    const [name, setName] = useState("");

    const form = () => {
        let validated = true;
        if(!name) {
            setName('')
            validated = false;
        }

        return validated;
    }

    const addSumbit = (e) => {
        e.preventDefault();
        if(form()) {
            addlist({
                name: name
            })
        }
    }

    //저장
    localStorage.getItem(name, JSON.stringify(name));
    console.log(name)

    const appClick = (e) => {
        //props.history.push('/Time')
        //const {name, value} = e.target;
        //setText({ ...text, [name]: value });
        //console.log(text);
        window.location.replace('/Time')
    } 

    const appKeypress = (e) => {
        if(e.key ==='Enter') {
            appClick();
        }
    }
    
    return(
        <>    
        <NameBlock>
                <Names>
                    <p>Hello, what's your name?</p>
                    <div onSubmit={addSumbit}>
                    <input 
                        type="text" 
                        value={name}  
                        style={{color:"white", borderLeft :"none", borderRight:"none", borderTop:"none", borderBottom:"3px solid white", width:"500px",fontSize:"50px",background:"none"}} 
                        onChange = { e =>  setName(e.target.value)}
                        onKeyPress={appKeypress}
                        />
                        </div>
                </Names>
           
            
        </NameBlock>
       
       </>
        
        
    );
};

export default Name;