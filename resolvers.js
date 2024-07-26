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
  Game: {
    reviews(parent){
        return db.reviews.filter((review) => review.game_id === parent.id);
    }
  },
  Review:{
        game(parent){
            return db.games.find((game) => game.id === parent.game_id);
        },
        author(parent){
            return db.authors.find((author) => author.id === parent.author_id);
        }
    },
    Author:{
        reviews(parent){
            return db.reviews.filter((review) => review.author_id === parent.id);
        },
        game(parent){
            return db.games.filter((game) => game.author_id === parent.id);
  }
    },
    Mutation:{
        deleteGame(_, args){
            db.games = db.games.filter((game) => game.id !== args.id);
            return db.games
        },
        addGame(_,args){

            let game={
                ...args.game,
                id: Math.floor(Math.random() * 1000).toString(),
                title: args.game.title,
                platform: args.game.platform,
            }
            db.games.push(game);
            return game;
        }
    }
};