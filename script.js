const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scoresDiv = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
  const name = nameInput.value.trim();
  const score = parseInt(scoreInput.value);

  // Validate input
  if (name === "" || isNaN(score)) {
    alert("Please enter valid name and score.");
    return;
  }

  // Get existing scores from Local Storage
  const existingScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Add the new score to the array
  existingScores.push({ name, score });

  // Save the updated scores back to Local Storage
  localStorage.setItem("highScores", JSON.stringify(existingScores));

  // Show scores after saving
  showScores();
}

// Show scores in div
function showScores() {
  // Clear previous content
  scoresDiv.innerHTML = "";

  // Get scores from Local Storage
  const existingScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Check if there are scores
  if (existingScores.length === 0) {
    scoresDiv.innerText = "No scores yet";
    return;
  }

  // Create a table
  const table = document.createElement("table");

  // Create the table header row
  const headerRow = table.insertRow(0);
  const nameHeader = headerRow.insertCell(0);
  const scoreHeader = headerRow.insertCell(1);
  nameHeader.innerHTML = "<b>Name</b>";
  scoreHeader.innerHTML = "<b>Score</b>";

  // Create rows for each score
  for (let i = 0; i < existingScores.length; i++) {
    const row = table.insertRow(i + 1);
    const nameCell = row.insertCell(0);
    const scoreCell = row.insertCell(1);
    nameCell.textContent = existingScores[i].name;
    scoreCell.textContent = existingScores[i].score;
  }

  // Append the table to the scores div
  scoresDiv.appendChild(table);
}

// Example: Trigger saveScore on button click
const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", saveScore);

