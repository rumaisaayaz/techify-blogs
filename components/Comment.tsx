"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';

interface CommentComponentProps {
  slug: string;
}

const CommentComponent: React.FC<CommentComponentProps> = ({ slug }) => {
  const [comments, setComments] = useState<string[]>([]);
  const [name, setName] = useState<string>('');
  const [commentText, setCommentText] = useState<string>('');

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments') || '{}');
    setComments(storedComments[slug] || []);
  }, [slug]);

  const handleAddComment = (comment: string) => {
    const newComments = [...comments, `${name}: ${comment}`];
    setComments(newComments);
    const allComments = JSON.parse(localStorage.getItem('comments') || '{}');
    allComments[slug] = newComments;
    localStorage.setItem('comments', JSON.stringify(allComments));
    setName(''); // Reset the name field after submitting
  };

  const handleDeleteComment = (index: number) => {
    const newComments = [...comments];
    newComments.splice(index, 1);
    setComments(newComments);
    const allComments = JSON.parse(localStorage.getItem('comments') || '{}');
    allComments[slug] = newComments;
    localStorage.setItem('comments', JSON.stringify(allComments));
  };

  return (
    <div className="mt-4 p-4 border rounded-lg shadow-md max-w-md mx-auto">
      <Accordion type="multiple">
        <AccordionItem value="comments">
          <AccordionTrigger className="flex justify-between items-center text-lg font-bold mb-2">
            Comments
            <Image
              alt='DropDown'
              src="/down-arrow.png"
              width="30"
              height="30"
            />
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              {comments.map((comment, idx) => (
                <li key={idx} className="mb-2 p-2 bg-gray-300 dark:bg-black rounded-md shadow-sm flex justify-between items-center">
                  <span className="font-semibold">{comment}</span>
                  <button
                    onClick={() => handleDeleteComment(idx)}
                    className="ml-2 text-red-500"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Your name"
              className="border p-2 w-full mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Add a comment"
              className="border p-2 w-full mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button
              onClick={() => {
                if (commentText.trim() && name.trim()) {
                  handleAddComment(commentText.trim());
                  setCommentText('');
                }
              }}
              className="bg-blue-500 p-2 rounded-md mt-2 w-full"
            >
              Submit
            </button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CommentComponent;