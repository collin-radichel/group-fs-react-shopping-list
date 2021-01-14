import {useEffect, useState} from 'react';
import axios from 'axios';
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx'

import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    const [shoppingList, setShoppingList] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [newQuanitiy, setNewQuantity] = useState('');
    const [newUnit, setNewUnit] = useState('');

    // GET function


    //POST function
    const addShoppingItem = () => { 
        axios.post('/shopping',
            {
                item: newItem,
                quantity: newQuantity,
                unit: newUnit
            }).then(response => {
                //clear inputs
                setNewItem('');
                setNewQuantity('');
                setNewQuantity('');

                fetchItems();
            }).catch(error => {
                alert('Error adding item');
                console.log(error)
            })
    }; //end addShoppingItem

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newItem){
            addShoppingItem();
        } else {
            alert('This new item needs a name!');
        }
    }; //handleSubmit

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
