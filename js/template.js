var template = {
  /* Header info */
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

  /* Footer */
  'footer': {
    'html': `
    <footer class="footer">
      <div class="container">
        <div class="row footer-row">
          <div>
            <a href="http://www.as.miami.edu/" target="_blank">
              <img src="images/um-arts-and-sciences.jpg" alt="UM Arts and Sciences" class="footer-img">
            </a>
          </div>
          <div class="copyright">
            <div class="footer-social">
              <a href="http://www.facebook.com/sinkingcityandcafecito" target=_blank>
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
              </a>
              <a href="http://www.twitter.com/sinkingcity" target=_blank>
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
              </a>
            </div>
            © 2016 by Sinking City. All Rights Reserved.
          </div>
          <div>
            <a href="http://www.as.miami.edu/english/creativewriting/" target="_blank" class="no-decoration">
              <div class="cw-mfa">Creating Writing MFA @ UM</div>
            </a>
          </div>
        </div>
      </div>
    </footer>`,
    render: function() {
      $('body').append(this.html);
    }
  },

  /* Render all */
  render: function() {
    this.header.render();
    this.footer.render();
  }
};

template.render();
