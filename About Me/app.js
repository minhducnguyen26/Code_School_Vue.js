var app = new Vue({
    el  : "#app",
    data: {
        greeting: "Hello World",
        name : "Minh Nguyen",
        job  : "Famous Dancer",
        hobby: "I like to change my name once in a while.",
        what_im_typing: ""
    },
    methods: {
        change_name: function(new_name) {
            this.name = new_name;
            this.what_im_typing = "";
        }
    }
})

