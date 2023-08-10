import { useState } from "react";
import "./App.css";

function App() {
  const [userList, setUserList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const { userName, familyName } = e.target;
    setUserList((prev) => [
      ...prev,
      {
        userName: userName.value,
        familyName: familyName.value,
        id: Math.random(),
      },
    ]);
  };
  return (
    <>
      <form onSubmit={submitHandler} className="user-form">
        <input type="text" name="userName" placeholder="enter your name" />
        <input type="text" name="familyName" placeholder="enter your family" />
        <button type="submit">Add user</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>no</th>
            <th>name</th>
            <th>family</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.userName}</td>
              <td>{user.familyName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
