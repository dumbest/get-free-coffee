function showAnswer() {

	var sheet = (function() {
  	var style = document.createElement("style");
  	style.appendChild(document.createTextNode(""));
  	document.head.appendChild(style);
  	return style.sheet;
	})();

  sheet.addRule(".this-is-answer", "color: #00704A !important; font-weight: bold !important; font-size: 30px !important; border: solid 2px #00704A;", 0);

  window.questions.map(function(q, i) {
    q.choices.map(function(c, i){
      if (c.acquire_score == 1) {
        highlightChoice(c);
        console.log(c.name);
      }
    });
  });
}

function highlightChoice(choice) {
  var onclick = `[onclick="selectChoince(event, ${choice.question_id}, ${choice.id})"]`;
  document.querySelectorAll(onclick)[0].classList.add("this-is-answer");
  // $(`.db-adman-x-font:contains(${choice})`).addClass("this-is-answer");
}

showAnswer();