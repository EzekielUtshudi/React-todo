import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

function InputTodo({ addTodoProps }) {
  const [state, setState] = useState({
    title: '',
  });

  const onChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.title.trim()) {
      addTodoProps(state.title);
      setState({
        ...state,
        title: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        value={state.title}
        name="title"
        onChange={onChange}
      />
      <button type="button" className="input-submit">
        <FaPlusCircle
          style={{
            color: 'darkcyan',
            fontSize: '1.25rem',
            marginTop: '0.125rem',
          }}
        />
      </button>
    </form>
  );
}

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
