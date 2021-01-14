import { useState, useEffect} from 'react'
import axios from 'axios';
import Header from '../Header/Header.jsx'
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx'
import ShoppingItem from '../ShoppingItem/ShoppingItem.jsx'
import ShoppingList from '../ShoppingList/ShoppingList'
import './App.css';


function App() {
    const [shoppingList, setShoppingList] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [newQuanitiy, setNewQuantity] = useState('');
    const [newUnit, setNewUnit] = useState('');

    // GET function
    const fetchItems = ()=>{
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

    return (
        <div className="App">
            <Header />
            <main>
                <ShoppingList
                clearItems = {clearItems}
                resetItems = {resetItems}
                />
            </main>
        </div>
    );
}

export default App;
