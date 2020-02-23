import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch, useParams} from "react-router-dom";


export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/add">Add</Link>
                        </li>
                        <li>
                            <Link to="/minus">Minus</Link>
                        </li>
                        <li>
                            <Link to="/multiply">Multiply</Link>
                        </li>
                        <li>
                            <Link to="/divide">Divide</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/add/:num1/:num2" children={<Add/>}/>
                    <Route path="/minus/:num1/:num2" children={<Minus/>}/>
                    <Route path="/multiply/:num1/:num2" children={<Multiply/>}/>
                    <Route path="/divide/:num1/:num2" children={<Divide/>}/>
                    <Route path="/" exact children={Home}/>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function Add() {
    let {num1, num2} = useParams();

    return (
        <div>
            <h3>{num1} + {num2} = {Number(num1) + Number(num2)}</h3>
        </div>
    );
}

function Minus() {
    let {num1, num2} = useParams();

    return (
        <div>
            <h3>{num1} - {num2} = {Number(num1) - Number(num2)}</h3>
        </div>
    );
}

function Multiply() {
    let {num1, num2} = useParams();

    return (
        <div>
            <h3>{num1} * {num2} = {Number(num1) * Number(num2)}</h3>
        </div>
    );
}

function Divide() {
    let {num1, num2} = useParams();

    return (
        <div>
            <h3>{num1} / {num2} = {Number(num1) / Number(num2)}</h3>
        </div>
    );
}