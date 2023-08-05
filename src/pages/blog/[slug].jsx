import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import posts from '../../../assets/posts';
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid';

const jobOpenings = [
  {
    id: 1,
    role: 'Full-time designer',
    href: '#',
    description:
      'Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.',
    salary: '$75,000 USD',
    location: 'San Francisco, CA',
  },
  {
    id: 2,
    role: 'Laravel developer',
    href: '#',
    description:
      'Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.',
    salary: '$125,000 USD',
    location: 'San Francisco, CA',
  },
  {
    id: 3,
    role: 'React Native developer',
    href: '#',
    description:
      'Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.',
    salary: '$105,000 USD',
    location: 'San Francisco, CA',
  },
];

export const getStaticProps = async ({ params }) => {
  const slugify = require('slugify');
  const postList = posts.filter((post) => slugify(post.title) === params.slug);
  return {
    props: {
      post: postList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const slugify = require('slugify');
  const paths = posts.map((post) => {
    return {
      params: { slug: slugify(post.title) },
    };
  });

  return { paths, fallback: false };
};

posts.map((post) => ({}));

export default function BlogPost({ post }) {
  const router = useRouter();

  return (
    <section className="py-32 sm:pt-52 bg-gray-950">
      {/* top section */}
      <div className="overflow-hidden ">
        <div className="px-6 mx-auto max-w-7xl lg:flex lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <p className="mb-2 text-xl leading-8 text-copper">
                {post.subtitle}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {post.title}
              </h2>
              <p className="mt-2 leading-8 text-copper">{post.date}</p>
              <p className="mt-6 text-xl leading-8 text-gray-300">
                {post.description}
              </p>
              <p className="mt-6 text-base leading-7 text-gray-300">
                {post.content[0].paragraph}
              </p>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="flex-auto w-0 lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <Image
                  unoptimized
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  width={600}
                  height={450}
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="flex self-end justify-end flex-none order-first w-64 lg:w-auto">
                  <Image
                    unoptimized
                    src={post.centralImages[0].image}
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    width={600}
                    height={450}
                  />
                </div>
                <div className="flex justify-end flex-auto w-96 lg:w-auto lg:flex-none">
                  <div>
                    <Image
                      unoptimized
                      src={post.centralImages[1].image}
                      alt=""
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                      width={600}
                      height={450}
                    />
                    <figcaption className="flex justify-end mt-4 text-sm leading-6 text-gray-400 gap-x-2">
                      <InformationCircleIcon
                        className="mt-0.5 h-5 w-5 flex-none text-copper"
                        aria-hidden="true"
                      />
                      {post.figCaptionImage2}
                    </figcaption>
                  </div>
                </div>

                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <Image
                    unoptimized
                    src={post.centralImages[2].image}
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    width={600}
                    height={450}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* middle section */}
      <div className="pt-32 overflow-hidden">
        <div className="px-6 mx-auto max-w-7xl lg:flex lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="flex justify-end flex-auto w-96 lg:w-auto lg:flex-none">
                <div>
                  <Image
                    unoptimized
                    src={post.centralImages[3].image}
                    alt=""
                    width={600}
                    height={450}
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                  <figcaption className="flex justify-end mt-4 mb-4 text-sm leading-6 text-gray-400 lg:mb-0 gap-x-2">
                    <InformationCircleIcon
                      className="mt-0.5 h-5 w-5 flex-none text-copper"
                      aria-hidden="true"
                    />
                    {post.figCaptionImage4}
                  </figcaption>
                </div>
              </div>
              <div className="lg:col-start-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {post.subheading}
                </h2>
                <p className="mt-6 text-xl leading-8 text-gray-300">
                  {post.content[1].paragraph}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-300">
                  {/* Dynamically display the remaining paragraphs */}
                  {post.content.slice(2).map((item, index) => (
                    <p className="mt-6" key={index}>
                      {item.paragraph}
                    </p>
                  ))}
                </p>
                <div className="flex justify-end mt-10 mb-6 lg:mb-0">
                  <Link
                    href="/blog"
                    className="rounded-md bg-copper px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-copper/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper transition duration-300 ease-in-out"
                  >
                    Back to the blog <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="flex self-end justify-end flex-none order-last w-64 lg:w-auto">
                  <Image
                    unoptimized
                    src={post.centralImages[4].image}
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    width={600}
                    height={450}
                  />
                </div>
                <div className="flex justify-end flex-auto w-96 lg:w-auto lg:flex-none">
                  <div>
                    <Image
                      unoptimized
                      src={post.centralImages[5].image}
                      alt=""
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                      width={600}
                      height={450}
                    />
                    <figcaption className="flex justify-end mt-4 text-sm leading-6 text-gray-400 gap-x-2">
                      <InformationCircleIcon
                        className="mt-0.5 h-5 w-5 flex-none text-copper"
                        aria-hidden="true"
                      />
                      {post.figCaptionImage6}
                    </figcaption>
                  </div>
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <Image
                    unoptimized
                    src={post.centralImages[6].image}
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    width={600}
                    height={450}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
