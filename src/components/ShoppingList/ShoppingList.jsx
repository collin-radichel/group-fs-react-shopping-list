import ShoppingItem from '../ShoppingItem/ShoppingItem'
import '../ShoppingItem/ShoppingItem.css'

function ShoppingList ({
    shoppingList,
    clearItems,
    resetItems,
    removeItem
}) {
    return (
        <>
        <div>
            <h2 className="shopping-header" >Shopping List:</h2>
            <button className="resetBtn" onClick={resetItems}>RESET</button>
            <button className="clearBtn" onClick={ () => clearItems(shoppingList)}>CLEAR</button>
        </div>


        <div>
            {shoppingList.map(item =>
                (<><ShoppingItem
                key = {item.id}
                item = {item}
                removeItem = {removeItem}
                /></>)
                )}
        </div>
        </>
    )
}

export default ShoppingList;