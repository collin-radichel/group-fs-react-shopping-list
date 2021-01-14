import ShoppingItem from '../ShoppingItem/ShoppingItem'

function ShoppingList ({
    shoppingList,
    clearItems,
    resetItems
}) {
    return (
        <>
        <div>
            <h2>Shopping List:</h2>
            <button onClick={resetItems}>RESET</button>
            <button onClick={clearItems}>CLEAR</button>
        </div>


        <div>
            {shoppingList.map(item => 
                (<><ShoppingItem
                key = {item.id}
                name = {item.item}
                quantity = {item.quantity}
                unit = {item.unit}
                /></>)
                )}
        </div>
        </>
    )
}

export default ShoppingList;