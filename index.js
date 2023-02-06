// const express = require('express');
import express from "express"
// const { collection, addDoc } = require('firebase/firestore');
import { collection, addDoc, getDoc, getDocs } from "firebase/firestore"
// const fs = require('fs');
import fs from "fs"
// const { firestore } = require('./firebaseConfig');
import { firestore } from "./firebaseConfig.js"
const app = express()
const port = 3000
app.use(express.json());

app.get('/', (req, res) => {
  res.end('Hello World!');
});
app.get("/list_jokes", async (req, res) => {
  // fs.readFile(__dirname + '/' + 'joke.json', (err, data) => {
  //     res.end(data);
  // });

  try {

    const ref = collection(firestore, "jokes")
    const data = []
    const snapshot = await getDocs(ref)
    snapshot.forEach(s => {
      data.push({
        id: s.id,
        joke: s.data().joke
      })
    })
    res.send(data)
  } catch (e) {
    console.log(e)
    res.send({ error: e.message })
  }
}
);
app.post("/sendJoke", async (req, res) => {

  const { joke } = req.body

  const ref = collection(firestore, "jokes")
  try {

    const doc = await addDoc(ref, {
      joke: joke
    })
    res.send({ docId: doc.id })
  } catch (e) {
    console.log(e)

    res.send({
      error: e.message
    })
  }
})
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
});