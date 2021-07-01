var app = new Vue({
    el  : '#app',
    data: {
        current_page: "forum",

        // new thread inputs
        new_name        : "",
        new_author      : "",
        new_description : "",
        new_category    : "All",

        // category options
        categories: [
            "All", "Clothing", "Hunting", "Books", "Cards", "Coins",
            "Keychains", "Comic Books", " Misc."
        ],

        selected_category : "All",

        // all current threads
        threads: [
            {
                name: "Amazing Title",
                author: "Minh Nguyen",
                description: "Super detail description",
                category: "All",
                posts: [{
                    author: "Minh Nguyen",
                    body: "Super long body text"
                }]
            },
            {
                name: "Boring Title",
                author: "Nguyen Minh",
                description: "Super abstract description",
                category: "All",
                posts: [{
                    author: "Nguyen Minh",
                    body: "Super short body text"
                }]
            }
        ],
    },
    methods: {
        create_new_thread() {
            // create a new thread object
            let new_thread = {
                name       : this.new_name,
                author     : this.new_author,
                description: this.new_description,
                category   : this.new_category
            }

            // push the new thread object to the current threads list
            this.threads.unshift(new_thread);

            // clear all inputs in the new thread input fields
            this.new_name        = "",
            this.new_author      = "",
            this.new_description = "",
            this.new_category    = "All"
        },
        delete_one_thread(index) {
            this.threads.splice(index, 1);
        }
    },
    computed: {
        sorted_threads() {
            let threads_list = this.threads;
            let selected_category = this.selected_category;

            if (selected_category == "All") {
                return threads_list;
            } else {
                let sorted_threads = threads_list.filter(function(thread) {
                    return thread.category === selected_category;
                })
                return sorted_threads;
            }
        }
    }
});