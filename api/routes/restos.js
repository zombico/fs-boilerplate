'use strict';

const express = require('express');
// const jwt = require('express-jwt');

const router = express.Router();

const { SECRET: secret } = require('../utils/constants');

const restos = [
  { id: 1, name: 'Harry Potter and the Sorcerer\'s Stone' },
  { id: 2, name: 'Harry Potter and the Chamber of Secrets' },
  { id: 3, name: 'Harry Potter and the Prisoner of Azkaban'},
  { id: 4, name: 'Harry Potter and the Goblet of Fire'},
  { id: 5, name: 'Harry Potter and the Order of the Phoenix'}
];

var scrape = require('html-metadata');

// var url = "https://www.opentable.com/the-sultans-tent-reservations-toronto?rid=82957";

// scrape(url, function(error, metadata){
//   const banana = metadata;
// 	console.log(banana.jsonLd);
// });

router.route('/:id')
  .get(async (req, res, next) => {
    const { params } = req;
    const { id } = params;
    const url = `https://www.opentable.com/single.aspx?rid=${id}`
    
    const resto = await scrape(url, function(error, metadata){
      const banana = metadata;
      
      return banana
    });

    console.log(resto)

    if (!resto) {
      return res.status(404).send({ data: [] });
    }

    res.json({ data: resto });
  })
  // .post(jwt({ secret }), (req, res, next) => {
  //   const { params, body } = req;
  //   const { id } = params;
  //   const { name, author } = body;
  //   const resto = restos.filter((b) => b.id === Number(id)).pop();

  //   if (!resto) {
  //     return res.status(404).send({ data: [] });
  //   }

  //   resto.name = name || resto.name;
  //   resto.author = author || resto.author;

  //   res.json({ data: [ resto ] });
  // });


// router.route('/:id')
//   .get((req, res, next) => {
//     const { params } = req;
//     const { id } = params;
//     const resto = restos.filter((b) => b.id === Number(id)).pop();

//     if (!resto) {
//       return res.status(404).send({ data: [] });
//     }

//     res.json({ data: [ resto ] });
//   })
//   .post(jwt({ secret }), (req, res, next) => {
//     const { params, body } = req;
//     const { id } = params;
//     const { name, author } = body;
//     const resto = restos.filter((b) => b.id === Number(id)).pop();

//     if (!resto) {
//       return res.status(404).send({ data: [] });
//     }

//     resto.name = name || resto.name;
//     resto.author = author || resto.author;

//     res.json({ data: [ resto ] });
//   });

// router.route('/')
//   .get((req, res, next) => {
//     res.json({ data: restos });
//   })
//   .post(jwt({ secret }), (req, res, next) => {
//     const { body } = req;
//     const { name } = body;

//     const id = Math.max(...restos.map((b) => b.id)) + 1;

//     const resto = {
//       id,
//       name
//     };

//     restos.push(resto);
//     res.json({ data: [{ id }] });
//   });

exports.router = router;
