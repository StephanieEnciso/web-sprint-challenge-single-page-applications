import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

blankForm = {
  name: '',
  email: '',
  size: '',
  pepperoni: false,
  sausage: false,
  onion: false,
  mushroom: false,
  specInstruc: '',
}

const isDisabled = true;

const App = () => {

  const [formValues, setFormValues] = useState(blankForm);
  const [orders, setOrders] = useState([]);
  const [disabledBtn, setDisabledBtn] = useState(isDisabled);

 
  return (
    <>
        <Route exact path = '/' >
          <Home />
        </Route>
      <div>
        <Route path = '/pizza' >
          <OrderForm values = {formValues} />
        </Route>
      </div>
      
    </>
  );
};
export default App;
