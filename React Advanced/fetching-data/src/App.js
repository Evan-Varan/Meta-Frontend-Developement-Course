import React from "react";

function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1") // Fetching data from the random user API , query to get 1 user
      .then((response) => response.json()) //Convert the response to JSON object
      .then(data => setUser(data)) //save that data to the user state
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Customer data</h1>
      <h2>Name : {user.results[0].name.first}</h2> {/* Displaying the first name of the user */}
      <img alt = "" src ={user.results[0].picture.large}/> {/* Displaying the picture of the user */}
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
