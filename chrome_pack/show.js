function showAnswer() {

	var sheet = (function() {
  	var style = document.createElement("style");
  	style.appendChild(document.createTextNode(""));
  	document.head.appendChild(style);
  	return style.sheet;
	})();

  sheet.addRule(".this-is-answer", "color: green !important; font-weight: bold !important; font-size: 30px !important", 0);

  window.questions.map(function(q, i) {
    q.choices.map(function(c, i){
      if (c.acquire_score == 1) {
        highlightChoice(c.name);
        console.log(c.name);
      }
    });
  });
}

function highlightChoice(choice) {
  $(`.db-adman-x-font:contains(${choice})`).addClass("this-is-answer");
}

showAnswer();