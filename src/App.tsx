import React from 'react';
import useSWR from 'swr';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Profile from './components/Profile.tsx';
import About from './components/About.tsx';
import Timeline from './components/Timeline.tsx';
import Jobs from './components/Jobs.tsx';
import Skills from './components/Skills.tsx';
import Pastime from './components/Pastime.tsx';
import Products from './components/Products.tsx';
import Works from './components/Works.tsx';
import Links from './components/Links.tsx';

function App() {
  const { data, error, isLoading } = useSWR(import.meta.env.VITE_API_URL);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const body = data.page.revision.body;
  const sharpSplit = body.split('##');

  return (
    <div className="App h-screen">
      <header className="bg-Main fixed w-full z-10">
        <div className="px-6 py-4 items-center justify-between sm:flex-wrap sm:flex">
          <h1 className="text-lg sm:text-xl text-Headline text-center hidden sm:block">
            ポートフォリオっぽい、なにか。
          </h1>
          <div className="flex justify-center sm:py-0">
            <nav className="overflow-x-auto space-x-4 sm:space-x-8">
              <a href="#home" className="text-SubHeadline">
                Home
              </a>
              <a href="#about" className="text-SubHeadline">
                About
              </a>
              <a href="#timeline" className="text-SubHeadline">
                Timeline
              </a>
              <a href="#jobs" className="text-SubHeadline">
                Jobs
              </a>
              <a href="#skills" className="text-SubHeadline">
                Skills
              </a>
              <a href="#pastime" className="text-SubHeadline">
                Pastime
              </a>
              <a href="#products" className="text-SubHeadline">
                Products
              </a>
              <a href="#works" className="text-SubHeadline">
                Works
              </a>
              <a href="#links" className="text-SubHeadline">
                Links
              </a>
            </nav>
          </div>
        </div>
      </header>
      <main className="pt-14">
        {sharpSplit.map(
          (value: string, index: number) =>
            index !== 0 && (
              <div
                key={index}
                className={`markdown ${
                  index % 2 === 0 ? 'bg-Background' : 'bg-Main'
                }`}
              >
                {value.includes('Profile') && (
                  <Profile id="home">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {value}
                    </ReactMarkdown>
                  </Profile>
                )}
                {value.includes('About') && (
                  <About id="about">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {value}
                    </ReactMarkdown>
                  </About>
                )}
                {value.includes('Timeline') && (
                  <Timeline id="timeline">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {value}
                    </ReactMarkdown>
                  </Timeline>
                )}
                {value.includes('Jobs') && (
                  <Jobs id="jobs">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {value}
                    </ReactMarkdown>
                  </Jobs>
                )}
                {value.includes('Skills') && (
                  <Skills id="skills">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {value}
                    </ReactMarkdown>
                  </Skills>
                )}
                {value.includes('Pastime') && (
                  <Pastime id="pastime">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {value}
                    </ReactMarkdown>
                  </Pastime>
                )}
                {value.includes('Products') && (
                  <Products id="products">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {value}
                    </ReactMarkdown>
                  </Products>
                )}
                {value.includes('Works') && (
                  <Works id="works">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {value}
                    </ReactMarkdown>
                  </Works>
                )}
                {value.includes('Links') && (
                  <Links id="links">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {value}
                    </ReactMarkdown>
                  </Links>
                )}
              </div>
            )
        )}
      </main>
      <footer className="bg-Main text-center">
        <p>&copy; 2020</p>
      </footer>
    </div>
  );
}

export default App;
