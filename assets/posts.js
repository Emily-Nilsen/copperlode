// Event Highlights: This category can cover articles about past and upcoming events hosted by the brewery, including beer festivals, live music performances, themed parties, and community gatherings.

// Brewery News & Updates: In this category, the brewery can share announcements, new beer releases, updates on brewery expansions or renovations, and any other news related to Copperlode Brewery Co.

// Meet the Brewers: These articles can introduce readers to the passionate individuals behind the brewing magic. It could include interviews with the brewers, stories about their inspirations, and their unique approaches to crafting exceptional beers.

// Beer & Food Pairing Guides: Copperlode Brewery Co. can offer articles that guide readers on pairing their craft beers with various food options, from savory dishes to delectable desserts, to enhance the culinary experience.

// Local Community Spotlights: This category can feature articles that showcase local businesses, artists, musicians, and individuals who have collaborated with the brewery or contributed to the Far North Queensland community in some meaningful way.

// Brewing Techniques & Tips: Copperlode Brewery Co. can share insights into their brewing process, different beer styles, and offer homebrewing tips for enthusiasts looking to try their hand at crafting beer.

// Behind the Scenes: These articles can take readers on a virtual tour behind the scenes of the brewery, highlighting the brewhouse, equipment, and the meticulous process that goes into creating their signature craft beers.

const posts = [
  {
    id: 3,
    subtitle: 'Upcoming at Copperlode Brewery Co.: ',
    title: 'Music and Warm Welcomes!',
    description:
      'We recently had the honour of hosting a wine-tasting event featuring exquisite wines from Sirromet Winery and Ballandean Estate Wines with wine connoisseur Wayne Tuni. Thanks for joining us, Ralph and Helen!',
    subheading: 'Big Pups',
    content: [
      {
        paragraph:
          'Secondly, we had the pleasure of chatting with Dave and Inkie from the local radio station "Star 102.7," sharing our passion for craft beer and the warm welcome we have in store for everyone.',
      },
      {
        paragraph:
          'And last but not least, once we officially open our doors, we have the talented Big Pups lined up to provide an unforgettable musical experience. ',
      },
      {
        paragraph:
          'Currently on tour, their tunes will soon resonate through the walls of Copperlode Brewery Co. We can’t wait to share our craft beers with all of you.',
      },
    ],
    imageUrl: '/images/posts/img_01.webp',
    figCaptionImage2: 'Wine connoisseur Wayne Tuni',
    figCaptionImage4: 'Copperlode Brewery Co. proudly sponsors Big Pups',
    // figCaptionImage6: 'Visiting our local radio station "Star 102.7"',
    centralImages: [
      {
        image: '/images/posts/img_02.webp',
      },
      {
        image: '/images/posts/img_03.webp',
      },
      {
        image: '/images/posts/img_04.webp',
      },
      {
        image: '/images/posts/img_05.webp',
      },
      {
        image: '/images/posts/img_06.webp',
      },
      {
        image: '/images/posts/img_07.webp',
      },
      {
        image: '/images/posts/img_08.webp',
      },
    ],
    date: 'Aug 7, 2023',
    datetime: '2023-08-07',
    category: { title: 'Event Highlights' },
    author: {
      name: 'Morgan Hind',
      role: 'Co-Founder / Head Brewer / CEO',
      imageUrl: '/images/posts/Morgan.webp',
    },
  },
  {
    id: 2,
    subtitle: 'A Bar Top with a Story: ',
    title: 'Craftsmanship and Nature Meet at Copperlode Brewery Co.',
    description:
      'Our bar top at Copperlode Brewery Co. is a beautiful representation of our rainforest home, made from timber discs and stones.',
    subheading: 'Railway Spike Taps',
    content: [
      // {
      //   paragraph:
      //     'The water that flows over these stones is incorporated into our brewing process, infusing a unique natural essence to the brew.',
      // },
      {
        paragraph:
          'In addition to these raw elements, our bar top includes Army and Navy badges generously donated by the 51st Battalion and trinkets from our investors. ',
      },
      {
        paragraph:
          'Our local blacksmith skillfully forged our bar taps from railway spikes to pay homage to our heritage and the craftsmanship that defines us.',
      },
      {
        paragraph:
          'Beyond being a place to enjoy our craft beers, our bar symbolises our pride in our local connections and the heart of Copperlode Brewery Co.',
      },
    ],
    imageUrl: '/images/posts/img_09.webp',
    figCaptionImage2: 'Our bar top in the making',
    figCaptionImage4: 'Badges donated by the 51st Battalion',
    figCaptionImage6: 'Revitalizing railway history with expert craftsmanship',
    centralImages: [
      {
        image: '/images/posts/img_10.webp',
      },
      {
        image: '/images/posts/img_11.webp',
      },
      {
        image: '/images/posts/img_12.webp',
      },
      {
        image: '/images/posts/img_13.webp',
      },
      {
        image: '/images/posts/img_14.webp',
      },
      {
        image: '/images/posts/img_15.webp',
      },
      {
        image: '/images/posts/img_16.webp',
      },
    ],
    date: 'Aug 5, 2023',
    datetime: '2023-08-05',
    category: { title: 'Behind the Scenes' },
    author: {
      name: 'Morgan Hind',
      role: 'Co-Founder / Head Brewer / CEO',
      imageUrl: '/images/posts/Morgan.webp',
    },
  },
  {
    id: 1,
    subtitle: 'Brewing Dreams: ',
    title: 'The Birth of Copperlode Brewery Co.',
    description:
      'In the heart of Far North Queensland, Copperlode Brewery Co. is taking shape. Our local tradies are doing an outstanding job putting everything together, from the brewhouse and bar bench to the fermenters and coolroom.',
    subheading: 'Copperlode’s Grand Opening',
    content: [
      {
        paragraph:
          'Behind the scenes, some talented locals have all played a part in making Copperlode Brewery Co. what it is. Trent and his team at ACCU Cut have done an impressive job shaping the foundation, while Gypsy and Ralph have painted and sealed the brewhouse floor.',
      },
      {
        paragraph:
          'And let’s not forget Jake from Well-Brewd, who helped design and commission our impressive 1500-litre brew system that will bring the flavours of the rainforest to life!',
      },
      {
        paragraph:
          'We are genuinely excited about our grand opening and pleased with how far we have come. We cannot wait to welcome everyone to our tavern, where we will raise a glass to our top-notch community and the craftsmanship that made Copperlode Brewery Co. a reality.',
      },
    ],
    imageUrl: '/images/posts/img_17.webp',
    figCaptionImage2: 'Gypsy and Ralph',
    figCaptionImage4: 'On right: Jake from Well-Brewd',
    figCaptionImage6: '1500-litre brew system',
    centralImages: [
      {
        image: '/images/posts/img_18.webp',
      },
      {
        image: '/images/posts/img_19.webp',
      },
      {
        image: '/images/posts/img_20.webp',
      },
      {
        image: '/images/posts/img_21.webp',
      },
      {
        image: '/images/posts/img_22.webp',
      },
      {
        image: '/images/posts/img_23.webp',
      },
      {
        image: '/images/posts/img_24.webp',
      },
    ],
    date: 'Aug 2, 2023',
    datetime: '2023-08-02',
    category: { title: 'Behind the Scenes' },
    author: {
      name: 'Morgan Hind',
      role: 'Co-Founder / Head Brewer / CEO',

      imageUrl: '/images/posts/Morgan.webp',
    },
  },
];

export default posts;
