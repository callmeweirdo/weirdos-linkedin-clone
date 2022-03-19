import React, { useEffect, useState } from "react";
import "./Feed.css";

// ? components inports
import InputOption from "./InputOption";
// ! style components import
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

import firebase from './firebase';
import {db} from "./firebase";
import Post from "./Post";

function Feed() {

    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
          setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        ));
        // setPosts(snaps);
    },[]);

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: "weirdo",
            description: "call me weirdo",
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");
    };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form onSubmit={sendPost}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
          </form>
        </div>

        <div className="input__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC!%E"
          />
        </div>
      </div>

        {posts.map(({id, data:{name, description, message, photourl}}) => {
            return(
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photourl}
                />
            )
        })}
    </div>
  );
}

export default Feed;



