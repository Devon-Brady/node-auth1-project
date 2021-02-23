const express = require("express");
const server = express();
const authRouter = require("../api/auth/auth-router")

const session = require("express-session")
const KnexSessionStore = require("connect-session-knex")(session)


const config = {
    name:"sessionId",
    secret: "keep it secret, keep it safe",
    cookie:{
      maxAge: 1000 * 60 * 60,
      secure:false,
      httpOnly: true
    },
    resave:false,
    saveUnitialized:false,
  
    store: new KnexSessionStore({
      knex:require("../data/dbConfig"),
      tablename:"sessions",
      sidfieldname:"sid",
      createTable:true,
      clearInterval:1000 * 60 * 60
    })
  }


server.use(express.json())
server.use("/api/auth", authRouter)
server.use(session(config))


server.get("/",(req,res)=>{
    res.status(200).json("Welcome to the server.")
})

module.exports = server;