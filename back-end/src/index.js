import 'dotenv/config';

import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const apiPort = process.env.API_PORT || 8000;
const app = express();

// TODO: Create basic data to fulfill requirements
// : Add:
/*
```graphql
{
  movies {
    title
    year
    rating
    actors {
      name
      birthday
      country
      directors {
        name
        birthday
        country
      }
    }
  }
}
```

4. Add support for the following mutation:
```graphql
mutation createUser($username: String, $password: String) {
  createUser(username: $username, password: $password) {
    token
    user {
      id
      name
    }
  }
}
```

5. To expand on the number four, add a mutation-based authentication that accepts:
```graphql
mutation login($username: String, $password: String) {
  login(username: $username, password: $password) {
    token
    user {
      id
      name
    }
  }
}
```

6. Authenticated users may request additional fields for the query used earlier. New `scoutbase_rating` field must return the a random string between 5.0-9.0:

```graphql
{
  movies {
    scoutbase_rating
    title
    year
    rating
    actors {
      name
      birthday
      country
      directors {
        name
        birthday
        country
      }
    }
  }
}
```
*/

// TODO: Data hardcoded, could come from Rest API
const movies = [
  {
    id: 1,
    title: 'The Lion King',
    year: '2019',
    rating: 5,
    actors: [
      {
        name: 'Chiwetel Ejiofor',
        birthday: 'July 10, 1977',
        country: 'England, UK',
      },
    ],
    directors: [
      {
        name: 'Mr Director',
        birthday: 'Jan 1, 1960',
        country: 'England, UK',
      },
    ],
  },
];

const schema = gql`
  type Query {
    me: User
    movies: [Movie!]
  }

  type User {
    username: String!
  }

  type Actor {
    name: String!
    birthday: String!
    country: String!
  }

  type Director {
    name: String!
    birthday: String!
    country: String!
  }

  type Movie {
    id: ID!
    title: String!
    year: String!
    rating: Int!
    actors: [Actor]
    directors: [Director]
  }
`;

const resolvers = {
  Query: {
    me: () => {
      return {
        username: 'Lionel',
      };
    },
    movies: () => {
      return movies;
    },
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: apiPort }, () => {
  console.log(`Apollo server running on http://localhost:${apiPort}/graphql`);
});
