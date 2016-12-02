# URL-Shortener-Microservice

This is a **Node & Express** API project for [Free Code Camp challenge](https://www.freecodecamp.com/challenges/url-shortener-microservice). Also applied **Handlebars** for view.

Project hosted in Heroku. You can [view the site here](https://url-shortcut.herokuapp.com/). Instruction included in site for how to use. 

### Future Work:

No database applied in this project, url shortcuts will lose when user exit the site. May come back for further development. 

Apply ReactJS for dynamic view of originalURL - shortcuts. But this also need database.

## Reference:

URL validation: 

Great discussion in stackoverflow:

http://stackoverflow.com/questions/1303872/trying-to-validate-url-using-javascript

http://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url

http://stackoverflow.com/questions/161738/what-is-the-best-regular-expression-to-check-if-a-string-is-a-valid-url

Tried to use status code for url validation, but not a good one for user experience. Learned some useful info, W3 org for http request status code

https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html

Finally use this **Regexp** in my project

http://stackoverflow.com/questions/8188645/javascript-regex-to-match-a-url-in-a-field-of-text

Weired problem with **req.path vs res.originalUrl**

http://stackoverflow.com/questions/12525928/how-to-get-request-path-with-express-req-object

credit to Davide Pastore for borderless table

http://stackoverflow.com/questions/18075794/bootstrap-table-without-stripe-borders

table style credit to colorlib 

https://colorlib.com/wp/css3-table-templates/

