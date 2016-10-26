var authors = [
  {
    "author_id": 0,
    "name": "Nora Bonner",
    "bio": "Nora Bonner is a PhD student at Georgia State University. Her work has appeared in the North American Review, the Bellingham Review, Hobart, Shenandoah, and elsewhere. She is originally from Detroit.",
    "publications": {
      "fiction": [
        {
          "title": "Test Story",
          "url": "www.facebook.com"
        }
      ]
    }
  },

  {
    "author_id": 1,
    "name": "Ernest White II",
    "bio": "Ernest White II is a storyteller and explorer. He is the creator of multicultural travel portal Fly Brother, a contributing writer at literary travel journal Panorama, a former assistant editor at Time Out São Paulo, and founding editor of digital men’s magazine Abernathy. A Florida native, Ernest's obsessions include Indian curry, São Paulo, and Rita Hayworth.",
    "publications": []
  },

  {
    "author_id": 2,
    "name": "Hannah Dela Cruz Abrams",
    "bio": "Hannah Dela Cruz Abrams received the 2013 Whiting Writers Award for her novella The Man Who Danced with Dolls and for her memoir-in-progress The Following Sea. She has also received a Rona Jaffe National Literary Award and a North Carolina Arts Council Fellowship. Her work has most recently appeared in the Oxford American, The Pinch, Southern Humanities Review, Carolina Quarterly, and Mayday Magazine, among others. Abrams currently teaches in the Department of English at the University of North Carolina Wilmington.",
    "publications": []
  }
];

var printAuthor = function(author_id) {
  var $div = $('#test');

  $div.append('<h2>' + authors[author_id].name + '</h2>');
  $div.append('<p>' + authors[author_id].bio + '</p>');

  var publications = authors[author_id].publications;

  if(publications.fiction) {
    $div.append('<h3>Fiction:</h3><ul>');

    publications.fiction.forEach(function(story)  {
      var post = '<li><a href="' + story.url + '">' + story.title + "</a></li>";
      $div.append(post);
    });

    $div.append('</ul>');
  }
};

printAuthor(0);
