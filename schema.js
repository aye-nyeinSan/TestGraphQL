export const typeDefs = `#graphql
 type Game{
    id: ID!,
    title: String!,
    platform: [String!]!,
    revirews: [Review!]!,
    author: [Author!]!,
 }
 type Review{
    id: ID!,
    rating: Int!,
    content: String!,
    game: Game!,
    author: Author!,

 }
 type Author{
    id: ID!,
    name: String!,
    varified: Boolean!,
    reviews: [Review!]!,
    game: [Game!]!,
 }
 
 type Query{
    games: [Game!]!,
    game(id: ID!): Game!,
    review(id: ID!): Review,
    reviews: [Review!]!,
    
    authors: [Author!]!,
    author(id: ID!): Author!,
 }
`;