import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Home from './components/Home';
import OrderForm from './components/OrderForm';
import * as yup from 'yup';
import schema from './validation/formSchema';
import axios from "axios";

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

const initialErrors = {
  name: '',
  email: '',
  size: '',
  specInstruc: '',
}

const isDisabled = true;

const App = () => {

  const [formValues, setFormValues] = useState(blankForm);
  const [orders, setOrders] = useState([]);
  const [disabledBtn, setDisabledBtn] = useState(isDisabled);
  const [formErrors, setFormErrors] = useState(initialErrors);

  const postNewOrder = (newOrder) => {
    axios
     .post('https://reqres.in/api/users', newOrder)
     .then((response) => {
       console.log(response.data);
       setOrders([response.data, ...orders]);
       setFormValues(blankForm);
     })
     .catch((error) => {
       console.log(error);
       debugger;
     });


  };

  const updateOrderForm = (name, value) => {

    yup.reach(schema, name)
     .validate(value)
     .then(() => {
       setFormErrors({...formErrors, [name]: '',})
     })
     .catch((error) => {
       setFormErrors({...formErrors, [name]: error.errors[0],})
     })

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

    postNewOrder(newOrder)
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabledBtn(!valid);
    })
  }, [formValues])

 
  return (
    <>
        <Route exact path = '/' >
          <Home />
        </Route>
      <div>
        <Route path = '/pizza' >
          <OrderForm values = {formValues} update = {updateOrderForm} submit = {submitOrderForm} orders = {orders} disabled = {disabledBtn} errors = {formErrors}/>
        </Route>
      </div>
      
    </>
  );
};
export default App;
