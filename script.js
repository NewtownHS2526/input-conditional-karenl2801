// Do Now: Find the IDs - open the Dev Tool's console
const textBox = document.querySelector("#user-input");
const outputBox = document.querySelector("#quiz-outputs");
const statusBox = document.querySelector("#status");

console.log(textBox, outputBox, statusBox);


let score = 0;

const checkAnswer = () => {
  // Retrieve inputted value
  const answer = textBox.value.toLowerCase().trim();

  if (answer === "manhattan") {
    outputBox.innerHTML += `<h3>Manhattan</h3><p>Commuter Central! Only 22% of its residents own a car!</p>`;
    score++;
    statusBox.textContent = `Score: ${score}`;
  } 
  else if (answer === "brooklyn") {
    outputBox.innerHTML += `<h3>Brooklyn</h3><p>The most populous Borough, with nearly 3 million residents!</p>`;
    score++;
    statusBox.textContent = `Score: ${score}`;
  } 
  else if (answer === "bronx") {
    outputBox.innerHTML += `<h3>The Bronx</h3><p>Home of the Yankees and the birthplace of salsa dancing.</p>`;
    score++;
    statusBox.textContent = `Score: ${score}`;
  } 
  else if (answer === "queens") {
    outputBox.innerHTML += `<h3>Queens</h3><p>The largest Borough, at 109 square miles.</p>`;
    score++;
    statusBox.textContent = `Score: ${score}`;
  } 
  else if (answer === "staten island") {
    outputBox.innerHTML += `<h3>Staten Island</h3><p>The roomiest Borough, with the fewest people per square mile.</p>`;
    score++;
    statusBox.textContent = `Score: ${score}`;
  } 
  else {
    statusBox.textContent = "Not a borough... try again!";
  }

  // Match against boroughs; Add text to output and increment score

  //check if score = 5! (winner)
if (score === 5) {
    statusBox.textContent = "You named all five boroughs!";
  }

  // Reset the textBox
  textBox.value = "";
};

textBox.addEventListener("change", checkAnswer);



// Manhattan - `<h3>Manhattan</h3><p>Commuter Central! Only 22% of its residents own a car!</p>`
// Brooklyn - `<h3>Brooklyn</h3><p>The most populous Borough, with nearly 3 million residents!</p>`
// Bronx - `<h3>The Bronx</h3><p>Home of the Yankees and the birthplace of salsa dancing.</p>`
// Queens - `<h3>Queens</h3><p>The largest Borough, at 109 square miles.</p>`
// Staten Island - `<h3>Staten Island</h3><p>The roomiest Borough, with the fewest people per square mile.</p>`