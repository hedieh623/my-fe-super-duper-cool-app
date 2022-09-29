import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import SingleArticle from "./SingleArticle";
import CommentAdder from "./Commentadder";


const Comments = (props) =>{
    const [comments,setComments] =useState([]);
    const { article_id } = useParams();

    useEffect(() => {
      axios
        .get(
          `https://my-fe-super-duper-cool-app.herokuapp.com/api/articles/${article_id}/comments/`
        )
        .then(({ data }) => {
          console.log(data);
          setComments(data.comments);
        });
    }, []);
    return (
      <>
      
          COMMENTS:{comments.map((comments) => <p className="comments">{comments.body},{comments.created_at}</p>)}
      </>
    );};


export default Comments
