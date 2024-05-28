import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
};

const cartReducer = (state, action) => {
    switch(action.type) {
        case 'SET_ITEMS':
            return {
                ...state,
                items: action.payload,
                totalQuantity: action.payload.reduce((acc, item) => acc + item.quantity, 0),
                totalAmount: action.payload.reduce((acc, item) => acc + item.quantity * item.price, 0)
            };
        case 'UPDATE_QUANTITY':
            const updatedItems = state.items.map(item => 
                item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
            );
            return {
                ...state,
                items: updatedItems,
                totalQuantity: updatedItems.reduce((acc, item) => acc + item.quantity, 0),
                totalAmount: updatedItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
            };
        default:
            return state;
    }
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        axios.get('https://drive.google.com/uc?export=download&id=1fOadeM1liwbUK38z92F0XYugk2jwqK2r')
            .then(response => {
                dispatch({ type: 'SET_ITEMS', payload: response.data });
            })
            .catch(error => console.error('Error fetching the data', error));
    }, []);

    const updateQuantity = (id, quantity) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    };

    return (
        <CartContext.Provider value={{ ...state, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
