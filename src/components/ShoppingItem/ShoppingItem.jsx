import ShoppingList from '../ShoppingList/ShoppingList'

function displayShoppingItem({
//list of deconstructed props
item,
clearItems,
buyItems

}){

    return(
        <div>
            {item.name}
            {item.quantity} {item.unit}
            <button onClick={}>Buy</button>
            <button onClick={clearItems}>Remove</button>
        </div>
    )


} export default displayShoppingItem