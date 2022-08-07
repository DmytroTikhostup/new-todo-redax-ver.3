import React, { useEffect, useState } from 'react';
import './App.scss';
import { useSelector } from 'react-redux';

// --- import components ----------------------
import Form from './components/todoForm';
import List from './components/todoList';
import Popup from './components/popup';

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [popupActive, setPopapActive] = useState(false);

    // create counters --------------------------------------------------------

    const counters = useSelector((state) => state.counter);
    const forms = useSelector((state) => state.form);
    // console.log(counters);

    const Counter = ({ counters }) => {
        return (
            <div>
                <i>Statistic:</i>
                <i>Created Tasks: {counters.createdCounter}</i>
                <i>Edited Tasks: {counters.editedCounter}</i>
                <i>Deleted Tasks: {counters.deletedCounter}</i>
            </div>
        );
    };

    // ------- add generate color --------------------------------------------
    const generateColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    // ------- add Local Storage ---------------------------------------------

    const savelocalStorage = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
        localStorage.setItem('counters', JSON.stringify(counters));
    };

    useEffect(() => {
        savelocalStorage();
    }, [todos, counters]);

    const getLocalStorage = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let localTodo = JSON.parse(localStorage.getItem('todos'));
            setTodos(localTodo);
        }
        if (localStorage.getItem('counters') === null) {
            localStorage.setItem('counters', JSON.stringify([]));
        } else {
            let localCounter = JSON.parse(localStorage.getItem('counters'));
            // setCounters(localCounter);
        }
    };

    useEffect(() => {
        getLocalStorage();
    }, []);

    // -------------- RENDER ------------------------------------------------------------
    return (
        <div className="App">
            <header>
                <h1 className="App-header">New TODO app </h1>
                <Counter className="Counter-section" counters={counters} />
            </header>
            {/* <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} counters={counters} /> */}

            <button className="open-btn" onClick={() => setPopapActive(true)}>
                ADD NEW TODO
            </button>
            <Popup active={popupActive} setActive={setPopapActive} inputText={inputText} todos={todos} setInputText={setInputText} counters={counters} />
            <List setTodos={setTodos} todos={forms} counters={counters} color={generateColor()} />
        </div>
    );
}

export default App;
