function displayResults(){
  document.getElementById('results-container').style.display = "block";
  document.getElementById('quiz').style.display = "none";
  populateResults();
}

function continueQuiz(){
  document.getElementById('results-container').style.display = "none";
  document.getElementById('quiz').style.display = "block";
}
