This project was created as a test from Caresyntax. This project was created as a test from Caresyntax.
It is a basic ReactJS + Redux App that involves the CRUD functions and the use of the redux store, and react reducers and dispatch actions as best as possible. For the styling, the React-Bootstrap framework was used, in order to give some style to the forms and button using classNames.
The are 4 reducers for the complete App:
doctor reducer: In charge of building an array for the 3 hardcoded doctors consider for the app
room reducer: In charge of building an array for the 5 hardcoded rooms consider for the app
user reducer: In charge of building the array of users based on the input that is receive in the User.js file
procedure reducer: This reducer have 3 different task, depending what the users are intending to do. Could create the list of procedures based on input collected in the Procedures.js file, it could edit the procedure if the In Progress button is clicked or it can delete the procedure if the Finished button is clicked.

These four reducers are connected to the store, in order to save the state acter the action they are intended to do is perform.
For the store I have combined the reducers using the combine reducers helper function
Also, the applyMiddleware function has been implemented in the store, in order to use the redux logger which presents in a preferred way for me the previous state, the action, and the next state. This helped me to verify that the actions were executed in the way I was expecting or not.

The App has a principal container call App.js
In charge of rendering the other js files that are used for the requirements of adding patients, scheduling procedures and updating the status of them if wanted.
