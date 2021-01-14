import React from 'react';
import { useState, useEffect} from 'react'
import ShoppingList from '../ShoppingList/ShoppingList'
import Header from '../Header/Header.jsx'
import './App.css';

function clearItems() {
    console.log('clearing items');
}

function resetItems() {
    console.log('resetting items');
}


function App() {
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
