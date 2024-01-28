'use client'
import React, { useRef } from 'react'

interface TextAreaProps {
  add: (content: string) => void
}

const TextArea:React.FC<TextAreaProps> = ({add}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleClick = async () => {
    if (textareaRef.current) {
      const content = textareaRef.current.value.trim();
      if (content) {
        add(content);
      }
      textareaRef.current.value = ''
    }
  }
  return (
    <div className="mb-4">
      <label htmlFor="comment" className="block text-sm font-medium text-gray-600">添加评论</label>
      <textarea
        id="comment"
        name="comment"
        rows={3}
        className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        ref={textareaRef}
      >
      </textarea>
      <button
        className='btn btn-primary mt-3'
        onClick={handleClick}
      >
        提交
      </button>
    </div>
  )
}

export default TextArea