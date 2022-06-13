
//use fetch to get the initial question json file and store the contents in var initialQuestion
var initialQuestions;
fetch("../questions/initialQuestions.json")
.then(response => {
   return response.json();
})
.then(data => {
  initialQuestions = data;
});


//update contents of question container to question given by params
function displayQuestion(quesCat, quesNum){
  if (quesCat == "init"){
    var question = initialQuestions[quesNum]
  }

  //create question element
  qstn = document.createElement("div");
  qstn.id = "question";
  qstn.innerHTML = "<h3>".concat(question.question, "</h3>");

  //answers container
  answrs = document.createElement("div");
  answrs.id = "answer-container";
  //indiviudual answers
  for (var i=0; i<question.answers.length; i++){
    var answr = document.createElement("div");
    //prepare attribute increases
    var updtr = "updateAlignment([";
    for (var ii=0; ii<question.answers[i].results.length; ii++){
      if (ii > 0){updtr = updtr.concat(", ");}
      updtr = updtr.concat("{'att':'", question.answers[i].results[ii].att, "',");
      updtr = updtr.concat("'value':'", question.answers[i].results[ii].value, "'}");
    }
    //max values
    updtr = updtr.concat("], {'hetero':'", question.max.hetero);
    updtr = updtr.concat("', 'homo':'", question.max.homo);
    updtr = updtr.concat("', 'other':'", question.max.other, "'});");
    //other info
    answr.setAttribute("onclick", updtr);
    answr.className = "answer";
    answr.innerHTML = "<p>".concat(question.answers[i].answer, "</p>");
    answrs.appendChild(answr);
  }

  //replace question-container contents
    quesCon = document.getElementById("question-container");
    quesCon.innerHTML = "";
    quesCon.appendChild(qstn);
    quesCon.appendChild(answrs);
}

//Update alignment values
function updateAlignment(updts,mx){
  for(var i=0; i<updts.length; i++){
    if(updts[i].att.includes("all")){ //update all values
      for(var ii=0; ii<alignments.length; ii++){
        alignment[alignments[ii]] += parseInt(updts[i].value);
      }
    }
    else{ //update some values
      alignment[updts[i].att] += parseInt(updts[i].value);
    }
  }
  //update max values
  max.hetero += parseInt(mx.hetero);
  max.homo += parseInt(mx.homo);
  max.other += parseInt(mx.other);

  //call up the next question
  nextQues();
}

//function to increment question
function nextQues(){
  if(asking[0] == 'init'){
    asking[1] ++;
    if(asking[1] < initialQuestions.length){
      displayQuestion(asking[0], asking[1]);
    }else{
      displayResults();
    }
  }
}


//setup register for asked questions
var asking = ['init',0]

//setup values for recording and analysis
var alignment = {
  "hetero":0,
  "homo":0,
  "cetero":0,
  "other":0,
  "heterosexual":0,
  "heteroromantic":0,
  "homosexual":0,
  "homoromantic":0,
  "othersexual":0,
  "otherromantic":0,
}
//store list reference for above object
const alignments = [
  "hetero",
  "homo",
  "cetero",
  "other",
  "heterosexual",
  "heteroromantic",
  "homosexual",
  "homoromantic",
  "othersexual",
  "otherromantic",
]

//setup var for total possible score
var max = {
  "hetero":0,
  "homo":0,
  "other":0
}
