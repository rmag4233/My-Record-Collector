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

The planning phase for this app started almost instantly after the assignment of the project. When I learned that the content/objective of the application was on the developer to come up with, I immediately began asking myself "what app would I want to use after building?" The answer was quite obvious - I wanted to create an application that would allow me to keep track of my record collection in a digital format. Why? Because I am someone who enjoys to collect records and I want to be able to keep track of it so I know whether or not I have misplaced a record (perhaps in a move) and so I only have to refer once to the catalog number on the record and from there can reference sites to get a sense for how much my record collection is worth. Simply put - I wanted to create a product that I had knowledge of, an interest in building and a use for after building.

My approach for this project, from a development perspective, was to begin by building out a clean UI using Bootstrap. To ensure I stayed on track with this approach, I started by drawing some descriptive wireframes (linked below) and really developing a sense in my head for how I wanted the user to traverse through the application. I wanted to make use of modal windows and handlebars, so I paid particular attention to how those attributes would work within the context of the application.

Once I had a working shell of the front end, I began to develop the user authentication functionality. I knew I wanted to have a user sign up and sign in before having access to view, add, edit or delete any albums as well as be able to make other user actions such as change password and sign out. Methodically, I added each piece of user functionality and tested that the user messaging and actions that were available for the user to perform (through the buttons on the page) made sense with where the user was in the application.

Next I added my album resource to my API, using curl scripts to ensure that as I built out the resource, I was able to perform the expected actions on it. After confirming ability to add, edit, delete and show the album resource through curl scripts. I connected the resource to my front end and using handlebars and modal windows methodically built out the functionality I tested in my curl scripts to my UI.

Once I tested through this functionality, it was time for me to the connect the user to the album. I knew that the relationship the resources would have would be one user has many albums and so I modified my albums resource to reflect that. In addition, I knew that the albums table was only going to show the albums that the logged in user had in their collection. This meant that a user needed to be logged in to view their albums, so I made the album controller inherit from the ProtectedController class and made it so that actions such as index, show, update and destory were based on the current users list of albums.

I am most proud of the UI of my application as I feel as though it is very neat and aesthetically pleasing to look at. It is also responsive and therefore meets my 18th user story below which allows me to update my collection in real time.



## Wireframes and User Stories

Wireframes -
https://imgur.com/fKPuEjh
https://imgur.com/amk7tU7
https://imgur.com/X6sTLPD  

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
18. As a user, I want to be able to access My Record Collector from my phone so that I can update my collection in real time.

## Future Iterations

In future iterations of this project, I would like to build out functionality that allows multiple users to view other people's lists/search the entire database for all albums that people have in their collection so that users could try to make trades/buy records from one another. There are also additional APIs I would like to research connecting to - perhaps a Spotify API or to a site that provides the user with the value of a piece of their collection based on information like the catalog number and the condition of the record. I will be looking to add this functionality in future releases.

## Links to Deployed Sites

Front End -
https://rmag4233.github.io/My-Record-Collector/

Back End -
https://my-record-collector.herokuapp.com/

## Repo for API
https://github.com/rmag4233/My-Record-Collector-API
