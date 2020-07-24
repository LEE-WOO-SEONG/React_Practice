import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import NotFound from './pages/NotFound';
import LinkList from './pages/LinkList';
import Login from './pages/Login';

export default function App() {
  return (
    <BrowserRouter>
      <LinkList />
      <Switch>
        {/* 순서대로 먼저 맞는 path를 보여줌 */}
        <Route path="/profile/:id/:pw" component={Profile} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}
