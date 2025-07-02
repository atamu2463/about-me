// app/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-[#24292e]">
      <header className="max-w-[960px] flex justify-between items-center h-[110px] mx-auto px-[4%] max-[414px]:flex-col max-[414px]:h-auto max-[414px]:py-4">
        <h1 className="leading-[1px]">
          <Link href="/" className="block">
            <Image
              src="/header.png"
              alt="Asahi Tamura"
              width={200}
              height={40}
              className="h-auto w-auto"
              priority
            />
          </Link>
        </h1>
        <nav>
          <ul className="flex py-[10px] max-[414px]:flex-col max-[414px]:items-center">
            <li className="flex text-[0.9rem] ml-[30px] max-[414px]:ml-0">
              <Link href="#about" className="text-[#24292e] hover:opacity-70">About</Link>
            </li>
            <li className="flex text-[0.9rem] ml-[30px] max-[414px]:ml-0">
              <Link href="#works" className="text-[#24292e] hover:opacity-70">Works</Link>
            </li>
            <li className="flex text-[0.9rem] ml-[30px] max-[414px]:ml-0">
              <Link href="#contact" className="text-[#24292e] hover:opacity-70">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* メインビジュアル */}
        <div className="mb-[80px] max-[414px]:mb-[40px]">
          <Image
            src="/mainvisual.png"
            alt="mainvisual"
            width={1920}
            height={420}
            className="w-full max-w-[1920px] h-[420px] object-cover max-[414px]:h-[160px]"
            priority
          />
        </div>

        {/* Aboutセクション */}
        <section id="about" className="max-w-[960px] mx-auto mb-[130px] text-[0.9rem] px-[4%] max-[414px]:mb-[60px]">
          <h2 className="text-[1.5rem] text-center mb-[65px]">About</h2>
          <h3 className="text-justify">Asahi Tamura</h3>
          <ul className="mb-[30px] text-justify">
            <li>出身地：千葉県</li>
            <li>趣味: 散歩・コーヒー・銭湯・小旅行・カメラ</li>
            <li>学習中の言語: HTML, CSS, JavaScript, TypeScript, React/Next.js</li>
          </ul>
        </section>

        {/* Worksセクション */}
        <section id="works" className="max-w-[960px] mx-auto mb-[130px] text-[0.9rem] px-[4%]">
          <h2 className="text-[1.5rem] text-center mb-[65px]">Works</h2>
          <div className="flex flex-wrap justify-around gap-[30px] mb-[50px] max-[414px]:flex-col max-[414px]:items-center">
            <div className="flex flex-col items-center max-w-[200px]">
              <Image src="/quiz.png" alt="クイズアプリ" width={200} height={120} className="mb-2"/>
              <Link href="https://asa-cording.github.io/HuntingQuiz/" target="_blank" rel="noopener noreferrer">
                <p className="text-center">クイズアプリ<br />「いすみジビエクイズ」</p>
              </Link>
            </div>
            <div className="flex flex-col items-center max-w-[200px]">
              <Image src="/maps.png" alt="Webマップ" width={200} height={120} className="mb-2"/>
              <Link href="https://github.com/asa-cording/webmap" target="_blank" rel="noopener noreferrer">
                <p className="text-center">Webマップ</p>
              </Link>
            </div>
            <div className="flex flex-col items-center max-w-[200px]">
              <Image src="/js.png" alt="JavaScript" width={200} height={120} className="mb-2"/>
              <Link href="https://github.com/asa-cording/next_website" target="_blank" rel="noopener noreferrer">
                <p className="text-center">フロントエンド学習</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Contactセクション */}
        <section id="contact" className="max-w-[960px] mx-auto mb-[130px] text-[0.9rem] px-[4%]">
          <h2 className="text-[1.5rem] text-center mb-[65px]">Contact</h2>
          <p>
            お問い合わせは
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScHalKNJ_-XhtPaJY66D0BwXK10Ogd0zJrfeMTvhQqF6K6Y3g/viewform" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Googleフォーム
            </Link>
            よりお願いします。
          </p>
        </section>
      </main>

      <footer className="bg-[#24292e] text-white text-[0.5rem] py-[10px] px-[20px] text-center">
        <p>&copy;2024 Asahi Tamura</p>
      </footer>
    </div>
  );
}