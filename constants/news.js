const news = [
  {
    id: 1,
    title: 'Chicken Lettuce Wraps with Lime Drench',
    slug: 'article-1',
    preview: 'Amet minim mollit non deserunt ullamco.',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor pellentesque et nibh tincidunt bibendum. Sed in tellus in feugiat dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed pellentesque posuere orci sit sed. Gravida facilisis sollicitudin donec vitae quam ut nibh enim.Enim semper nulla quis est. Est scelerisque malesuada maecenas augue elementum integer. Sollicitudin augue in libero eu neque augue diam lectus laoreet. Viverra amet, in massa integer tincidunt ullamcorper. Accumsan massa consequat amet cursus condimentum consectetur. Enim sem cursus viverra at imperdiet.',
    image: '/images/news/news-1.png',
    feature: true,
  },
  {
    id: 2,
    title: 'Chicken Lettuce Wraps with Lime Drench',
    slug: 'article-2',
    preview: 'Amet minim mollit non deserunt ullamco.',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor pellentesque et nibh tincidunt bibendum. Sed in tellus in feugiat dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed pellentesque posuere orci sit sed. Gravida facilisis sollicitudin donec vitae quam ut nibh enim.Enim semper nulla quis est. Est scelerisque malesuada maecenas augue elementum integer. Sollicitudin augue in libero eu neque augue diam lectus laoreet. Viverra amet, in massa integer tincidunt ullamcorper. Accumsan massa consequat amet cursus condimentum consectetur. Enim sem cursus viverra at imperdiet.',
    image: '/images/news/news-2.png',
    feature: true,
  },
  {
    id: 3,
    title: 'Chicken Lettuce Wraps with Lime Drench',
    slug: 'article-3',
    preview: 'Amet minim mollit non deserunt ullamco.',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor pellentesque et nibh tincidunt bibendum. Sed in tellus in feugiat dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed pellentesque posuere orci sit sed. Gravida facilisis sollicitudin donec vitae quam ut nibh enim.Enim semper nulla quis est. Est scelerisque malesuada maecenas augue elementum integer. Sollicitudin augue in libero eu neque augue diam lectus laoreet. Viverra amet, in massa integer tincidunt ullamcorper. Accumsan massa consequat amet cursus condimentum consectetur. Enim sem cursus viverra at imperdiet.',
    image: '/images/news/news-3.png',
    feature: true,
  },
  {
    id: 4,
    title: 'Chicken Lettuce Wraps with Lime Drench',
    slug: 'article-4',
    preview: 'Amet minim mollit non deserunt ullamco.',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor pellentesque et nibh tincidunt bibendum. Sed in tellus in feugiat dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed pellentesque posuere orci sit sed. Gravida facilisis sollicitudin donec vitae quam ut nibh enim.Enim semper nulla quis est. Est scelerisque malesuada maecenas augue elementum integer. Sollicitudin augue in libero eu neque augue diam lectus laoreet. Viverra amet, in massa integer tincidunt ullamcorper. Accumsan massa consequat amet cursus condimentum consectetur. Enim sem cursus viverra at imperdiet.',
    image: '/images/news/news-4.png',
    feature: false,
  },
  {
    id: 5,
    title: 'Chicken Lettuce Wraps with Lime Drench',
    slug: 'article-5',
    preview: 'Amet minim mollit non deserunt ullamco.',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor pellentesque et nibh tincidunt bibendum. Sed in tellus in feugiat dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed pellentesque posuere orci sit sed. Gravida facilisis sollicitudin donec vitae quam ut nibh enim.Enim semper nulla quis est. Est scelerisque malesuada maecenas augue elementum integer. Sollicitudin augue in libero eu neque augue diam lectus laoreet. Viverra amet, in massa integer tincidunt ullamcorper. Accumsan massa consequat amet cursus condimentum consectetur. Enim sem cursus viverra at imperdiet.',
    image: '/images/news/news-5.png',
    feature: false,
  },
  {
    id: 6,
    title: 'Chicken Lettuce Wraps with Lime Drench',
    slug: 'article-6',
    preview: 'Amet minim mollit non deserunt ullamco.',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor pellentesque et nibh tincidunt bibendum. Sed in tellus in feugiat dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed pellentesque posuere orci sit sed. Gravida facilisis sollicitudin donec vitae quam ut nibh enim.Enim semper nulla quis est. Est scelerisque malesuada maecenas augue elementum integer. Sollicitudin augue in libero eu neque augue diam lectus laoreet. Viverra amet, in massa integer tincidunt ullamcorper. Accumsan massa consequat amet cursus condimentum consectetur. Enim sem cursus viverra at imperdiet.',
    image: '/images/news/news-6.png',
    feature: false,
  },
  {
    id: 7,
    title: 'Chicken Lettuce Wraps with Lime Drench',
    slug: 'article-7',
    preview: 'Amet minim mollit non deserunt ullamco.',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor pellentesque et nibh tincidunt bibendum. Sed in tellus in feugiat dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed pellentesque posuere orci sit sed. Gravida facilisis sollicitudin donec vitae quam ut nibh enim.Enim semper nulla quis est. Est scelerisque malesuada maecenas augue elementum integer. Sollicitudin augue in libero eu neque augue diam lectus laoreet. Viverra amet, in massa integer tincidunt ullamcorper. Accumsan massa consequat amet cursus condimentum consectetur. Enim sem cursus viverra at imperdiet.',
    image: '/images/news/news-7.png',
    feature: false,
  },
  {
    id: 8,
    title: 'Chicken Lettuce Wraps with Lime Drench',
    slug: 'article-8',
    preview: 'Amet minim mollit non deserunt ullamco.',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor pellentesque et nibh tincidunt bibendum. Sed in tellus in feugiat dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed pellentesque posuere orci sit sed. Gravida facilisis sollicitudin donec vitae quam ut nibh enim.Enim semper nulla quis est. Est scelerisque malesuada maecenas augue elementum integer. Sollicitudin augue in libero eu neque augue diam lectus laoreet. Viverra amet, in massa integer tincidunt ullamcorper. Accumsan massa consequat amet cursus condimentum consectetur. Enim sem cursus viverra at imperdiet.',
    image: '/images/news/news-8.png',
    feature: false,
  },
  {
    id: 9,
    title: 'Chicken Lettuce Wraps with Lime Drench',
    slug: 'article-9',
    preview: 'Amet minim mollit non deserunt ullamco.',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor pellentesque et nibh tincidunt bibendum. Sed in tellus in feugiat dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed pellentesque posuere orci sit sed. Gravida facilisis sollicitudin donec vitae quam ut nibh enim.Enim semper nulla quis est. Est scelerisque malesuada maecenas augue elementum integer. Sollicitudin augue in libero eu neque augue diam lectus laoreet. Viverra amet, in massa integer tincidunt ullamcorper. Accumsan massa consequat amet cursus condimentum consectetur. Enim sem cursus viverra at imperdiet.',
    image: '/images/news/news-9.png',
    feature: false,
  },
];

export default news;