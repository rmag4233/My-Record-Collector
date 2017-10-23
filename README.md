[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# About The App

It's a simple yet well known problem for music enthusiasts, especially record collectors - what is the best way for me to keep track of my collection? My Record Collector seeks to resolve that issue and provide the user with the opportunity to represent their record collection in a digital space. Whether the format is tape, vinyl, or CD, My Record Collector allows a user to document the records in their collection, and the ability to edit, delete or add new records to it. The catalog number field is especially useful for users who may look to trade or sell online or just evaluate the worth of certain pieces of their collection. The app is also responsive, meaning you can sign in from the record store and update your collection as soon as you've completed a transaction. So sign up, sign in and start collecting!



## Technologies Used

1. HTML5
2. CSS3
3. JavaScript
4. jQuery/DOM manipulation
5. ajax requests to an api
6. Bootstrap
7. Handlebars
8. Ruby on Rails

## Planning Phase

The planning phase of this game started when I found out that the first project would be a tic-tac-toe game. Immediately, I started thinking about how the subjects covered in class could apply to solving the problem of creating an interactive tic-tac-toe game. My approach was to start small, understanding that despite the seemingly simple nature of the task at hand, there could be gotchas along the way. Fortunately, through wire framing and writing user stories, I was able to develop a strategy for how to start the game. First, I would create a very basic HTML structure so that I could test my functionality in browser, with minimal styling. I would build my game board, consisting of 9 div elements with unique ID names, so that I could easily keep track of the state of each element by assigning a click event handler to their HTML class. I knew that on the backend I would be creating an empty array to represent the state of the game, with pushes taking place on each valid click. From there, I knew I would need variables to store the current player, playerX, playerO, whether or not there was a winner or if the game was over and functions to play the game, check for a winner and switch the player. From there, constant testing allowed me to get the site in working order with no known user facing issues.

I am most proud of an extra feature I added which allows users to recall games that they have previously started and continue to play it. Parsing the JSON to reconfigure the board was relatively simple, but it took some creativity for me to determine who the current player should be on a retrieved game. While the api stored the state of the game and whether or not it was over, it did not store who the current player was. So, what I did was loop through the retrieved game array, count how many empty spaces there were (determined by the value empty string value in the array) and ran a modulo operator to determine if the count of empty strings was odd or even. If it was odd, the current player would be X (or whomever the first player was) and if it was even, the current player would be o (or whomever the second player was).

## Wireframes and User Stories

Wireframes -
(https://imgur.com/fKPuEjh)
(https://imgur.com/amk7tU7)
(https://imgur.com/X6sTLPD)

User Stories -

1. As a user I want to be able to sign up to My Record Collector so that I can being cataloguing my record collection
2. As a user I want to be able to enter in my email address and password so that I can sign up to My Record Collector
3. As a user I want to be able to have my credentials authenticated so that I can become a registered user of My Record Collector
4. As a registered user, I want to be able to enter in the email and password I signed up with so that I can sign in to My Record Collector
5. As a signed in user, I want to be able to sign out of My Record Collector
6. As a signed in user, I want to be able to change/update my password
7. As a user, I want to be able to add new records to my collection
8. As a user, I want to be able to add the album title of a record in my collection
9. As a user, I want to be able to add the artist name of a record in my collection
10. As a user, I want to be able to add the year released of a record in my collection
11. As a user, I want to be able to add the genre of a record in my collection
12. As a user, I want to be able to add the format of a record in my collection
13. As a user, I want to be able to add the serial number of a record in my collection
14. As a user, I want to be able to view my record collection
15. As a user, I want to be able to quickly see how many records I have in my collection
16. As a user, I want to be able to see albums by an artist in my collection **** (not MVP)
17. As a user, I want to be able to remove an album from my collection

## Future Iterations

In future iterations of this project, I would like to build out functionality that allows multiple users to view other people's lists/search the entire database for all albums that people have in their collection so that users could try to make trades/buy records from one another. There are also additional APIs I would like to research connecting to - perhaps a Spotify API or to a site that provides the user with the value of a piece of their collection based on information like the catalog number and the condition of the record. I will be looking to add this functionality in future releases.
