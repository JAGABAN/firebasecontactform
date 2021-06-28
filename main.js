// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAeZbgMUOrTf_EF4165jHvrfQesAtoabvM",
    authDomain: "contactform-ed252.firebaseapp.com",
    projectId: "contactform-ed252",
    storageBucket: "contactform-ed252.appspot.com",
    messagingSenderId: "537445814398",
    appId: "1:537445814398:web:11d92def13c5023ca2082f",
    measurementId: "G-4FNGGQ9E01"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

 //Reference messages collection
var messagesRef = firebase.database().ref("messages");



// Listen for  form submit
document.querySelector('#contactForm').addEventListener('submit', submitForm)

function submitForm(e){
e.preventDefault();


//Get values
let name = getInputVal('name')
let company = getInputVal('company')
let email = getInputVal('email')
let phone = getInputVal('phone')
let message =getInputVal('message')

console.log(name);

// Save message
saveMessage(name,company,email,phone,message);

 // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset()
}



// Functions to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,company,email,phone,message){
let newMessageRef = messagesRef.push();
newMessageRef.set({
  name:name,
  company:company,
  email:email,
  phone:phone,
  message:message
})
}
