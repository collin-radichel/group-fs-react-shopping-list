import ShoppingList from '../ShoppingList/ShoppingList'
import {useState} from 'react'
import './ShoppingItem.css'

function ShoppingItem({
//list of deconstructed props
item,
removeItem
}){

    const [isPurchased, setIsPurchased] = useState(false);

    const buyItem = () => {
        console.log('You bought the Item!!!');
        setIsPurchased(!isPurchased);
    }

    return(
        
        <div>
            {isPurchased ? 
            <>
            <p>{item.item}</p> 
            <p>{item.quantity} {item.unit}</p>
            <p>Purchased!</p>
            </>
            :
            <>
            <p>{item.item}</p> 
            <p>{item.quantity} {item.unit}</p>
            <button onClick={ () => buyItem(item.id)}>Buy</button>
            <button onClick={ () => removeItem(item.id)}>Remove</button>
            </>
            }
        </div>
        
        
    )
}

export default ShoppingItem