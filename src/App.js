import React from 'react';
import { CartProvider } from './CartContext';
import Cart from './components/Cart';
import './App.css';

function App() {
    return (
        <CartProvider>
            <div className="App">
                <Cart />
            </div>
        </CartProvider>
    );
}

export default App;

