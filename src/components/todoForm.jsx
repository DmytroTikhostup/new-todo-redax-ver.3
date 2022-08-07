import React from 'react';
import './todo.scss';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addTodo } from '../reducers/counterReducer';
import { addForm, fetchForm } from '../reducers/formReducer';

// ----- styled elements -----------------------------------------------------------------

const InputStyled = styled.input`
    :hover {
        border: 1px black solid;
        box-shadow: 0px 0px 5px 3px rgb(255, 255, 255);
    }
    width: 50%;
    height: 40px;
    border-radius: 7px;
    padding-left: 10px;
`;

const ButtonStyled = styled.button`
    color: white;
    font-weight: bold;
    outline: 0;
    padding: 2px 5px 2px 5px;
    margin: 10px;
    background: #8f54fc;
    border-radius: 5px;
    cursor: pointer;
    width: 110px;
    height: 40px;
    text-transform: uppercase;
    :hover {
        box-shadow: 0px 0px 5px 3px #8f54fc;
        border: 1px black solid;
    }
`;

const ServerButton = styled.button`
    border: 1;
    outline: 0;
    padding: 2px 5px 2px 5px;
    margin-right: 5px;
    color: white;
    background-color: #66a1e4;
    border-radius: 5px;
    height: 40px;
    width: 110px;
    cursor: pointer;
    :hover {
        box-shadow: 0px 0px 5px 3px #418ce2;
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
        dispatch(addForm(inputText === '' ? 'ooops, empty...' : inputText)); // -- add todo
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
                Get tasks
            </ServerButton>
        </form>
    );
};
export default Form;
