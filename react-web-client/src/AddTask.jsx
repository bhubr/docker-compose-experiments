import PropTypes from "prop-types";
import { useState } from "react";
import { postTask } from "./api";

export default function AddTask({ onError, onSuccess }) {
  const [title, setTitle] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = await postTask({ title });
      onSuccess(newTask);
    } catch (err) {
      onError(err);
    }
  };

  const onChangeTitle = (e) => setTitle(e.target.value);

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">
        title
        <input id="title" onChange={onChangeTitle} value={title} />
      </label>

      <button type="submit">Add</button>
    </form>
  );
}

AddTask.propTypes = {
  onError: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
};
