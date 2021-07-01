var app = new Vue({
    el  : "#app",
    data: {
        greeting: "Where should you live?",
        utah : 0,
        idaho: 0,
        california: 0,
        result: "",
        page  : "questions",
        questions: [
            {
                question: "Where is your favorite place to camp?",
                option_1: "Mountain",
                option_2: "Desert",
                option_3: "Beach",
                choice  : ""
            },{
                question: "Where is your favorite food?",
                option_1: "Chicken",
                option_2: "Pizza",
                option_3: "Pinapple",
                choice  : ""
            },{
                question: "What kind of weather do you prefer?",
                option_1: "Cold",
                option_2: "Burning Hot",
                option_3: "Rainy",
                choice  : ""
            }
        ],
    },
    methods: {
        answer: function() {
            this.questions.forEach( function(question) {
                if (question.choice == "option_1") {
                    this.idaho += 1;
                } else if (question.choice == "option_2") {
                    this.utah += 1;
                } else if (question.choice == "option_3") {
                    this.california += 1;
                }
            })

            if (this.page == "questions") {
                this.page = "results";
            }
        }
    },
    computed: {
        state: function() {
            var completed = true;

            this.questions.forEach( function(question) {
                if (question.choice == "") {
                    completed = false;
                }
            })

            if (completed) {
                if (this.idaho > this.utah && this.idaho > this.california) {
                    return "idaho";
                } else if (this.california > this.utah && this.california > this.idaho) {
                    return "california";
                } else if (this.utah > this.idaho && this.utah > this.california) {
                    return "utah";
                }
            }
        }
    }
})