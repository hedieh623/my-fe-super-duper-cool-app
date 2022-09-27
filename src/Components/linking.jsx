import {Link} from "react-router-dom";

const TopicMenu = ({ setCategory }) => {
  return (
    <ul>
      <Link to= {"/Topics"}>
        <li
          onClick={() => {
            setCategory("Topics");
          }}
        >
        </li>
      </Link>
    </ul>
  );
};





const Newsearch = ({ setSearchTerm }) => {
  const [newSearchTerm, setNewSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(newSearchTerm);
    setNewSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter here:
        <input
          placeholder="Search by show name or genre..."
          value={newSearchTerm}
          onChange={(event) => setNewSearchTerm(event.target.value)}
        ></input>
      </label>
      <button>Topic</button>
    </form>
  );
};

export default {TopicMenu,Newsearch};
