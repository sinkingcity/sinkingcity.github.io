var issues = [
	{
		"issue_number": 1,
		"cover": {
			"rectangle": "/issues/01/images/cover.jpg",
			"splash": "/issues/01/images/boneyard-carmella-de-los-angeles-guiol.jpg",
			"title": "Boneyard",
			"author": "Carmella de los Angeles Guiol",
			"bio": 'A Miami native and a graduate of Amherst College, Carmella de los Angeles Guiol is currently pursuing a Masters in Fine Arts in Creative Writing at the University of South Florida. Her writing and/or photography has appeared in The Toast, The Normal School, Thought Catalog, The Fourth River, and elsewhere. You can often find her in the garden or kayaking the Hillsborough River, but you can always find her at <a href="www.therestlesswriter.com">www.therestlesswriter.com</a>.'
		},


		"fiction": [
			{
				"title": "Theresa Scott",
				"author": {
					"name": "Nora Bonner",
					"author_id": 0
				},
				"url": "/issues/01/nora-bonner-theresa-scott.html"
			},

			{
				"title": "American General",
				"author": {
					"name": "Ernest White II",
					"author_id": 1
				},
				"url": "/issues/01/ernest-white-american-general.html"
			}
		],


		"poetry": [
			{
				"title": "In the Painter's House",
				"author": {
					"name": "Hannah Dela Cruz Abrams",
					"author_id": 2
				},
				"url": "/issues/01/hannah-dela-cruz-abrams-painters-house.html"
    		},

			{
				"title": "Jabuticaba Fruit Tree",
				"author": {
					"name": "Caroline Barr",
					"author_id": 3
				},
				"url": "/issues/01/caroline-barr-jabuticaba-fruit-tree.html"
    		},

			{
				"title": "Venus de Milo with Drawers to Her Lover",
				"author": {
					"name": "Caroline Barr",
					"author_id": 3
				},
				"url": "/issues/01/caroline-barr-venus-de-milo.html"
    		},

			{
				"title": "Blank",
				"author": {
					"name": "Caroline Barr",
					"author_id": 3
				},
				"url": "/issues/01/caroline-barr-blank.html"
    		},

			{
				"title": "Ode to Pablo Picasso",
				"author": {
					"name": "Daniel Ruiz",
					"author_id": 4
				},
				"url": "/issues/01/daniel-ruiz-pablo-picasso.html"
    		},

			{
				"title": "Under the Threat of Eden",
				"author": {
					"name": "Emma Bolden",
					"author_id": 5
				},
				"url": "/issues/01/emma-bolden-threat-of-eden.html"
    		},

			{
				"title": "The Parable of the Wayward Child",
				"author": {
					"name": "Shara McCallum",
					"author_id": 6
				},
				"url": "/issues/01/shara-mccallum-wayward-child.html"
    		},

			{
				"title": "Sonnet for Snapper Creek",
				"author": {
					"name": "Maureen Seaton",
					"author_id": 7
				},
				"url": "/issues/01/maureen-seaton-snapper-creek.html"
    		},

			{
				"title": "Haiku",
				"author": {
					"name": "M. M. DeVoe",
					"author_id": 8
				},
				"url": "/issues/01/m-m-devoe-haiku.html"
    		}
  		],

		"nonfiction": [
			{
				"title": "The Santera in #4209",
				"author": {
					"name": "Beverly Tan Murray",
					"author_id": 9
				},
				"url": "/issues/01/beverly-tan-murray-santera-in-4209.html"
    		}
		]
	}
]

var printIssue = function (issue_number) {
	var issue_id = issue_number - 1;
	var $div = $('#issue-box');

	var issue = issues[issue_id];
	var cover = issue.cover;

	var coverHTML = '<div class="container" id="issue-box"><div class="float-right issue-image-container"><img src="' +
		cover.splash +
		'" class="issue-image"><p class="attribution text-center"><i>' +
		cover.title + 'by' + cover.author +
		'</i></p><hr><p class="attribution text-justify">' +
		cover.bio +
		'</p></div>';

	var issueHTML = '<h1>Issue ' + issue.issue_number + '</h1>' +
		'<h3>Fiction:</h3><ul>';

	issue.fiction.forEach(function (story) {
		var storyHTML = '<li><a href="' + story.url + '">"' +
			story.title + '" by ' + story.author.name + '</a></li>';

		issueHTML += storyHTML;
	});

	issueHTML += '</ul><h3>Poetry:</h3><ul>';

	issue.poetry.forEach(function (story) {
		var storyHTML = '<li><a href="' + story.url + '">"' +
			story.title + '" by ' + story.author.name + '</a></li>';

		issueHTML += storyHTML;
	});

	issueHTML += '</ul><h3>Nonfiction:</h3><ul>';

	issue.nonfiction.forEach(function (story) {
		var storyHTML = '<li><a href="' + story.url + '">"' +
			story.title + '" by ' + story.author.name + '</a></li>';

		issueHTML += storyHTML;
	});

	issueHTML += '</ul>';

	$div.append(coverHTML + issueHTML);


}
