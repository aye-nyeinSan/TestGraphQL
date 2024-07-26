import db from './_db.js'

export const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    game(_, { id }) {
      return db.games.find((game) => game.id === id);
    },
    reviews() {
      return db.reviews;
    },
    review(_, { id }) {
      return db.reviews.find((review) => review.id === id);
    },
    authors() {
      return db.authors;
    },
    author(_, { id }) {
      return db.authors.find((author) => author.id === id);
    },
  },
  
};