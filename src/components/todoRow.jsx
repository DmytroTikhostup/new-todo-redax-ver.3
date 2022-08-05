import React, { useState } from 'react';
import './todo.scss';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { allActions } from '../actions/index';

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
// ---- random - color- task----

const generateColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const Todo = ({ text, todo, todos, setTodos }) => {
    const dispatch = useDispatch();
    const counters = useSelector((state) => state);
    const list = useSelector((state) => state);

    // function --- Delete Task ------------------------------

    const [isEdit, setIsEdit] = useState(false);
    const [todoText, setTodoText] = useState(text);

    const deleteHandler = (id) => {
        // setTodos(todos.filter((el) => el.id !== todo.id));
        dispatch(allActions.counterActions.delete_todo_count);
        dispatch(allActions.todoAction.delete_todo(id));
    };

    // function --- Done Task --------------------------------

    const completeHandler = (id) => {
        dispatch(allActions.todoAction.complete_todo(id));

        // setTodos(
        //     todos.map((el) => {
        //         if (el.id === todo.id) {
        //             return { ...el, completed: !el.completed };
        //         }
        //         return el;
        //     })
        // );
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

        dispatch(allActions.counterActions.edit_todo_count);
        dispatch(allActions.todoAction.edit_todo(id, value));

        setIsEdit(false);
        // setTodos(
        //     todos.map((el) => {
        //         if (el.id === todo.id) {
        //             return {
        //                 ...el,
        //                 edit: !el.edit,
        //                 text: value,
        //                 background: generateColor(),
        //             };
        //         }
        //         return el;
        //     })
        // );
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
