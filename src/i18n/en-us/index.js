import auth from "@/i18n/en-us/auth";
import account from "@/i18n/en-us/account";
import filter from "@/i18n/en-us/filter";
export default {
  header: {
    menu: [
      {
        name: 'Women',
        path: '/category/women'
      },
      {
        name: 'Men',
        path: '/category/men'
      },
      {
        name: 'Girls',
        path: '/category/girls'
      },
      {
        name: 'Boys',
        path: '/category/boys'
      },
      {
        name: 'Sale',
        path: '/category/sale'
      },
    ],
    inputSearch: {
      placeholder: 'Search for products...'
    },
    preHeader: {
      available: 'Available 24/7 at ',
      contact: '(405) 555-0128',
      menu: [
        {
          name: 'Delivery & returns',
          path: '/'
        },
        {
          name: 'Track order',
          path: '/'
        },
        {
          name: 'Blog',
          path: '/'
        },
        {
          name: 'Contacts',
          path: '/'
        }
      ],
      currency: 'ENG/$',
      logIn: 'Log in / Register'
    },
    specialOffers: {
      slides: [
        {
          description: 'Up to 70% Off. ',
          linkName: 'Shop our latest sale styles',
          path: '/'
        },
        {
          description: 'Up to 60% Off. ',
          linkName: 'Shop our latest sale styles',
          path: '/'
        }
      ]
    },
    mobile: {
      catalog: 'Catalog'
    },
    favorites: 'Favorites',
    cart: 'Orders'
  },
  menuDropdown: {
    specialOffers: [
      {
        linkName: 'New collection',
        path: '/'
      },
      {
        linkName: 'Best Sellers',
        path: '/'
      },
      {
        linkName: 'Plus Size',
        path: '/'
      },
      {
        linkName: 'Sale up to 70%',
        path: '/',
        color: 'red'
      },
    ],
    categories: [
      {
        title: 'CLOTHES',
        list: [
          {
            linkName: 'Coats',
            path: '/category/women/clothes?filter=coats'
          },
          {
            linkName: 'Jackets',
            path: '/'
          },
          {
            linkName: 'Suits',
            path: '/'
          },
          {
            linkName: 'Dresses ',
            path: '/'
          },
          {
            linkName: 'Cardigans & sweaters',
            path: '/'
          },
          {
            linkName: 'Cardigans & sweaters',
            path: '/'
          },
          {
            linkName: 'Dresses ',
            path: '/'
          },
          {
            linkName: 'Cardigans & sweaters',
            path: '/'
          },
          {
            linkName: 'Cardigans & sweaters',
            path: '/'
          }
        ]
      },
      {
        title: 'SHOES',
        list: [
          {
            linkName: 'Boots',
            path: '/'
          },
          {
            linkName: 'Flat shoes',
            path: '/'
          },
          {
            linkName: 'Heels',
            path: '/'
          },
          {
            linkName: 'Sandals ',
            path: '/'
          },
          {
            linkName: 'Mules',
            path: '/'
          }
        ]
      },
      {
        title: 'ACCESSORIES',
        list: [
          {
            linkName: 'Bags & bagpacks',
            path: '/'
          },
          {
            linkName: 'Hats & scarves',
            path: '/'
          },
          {
            linkName: 'Hair accessories',
            path: '/'
          },
          {
            linkName: 'Belts ',
            path: '/'
          },
          {
            linkName: 'Jewellery',
            path: '/'
          }
        ]
      }
    ],
    banner: {
      text: 'Back to school. Sale up to 50%',
      button: 'See offers'
    }
  },
  mainBanner: {
    slides: [
      {
        title: 'Menswear 2021',
        preTitle: 'New collection',
        banner: 'main-banner.png',
        links: [
          {
            labelLink: 'Shop sale',
            path: '/',
            outline: true,
            solid: false
          },
          {
            labelLink: 'Shop the menswear',
            path: '/',
            outline: false,
            solid: true
          }
        ]
      },
      {
        title: 'Menswear 2022',
        preTitle: 'New collection',
        banner: 'main-banner1.png',
        links: [
          {
            labelLink: 'Shop sale',
            path: '/',
            outline: true,
            solid: false
          },
          {
            labelLink: 'Shop the menswear',
            path: '/',
            outline: false,
            solid: true
          }
        ]
      },
      {
        title: 'Menswear 2023',
        preTitle: 'New collection',
        banner: 'main-banner.png',
        links: [
          {
            labelLink: 'Shop sale',
            path: '/',
            outline: true,
            solid: false
          },
          {
            labelLink: 'Shop the menswear',
            path: '/',
            outline: false,
            solid: true
          }
        ]
      }
    ]
  },
  topCategories: [
    {
      image: 'womens.png',
      label: 'Women’s',
      path: '/'
    },
    {
      image: 'mens.png',
      label: 'Men’s',
      path: '/'
    },
    {
      image: 'kids.png',
      label: 'Kids’',
      path: '/'
    }
  ],
  newArrivals: {
    title: 'New arrivals',
    description: 'Check out our latest arrivals for the upcoming season',
    descriptionLink: {
      name: 'See the collection here',
      path: '/'
    }
  },
  trendingNow: {
    title: 'Trending now',
    button: {
      name: 'Explore top sales',
      path: '/'
    }
  },
  saleUp: {
    title: 'Sale up to 70%',
    button: {
      name: 'See all sale products',
      path: '/'
    }
  },
  formSubscribe: {
    title: 'Subscribe for updates',
    description: 'Subscribe for exclusive early sale access and new arrivals.',
    params: [
      {
        name: 'Women'
      },
      {
        name: 'Men'
      },
      {
        name: 'Girls'
      },
      {
        name: 'Boys'
      }
    ],
    placeholder: 'Your working email',
    button: 'Subscribe',
    agree: 'I agree to receive communications from Createx Store.'
  },
  footer: {
    menu: [
      {
        title: 'HELP',
        nav: [
          {
            name: 'Delivery & returns',
            path: '/'
          },
          {
            name: 'FAQ',
            path: '/'
          },
          {
            name: 'Track order',
            path: '/'
          },
          {
            name: 'Contacts',
            path: '/'
          },
          {
            name: 'Blog',
            path: '/'
          }
        ]
      },
      {
        title: 'Shop',
        nav: [
          {
            name: 'New arrivals',
            path: '/'
          },
          {
            name: 'Trending now',
            path: '/'
          },
          {
            name: 'Sales',
            path: '/'
          },
          {
            name: 'Brands',
            path: '/'
          }
        ]
      }
    ],
    copyright: '© All rights reserved.',
    scroll: 'Go to top',
    getInTouch: {
      title: 'Get in touch',
      call: 'Call: ',
      callValue: '(405) 555-0128',
      email: 'Email: ',
      emailValue: 'turdiev.dev@gmail.com',
      socials: [
        {
          name: 'facebook',
          path: '/'
        },
        {
          name: 'instagram',
          path: '/'
        },
        {
          name: 'twitter',
          path: '/'
        },
        {
          name: 'youtube',
          path: '/'
        },
        {
          name: 'pinterest',
          path: '/'
        }
      ]
    }
  },

  auth,
  account,
  filter,
}
  