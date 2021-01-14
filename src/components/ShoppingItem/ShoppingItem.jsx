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
            <p>{name}</p> 
            <p>{quantity} {unit}</p>
            <button onClick={buyItems}>Buy</button>
            <button onClick={clearItems}>Remove</button>
        </div>
    )


} export default ShoppingItem