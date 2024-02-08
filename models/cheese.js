const mongoose = require('./connection') // configuring to our connection mongoose

const CheeseSchema = new mongoose.Schema({
    name: String,
    countryOfOrigin: String,
    image: String
})

const Cheese = mongoose.model("Cheese", CheeseSchema)

module.exports = Cheese

// THE MODEL TALKS TO THE DB