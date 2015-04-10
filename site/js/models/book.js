var app = app || {};

app.Book = Backbone.Model.extend({
  defaults: {
    coverImage: 'img/placeholder.png',
    title: 'No title',
    author: 'Unknown',
    releaseDate: 'Unknown',
    keywords: 'None'
  },
  parse: function(response) {
    // This isn't an underscore method, the key for id in the response if actually '_id'
    response.id = response._id;
    return response;
  }
});
