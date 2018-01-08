# two_page_landing_exercise from Axel Kaban

See the website version one here: [Spiral](https://fierce-harbor-25373.herokuapp.com/)
See the website version two(react) here: [Spiral react](https://spiral-react.herokuapp.com/)

# Requirements:

## The Details:
Please ensure that the site can be viewed on Desktop, Tablet (iPad) and Mobile devices (iPhone, Galaxy S6, etc).



## Page 1 (Landing):
### Create a landing page with the following elements:
• sticky header (logo and some navigation links)
• hero image (or video)
• a section containing text (please use “Lorem Ipsum”)
• basic footer with links

## Page 2 (Contact form):
### Set up a page containing a form. The form would have the following fields and corresponding validation:
• First name – characters only
• Last name – characters, hyphens and apostrophes only
• Email – valid email addresses
• Zip code – US zip validation
• US States – a drop down list of states

# Extra Credit:
Provide server-side code to store form fields data in the database.
For PHP, make sure to use PDO, parameterized queries, server-side validation.


### The app is a mock up of a fake company, really simple
###### Technologies used:
for version one:

Back end to store data on db using postgreSQL, Nodejs, and Express. Front end with HTML5, CSS3, JavaScript &JQuery. I used normalize.css as a reset for my styles. simple logo made in illustrator. Images sourced through opensource.

For version three:
I had created version two through create-react-app but there was too much that I was not going to use and for such a static page, React was just a personal caprice. I used React, Node, Express, Mustache Express, Webpack, Babel, PostgreSQL for the db, and axios. 

### As a note

Once set the database, it saves the contact info. very basic validation built, just through regEx.

I have left console. logs for display purposes only. You're able to see the object created from the form and the id returned once it has been inserted in the database.

At last, the react version renders form as a modal instead of looking like a second page.
