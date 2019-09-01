# Front-end task of Code Challenge for Scoutbase

This task is for demonstrating your understanding of HTML, CSS, Javascript, React & related libraries.

If you’re doing the front-end only, you must use the https://countries.trevorblades.com endpoint for GraphQL API.

Preferred libraries:

1. `styled-components` for styling
2. `apollo-client` for consuming GraphQL API
3. `react-router` or any alternative to implement routing

Instructions:

1. Create a `create-react-app` repo.
2. Add a router with routes:

- `/` - for displaying basic links for the other routes
- `/countries` - for requesting GraphQL API and rendering the list
- `/countries/(:code)` - for requesting GraphQL API and rendering the properties of a continent

3. Design is totally by you.
4. Countries list at `/countries` must contain the list of countries and the languages spoken in that country. Both in English and native languages. It should also contain the continent it is located in.
5. `/countries/(:code)` must render the currency and a area code (phone) of that country.
6. Routes must be fully loadable with a direct link. `/countries/CI` must render the page for Ivory Coast, for example.
7. End.

---

## My Implementation:

**Tech Used:**

- React (create-react-app), React Router, Styled-Components, GraphQL, Apollo.
- _Code Quality:_ Eslint, Prettier, StyleLint, Husky.
- _Theme_: `postcss-normalize` was used to implement a normalise reset and a basic theme was implemented using styled-components to create a clean interface.

**Usage:**

- Install dependencies `yarn install`.
- Start app in browser: `yarn start`.
- For development you can run the linters:
  `yarn lint` - for eslint.
  `yarn lint:css` to use stylint to lint the css.

_NB: Husky is configured to lint any staged code on commit_.

**Features:**

- `http://localhost:3000/` - Displays a landing page with a link to the countries route.
- `http://localhost:3000/countries` - Makes a request to the GraphQL API and, if succesful, renders the returned list of countries.
- Countries are displayed in a alphabetised sectioned list, to make it slightly easier to navigate the country data.
- `http://localhost:3000/countries/:code` - Makes a request to the GraphQL API for a particular country using the country code supplied and, if successful, renders the returned country data.
- Routes are fully loadable with a direct link, for example, entering `http://localhost:3000/countries/pt` in the browsers address bar will request and display data for Portugal.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
