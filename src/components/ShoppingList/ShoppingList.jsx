// import ShoppingItem from '../ShoppingItem/ShoppingItem'

function ShoppingList ({
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


        {/* <div>
            {shoppingList.map(item => 
                (<div><ShoppingItem
                key = {shopping.id}
                item = {item}
                /></div>)
                )}
        </div> */}
        </>
    )
}

export default ShoppingList;