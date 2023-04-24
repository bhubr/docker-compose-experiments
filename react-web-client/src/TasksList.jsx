import PropTypes from "prop-types";

export default function TasksList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} style={{ display: "flex" }}>
          <span>{task.title}</span>
        </div>
      ))}
    </div>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      done: PropTypes.bool,
    })
  ),
};
