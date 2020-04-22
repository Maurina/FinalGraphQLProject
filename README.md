# Space Shop
Prisma as your data modeling tool

Docker-based PostgreSQL, as the data store

At least 3 Query resolvers to get data from your server [Query](https://github.com/Maurina/FinalGraphQLProject/blob/master/src/query.js)

At least 2 Mutation resolvers allowing users to create, update, or upsert an item. [Create and UpDate](https://github.com/Maurina/FinalGraphQLProject/blob/master/src/mutation.js)

At least 1 Mutation resolver allowing users to delete an item. [Delete](https://github.com/Maurina/FinalGraphQLProject/blob/master/src/mutation.js)

Your datastore will contain at least 25 items [Seed file](https://github.com/Maurina/FinalGraphQLProject/blob/master/prisma/seed.js)

Your app will be deployable locally using Docker and will have seed data entered into the datastore.


## How to use

### 1. Download example & install dependencies

Clone this repository:

```
git clone https://github.com/Maurina/FinalGraphQLProject
```

Install npm dependencies:
```
cd FinalGraphQLProject
npm install
```

Note that this also generates Prisma Client JS into `node_modules/@prisma/client` via a `postinstall` hook of the `@prisma/client` package from your `package.json`.

To start the project from scratch follow these steps

```
npm run launchDocker

npm run createDB

npm run seed

```

If you have a previous example and have made changes follow these steps

```
npm run nuke

npm run launchDocker

npm run createDB

npm run seed
```

### 2. Start the GraphQL server

Launch your GraphQL server with this command:

```
npm start
```

Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the API of your GraphQL server in a [GraphQL Playground](https://github.com/prisma/graphql-playground).

### 3. Using the GraphQL API

The schema that specifies the API operations of your GraphQL server is defined in [`./schema.graphql`](./schema.graphql). Below are a number of operations that you can send to the API using the GraphQL Playground.

Feel free to adjust any operation by adding or removing fields. The GraphQL Playground helps you with its auto-completion and query validation features.

#### Retrieve all cards

```graphql
query allCards{
 Cards{
  title
  id
  description
  source
  keywords
  dateCreated
}
}
```
#### Search cards by search string

```graphql
query searchItem {
  Cards(searchString: "Earth") {
    title
    description
  }
}
```

#### Search cards by search string
```graphql
query searchCardsID {
  card(where: {
   id: " __POST_ID__"
  }) {
    title
    description
    source
  }
}

<Details><Summary><strong>See more API operations</strong></Summary>

#### Create a new card

```graphql
mutation createOneCard{
  createOneCard(data:{
    title: "That's No Moon"
    description: "That's No Moon..."
    source:  "NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington"
    dateCreated: "2011:04:26 15:00:01"
  }){
    title
    description
    source
    dateCreated
  }
}
```

#### Create a edit card

```graphql

mutation updateOneCard{
  updateOneCard(data:{
    title: "New Title"
    description: "New Description"
    source: "New Source"
    dateCreated: "2020"
  }, where:{
    id: " __POST_ID__"
  }) {
    id,
    title,
    description,
    source,
    keywords,
    dateCreated
  }
}

```

#### Delete an existing card

```graphql
mutation deleteOneCard{
deleteOneCard (where: {id: __POST_ID__})
  {
    id
    title
  }
}
}

```




