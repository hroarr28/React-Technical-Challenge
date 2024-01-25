# React Technical Challenge Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# React-Technical-Challenge

The task was to create a single page application that allows the user to see the cumulative cost of giving a $5 coupon to the users on their birthday.

The chart is a Line graph that shows the number of users with birthdays in each month and the cumulative price of giving a $5 voucher to each of these users.

The chart can be filtered to remove users from it. It can be filtered to remove users who have less than the minimum spend selected. It can be filtered to show only Male, Female or All and can be filtered by region.

Below the chart a table is displayed with the same information in a readabale format.

# Technologies used

React was used to build this project to allow for the data to be updated in real time.

# Features for the future

In the future I would like to make the project responsive to allow use on a mobile device or to create a react-native app to allow this.

Testing would be added to insure the product is working correctly. I created Hooks in the project to allow tests to be written easily.

I would add the user data into a SQL data like postgresql and use axios or something similar to access the data.

If the product were to get a lot more complex I would consider moving from context to something like Redux.

Add a key to the graph to explain the filters in more detail 

# What is wrong with this statement this.setState({count:this.state.count+1})?

The state is being manipulated by adding on 1 and is relying on the previous state, because of this its better to use prevState to set state to make sure the state has been re rendered. So it is better to use this. this.setState((prevState)=>{return {count:prevState.count+1}}) this will ensure the +1 is added onto the most recent number


# What is redux and how does it work?

Redux is a state management tool that provides a centralized place to store different data in states and helps avoid passing states through multiple components. Redux is better for large applications and has optimizations to avoid the app re rendering. Redux is good at handling asyncronous logic (effects that happen in the background while the rest of the app is running)
