
interface ProgressBarProps {
  like: number;
  dislike: number;
}

export function ProgressBar({ like, dislike }: ProgressBarProps) {
  const progressoStyle = {
    width: `${like / (like + dislike) * 100}%`,
    backgroundColor: "green",
  };

  return (
    <div className="container-progresso">
      <div className="progresso" style={progressoStyle}></div>
    </div>
  );
}
