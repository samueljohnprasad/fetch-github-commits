export type RefresherProps = {
  handleClick: () => void;
  seconds: number;
  resetTimer: () => void;
};
export const Refresher: React.FC<RefresherProps> = ({
  handleClick,
  seconds,
  resetTimer,
}) => {
  const onClick = () => {
    handleClick();
    resetTimer();
  };
  return <button onClick={onClick}>Refresh({seconds})</button>;
};
