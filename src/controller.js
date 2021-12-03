import App from "./components/app";
import React, { useState, useReducer } from 'react';
import {data as model} from "./model"
import {reducer} from "./reducer"
import * as actions from "./actions"

const Controller= () => {
  const [state, dispatch] = useReducer(reducer, model)

  function handleHoverLang(event){
    console.log(event.target.value);
  }
  return (
    
    <App
      state={state}
    />
  );
};

export default Controller;