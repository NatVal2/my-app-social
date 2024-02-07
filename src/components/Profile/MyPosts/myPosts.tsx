import React from 'react';
import './myPosts.css'
import {Post} from "../Post/Post";

export const MyPosts = () => {
    return (
        <div>
                <div>
                    My posts
                   <div>
                       <textarea></textarea>
                       <button>Add post</button>
                   </div>
                    <div>
                        <Post message={"post"}/>
                    </div>
                </div>

        </div>
    );
};

