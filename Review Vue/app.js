var app = new Vue({
    el  : "#app",
    data: {
        greeting: "Mouse Event, V-bind, Global Events",
        clicked : false,
        hovering: false,
        position: "left",
        names   : ["Bob", "Jill", "Samantha"],
        piece_x : 0,
        piece_y : 0,
        goal_x  : 0,
        goal_y  : 0
    },

    created: function() {
        window.addEventListener("keydown", this.key_events)
        this.goal_x = Math.floor(Math.random() * 20) * 15;
        this.goal_y = Math.floor(Math.random() * 20) * 15;
    },

    methods: {
        click: function() {
            this.clicked = !this.clicked;
        },
        mouse_over: function() {
            this.hovering = true;
        },
        mouse_leave: function() {
            this.hovering = false;
        },
        key_events: function(event) {
            // Right
            if(event.which == 68) {
                event.preventDefault();
                this.move_right();
            }
            // Left
            else if(event.which == 65) {
                event.preventDefault();
                this.move_left();
            }
            // Up
            else if(event.which == 87) {
                event.preventDefault();
                this.move_up();
            }
            // Down
            else if(event.which == 83) {
                event.preventDefault();
                this.move_down();
            }
        },
        move_right: function() {
            this.position = "right";
            this.piece_x += 15;
        },
        move_left: function() {
            this.position = "left";
            this.piece_x -= 15;
        },
        move_up: function() {
            this.position = "up";
            this.piece_y -= 15;
        },
        move_down: function() {
            this.position = "up";
            this.piece_y += 15;
        }
    },
    computed: {
        compute_class: function() {
            return {
                purple: this.clicked,
                bold  : this.hovering
            }
        },
        position_class: function() {
            return {
                text_left : this.position == "left",
                text_right: this.position == "right",
            }
        },
        piece_style: function() {
            return {
                left: this.piece_x + "px",
                top : this.piece_y + "px"
            }
        },
        goal_style: function() {
            return {
                left: this.goal_x + "px",
                top : this.goal_y + "px"
            }
        },
        victory: function() {
            return this.piece_x == this.goal_x && this.piece_y == this.goal_y
        }
    }
})