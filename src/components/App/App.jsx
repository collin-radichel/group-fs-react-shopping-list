import React from 'react';

import ShoppingItem from '../ShoppingItem/ShoppingItem.jsx'
import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    const [shoppingList, setShoppingList] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    const [newUnit, setNewUnit] = useState('');
    
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
