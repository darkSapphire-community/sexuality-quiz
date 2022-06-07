
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
    updtr = updtr.concat("]); nextQues()");
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
function updateAlignment(updts){
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
}

//function to increment question
function nextQues(){
  if(asked.asking[0] == 'init'){
    asked.initial ++;
    asked.asking[1] = asked.initial;
    displayQuestion(asked.asking[0], asked.asking[1]);
  }
}


//setup register for asked questions
var asked = {"asking":['init',0],"initial":0,"other":[]}

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
  "ceterosexual":0,
  "ceteroromantic":0,
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
  "ceterosexual",
  "ceteroromantic",
  "othersexual",
  "otherromantic",
]
