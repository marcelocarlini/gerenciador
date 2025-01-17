import { Link } from "react-router-dom";
import "../styles/components/_linkButton.scss";
import { IoAddCircleOutline } from "react-icons/io5";

const LinkButton = ({ to, text }) => {
  return (
    <Link className="linkButton" to={to}>
      <IoAddCircleOutline className="icon" />
      {text}
    </Link>
  );
};

export default LinkButton;
