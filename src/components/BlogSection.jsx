import Link from 'next/link';
import Image from 'next/image';

const posts = [
  {
    id: 3,
    title:
      'A taste of tradition: Celebrating Oktoberfest at Copperlode Brewery Co.',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/blog_post_2_kjtt6m.webp',
    date: 'Jun 16, 2023',
    datetime: '2020-03-16',
    author: {
      name: 'Callan',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 1,
    title: 'From rainforest to pint glass',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Our_Beers_Section_04_jpd7zf.webp',
    date: 'May 12, 2023',
    datetime: '2020-03-16',
    author: {
      name: 'Daigo',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'The ultimate food and beer pairing guide',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/blog_post_1_kxn0ti.webp',
    date: 'Apr 2, 2023',
    datetime: '2020-03-16',
    author: {
      name: 'Dave',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export function BlogSection() {
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
              <img
                src={post.imageUrl}
                alt=""
                className="absolute inset-0 object-cover w-full h-full -z-10"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-950 via-gray-950/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-950/10" />

              <div className="flex flex-wrap items-center overflow-hidden text-sm leading-6 text-gray-300 gap-y-1">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
                {/* <div className="flex items-center -ml-4 gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <img
                      src={post.author.imageUrl}
                      alt=""
                      className="flex-none w-6 h-6 rounded-full bg-white/10"
                    />
                    {post.author.name}
                  </div>
                </div> */}
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
        <div className="flex mt-10">
          <Link
            href="/about-us"
            className="text-sm font-semibold leading-6 text-copper"
          >
            Visit our blog <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
