function DessertsList(props) {
  // Implement the component here.
  const desserts = props.data;
  const filteredDesserts = desserts.filter(dessert => dessert.calories < 500)
  const sortedDesserts = filteredDesserts.sort((a,b) => a.calories - b.calories)
    const listItems = sortedDesserts.map(dessert => {
      const itemText = `${dessert.name} -  ${dessert.calories} cal`
      return (
        <li>{itemText}</li>
      )
    })
  return (
    <ul>{listItems}</ul>
    )
}

export default DessertsList;
