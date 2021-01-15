import ShoppingItem from '../ShoppingItem/ShoppingItem'

function ShoppingList ({
    shoppingList,
    clearItems,
    resetItems,
    removeItem
}) {
    return (
        <>
        <div>
            <h2>Shopping List:</h2>
            <button onClick={resetItems}>RESET</button>
            <button onClick={ () => clearItems(shoppingList)}>CLEAR</button>
        </div>


        <div>
            {shoppingList.map(item =>
                (<><ShoppingItem
                key = {item.id}
<<<<<<< HEAD
                name = {item.item}
                quantity = {item.quantity}
                unit = {item.unit}
                /></div></>)
=======
                item = {item}
                removeItem = {removeItem}
                /></>)
>>>>>>> 7571b0172e7b660428397f49e50a8853a3535ac2
                )}
        </div>
        </>
    )
}

export default ShoppingList;