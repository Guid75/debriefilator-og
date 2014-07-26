debriefilator
=============

A simple SCRUM retrospective tool
[![Dependancy](http://img.shields.io/david/Guid75/debriefilator.svg)

Install
=======

```
npm install
bower install
```

to start a server juste launch ```grunt serve```


Heroku
======

To deploy on heroku we use this method https://github.com/mbuchetics/heroku-buildpack-nodejs-grunt

```
heroku config:add BUILDPACK_URL=https://github.com/mbuchetics/heroku-buildpack-nodejs-grunt.git
heroku labs:enable user-env-compile
heroku config:set NODE_ENV=production
```
