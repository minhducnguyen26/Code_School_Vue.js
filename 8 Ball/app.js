var app = new Vue({
    el  : "#app",
    data: {
        question: "",
        feedback: "Waiting for a question...",
        answer  : 8
    },
    methods : {
        check_question: function() {
            if (this.question == "") {
                this.feedback = "Waiting for a question...";
            } else if (this.question[this.question.length-1] != "?") {
                this.feedback = 'Questions usually end with a "?"';
            } else {
                this.feedback = "I'm ready to give an answer";

                var ask_button = document.querySelector(".ask");
                ask_button.style.display = "block";
            }
        },
        ask_question: function() {
            var possible_answers = ["Yes", "No", "Maybe", "Duh", "Perhaps Someday", "Not a chance"]
            var random_number    =  Math.floor(Math.random() * possible_answers.length);
            this.answer = possible_answers[random_number];
        }
    }
})