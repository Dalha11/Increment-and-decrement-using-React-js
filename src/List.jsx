function List() {
  const fruit = [
    { id: 1, name: "apple", calories: 23 },
    { id: 2, name: "banana", calories: 45 },
    { id: 3, name: "melon", calories: 77 },
    { id: 4, name: "graps", calories: 17 },
    { id: 5, name: "orange", calories: 67 },
  ];
 
  // fruit.sort((a,b) => a.name.localeCompare(b.name)); // ALPHABATE
  //fruit.sort((a,b) => b.name.localeCompare(a.name)) //REVERSE ALPHABAT
  // fruit.sort((a,b) => a.calories-b.calories) // NUMERIC
  // fruit.sort((a,b) => b.calories-a.calories) // REVERSE NUERIC


  const listitems = fruit.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;
      <b>{fruit.calories}</b>
    </li>
  ));
  return <ol>{listitems}</ol>;
}

export default List;
