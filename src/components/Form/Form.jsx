const Form = ({ submitHandler }) => {
  return (
    <form onSubmit={submitHandler} className="user-form">
      <input type="text" name="userName" placeholder="enter your name" />
      <input type="text" name="familyName" placeholder="enter your family" />
      <button type="submit">Add user</button>
    </form>
  );
};

export default Form;
