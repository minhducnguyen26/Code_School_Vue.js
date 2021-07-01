// ! Notes
/*
1. API  = Application Programming Interface
2. REST = Representational state transfer
	GET   - request data from server
	POST  - add new data to the server
	PUT   - change the existing information
	PATCH - One or more attributes are updated
*/

// ! 2 ways to write fetch function
/*
fetch("url").then(function(response) {
    response.json().then(function(data) {
        console.log(data);
    })
})

* is the same as:

fetch("url").then(response => {
    response.json().then(data => {
        console.log(data);
    })
})
*/

// ! Fetch function with REST methods
/*  
    * fetch("url", [options])
    fetch("url", {
        method : "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body   : {
            JSON.stringify(example)
        }
    })
*/

var app = new Vue({
    el  : "#app",
    data: {
        show: true,
        color_change: false
    },
    methods: {
        fetch_url: function() {
            fetch("https://highscoreapi.herokuapp.com/scores").then(function(response) {
                response.json().then(function(data) {
                    console.log(data);
                })
            })
        },
        get_scores: function() {
            fetch("https://highscoreapi.herokuapp.com/scores").then(function(response) {
                response.json().then(function(data) {
                    data.forEach(function(player) {
                        console.log(player.score);
                    })
                })
            })
        },
        get_names: function() {
            fetch("https://highscoreapi.herokuapp.com/scores").then(function(response) {
                response.json().then(function(data) {
                    data.forEach(function(player) {
                        console.log(player.name);
                    })
                })
            })
        },
        hide_fetch_button: function() {
            this.show = false;
        },
        show_fetch_button: function() {
            this.show = true;
        },
        change_background_color: function() {
            this.color_change = true;
        },
        reverse_background_color: function() {
            this.color_change = false;
        }
    },
    computed: {
        red_background: function() {
            if(this.color_change) {
                return {
                    red: this.color_change
                }
            }
        }
    }
})