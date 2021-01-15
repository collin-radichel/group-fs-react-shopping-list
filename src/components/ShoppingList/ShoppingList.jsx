import ShoppingItem from '../ShoppingItem/ShoppingItem'

function ShoppingList ({
    shoppingList,
    clearItems,
    resetItems,
    removeItem,
    buyItem
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
                item = {item}
                removeItem = {removeItem}
                buyItem = {buyItem}
                /></>)
                )}
        </div>
        </>
    )
}

export default ShoppingList;