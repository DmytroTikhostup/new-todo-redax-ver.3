import React, { useState } from 'react';
import './todo.scss';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { editTodo, deleteTodo } from '../reducers/counterReducer';
import { deleteForm, completeForm, editForm } from '../reducers/formReducer';

// ----- styled elements -----------------------------------------------------------------

const ButtonListStyled = styled.button`
    border: 1px black;
    background: #8f54fc;
    outline: 0;
    padding: 2px 5px 2px 5px;
    margin-right: 5px;
    border-radius: 5px;
    cursor: pointer;
    width: 50px;
    text-transform: uppercase;
`;

const Todo = ({ text, todo }) => {
    const dispatch = useDispatch();

    // function --- Delete Task ------------------------------

    const [isEdit, setIsEdit] = useState(false);
    const [todoText, setTodoText] = useState(text);

    const deleteHandler = () => {
        dispatch(deleteTodo(1)); // -- counter
        dispatch(deleteForm(todo.id)); // -  delete
    };

    // function --- Done Task --------------------------------

    const completeHandler = () => {
        dispatch(completeForm(todo.id)); // - complete
    };

    // function --- Edit Task -----------------------------------

    const changeHandler = (event) => {
        const value = event.currentTarget.value;
        setTodoText(value);
    };

    const editHandler = () => {
        setIsEdit(true);
    };

    const saveHandler = (event, id) => {
        const value = event.currentTarget.value;

        dispatch(editTodo(1)); // -- counter
        dispatch(
            editForm({
                id: todo.id,
                text: value,
            })
        );

        setIsEdit(false);
    };

    // -------------- RENDER ------------------------------------------------------------

    return (
        <div className={'listTextString'} style={{ background: todo.completed === true ? '#909090' : todo.background }}>
            <li>
                {isEdit ? (
                    <textarea type="submit" value={todoText} onChange={changeHandler} onBlur={saveHandler} />
                ) : (
                    <span className={`${todo.completed ? 'completed' : ''}`}>{todoText}</span>
                )}
            </li>
            <div className={'buttonBlock'}>
                <ButtonListStyled onClick={completeHandler}>✔</ButtonListStyled>
                <ButtonListStyled onClick={editHandler}>✎</ButtonListStyled>
                <ButtonListStyled onClick={deleteHandler}>✘</ButtonListStyled>
            </div>
        </div>
    );
};
export default Todo;
