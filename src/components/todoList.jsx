import React from 'react';
import Todo from './todoRow';
import './todo.scss';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const WrapperStyledOl = styled.ol`
    width: auto;
    font-size: 20px;
    margin: 0 18% 0 15%;
    text-align: left;
    background: ${(props) => props.generateColor};
`;

const List = ({ todos, setTodos, setEditText, counters, setCounters }) => {
    const createForm = useSelector((state) => state.formReducer);

    return (
        <div>
            <WrapperStyledOl>
                {todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        text={todo.text}
                        // setTodos={setTodos}
                        todos={todos}
                        setEditText={setEditText}
                        counters={counters}
                        // setCounters={setCounters}
                        createForm={createForm}
                    />
                ))}
            </WrapperStyledOl>
        </div>
    );
};
export default List;
