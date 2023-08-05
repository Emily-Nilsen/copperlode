import Link from 'next/link';
import Image from 'next/image';
import slugify from 'slugify';
import posts from '../../assets/posts';

export function BlogSection(props) {
  const slugify = require('slugify');

  return (
    <div className="py-24 bg-gray-950 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Copperlode Chronicles
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">
            Keep up with the latest news and upcoming events from Copperlode
            Brewery Co.
          </p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 auto-rows-fr sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative flex flex-col justify-end px-8 pb-8 overflow-hidden isolate rounded-2xl bg-gray-950 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                src={post.imageUrl}
                alt=""
                fill
                className="absolute inset-0 object-cover w-full h-full -z-10"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-950 via-gray-950/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-950/10" />

              <div className="flex flex-wrap items-center overflow-hidden text-sm leading-6 text-gray-300 gap-y-1">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white line-clamp-2">
                <Link href={`/blog/${slugify(post.title)}`}>
                  <span className="absolute inset-0" />
                  {post.subtitle}
                  {post.title}
                </Link>
              </h3>
            </article>
          ))}
        </div>
        <div className="flex mt-10">
          <Link
            href="/blog"
            className="text-sm font-semibold leading-6 text-copper"
          >
            Visit our blog <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
