import PropTypes from "prop-types";

export default function ErrorAlert({ error }) {
  return (
    <p style={{ border: "2px solid red", padding: "1em" }}>{error.message}</p>
  );
}

ErrorAlert.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
};
