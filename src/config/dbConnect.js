import mongoose from "mongoose"

mongoose.connect("mongodb://alura:123@ac-zuijanp-shard-00-00.ocgqvoa.mongodb.net:27017,ac-zuijanp-shard-00-01.ocgqvoa.mongodb.net:27017,ac-zuijanp-shard-00-02.ocgqvoa.mongodb.net:27017/?ssl=true&replicaSet=atlas-5amxkb-shard-0&authSource=admin&retryWrites=true&w=majority")

let db = mongoose.connection

export default db