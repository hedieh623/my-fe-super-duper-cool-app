import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/articles"}> News</Link>
        </li>
        <li>
          <Link to={"/topics"}> Topics </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
