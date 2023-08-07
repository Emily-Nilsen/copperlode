import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import slugify from 'slugify';
import { useRouter } from 'next/router';
import posts from '../../../assets/posts';

export default function Blog(props) {
  const slugify = require('slugify');

  return (
    <>
      <Head>
        <title>Blog | Brewing Stories and More</title>
        <meta
          name="description"
          content="Stay updated with the latest news, brewing stories, and exciting beer tales from Copperlode Brewery Co."
        />
        <link
          rel="canonical"
          href="https://www.copperlodebrewing.com.au/blog"
          key="canonical"
        />
      </Head>
      <div className="py-24 bg-gray-950 sm:py-32 md:py-48">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:max-w-4xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Copperlode Chronicles
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-300">
              Stay in the loop about Copperlode Brewery Co.’s latest happenings
              and exciting upcoming events.
            </p>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="relative flex flex-col gap-8 isolate lg:flex-row"
                >
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <Image
                      src={post.imageUrl}
                      alt=""
                      fill
                      className="absolute inset-0 object-cover w-full h-full rounded-2xl bg-gray-50 aspect-[16/9] sm:aspect-[2/1] lg:aspect-square"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center text-xs gap-x-4">
                      <time dateTime={post.datetime} className="text-gray-400">
                        {post.date}
                      </time>
                      <div className="relative z-10 rounded-full bg-copper px-3 py-1.5 font-medium text-gray-900">
                        {post.category.title}
                      </div>
                    </div>
                    <div className="relative max-w-xl group">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-300 line-clamp-1">
                        <Link href={`/blog/${slugify(post.title)}`}>
                          <span className="absolute inset-0" />
                          {post.subtitle}
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-300 line-clamp-2">
                        {post.description}
                      </p>
                    </div>
                    <div className="flex pt-6 mt-6 border-t border-gray-900/5">
                      <div className="relative flex items-center gap-x-4">
                        <Image
                          src={post.author.imageUrl}
                          alt=""
                          className="w-10 h-10 border rounded-full bg-copper border-copper/80"
                          width={300}
                          height={300}
                        />
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-white">
                            <div>
                              <span className="absolute inset-0" />
                              {post.author.name}
                            </div>
                          </p>
                          <p className="text-gray-300">{post.author.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
