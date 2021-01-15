import ShoppingList from '../ShoppingList/ShoppingList'

function ShoppingItem({
//list of deconstructed props
item,
removeItem,
buyItem

}){

    return(
        <div>
<<<<<<< HEAD
            <p>{name}</p>
            <p>{quantity} {unit}</p>
            <button onClick={buyItems}>Buy</button>
            <button onClick={clearItems}>Remove</button>
=======
            <p>{item.item}</p> 
            <p>{item.quantity} {item.unit}</p>
            <button onClick={ () => buyItem(item.id)}>Buy</button>
            <button onClick={ () => removeItem(item.id)}>Remove</button>
>>>>>>> 7571b0172e7b660428397f49e50a8853a3535ac2
        </div>
    )
}

export default ShoppingItem