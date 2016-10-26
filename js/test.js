var authors = [
  {
    "author_id": 0,
    "name": "Nora Bonner",
    "bio": "Nora Bonner is a PhD student at Georgia State University. Her work has appeared in the North American Review, the Bellingham Review, Hobart, Shenandoah, and elsewhere. She is originally from Detroit.",
    "publications": {
      "fiction": [
        {
          "title": "Theresa Scott",
          "issue": 1,
          "url": "../issues/01/nora-bonner-theresa-scott.html"
        }
      ]
    }
  },

  {
    "author_id": 1,
    "name": "Ernest White II",
    "bio": "Ernest White II is a storyteller and explorer. He is the creator of multicultural travel portal Fly Brother, a contributing writer at literary travel journal Panorama, a former assistant editor at Time Out São Paulo, and founding editor of digital men’s magazine Abernathy. A Florida native, Ernest's obsessions include Indian curry, São Paulo, and Rita Hayworth.",
    "publications": {
      "fiction": [
        {
          "title": "American General",
          "issue": 1,
          "url": "../issues/01/ernest-white-american-general.html"
        }
      ]
    }
  },

  {
    "author_id": 2,
    "name": "Hannah Dela Cruz Abrams",
    "bio": "Hannah Dela Cruz Abrams received the 2013 Whiting Writers Award for her novella The Man Who Danced with Dolls and for her memoir-in-progress The Following Sea. She has also received a Rona Jaffe National Literary Award and a North Carolina Arts Council Fellowship. Her work has most recently appeared in the Oxford American, The Pinch, Southern Humanities Review, Carolina Quarterly, and Mayday Magazine, among others. Abrams currently teaches in the Department of English at the University of North Carolina Wilmington.",
    "publications": {
      "poetry": [
        {
          "title": "In the Painter's House",
          "issue": 1,
          "url": "../issues/01/hannah-dela-cruz-abrams-painters-house.html"
        }
      ]
    }
  },

  {
    "author_id": 3,
    "name": "Caroline Barr",
    "bio": "Caroline Barr is a native of Huntsville, Alabama currently pursuing a MFA in Poetry at The University of North Carolina, Greensboro. She is a contributing writer for ANNA Magazine, LLC, freelance blogger and editor, and has been previously published in Two Hawks Quarterly.",
    "publications": {
      "poetry": [
        {
          "title": "Jabuticaba Fruit Tree",
          "issue": 1,
          "url": "../issues/01/caroline-barr-jabuticaba-fruit-tree.html"
        },
        {
          "title": "Venus de Milo with Drawers to Her Lover",
          "issue": 1,
          "url": "../issues/01/caroline-barr-venus-de-milo.html"
        },
        {
          "title": "Blank",
          "issue": 1,
          "url": "../issues/01/caroline-barr-blank.html"
        }
      ]
    }
  },

  
];

var printAuthor = function(author_id) {
  var $div = $('#test');

  $div.append('<h2>' + authors[author_id].name + '</h2>');
  $div.append('<p>' + authors[author_id].bio + '</p>');

  var publications = authors[author_id].publications;

  if(publications.fiction) {
    $div.append('<h3>Fiction:</h3><ul>');

    publications.fiction.forEach(function(story)  {
      var post = '<li><a href="' + story.url + '">' + story.title + '</a> - Issue ' + story.issue + '</li>';
      $div.append(post);
    });

    $div.append('</ul>');
  }

  if(publications.poetry) {
    $div.append('<h3>Poetry:</h3><ul>');

    publications.poetry.forEach(function(story)  {
      var post = '<li><a href="' + story.url + '">' + story.title + '</a> - Issue ' + story.issue + '</li>';
      $div.append(post);
    });

    $div.append('</ul>');
  }
};

printAuthor(3);
