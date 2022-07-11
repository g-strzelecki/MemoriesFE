import React from 'react';
import './App.css';
import { Form } from './components/Form/Form';
import { Header } from './components/layout/Header';
import { Posts } from './components/Posts/Posts';

export const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <div className="App-container">
          <Posts />
          <Form />
        </div>
      </div>
    </>
  );
}
