import ShoppingList from '../ShoppingList/ShoppingList'

function ShoppingItem({
//list of deconstructed props
item,
removeItem,
buyItem

}){

    return(
        <div>
            <p>{item.item}</p> 
            <p>{item.quantity} {item.unit}</p>
            <button onClick={ () => buyItem(item.id)}>Buy</button>
            <button onClick={ () => removeItem(item.id)}>Remove</button>
        </div>
    )
} 

export default ShoppingItem