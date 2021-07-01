var app = new Vue({
    el  : "#app",
    data: {
        // Navigation control
        pages: ["Home", "Projects", "Services", "Contact"],
        current_page: "Home",

        // Home
        message: "",

        // Projects
        checked_names: [],

        // Services
        picked: "",

        // Contact
        selected: "",
        options: ["Dog", "Cats", "Lizards"]
    },
    methods: {
        make_active(item) {
            this.current_page = item;
        }
    }
})