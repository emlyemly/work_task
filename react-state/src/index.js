import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterHook from './CounterExample/CounterHook';
import CounterClass from './CounterExample/CounterClass';
import Car from './CarExample/Car';
import Users from './UsersExample/Users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CounterHook />
        <CounterClass />
        <Car />
        <Users />
    </React.StrictMode>
);
