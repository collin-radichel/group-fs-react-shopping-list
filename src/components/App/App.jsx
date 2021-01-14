<<<<<<< HEAD
import { useState, useEffect} from 'react';
=======

import { useState, useEffect} from 'react'
>>>>>>> 9a529b39824cf9abc93714d2c012e456b316cf00
import axios from 'axios';
import Header from '../Header/Header.jsx';
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx'
import ShoppingItem from '../ShoppingItem/ShoppingItem.jsx'
import ShoppingList from '../ShoppingList/ShoppingList'
import './App.css';


function App() {
    const [shoppingList, setShoppingList] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    const [newUnit, setNewUnit] = useState('');

    //on load
    useEffect(() => {
        fetchItems()
    }, [])

    // GET function
    const fetchItems = () => {
        axios({
            method: 'GET',
            url: '/shopping'
        }).then((response) =>{
            console.log('enter response', response);
            console.log('just the data:', response.data);

            setShoppingList(response.data);
        }).catch(function (error) {
        console.log('Error on get:', error);
      });
    }


   
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
  
    function clearItems() {
    console.log('clearing items');
        }

    function resetItems() {
    console.log('resetting items');
        }

     const buyItems = ()=>{
        console.log('You bought the Item!!!');
    }


    return (
        <div className="App">
            <Header />
            <main>
                <ShoppingForm
                newItem = {newItem}
                setNewItem = {setNewItem}
                newQuantity = {newQuantity}
                setNewQuantity = {setNewQuantity}
                newUnit = {newUnit}
                setNewUnit = {setNewUnit}
                handleSubmit = {handleSubmit}
                />
                <ShoppingList
                clearItems = {clearItems}
                resetItems = {resetItems}
                shoppingList = {shoppingList}
                />
                <ShoppingItem
                clearItems = {clearItems}
                buyItems = {buyItems}
                />
            </main>
        </div>
    );
}

export default App;
