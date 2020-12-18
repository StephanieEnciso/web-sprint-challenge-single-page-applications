import React from 'react';
import { useHistory } from 'react-router-dom';

function Home(props) {

    const history = useHistory();

    const routeToOrder = () => {
        history.push('/pizza');
    }

    return (
        <>
        <h1>Lambda Eats</h1>
        <button onClick = {routeToOrder}>Order Now</button>
        </>
    )
}

export default Home;