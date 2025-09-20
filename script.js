// Global variable example
let globalCount = 0;

// Function demonstrating local scope and parameters
function incrementCount(step) {
  let localCount = globalCount; // local copy
  localCount += step;
  return localCount; // return the new value
}

// Function to update the global variable and log it
function updateGlobalCount(step) {
  globalCount = incrementCount(step);
  console.log("Global count updated to:", globalCount);
}

// Example calls
updateGlobalCount(2); // Global count updated to: 2
updateGlobalCount(3); // Global count updated to: 5
const animateBtn = document.getElementById('animateBtn');
const animatedBox = document.getElementById('animatedBox');

function triggerBounceAnimation() {
  animatedBox.classList.add('bounce-animation');

  // Remove class after animation ends to allow retriggering
  animatedBox.addEventListener('animationend', () => {
    animatedBox.classList.remove('bounce-animation');
  }, { once: true });
}

animateBtn.addEventListener('click', triggerBounceAnimation);
