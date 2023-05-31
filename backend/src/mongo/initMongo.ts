import mongoose from "mongoose";

export function initMongo() {
  mongoose.set('strictQuery', false);
  mongoose.connect('mongodb://127.0.0.1:27017/baza')
}