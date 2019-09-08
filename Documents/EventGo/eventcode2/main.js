// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
  apiKey: 'AIzaSyCgFkUuGZW3bDldAvlREx311Ww4JfY9XLA',
  authDomain: "fir-testing-89140.firebaseapp.com",
  databaseURL: "https://fir-testing-89140.firebaseio.com",
  storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
