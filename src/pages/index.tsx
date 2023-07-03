import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <div className="grid place-items-center h-screen">
      <button onClick={() => router.push('/_dev')}>Go to dev page</button>
    </div>
  );
}
