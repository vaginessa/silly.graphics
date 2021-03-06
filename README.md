# ABOUT

### WHAT
- a public display of a hoarding problem
- not a brand, just an open journal
- heavy swiss interests
- lists aren't meant to be exhaustive

### WHY
- sharing is cool
- Jekyll data files allow easy organization

# SUMMARY
- built with [Jekyll][1]
- automated with [Gulp][2] ([see gulpfile][3])
- styled with [cssnext][4]
- running on [Nginx][5] ([see configuration][6])
- hosted on [Digital Ocean][7] [referral link]
- encrypted with [Let's Encrypt][9] ([A+ SSL Labs score][8])
- [see PageSpeed score][10]

### DEPLOYING
Instead of pushing source files to my server and building there, I build on my development machine and push from `_site`. And I have a gulp task (deploy) to automate this.

### SUPPORT
- js uses [classList][11]
- relies on [vw, vh][12] and [flexbox][13]
- only uses [woff][14] and [woff2][15] for webfonts
- exclusively [TLSv1.2][16] (>IE10, Android 4.3)

unless you're running some old browser, everything should render fine.


[1]: https://jekyllrb.com
[2]: http://gulpjs.com
[3]: https://github.com/jckfa/silly.graphics/blob/master/gulpfile.js
[4]: http://cssnext.io
[5]: http://nginx.org
[6]: https://github.com/jckfa/nginx-config/blob/master/sites-available/silly.graphics
[7]: https://m.do.co/c/b09c1fce4b40
[8]: https://www.ssllabs.com/ssltest/analyze.html?d=silly.graphics&latest
[9]: https://letsencrypt.org
[10]: https://developers.google.com/speed/pagespeed/insights/?url=silly.graphics&tab=mobile

[11]: http://caniuse.com/#search=classlist
[12]: http://caniuse.com/#search=vh
[13]: http://caniuse.com/#search=flex
[14]: http://caniuse.com/#search=woff
[15]: http://caniuse.com/#search=woff2
[16]: https://github.com/jckfa/nginx-config/blob/master/conf.d/directive-only/tls.conf
