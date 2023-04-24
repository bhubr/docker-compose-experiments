import PropTypes from "prop-types";

export default function ErrorAlert({ error }) {
  const message = error.response ? error.response.data.error : error.message;
  return <p style={{ border: "2px solid red", padding: "1em" }}>{message}</p>;
}

ErrorAlert.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
};
