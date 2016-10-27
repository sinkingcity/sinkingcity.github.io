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

  {
    "author_id": 4,
    "name": "Daniel Ruiz",
    "bio": "Daniel Eduardo Ruiz was born in Bayamón, Puerto Rico, but currently lives in Valparaíso, Chile on a Fulbright Scholarship. His poems can or will be found in The Journal, Harpur Palate, Minnesota review, The Adroit Journal, New Delta Review, and elsewhere.",
    "publications": {
      "poetry": [
        {
          "title": "Ode to Pablo Picasso",
          "issue": 1,
          "url": "../issues/01/daniel-ruiz-pablo-picasso.html"
        }
      ]
    }
  },

  {
    "author_id": 5,
    "name": "Emma Bolden",
    "bio": "Emma Bolden is the author of two full-length collections of poetry: medi(t)ations (Noctuary Press, 2016) and Maleficae (GenPop Books, 2013). She’s also the author of four chapbooks of poetry -- How to Recognize a Lady (Toadlily Press); The Mariner’s Wife, (Finishing Line Press); The Sad Epistles (Dancing Girl Press); This Is Our Hollywood(The Chapbook) – and one nonfiction chapbook – Geography V (Winged City Press). A Barthelme Prize and Spoon River Poetry Review Editor’s Prize winner, her work has appeared in The Best American Poetry and The Best Small Fictions as well as such journals as The Rumpus, Prairie Schooner, Conduit, and Copper Nickel.",
    "publications": {
      "poetry": [
        {
          "title": "Under the Threat of Eden",
          "issue": 1,
          "url": "../issues/01/emma-bolden-threat-of-eden.html"
        }
      ]
    }
  },

  {
    "author_id": 6,
    "name": "Shara McCallum",
    "bio": "Originally from Jamaica, Shara McCallum is the author of five books of poetry, including Madwoman (forthcoming in 2017 from Alice James Books in the US & Peepal Tree Press in the UK).",
    "publications": {
      "poetry": [
        {
          "title": "The Parable of the Wayward Child",
          "issue": 1,
          "url": "../issues/01/shara-mccallum-wayward-child.html"
        }
      ]
    }
  },

  {
    "author_id": 7,
    "name": "Maureen Seaton",
    "bio": "",
    "publications": {
      "poetry": [
        {
          "title": "Sonnet for Snapper Creek",
          "issue": 1,
          "url": "../issues/01/maureen-seaton-snapper-creek.html"
        }
      ]
    }
  },

  {
    "author_id": 8,
    "name": "M. M. DeVoe",
    "bio": 'M. M. De Voe is an internationally published, award-winning writer of interstitial fiction including poetry, flash, sci-fi, fantasy, horror, literary fiction, and sometimes, reluctantly, nonfiction. Based in NYC, she\'s the founder of the literary nonprofit Pen Parentis which provides resources to keep writers on creative track after they start a family. You can also find her on her <a href="http://mmdevoe.com" target="_blank">website</a><a>, </a><a href="http://facebook.com/mmdevoe" target="_blank">Facebook</a>, and <a href="http://www.twitter.com/mmdevoe" target="_blank">Twitter</a>.',
    "publications": {
      "poetry": [
        {
          "title": "Haiku",
          "issue": 1,
          "url": "../issues/01/m-m-devoe-haiku.html"
        }
      ]
    }
  },

  {
    "author_id": 9,
    "name": "Beverly Tan Murrary",
    "bio": "Beverly Tan Murray is a Chinese-American author who was born in Singapore and immigrated to California at age 16. She now resides in Miami with her husband and a terrier-mutt named Larry David. Beverly is a VONA/Voices alumnus, and has been published in the Huffington Post, AWAY Magazine, Linden Avenue Literary Journal, and Lime Hawk. She writes short stories about life in liminal spaces, and has yet to find the perfect carne asada taco.",
    "publications": {
      "nonfiction": [
        {
          "title": "The Santera in #4209",
          "issue": 1,
          "url": "beverly-tan-murrary-santera-in-4209.html"
        }
      ]
    }
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

  if(publications.nonfiction) {
    $div.append('<h3>Nonfiction:</h3><ul>');

    publications.nonfiction.forEach(function(story)  {
      var post = '<li><a href="' + story.url + '">' + story.title + '</a> - Issue ' + story.issue + '</li>';
      $div.append(post);
    });

    $div.append('</ul>');
  }
};
