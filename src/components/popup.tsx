import React from 'react';
import './popup.scss';
import Form from './todoForm';

export interface PopupProps {
    active: string;
    setActive: object;
    todos: [];
    inputText: string;
    setTodos: object;
    setInputText: string;
    counters: number;
}

const Popup = ({ active, setActive, inputText, todos, setTodos, setInputText, counters }: PopupProps) => {
    return (
        <div className={active ? 'popup active' : 'popup'} onClick={() => setActive(false)}>
            <div className={active ? 'popup-content active' : 'popup-content '} onClick={(e) => e.stopPropagation()}>
                <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} counters={counters} />
            </div>
        </div>
    );
};

export default Popup;
