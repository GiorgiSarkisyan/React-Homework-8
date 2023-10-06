import React from "react";
import Box from "./components/box";

const usersArray = [
  {
    id: 1,
    name: "John",
    age: 25,
    profileImage: "https://via.placeholder.com/150/92c952",
  },
  {
    id: 2,
    name: "Jane",
    age: 24,
    profileImage: "https://via.placeholder.com/150/771796",
  },
  {
    id: 3,
    name: "Bob",
    age: 30,
    profileImage: "https://via.placeholder.com/150/24f355",
  },
  {
    id: 4,
    name: "Mary",
    age: 28,
    profileImage: "https://via.placeholder.com/150/d32776",
  },
];

function App() {
  return (
    <div className="App">
      <ul>
        {usersArray.map((user) => (
          <Box
            key={user.id}
            name={user.name}
            age={user.age}
            img={user.profileImage}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
