 import Link from 'next/link';

 const AboutPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">About</h1>
      <Link href="/" className="text-4xl text-[#24292e] font-bold">back</Link>
    </div>
  );
}

export default AboutPage;