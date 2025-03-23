import React from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const commentsData = [
  {
    name: 'Hemanth Nikhil',
    text: 'Added a comment',
    replies: [
      {
        name: 'Hemanth Nikhil',
        text: 'Added a comment',
        replies: [
          {
            name: 'Hemanth Nikhil',
            text: 'Added a comment',
          },
          {
            name: 'Hemanth Nikhil',
            text: 'Added a comment'
          }
        ]
      }
    ]
  },
  {
    name: 'Hemanth Nikhil',
    text: 'Added a comment',
    replies: []
  },
  {
    name: 'Hemanth Nikhil',
    text: 'Added a comment',
    replies: []
  }
];


export const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className='flex shadow-sm bg-gray-200 p-2 m-2 w-[1300px] rounded-lg'>
      <AccountCircleRoundedIcon fontSize="large" />
      <div className='px-3'>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}

export const CommentsList = ({ comments }) => (
  <div>
    {comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        {
          comment.replies && comment.replies.length > 0 && (
          <div className="px-5 border-l-2 border-l-gray-200">
            <CommentsList comments={comment.replies} />
          </div>
        )}
      </div>
    ))}
  </div>
);
    

export const CommentsContainer = () => {
  return (
    <div className='mt-4'>
      <h1 className='font-bold'>Comments</h1>
      <CommentsList comments={commentsData}/>
    </div>
  );
}


