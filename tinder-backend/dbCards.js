import mongoose from 'mongoose'

const cardschema = mongoose.schema({
    name: String,
    imgUrl: String
})

export default mongoose.model('cards',cardschema);