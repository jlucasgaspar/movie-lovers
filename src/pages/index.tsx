import { useRouter } from 'next/router';

export default function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <Button to="/ja-sei" text="Já sei" />
      <Button to="/nao-sei" text="Não sei" />
    </div>
  );
}

function Button(props: { to: string; text: string }) {
  const { push } = useRouter();

  return (
    <button
      style={{ width: '50%', height: 200 }}
      onClick={() => push(props.to)}
    >
      {props.text}
    </button>
  );
}