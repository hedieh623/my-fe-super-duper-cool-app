import axios from "axios";
import { useEffect, useState } from "react";

const Topics = ({ articles }) => {
  const [allTopics, setAllTopics] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://little-market.herokuapp.com/api/items?category_name=${category}`
      )
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
