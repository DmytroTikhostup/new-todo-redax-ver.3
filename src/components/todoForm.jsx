import React from 'react';
import './todo.scss';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addTodo } from '../reducers/counterReducer';
import { addForm, fetchForm } from '../reducers/formReducer';

// ----- styled elements -----------------------------------------------------------------

const InputStyled = styled.input`
    :hover {
        border: 3px green solid;
        box-shadow: 0px 0px 5px 3px rgb(255, 255, 255);
    }
    width: 50%;
    height: 40px;
    border-radius: 7px;
    padding-left: 10px;
`;

const ButtonStyled = styled.button`
    color: white;
    outline: 0;
    padding: 2px 5px 2px 5px;
    margin: 10px;
    background: #8f54fc;
    border-radius: 5px;
    cursor: pointer;
    width: 60px;
    height: 40px;
    text-transform: uppercase;
    :hover {
        box-shadow: 0px 0px 5px 3px #8f54fc;
        border: 1px black solid;
    }
`;

const ServerButton = styled.button`
    border: 0;
    outline: 0;
    padding: 2px 5px 2px 5px;
    margin-right: 5px;
    background-color: #ff33e0;
    border-radius: 5px;
    height: 36px;
    cursor: pointer;
    width: auto;
    :hover {
        box-shadow: 0px 0px 5px 3px #ff33e0;
        border: 1px black solid;
    }
`;

const Form = ({ inputText, setInputText }) => {
    const dispatch = useDispatch();

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(1)); // -- counter
        dispatch(addForm(inputText)); // -- add todo
        setInputText('');
    };

    const FetchTodos = (e) => {
        e.preventDefault();
        fetch('https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json')
            .then((response) => response.json())
            .then((todos) => {
                dispatch(fetchForm(todos));
            });
    };

    return (
        <form>
            <InputStyled value={inputText} onChange={inputTextHandler} type="text" placeholder="write your task here and do this)"></InputStyled>
            <ButtonStyled onClick={submitTodoHandler} type="submit">
                Add
            </ButtonStyled>
            <ServerButton className={'serverbutton'} onClick={FetchTodos}>
                ➥
            </ServerButton>
        </form>
    );
};
export default Form;
