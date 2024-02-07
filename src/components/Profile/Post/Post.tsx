import React from 'react';
import './Post.css'

type  postProps = {
    message: string
}
export const Post = (props: postProps) => {
    return (
        <div>
            <div className={"content"}>
                <div>
                    <div className={"item"}>
                        {props.message}
                        <div>
                        <span>like</span>
                        <span></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
            );
        }
