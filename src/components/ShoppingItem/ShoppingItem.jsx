import ShoppingList from '../ShoppingList/ShoppingList'
import './ShoppingItem.css'; 

function ShoppingItem({
//list of deconstructed props
item,
removeItem,
buyItem

}){

    return(
        <div className="shopping-item">
            <p>{item.item}</p> 
            <p>{item.quantity} {item.unit}</p>
            <button className="buyBtn" onClick={ () => buyItem(item.id)}>Buy</button>
            <button className="removeBtn" onClick={ () => removeItem(item.id)}>Remove</button>
        </div>
    )
}

export default ShoppingItem