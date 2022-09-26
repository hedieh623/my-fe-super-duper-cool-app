import axios from "axios";
import { useEffect, useState } from "react";

const Topics = ({ articles }) => {
  const [allTopics, setAllTopics] = useState([]);
  useEffect(() => {
    axios
      .get(`https://my-fe-super-duper-cool-app.herokuapp.com/=${articles}`)
      .then(({ data: { topics } }) => {
        setAllTopics(topics);
      })
      .catch((err) => {});
  }, [articles]);

  return (
    <main>
      <ul>
        {allTopics.map((topic) => {
          return <li key={topic.topic_id}>{topic.item_name}</li>;
        })}
      </ul>
    </main>
  );
};

export default Topics;
