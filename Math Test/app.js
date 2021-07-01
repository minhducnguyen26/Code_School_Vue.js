var app = new Vue({
    el  : "#app",
    data: {
        problem_num: 1,
        num_one : 3,
        num_two : 5,
        answer  : "",
        results : 0,
        answered: 0,
        feedback: "",
        page    : "test",
        the_answer: "??",
        submitted: false
    },
    methods: {
        generate_random_numbers: function() {
            var random_num_one = Math.floor(Math.random() * 10);
            this.num_one = random_num_one;

            var random_num_two = Math.floor(Math.random() * 10);
            this.num_two = random_num_two;

            this.problem_num += 1;
            this.answer     = "";
            this.submitted  = false;
            this.the_answer = "??"
            this.feedback   = "";
        }, 
        check_answer: function() {
            this.answered += 1;

            var correct_answer = this.num_one + this.num_two;
            if (this.answer == correct_answer) {
                this.results += 1;
                this.feedback = "Got it!"
            } else {
                this.feedback = "No, think about it, THINK!"
            }
            
            this.submitted  = true;
            this.the_answer = correct_answer;
        }
    }
})