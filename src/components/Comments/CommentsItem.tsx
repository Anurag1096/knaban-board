import { CommentProps } from "./types/DataModel";
import Image from "next/image";


export default function CommentsItem({ comment }: {comment:CommentProps}) {
  return (
    <div className="flex gap-3 p-2 rounded-xl bg-gray-100 dark:bg-gray-600">
      {comment.user.avatar && (
        <Image
          src={comment.user.avatar}
          alt={comment.user.name}
          width={32}
          height={32}
          className="rounded-full"
        />
      )}

      <div>
        <div className="text-sm font-semibold"> {comment.user.name}</div>
        <div className="text-sm"> {comment.message}</div>
        <div className="text-xs text-gray-500">{new Date(comment.createdAt).toLocaleString()}</div>
      </div>
    </div>
  );
}
