import ShoppingList from '../ShoppingList/ShoppingList'

function ShoppingItem({
//list of deconstructed props
name,
quantity,
unit,
clearItems,
buyItems

}){

    return(
        <div>
            {name}
            {quantity} {unit}
            <button onClick={buyItems}>Buy</button>
            <button onClick={clearItems}>Remove</button>
        </div>
    )


} export default ShoppingItem