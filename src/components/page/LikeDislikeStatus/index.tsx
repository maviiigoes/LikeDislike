
interface LikeDislikeStatsProps {
  like: number;
  dislike: number;
}

export function LikeDislikeStats({ like, dislike }: LikeDislikeStatsProps) {
  return (
    <p className="LikeDislike">
      Like: {like} || Dislike: {dislike}
    </p>
  );
}
