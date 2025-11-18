'use client'
import {useState,useEffect} from 'react'
import CommentsList from "@/components/Comments/CommentsList"
import CommentsInput from "@/components/Comments/CommentsInput"
import { CommentProps } from './types/DataModel'


interface Props {
  cardId: string;
}
export default function CommentsContainer({cardId}:Props){
    const [comments, setComments] = useState<CommentProps[]>([]);


     // Fetch initial comments
  useEffect(() => {
    fetch(`/api/comments?cardId=${cardId}`)
      .then(res => res.json())
      .then(data => setComments(data));
  }, [cardId]);

  const addComment = async (message: string) => {
    const res = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ cardId, message }),
    });

    const newComment = await res.json();
    setComments(prev => [...prev, newComment]);
  };
    return(<div className="space-y-4 p-4"> 
    <CommentsList   comments={comments}/>
    <CommentsInput onSubmit={addComment}/>
    </div>)
}