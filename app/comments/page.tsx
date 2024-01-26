'use client'
import React, { useState, useRef } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import { Low } from 'lowdb'
// import { JSONFile } from 'lowdb/node'

// interface Database {
//     comments: Array<{
//       username: string;
//       content: string;
//       time: string;
//     }>;
// }

// const db: Low<Database> = new Low(new JSONFile('db.json'), { comments: [] });
// db.read();

const Page = () => {
  //const textareaRef = useRef<HTMLTextAreaElement>(null);
  //const data = db.data.comments;
  //const [comments, setComments] = useState(data);
  const comments= [
    {
      username: "Username",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "2023-"
    },
    {
      username: "AnotherUser",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time: "1 day ago"
    }
  ]
//   const handleClick = async () => {
//     if (textareaRef.current) {
//       const content = textareaRef.current.value.trim();
//       if (content) {
//         const newComment = {
//           username: 'User' + Math.floor(Math.random() * 1000),
//           content: content,
//           time: new Date().toLocaleString()
//         }
//         setComments([...comments, newComment])
//         db.data.comments.push(newComment);
//         await db.write()
//         textareaRef.current.value = ''
//       }
//     }
//   }
  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen py-6 bg-zinc-200">
      <div className="bg-white py-6 px-36 rounded-lg shadow-lg">
        {comments.map((comment:{username: string, content: string, time: string}, index:number) => (
            <div key={index} className="flex items-center space-x-4 mb-3">
                <div>
                    <p className="text-sm font-medium text-gray-800">{comment.username}</p>
                    <p className="text-sm text-gray-600">{comment.content}</p>
                    <p className="text-xs text-gray-400">{comment.time}</p>
                </div>
            </div>
        ))}
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-600">添加评论</label>
          <textarea
            id="comment"
            name="comment"
            rows={3}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            //ref={textareaRef}
          >
          </textarea>
          <button
            className='btn btn-primary mt-3'
            //onClick={handleClick}
          >
            提交
          </button>
        </div>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Page