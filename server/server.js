const express = require("express");
const path = require("path");

const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

const { authMiddleware } = require("./utils/auth");
const { typeDefs, resolvers } = require("./schemas");

const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const startServer = async () => {
  await server.start();

  app.use("/graphql", expressMiddleware(server, { 
    context: authMiddleware 
  }));

  // if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  // }

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`Express server now listening on localhost:${PORT}`);
      console.log(`GraphQL Apollo server now listening on localhost:${PORT}/graphql`);
    });
  });
};

startServer();
