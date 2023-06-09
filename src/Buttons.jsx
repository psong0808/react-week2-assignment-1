import Button from './Button';

export default function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button number={i} key={i} onClick={onClick} />
      ))}
    </p>
  );
}
