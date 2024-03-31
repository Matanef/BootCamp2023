const SearchCar = (props) => {
    console.log(props)
    let { searchCar, handleChange } = props
    // let listWithoutDup = [...new Set(listCars.map(item => (item.brand)))];
    return (
        <>
            <label htmlFor="search">Search: </label>
            <input
                id="search"
                type="text"
                value={searchCar}
                onChange={handleChange}
            />
        </>
    )
}

export default SearchCar;