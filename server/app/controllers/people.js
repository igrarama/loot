const mongoose = require('mongoose');
const Person = mongoose.model('Person');

exports.load = async(function* (req, res, next, id) {
  try {
    req.person = yield Article.load(id);
    if (!req.person) return next(new Error('Person not found'));
  }
  catch (err) {
    return next(err);
  }
  next();
});

exports.index = async(function* (req, res) {
  const page = (req.query.page > 0 ? req.query.page : 1) - 1;
  const _id = req.query.item;
  const limit = 100;
  const options = {
    limit: limit,
    page: page
  };

  if (_id) options.criteria = { _id };

  const articles = yield Person.list(options);
  const count = yield Person.count();

  respond(res, 'people/index', {
    title: 'People',
    articles: articles,
    page: page + 1,
    pages: Math.ceil(count / limit)
  });
});