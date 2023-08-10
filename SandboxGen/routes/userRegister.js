const express = require("express");
const app = express();

// ... Other middleware and setup ...

// Step 1: Handle registration form submission
app.post("/register", (req, res) => {
  const { id, password, email } = req.body;

  // Step 2: Validate password
  if (!isValidPassword(password)) {
    return res.send(
      "Your password is not secure. Put symbols, numbers, upper and lower alphabets."
    );
  }

  // Step 3: Check if ID exists
  if (isIdAlreadyRegistered(id)) {
    return res.send("Your ID is already registered.");
  }

  // Step 5: If requirements met, add user to the database
  addUserToDatabase(id, password, email);

  // Step 6: Search the added user
  const addedUser = searchUserById(id);

  // Step 7: Render the success page
  res.render("success", { user: addedUser });
});

// ... Start the server ...

// Step 2: Validate password
function isValidPassword(password) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

// Step 3: Check if ID exists
function isIdAlreadyRegistered(id) {
  // Query the database to check if the ID exists
  // Return true if exists, false otherwise
}

// Step 5: Add user to the database
function addUserToDatabase(id, password, email) {
  // Perform database insert operation
}

// Step 6: Search user by ID
function searchUserById(id) {
  // Query the database to search for the added user
  // Return user information
}
