var template = {
  'header': {
    'html': {
      'start': '<header class="container"><div class="banner"><nav><ul class="header-links">',
      'link': '<li><a href="%url%" alt="%alt%">%title%</a></li>',
      'end': '</ul></nav></div></header>'
    },
    'links': [
      {
        'title': 'home',
        'url': 'index.html',
        'alt': 'Return home'
      },
      {
        'title': 'about',
        'url': 'about.html',
        'alt': 'About Sinking City'
      },
      {
        'title': 'submit',
        'url': 'submit.html',
        'alt': 'How to submit your work'
      },
      {
        'title': 'issues',
        'url': 'issues.html',
        'alt': 'See all out issues'
      }
    ],
    render: function() {
      var printHTML = this.html.start;
      this.links.forEach(function(link) {
        printHTML += template.header.html.link.replace("%url%", link.url).replace("%alt%", link.alt).replace("%title%", link.title);
      });
      printHTML += this.html.end;

      $('body').prepend(printHTML);
    }
  },
  render: function() {
    this.header.render();
  }
};

template.render();
