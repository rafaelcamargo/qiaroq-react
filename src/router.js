import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { HomeView } from '@src/home/views/home';
import { TodoView } from '@src/todo/views/todo';

export const Router = () => {
  return (
    <BrowserRouter>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/todos">Todos</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/todos" element={<TodoView />} />
      </Routes>
    </BrowserRouter>
  );
};
