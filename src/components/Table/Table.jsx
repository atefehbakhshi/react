const Table = ({ userList, deleteHandler }) => {
  return (
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
            <td onClick={() => deleteHandler(user.id)}> delete</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
