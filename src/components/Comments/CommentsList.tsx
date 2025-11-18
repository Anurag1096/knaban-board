import CommentsItem from './CommentsItem'
import { CommentProps } from './types/DataModel'


interface Props{
    comments:CommentProps[];
}


export default function CommentsList({comments}:Props){
    return(
        <div className="space-y-3">
            {comments.map((comment)=>{
                return(<CommentsItem key={comment.id} comment={comment}/>)
            })}
        </div>
    )
}


