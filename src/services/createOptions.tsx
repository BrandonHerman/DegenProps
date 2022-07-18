import Parse from 'parse';

const createOptions = async (options) => {
  f

  const newTodoTitleValue = newTodoTitle;
  // Creates a new Todo parse object instance
  let Option = new Parse.Object('Option');
  Todo.set('title', newTodoTitleValue);
  Todo.set('done', false);
  // After setting the todo values, save it on the server
  try {
    await Todo.save();
    // Success
    Alert.alert('Success!', 'Todo created!');
    // Refresh todos list to show the new one (you will create this function later)
    readTodos();
    return true;
  } catch (error) {
    // Error can be caused by lack of Internet connection
    Alert.alert('Error!', error.message);
    return false;
  };


}

export default createOptions();
