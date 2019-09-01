import 'dotenv/config';

import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { AuthenticationError, UserInputError } from 'apollo-server';
import uuidv4 from 'uuid/v4';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const apiPort = process.env.API_PORT || 8000;
const app = express();

// Hard coded data
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
      {
        name: 'James Earl Jones',
        birthday: 'January 17, 1931',
        country: 'England, UK',
      },
    ],
    directors: [
      {
        name: 'Jon Favreau',
        birthday: 'October 19, 1966',
        country: 'New York, USA',
      },
    ],
  },
];

const users = {
  1: {
    id: '1',
    username: 'Lionel',
    email: 'lion@me.com',
    password: 'superSecret',
  },
};

// Schema: Types, Queries, Mutations
// TODO: Utilize schema stitching to help modularise based on domain
const schema = gql`
  type Query {
    me: User
    user(id: ID!): User
    users: [User!]
    movies: [Movie!]
  }

  type User {
    id: ID!
    username: String!
    password: String!
    email: String!
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
  type Token {
    token: String!
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
    signup(username: String!, email: String!, password: String!): Token!
    signin(email: String!, password: String!): Token!
  }
`;

// Helper functions:
const createToken = async (user, secret, expiresIn) => {
  const { id, email, username } = user;

  const token = await jwt.sign({ id, email, username }, secret, { expiresIn });

  return token;
};

const generatePasswordHash = async password => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

const validatePassword = async (user, password) => {
  return await bcrypt.compare(password, user.password);
};

// Resolvers:
const resolvers = {
  Query: {
    me: (parent, args, { me }) => me,
    user: (parent, { id }) => {
      return users[id];
    },
    users: () => Object.values(users),
    movies: () => {
      return movies;
    },
  },
  Mutation: {
    createUser: (parent, { username, email, password }, context) => {
      const user = {
        id,
        username,
        password,
        email,
      };
      users[id] = user;

      return user;
    },
    signup: async (parent, { username, email, password }, { secret }) => {
      const id = uuidv4();
      const passwordHashed = await generatePasswordHash(password);
      const user = {
        id,
        username,
        email,
        password: passwordHashed,
      };
      users[id] = user;

      // create a jwt using the user, secret and 30minute expiry time
      return { token: createToken(user, secret, '30m') };
    },

    signin: async (parent, { email, password }, { secret }) => {
      const usersValues = Object.values(users);

      const user = usersValues.find(u => u.email === email);

      console.log({ user });

      if (!user) {
        throw new UserInputError('No user found');
      }

      const isValid = await validatePassword(user, password);

      if (!isValid) {
        throw new AuthenticationError('Invalid login credentials');
      }

      // create a jwt using the user, secret and 30minute expiry time
      return { token: createToken(user, secret, '30m') };
    },
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    me: users[1],
    secret: process.env.TOKEN_SECRET,
  },
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: apiPort }, () => {
  console.log(`Apollo server running on http://localhost:${apiPort}/graphql`);
});
