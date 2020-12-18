import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Home from './components/Home';
import OrderForm from './components/OrderForm';

const blankForm = {
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

  const updateOrderForm = (name, value) => {


    setFormValues({...formValues, [name]: value});
  }

  const submitOrderForm = () => {
    const newOrder = {
      name: formValues.name,
      email: formValues.email,
      size: formValues.size,
      toppings: ['pepperoni', 'sausage', 'onion', 'mushroom'].filter((topping) => 
        formValues[topping]
      ),
      specInstruc: formValues.specInstruc,
    };

    setOrders([newOrder, ...orders]);
    setFormValues(blankForm);
  }

 
  return (
    <>
        <Route exact path = '/' >
          <Home />
        </Route>
      <div>
        <Route path = '/pizza' >
          <OrderForm values = {formValues} update = {updateOrderForm} submit = {submitOrderForm}/>
        </Route>
      </div>
      
    </>
  );
};
export default App;
