import React from 'react';
import useSWR from 'swr';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import Profile from './components/Profile.tsx';
import About from './components/About.tsx';
import Timeline from './components/Timeline.tsx';
import Jobs from './components/Jobs.tsx';
import Skills from './components/Skills.tsx';
import Pastime from './components/Pastime.tsx';
import Products from './components/Products.tsx';
import Works from './components/Works.tsx';
import Links from './components/Links.tsx';

const sections = [
  { key: 'Profile', component: Profile, id: 'home' },
  { key: 'About', component: About, id: 'about' },
  { key: 'Timeline', component: Timeline, id: 'timeline' },
  { key: 'Jobs', component: Jobs, id: 'jobs' },
  { key: 'Skills', component: Skills, id: 'skills' },
  { key: 'Pastime', component: Pastime, id: 'pastime' },
  { key: 'Products', component: Products, id: 'products' },
  { key: 'Works', component: Works, id: 'works' },
  { key: 'Links', component: Links, id: 'links' },
];

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
              {sections.map((section, index) => (
                <a
                  key={index}
                  href={`#${section.id}`}
                  className="text-SubHeadline"
                >
                  {section.key}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <main className="pt-14">
        {sharpSplit.map((value: string, index: number) => {
          if (index === 0) return;

          const even = index % 2 === 0;
          const section = sections.find(section => value.includes(section.key));
          const Component = section?.component || React.Fragment;

          if (section) {
            return (
              <section
                key={index}
                className={`markdown ${even ? 'bg-Background' : 'bg-Main'}`}
              >
                <Component id={section.id}>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                  >
                    {value}
                  </ReactMarkdown>
                </Component>
              </section>
            );
          }
        })}
      </main>
      <footer className="bg-Background text-center">
        <p>&copy; 2023 - Copyright Yumekiti.</p>
      </footer>
    </div>
  );
}

export default App;
