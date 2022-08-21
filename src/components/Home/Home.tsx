import React from "react";
import { Posts } from '../Posts/Posts';
import { Form } from '../Form/Form';

import './Home.css';

export const Home = () => (
  <div className="App-container">
    <Posts />
    <Form />
  </div>
);
