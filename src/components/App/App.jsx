
import { useState, useEffect} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import Header from '../Header/Header.jsx'
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
  
    const removeItem = (id) => {
        // call sweetalerts to make the user confirm that they want to delete
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete this item!'
          }).then((result) => {
              // if the Yes, delete this item! button is clicked run axios.delete
            if (result.isConfirmed) {
                // delete request on click of remove btn
                axios.delete(`/shopping/${id}`).then(response => {
                    console.log(`in removeItem with item id: `, id);
                    fetchItems();
                }).catch(error => {
                    console.log(error);
                })
                // alert for successful delete
              Swal.fire(
                'Deleted!',
                'Your item has been deleted.',
                'success'
              )
            }
          })
        }

    
        
    

    const clearItems = () => {
        console.log('clearing all items');
    }

    const resetItems = () => {
    console.log('resetting items');
        }

     const buyItem = () => {
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
                removeItem = {removeItem}
                buyItem = {buyItem}
                />
            </main>
        </div>
    );
}

export default App;
