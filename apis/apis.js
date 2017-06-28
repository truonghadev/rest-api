'use strict'

module.exports = function(ctx) {
  // extract context from passed in object
  const db     = ctx.db,
        app = ctx.app;

  // assign collection to variable for further use
  const collection = db.collection('api');

  app.get('/apis', function(req, res, next){
    let limit = parseInt(req.query.limit, 10) || 10, // default limit to 10 docs
        skip  = parseInt(req.query.skip, 10) || 0, // default skip to 0 docs
        query = req.query || {};

    // remove skip and limit from query to avoid false querying
    delete query.skip;
    delete query.limit;

    // find todos and convert to array (with optional query, skip and limit)
    collection.find(query).skip(skip).limit(limit).toArray()
      .then(apis => res.status(200).send(apis))
      .catch(err => res.status(500).send(err));

    next();
  });

  app.post('/api', function(req, res, next) {
    // extract data from body and add timestamps
    const data = Object.assign({}, req.body, {
      created: new Date(),
      updated: new Date()
    });

    // insert one object into todos collection
    collection.insertOne(data)
      .then(api => res.send(200, api.ops[0]))
      .catch(err => res.send(500, err));

    next();
  });

};
