import React from 'react';
import { useHistory } from 'react-router-dom';
import Confirmation from './Confirmation';

function OrderForm(props) {

    const {values, update, submit, orders} = props;

    const history = useHistory();

    const change = (event) => {
        const {name, value, type, checked} = event.target;
        const valueNeeded = type === 'checkbox' ? checked : value;
        update(name, valueNeeded);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    const routeToHome = () => {
        history.push('/');
    }

    return (
        <div>
            <form onSubmit = {onSubmit}>
                <label> Name
                    <input name = 'name'
                     type = 'text'
                     value = {values.name}
                     onChange = {change}
                    />
                </label>

                <label> Email
                    <input name = 'email'
                     type = 'email'
                     value = {values.email}
                     onChange = {change}
                    />
                </label>

                <label> Size
                    <select name = 'size' value = {values.size} onChange = {change}>
                        <option value = ''>-----Select Size-----</option>
                        <option value = 'small'>Small</option>
                        <option value = 'medium'>Medium</option>
                        <option value = 'large'>Large</option>
                        <option value = 'xlarge'>XLarge</option>
                    </select>
                </label>

                <div>
                    <h5>Toppings</h5>

                    <label>Pepperoni
                        <input 
                        name = 'pepperoni'
                        type = 'checkbox'
                        checked = {values.pepperoni}
                        onChange = {change}
                        />
                    </label>

                    <label> Sausage
                        <input 
                        name = 'sausage'
                        type = 'checkbox'
                        checked = {values.sausage}
                        onChange = {change}
                        />
                    </label>

                    <label> Onion
                        <input 
                        name = 'onion'
                        type = 'checkbox'
                        checked = {values.onion}
                        onChange = {change}
                        />
                    </label>

                    <label> Mushroom
                        <input 
                        name = 'mushroom'
                        type = 'checkbox'
                        checked = {values.mushroom}
                        onChange = {change}
                        />
                    </label>
                </div>

                <label> Special Instructions
                    <input name = 'specInstruc'
                     type = 'text'
                     value = {values.specInstruc}
                     onChange = {change}
                    />
                </label>

                <button>Submit</button>

            </form>
            <div>
                <button onClick = {routeToHome}>Go Home</button>
            </div>

            <div>
                {orders.map((order) => {
                    return <Confirmation key = {order.name} orderInfo = {order} />
                })}  
            </div>
        </div>
    )
}

export default OrderForm;