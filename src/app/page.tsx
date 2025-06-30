 const Page = () => {
  const key = process.env.TEST_SECRET_KEY
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Hello World!</h1>
      <p className="mt-4 text-lg">環境変数の値：{key}</p>
    </div>
  );
}

export default Page;