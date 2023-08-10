import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";

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

  const deleteHandler = (id) => {
    setUserList((prev) => [...prev].filter((item) => item.id !== id));
  };
  return (
    <>
      <Form submitHandler={submitHandler} />
      <Table userList={userList} deleteHandler={deleteHandler} />
    </>
  );
}

export default App;
