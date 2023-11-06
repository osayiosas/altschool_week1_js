// dummy DataSource
const userDataBase = {
  "Osayi123": {
    firstName: "Joan",
    lastName: "idiaghe",
    email: "idiagheosaigbovoosas@gmail.com",
    accountActivated: true,
    password: "joan123456",
  },

  "Osaigbovo1": {
    firstName: "Osaigbovo",
    lastName: "Sunday",
    email: "osaigbovo@gmail.com",
    accountActivated: true,
    password: "osayi23456",
  },

  "ola10": {
    firstName: "Ola",
    lastName: "PKola",
    email: "ola@gmail.com",
    accountActivated: true,
    password: "olann23456",
  },
};

function displayUserDetails() {
  // enter user details
  let username = prompt("Enter your username");

  while (validateUsaerName(username) == false) {
    username = prompt("Username not valid. Please enter a valid username");
  }

  if (username == null) {
    return;
  }

  // eneter password

  let password = prompt("Enter your password");

  while (validatePassword(password) == false) {
    password = prompt("Password not valid. Please enter a valid password");
  }

  if (password == null) {
    return;
  }

  //confirm password

  let confirmPassword = prompt("Confirm your password");
  while (confirmPassword !== password) {
    confirm = prompt("Confirm your password again");
  }

  if (confirm == null) {
    return;
  }

  //check for username

  const user = userDataBase[username];

  if (user == undefined) {
    alert("user not found: please register again")
    return;
  }

  console.log(user);

  alert(`
  User found with the following details:
  Firist Name: ${user.firstName}
  Last Name: ${user.lastName}
  Email: ${user.email}
  Account activated: ${user.accountActivated}
  `);
}

displayUserDetails(); // cancel take us back

alert("You have come to the end of the page! Goodbye!");

//we can define our functions any where we want as far as we call them.

function validateUsaerName(username) {
  if (username == null) {
    return true;
  }

  if (username.length > 10) {
    return false;
  } else {
    return true;
  }
}

function validatePassword(password) {
  if (password == null) {
    return true;
  }
  if (password.length < 6) {
    return false;
  } else {
    return true;
  }
}

function validateConfirmPassword(confirmPassword) {
  if (confirmPassword == null) {
    return true;
  }

  if (confirmPassword.length < 6) {
    return false;
  } else {
    return true;
  }
}
