import React from 'react';
import {Route, Switch} from "react-router-dom";
import ShopHeader from "../shop-header/shop-header";
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";

const App = ({total}) => {
    return (
        <main role='main' className='container'>
            <ShopHeader numItems={5} total={total} />
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/card' component={CartPage}/>
            </Switch>
        </main>
    )
}

export default App;