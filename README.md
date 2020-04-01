Prisma as your data modeling tool

Docker-based PostgreSQL, as the data store

At least 3 Query resolvers to get data from your server [Query](https://github.com/Maurina/FinalGraphQLProject/blob/master/src/query.js)

At least 2 Mutation resolvers allowing users to create, update, or upsert an item. [Create and UpDate](https://github.com/Maurina/FinalGraphQLProject/blob/master/src/mutation.js)

At least 1 Mutation resolver allowing users to delete an item. [Delete](https://github.com/Maurina/FinalGraphQLProject/blob/master/src/mutation.js)

Your datastore will contain at least 25 items [Seed file](https://github.com/Maurina/FinalGraphQLProject/blob/master/prisma/seed.js)

Your app will be deployable locally using Docker and will have seed data entered into the datastore.


```
# GraphQL Server Example (SDL-first)

This example shows how to implement an **GraphQL server (SDL-first) with Node.js** based on [Prisma Client](https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md), [apollo-server](https://www.npmjs.com/package/apollo-server) and the [nexus-prisma](https://github.com/prisma-labs/nexus-prisma) plugin. It is based on a PostGreSQL database running inside Docker.

## How to use

### 1. Download example & install dependencies

Clone this repository:

```
git clone https://github.com/Maurina/FinalGraphQLProject
```

Install npm dependencies:

cd graphql-sdl-first
npm install
```

Note that this also generates Prisma Client JS into `node_modules/@prisma/client` via a `postinstall` hook of the `@prisma/client` package from your `package.json`.

### 2. Start the GraphQL server

Launch your GraphQL server with this command:

```
npm run dev
```

Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the API of your GraphQL server in a [GraphQL Playground](https://github.com/prisma/graphql-playground).

### 3. Using the GraphQL API

The schema that specifies the API operations of your GraphQL server is defined in [`./schema.graphql`](./schema.graphql). Below are a number of operations that you can send to the API using the GraphQL Playground.

Feel free to adjust any operation by adding or removing fields. The GraphQL Playground helps you with its auto-completion and query validation features.

#### Retrieve all cards

```graphql
query {
  card {
    id
    title
    description
    source
  }
}
```
#### Search cards

```graphql
query {
  card {
    title
    description
    source
  }
}
```

<Details><Summary><strong>See more API operations</strong></Summary>

#### Create a new card

```graphql
mutation {
  createCard(
    data: {
      title: "Mars"
      description: "Mars is the red planet."
      source: "Nasa
    }
  ) {
    id
    title
    description
    source
  }
}
```

#### Create a edit card

```graphql
mutation {
  updateCard(
    title: "Galaxy"
    description: "Many stars and planets"
    source: "Nasa"
  ) {
    id
    title
  }
}
```

#### Delete an existing card

```graphql
mutation {
deleteOneCard (where: {id: __POST_ID__})
  {
    id
  }
}
}

```

### 2. Introspect your database

The Prisma schema is the foundation for the generated Prisma Client API. Therefore, you first need to make sure the new `Profile` table is represented in it as well. The easiest way to do so is by introspecting your database:

```
npx prisma2 introspect
```

> **Note**: You're using [npx](https://github.com/npm/npx) to run Prisma 2 CLI that's listed as a development dependency in [`package.json`](./package.json). Alternatively, you can install the CLI globally using `npm install -g prisma2`. When using Yarn, you can run: `yarn prisma2 dev`.

The `introspect` command updates your `schema.prisma` file. It now includes the `Profile` model and its 1:1 relation to `User`:

```prisma
model Card {
  id             String   @default(cuid()) @id
  title          String
  description    String
  source         String
}
```

### 3. Generate Prisma Client

With the updated Prisma schema, you can now also update the Prisma Client API with the following command:

```

## Next steps

- Read the holistic, step-by-step [Prisma Framework tutorial](https://github.com/prisma/prisma2/blob/master/docs/tutorial.md)
- Check out the [Prisma Framework docs](https://github.com/prisma/prisma2) (e.g. for [data modeling](https://github.com/prisma/prisma2/blob/master/docs/data-modeling.md), [relations](https://github.com/prisma/prisma2/blob/master/docs/relations.md) or the [Prisma Client API](https://github.com/prisma/prisma2/tree/master/docs/prisma-client-js/api.md))
- Share your feedback in the [`prisma2-preview`](https://prisma.slack.com/messages/CKQTGR6T0/) channel on the Prisma Slack
- Create issues and ask questions on [GitHub](https://github.com/prisma/prisma2/)
- Track Prisma 2's progress on [`isprisma2ready.com`](https://isprisma2ready.com)
