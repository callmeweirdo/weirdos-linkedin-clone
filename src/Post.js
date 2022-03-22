import React, {forwardRef} from "react";
import "./Post.css";

// ! components imports
import InputOption from "./InputOption";

// ! redux imports
import  {useSelector} from 'react-redux';
import { selectUser } from "./features/userSlice";

// ! styled imports
import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const  Post = forwardRef(({ name, description, message, postUrl }, ref) => {

  const user = useSelector(selectUser);

  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={user.phptoUrl} >{name[0]}</Avatar>
        <div className="post__info">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Like" color="Comment" />
        <InputOption Icon={ShareOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Like" color="gray" />
      </div>
    </div>
  );
})

export default Post;
