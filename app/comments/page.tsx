import React from 'react'
import TextArea from '../components/TextArea'
import { revalidatePath } from 'next/cache'
// import { Low } from 'lowdb'
// import { JSONFile } from 'lowdb/node'

// interface Database {
//   comments: Array<{
//     username: string;
//     content: string;
//     time: string;
//   }>;
// }

// const db: Low<Database> = new Low(new JSONFile('db.json'), { comments: [] });
// await db.read();

// const add = async (content: string) => {
//   'use server'
//   const newComment = {
//     username: 'User' + Math.floor(Math.random() * 1000),
//     content: content,
//     time: new Date().toLocaleString()
//   }
//   db.data.comments.push(newComment);
//   await db.write()
//   revalidatePath('/comments')
// }

interface Comment {
  username: string;
  content: string;
  time: string;
}

const getComments = (): Comment[] => {
  const commentsString = process.env.COMMENTS || '[]';
  return JSON.parse(commentsString);
};

const saveComment = (newComment: Comment) => {
  const comments = getComments();
  comments.push(newComment);
  process.env.COMMENTS = JSON.stringify(comments);
};

const Page = async () => {
  //const comments = db.data.comments;
  const comments = getComments();
  const add = async (content: string) => {
    'use server';
    const newComment = {
      username: 'User' + Math.floor(Math.random() * 1000),
      content: content,
      time: new Date().toLocaleString(),
    };
    saveComment(newComment);
    revalidatePath('/comments');
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen py-6 bg-zinc-200">
        <div className="bg-white py-6 px-36  mx-72 rounded-lg shadow-lg">
          {comments.map((comment:{username: string, content: string, time: string}, index:number) => (
              <div key={index} className="flex items-center space-x-4 mb-3">
                  <div>
                      <p className="text-sm font-medium text-gray-800">{comment.username}</p>
                      <p className="text-sm text-gray-600">{comment.content}</p>
                      <p className="text-xs text-gray-400">{comment.time}</p>
                  </div>
              </div>
          ))}
        <TextArea add={add}/>
        </div>
      </div>
    </>
  )
}

export default Page