var editors = {
	"editors": [
		{
			"name": "Brittany Lyons",
			"title": "Managing Editor",
			"picture": "/images/editors/brittany.jpg"
		},
		{
			"name": "Chioma Urama",
			"title": "Fiction Editor",
			"picture": "/images/editors/chioma.jpg"
		},
		{
			"name": "Dana De Greff",
			"title": "Fiction Editor",
			"picture": "/images/editors/dana.jpg"
		},
		{
			"name": "Jon Lampe",
			"title": "Poetry Editor",
			"picture": "/images/editors/jon.jpg"
		},
		{
			"name": "Mario Ariza",
			"title": "Poetry Editor",
			"picture": "/images/editors/mario.jpg"
		},
		{
			"name": "Stephanie Lane Sutton",
			"title": "Poetry Editor",
			"picture": "/images/editors/blank.jpg"
		},
		{
			"name": "Candice Mays",
			"title": "Art Editor",
			"picture": "/images/editors/candice.jpg"
		},
		{
			"name": "Matthew Nerger",
			"title": "Nonfiction Editor/Webmaster",
			"picture": "/images/editors/matt.jpg"
		}
	],

	"html": '<div class="editor"><img src="%img%" alt="%alt_name% - %alt_title%"><h4>%title%</h4><p>%name%</p></div>',

	"render": function () {
		this.editors.forEach(function (editor) {
			var img = editor.picture;
			if (img === '') {
				img = '/images/editors/blank.jpg';
			}

			var printHTML = editors.html.replace('%img%', img).replace('%alt_name%', editor.name).replace('%alt_title%', editor.title)
				.replace('%title%', editor.title).replace('%name%', editor.name)
			$('#editor-display').append(printHTML);
		});
	}
};

editors.render();
