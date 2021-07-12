import React,{useState, useEffect} from 'react';
import styled from 'styled-components';

const TodoContainer = styled.div`
  font-size: 50px;
  color: white;
`

const TodoWrapper = styled.div`
  font-size: 30px;
  color: white;
  text-align: center;
  font-weight: 400;

  .text {
    text-align: center;
  }

  input[type="checkbox"] {
  width: 20px; 
  height: 20px; 
  margin-right: 15px;
  background: none;
}

  .checked {
    text-decoration: line-through;
  }

  .today {
    font-size: 23px;
    font-weight: 700;
  }


  `

const TodoItem = styled.div`
  position: relative;
`;

const Text = styled.span`
   text-decoration: ${props => props.isDone && 'line-through'}
`;

const Message = styled.div`
  position: absolute;
  display: ${props => props.isDone ? 'block' : 'none'};
  right: 50%;
  transform: translate(50%, 50%);
  font-size:20px;
}
`;

function Todo() {
    const [todo, setTodo] = useState("");
    const [isDone, setIsDone] = useState(false);

    const message = ['good job', 'Nice', 'Way to go!', `Great ${todo}`];
    

    const onKeypress = (e) => {
        if(e.key ==='Enter') {
            setTodo(e.target.value);
            localStorage.setItem('todo', e.target.value);
        }
    };

    useEffect(() => {
        const localName = localStorage.getItem('todo') || [];

        if (localName.length > 0) {
            setTodo(localName);
        } 
    }, []);
    return(
        <TodoContainer>
            {todo.length > 0 
            ? (
                    <TodoWrapper>
                        <p className="today">TODAY</p>
                        <TodoItem>
                            <input type="checkbox" value={isDone} onClick={() => setIsDone(!isDone)}/>
                            <Text isDone={isDone}>{todo}</Text>
                        </TodoItem>

                        <Message isDone={isDone}>{message[Math.ceil(Math.random() * 3)]}</Message>

                    </TodoWrapper>
            )
            : (
                <>
                    <p>What is your main focus for today?</p>
                    <input
                       type="text"
                       onKeyPress={onKeypress}
                    />
                 </>

            )
            
        } 
        </TodoContainer>
    );
};

export default Todo;