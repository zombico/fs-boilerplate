'use strict';

const express = require('express');
const router = express.Router();


const scrape = require('html-metadata');



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

exports.router = router;
