import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBdfFq3k-9RvCr1dnAAWbOp4nS8gORg558",
  authDomain: "mythology-264b2.firebaseapp.com",
  databaseURL: "https://mythology-264b2.firebaseio.com",
  projectId: "mythology-264b2",
  storageBucket: "mythology-264b2.appspot.com",
  messagingSenderId: "694562225344",
  appId: "1:694562225344:web:effbe48d4598ec2ea7c125",
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
