import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
export default function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="sam"
          timeAgo="Today 2:00pm"
          comment="Hey there, how's it going?"
        />
      </ApprovalCard>
      <ApprovalCard>

      <CommentDetail
        author="alex"
        timeAgo="Today 5:00 pm"
        comment="Great dude..!"
      />
            </ApprovalCard>
            <ApprovalCard>

      <CommentDetail
        author="jane"
        timeAgo="Yesterday 2:00 am"
        comment="Nice blog post!"
      />
            </ApprovalCard>

    </div>
  );
}
