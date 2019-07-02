
To run locally:  npm run start, then navigate to /demo


This application was built using Node JS, Express, React, Heroku, and a scraper called HTML-metadata.  

On a high level, it queries the free opentable heroku api when selecting a city.

The API sends paginated JSON packets which are used to generate cards with restaurant information, including the Open Table URL.

When a restaurant card gets clicked, it queries my Express API with the restaurant ID, which HTML-metadata uses to scrape the JSON-LD tag of the restaurant.  

Information from the JSON-LD is used to populate the restaurant rating and type of cuisine served, and checks to see if there is a way to book online.  

============================

Note:  While it works locally, I did not have enough time to debug why the scraping failed while deployed on Heroku.  Various articles seem to point that it is due to a 30 second timeout, but I was not able to confirm if that was the source of the bug.

A version with dummy data can be viewed at  https://opentable-react.herokuapp.com/demodata
