## Requirements

Make sure that you have the last stable [NodeJS](https://nodejs.org/en/download/) and `yarn` version.

- Do not delete the `yarn.lock file`

## Install

Navigate to the project root folder using terminal and install the dependencies.

```js
yarn;
```

## Start

After the installation is complete, you can launch dev server by running.

```js
yarn dev
```

This starts a local webserver at `http://localhost:3000` and auto detect file changes:

## Build

```js
yarn build
```

## Folder structure

```ts
bazar-react/
├── public/
|   └── assets/
|       └── images/
├── pages/
    ├── how-it-work
    ├── admin
    ├── talent
    ├── login
    ├── platform
    ├── signup
    ├── categories
    ├── support
    ├── 50+ Other pages
├── src/
|   ├── animations
|   ├── components/
|   |   ├── layouts
|   |   |   ├── customer-dashboard
|   |   |   ├── admin-dashboard
|   |   |   └── And talent layouts
|   |   └── Includes reusable atomic components
|   ├── contexts
|   ├── data
|   ├── fake-db
|   ├── hooks
|   ├── page-sections
|   |   └── Includes bigger components (Individual every pages sections compoents)
|   ├── theme
|   ├── utils
└── README.md
```

## Pages/Routing

Umurava Frontend follows [Next.js routing standard](https://nextjs.org/docs/routing/introduction).
All the routes/pages are inside `pages` folder.

## Compnents

Component structure are straight forward.

- Reusable atomic components are located in `src/components/`
- Bigger static components are located in `src/page-sections`
  - Static component means, these components has static data which you may want to modify

##  Layouts

All the business layouts are inside `src/components/layouts`
Layout headers are located in `src/components/header`

## business Navigation

- business horizontal navbar navigation data is stored in `src/data/navbarNavigations.ts`
- Category dropdown navigation data is stored in `src/data/navigations.ts`

## Admin Dashboard

- Admin dashboard pages are inside `pages/admin`.
- Admin dashboard layout components are inside `src/components/layouts/admin-dashboard`

### Admin Navigaiton

- Admin navigation data is stored in `src/components/layouts/admin-dashboard/NavigationList.tsx`.

### Theme

- `theme/MuiTheme.tsx` is the main theme file.
- `theme/themeColors.ts` Contains theme colors (Primary, Secondary & etc.)
- `theme/components.js` Overrides the MUI default component styles
- `theme/typography.ts` Sets fontFamily and fontSize

#### Existing color themes

We have multiple color theme for different businesss. E.G. Default, Grocery, Health & etc.
`themeOptions.ts` file returns one color theme based on currently displayed demo on browser(by detecting url path)

Of course you don't need this.
You can delete `themeOptions.ts` file and rename `themeOptionsSample.ts` to `themeOptions.ts`

Now `themeOptions.ts` file will always return one color theme.

### RTL

Open `src/contexts/SettingContext.tsx` and change the value of direction to 'rtl'
`const initialSettings: SettingsOptions = { direction: "rtl" };`

## REST API

- REST API calls are located in `src/utils/api`

## Fake server

- REST APIs are getting data from dummy server located in `src/fake-db/server`
- This server serves dummy data. You need to implement your own server.

## Navbar Menus Structure

```ts
const navbarNavigations = [
  {
    title: "Home",
    megaMenu: false,
    megaMenuWithSub: false,
    child: [
      { title: "Any thing", url: "/any-thing" }
    ],
  },

  {
    megaMenu: true,
    megaMenuWithSub: false,
    title: "Admin",
    child: megaMenus,
  },
];
```

## Mega Menu Structure

```ts
const megaMenus = [
  [
    {
      title: "Admin",
      child: [
        { title: "Talent", url: "/talent" }
      ],
    }
  ],
];
```

## Categories With Sub Categories Mega Menus Structure

```ts
const categoriesMegaMenu = [
  {
    title: "Business",
    child: [
      {
        title: "Talent",
        child: [
          { title: "Veted", url: "#", Icon: Icons.Shirt },
      },
      {
        title: "Jobs",
        child: [
          { title: "Published", url: "#" }
        ],
      },

    ],
  },
];
```

## Support

Need Support? Creat issue

### changelog

## v1.0.0

###### July 20, 2022

Initial release

### Roadmap

1. 

```

```
