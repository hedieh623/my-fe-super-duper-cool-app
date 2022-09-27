import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";




const Topics = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    axios
      .get(`https://my-fe-super-duper-cool-app.herokuapp.com/api/topics`)
      .then(({ data }) => {
        setTopics(data.topics);
      })
      .catch((err) => {});
  }, []);
  return (
    <main>
      <ul>
        <li>
          <Link to={"/articles"}> All Articles</Link>
        </li>
        {topics.map((topic) => {
          return (
            <li key={topic.slug}>
              <Link to={`/topics/${topic.slug}`}> {topic.slug} </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Topics;