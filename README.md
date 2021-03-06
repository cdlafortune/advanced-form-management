This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Module Project: Advanced Form Management - User Onboarding
Project Description
We've seen many different styles of form management by now -- simple to complex. Today we are going to unleash your inner form-wizard! 🧙

Set Up The Project
[x] Start off by installing a blank React app by running npx create-react-app <app-name> --use-npm.
[x] Using npm, add the following as dependencies inside your React app:
    yup
    axios
[x] Create a component file called Form.js, import it into your App.js file, and place the component in your JSX there.

STEP 1 - Create Your Advanced Form
We want to create a form to onboard a new user to our system. We need at least the following pieces of information about our new user:
 Name
 Email
 Password
 Terms of Service (checkbox)
 A Submit button to send our form data to the server.
STEP 2 - Implement Form Validation and Error Messaging
Form validation is one of the facets of an application that makes it feel polished and controlled from a user perspective. With that in mind, implement the following:

[x]Using Yup, set up at least two different validations along with custom error messages that will display on screen when validation fails.
STEP 3 - Make a POST Request
Being able to POST data is a key skill of any developer, no matter your skill level.

[x]Craft a POST request using axios that sends your form data to the following endpoint: https://reqres.in/api/users
[x]Verify using a console.log() that you are receiving a successful response back
(Note: For those that are curious, we're using reqres.in for this assignment's API. It's a free API that allows us to simulate a POST request for any data that we send it. Pretty awesome!)

STEP 4 - Display Returned Data to Screen
[x]When you get your data back, you will want to do something with it, right? Let's display a list of users in our app.

 Set up a state property called users that is initialized with an empty array
 Every time you make a POST request, and get that new user data back, update your users state with the new user added to the array
 Render users in your app. You can use the html pre tag and JSON.stringify() method to display your post request.
Stretch Goals
The following are stretch goals that you should attempt after you meet MVP for your project:

 Add basic styling to your form in your app. Make it look pretty with any styling method you choose.
 Implement a dropdown menu in your form. Add a role value to your state and add a dropdown with different roles for your users.
 Create 3 new inputs inside your form of your choice along with corresponding validation and error messaging
 Add to your existing handling so that, if a user inputs their email as waffle@syrup.com, they receive an error message in their form that says "That email is already taken."


 CYPRESS ASSIGNMENT
 Step 2: Write and Run Tests
In order to complete this challenge you will need to write and run the following tests. They do not need to pass, so long as the reasons they are failing is legitimate.

Set up tests that will...

 Get the Name input and type a name in it.
 Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
 Get the Email input and type an email address in it
 Get the password input and type a password in it
 Set up a test that will check to see if a user can check the terms of service box
 Check to see if a user can submit the form data
 Check for form validation if an input is left empty