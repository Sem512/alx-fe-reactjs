import React from 'react';

const AddTodoForm = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <div>
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Add a new todo" 
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default AddTodoForm;
