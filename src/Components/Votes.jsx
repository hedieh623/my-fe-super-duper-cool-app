import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import SingleArticle from "./SingleArticle";


const Votes = (props) => {
  const [votescount, setVotescount] = useState(0);
  const[errormsg,seterrormsg]= useState(null)
  const {article_id} = useParams();
  function handleUpper(){
    setVotescount((currentVotesCount)=> currentVotesCount+1)
    axios.patch(
      `https://my-fe-super-duper-cool-app.herokuapp.com/api/articles/${article_id}`,
      { inc_votes: 1 }
    ).catch((err)=>{seterrormsg("Try again later")});
    ;
  }
function handleDown() {
  setVotescount((currentVotesCount) => currentVotesCount - 1);
  axios
    .patch(
      `https://my-fe-super-duper-cool-app.herokuapp.com/api/articles/${article_id}`,
      { inc_votes: 1 }
    )
    .catch((err) => {
      seterrormsg("Try again later");
    });
}
  
  return (
    <>
      <p className="votes"> VOTES: {props.votes + votescount}</p>
      <button type="Upvote" onClick = {()=>handleUpper()}>Up</button>
      <button type="Downvote"onClick = {()=>handleDown()}>Down</button>
    </>
  );
  


};

export default Votes;