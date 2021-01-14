function ShoppingForm({
    newItem,
    setNewItem,
    newQuantity,
    setNewQuantity,
    newUnit,
    setNewUnit,
    handleSubmit
}) {
    return(
        <>
            <h2>Add an Item</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Item:
            </label>
            <input 
            type="text"
            placeholder="Enter New Item"
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
            />
            <div>
                <label>
                    Quantity: 
                </label>
                <input
                type="number"
                placeholder="Enter Quantity"
                value={newQuantity}
                onChange={(event) => setNewQuantity(event.target.value)}
                />
                <label>
                    Unit:
                </label>
                <input
                type="text"
                placeholder="Enter Unit Measurement"
                value={newUnit}
                onChange={(event) => setNewUnit(event.target.value)}
                />
                <div>
                    <button type="submit">Save Item</button>
                </div>
            </div>
        </form>

        </>
    )
}