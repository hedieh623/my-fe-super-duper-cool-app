import { useState } from "react";

const CommentAdder = () =>{
    const [newComment, setNewComment] = useState("");

    return(
        <form className="CommentAdder">
            <label> htmlFor = "newComment" Add a comment</label>
            <textarea
            id="newCommment"
            value = {newComment}
            onChange={(e)=>setNewComment(e.target.value)}
            ></textarea>
            <button>Add</button>
            </form>
    )
}

export default CommentAdder