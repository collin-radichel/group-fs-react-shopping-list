

function displayShoppingItem({
//list of deconstructed props
setShoppingList,
setNewItem,
setNewQuantity,
setNewUnit
}){

    return(
        <div>
            {props.shoppingList.map(shopping => (<p key={item.id}>{item.name}</p>))}
            {props.shoppingList.map(shopping => (<p key={item.id}>{item.quantity} {item.unit}</p>))}
            <p></p>
            <button onClick={}>Buy</button>
            <button onClick={}>Remove</button>
        </div>
    )


} export default displayShoppingItem