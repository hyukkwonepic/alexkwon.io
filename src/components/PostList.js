import tinytime from 'tinytime';
import Link from 'next/link';
import Head from 'next/head';
import getAllPostPreviews from '@/getAllPostPreviews';
// import twitterCard from '@/img/twitter-card.jpg';
import Header from '@/components/Header';
import SectionContainer from '@/components/SectionContainer';

const posts = getAllPostPreviews();

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}');

export default function PostList() {
  return (
    <>
      <SectionContainer>
        <Header />
      </SectionContainer>
      <SectionContainer>
        <main>
          <Head>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@a_h_kwon" />
            <meta name="twitter:creator" content="@a_h_kwon" />
            <meta name="twitter:title" content="Blog | Alex H. Kwon" />
            <meta
              name="twitter:description"
              content="News content from the Tailwind CSS team."
            />
            {/* <meta
                name="twitter:image"
                content={`https://blog.tailwindcss.com${twitterCard}`}
              /> */}
            <meta property="og:url" content="https://alexkwon.io" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Blog | Alex H. Kwon" />
            <meta
              property="og:description"
              content="Personal blog by Alex Kwon."
            />
            {/* <meta
                property="og:image"
                content={`https://blog.tailwindcss.com${twitterCard}`}
              /> */}
            <title>Blog | Alex H. Kwon</title>
            <meta
              name="description"
              content="News content from the Tailwind CSS team."
            />
          </Head>

          {/* Blog */}
          <div className="divide-y divide-gray-200">
            <div className="pt-6 pb-8 space-y-2 md:space-y-5">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                Blog
              </h1>
              <p className="text-lg text-gray-500">
                All the latest blog posts.
              </p>
            </div>
            <ul className="divide-y divide-gray-200">
              {posts.map(({ link, module: { default: Component, meta } }) => {
                return (
                  <li key={link} className="py-12">
                    <article>
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium text-gray-500">
                          <time dateTime={meta.date}>
                            {postDateTemplate.render(new Date(meta.date))}
                          </time>
                        </dd>
                      </dl>
                      <div className="mt-4 xl:col-span-3">
                        <div>
                          <Link href={link}>
                            <a>
                              <h2 className="text-2xl text-gray-900 font-bold tracking-tight">
                                {meta.title}
                              </h2>
                            </a>
                          </Link>

                          <div className="mt-4 prose max-w-none text-gray-500">
                            <Component />
                          </div>

                          <div className="mt-4 space-x-2">
                            {meta.tags.map((tag) => {
                              return (
                                <Link href={`/tags/${tag}`}>
                                  <a
                                    className="text-base font-medium text-teal-600 hover:text-teal-700"
                                    key={tag}
                                  >
                                    #{tag}
                                  </a>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </main>
      </SectionContainer>
    </>
  );
}
