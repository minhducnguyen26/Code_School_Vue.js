var quiz = {
    title: "My Quiz",
    questions: [
        { text: "Question 1",
            responses: [
                { text: "Wrong, too bad" },
                { text: "Right", correct: true }
            ]
        },
        { text: "Question 2",
            responses: [
                { text: "Right answer", correct: true },
                { text: "Wrong answer" }
            ]
        }
    ]
}

var app = new Vue({
    el  : "#app",
    data: {
        quiz: quiz,
        question_index: 0,
        user_responses: Array(quiz.questions.length).fill(false)
    },
    methods: {
        next: function() {
            this.question_index++;
        },
        previous: function() {
            this.question_index--;
        },
        score: function() {
            return this.user_responses.filter(function(val){
                return val
            }).length;
        }
    }
})