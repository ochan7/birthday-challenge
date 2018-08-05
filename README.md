# Birthday Challenge

This project is to create a small web app that allows you to keep track of birthdays. When you open the app, you'll be able to see whose birthdays are today, or coming up in the next 2 weeks. It will also tell you how old they are (or will be).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Prerequisites

You will need to have Node v7 and above installed on your system. To check if you have it installed type the following command in your terminal which will return your version.

```
node -v
```
You will also need to check that npm is installed along with node. To check type the following
```
npm -v
```
If you do not have node or npm installed, follow this [guide](https://nodejs.org/en/download/package-manager/).

## Installing

In order to install this project make sure you are in a directory you wish to install in your terminal and run the following command
```
git clone https://github.com/ochan7/birthday-challenge.git
```
then navigate into the folder and run
```
npm install
```
You will also need to navigate into the client folder and run the above command.

## Running the project

Open a terminal window from the root of the project and run 
```
npm run server
```
This will run the API at http://localhost:8081.

In a new terminal, navigate into the client folder and run
```
npm run start
```
This should open a new window with the front end of the application. If it does not you can open it at http://localhost:3000.

## Running the tests

There are two sets of tests, one for the back-end code and another for the front-end.
To run the tests for the back-end, run the following command from the root directory.
```
npm test
```

To run the test for the front-end, make sure the server and application are running and in a terminal from the client directory run the following command.
```
npm run cypress:run
```
If you wish the to see UI whilst also being tested you can alternatively run
```
npm run cypress
```

## Technical choices
When I first saw the challenge I realised that it was really two projects. The first to make a back-end restful API and the second to make a front-end consumer. For the back-end I went with express since I had prior experience with it and in general it is very fast to get up and running with. For testing the API I used mocha, chai and supertest to check that I was getting the right responses and status codes.

For the front-end I decided to go with react since I wanted to build reusable dynamic components and react is built around a component based architecture. I used create react app to quickly get boilerplate code. I had prior experience working with react however I hadn't done any testing for front-end applications before but after having been following some recent trends I decided to go with cypress for the end to end testing due to its simple installation and very quick setup.

I also decided to use eslint to keep the linting of files consistent and help to reduce errors.

## Trade-offs
With any project there are always some trade-offs. The back-end was made to be very light in the sense that it doesn't deal with too much business logic, I did this in order to get the API built as quickly as possible. I implemented some basic error handling like when deleting a birthday that the id was valid, however I would have liked to add a lot more error handling but decided time would be better spent working on the front-end. The front-end deals with things like sorting the dates


## Built With
* [moment](https://momentjs.com/)
* [react](https://reactjs.org/)
* [cypress](https://www.cypress.io/)
* [supertest](https://github.com/visionmedia/supertest)
* [mocha](https://mochajs.org/)
* [chai](http://chaijs.com/)
* [express](https://expressjs.com/)

## Authors

[Olie Chan](https://github.com/ochan7)
