import mongoose from "mongoose";
const CategoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  building: {
    type: String,
    required: true,
  },

  photos: {
    type: [String],
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    required: true,
    default: 10,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  computer:{
    type: Boolean,
    default:false
 }, // computer ids , child of categories

  recommended:{
      type: Boolean,
      default: false,

  }, // we may want to show the most recommended rooms

  tips:{
      type: String,
      default: "Please respect other users and the college's facilites. It is important to clean up your rubbish before you go.",
      required: false
  }, //tips for using this room

  bestfor:{
      type: String,
      required: false

  },//what is this room best to use for ? Presentation ? software dev assignments?

  accomodate:{
      type: String,
      required: false
  },//how many people can this room accomodate?

});

export default mongoose.model("Categories", CategoriesSchema)