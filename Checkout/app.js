var app = new Vue({
    el  : "#app",
    data: {
        deck_type : "oak",
        wheel_type: "red",
        art_type  : "pink",
        cost : 0,
        tax  : 0,
        total: 0
    },
    methods: {
        purchase: function() {
            prompt("Enter Your Credit Card");
            alert("Thanks for your purchase! We're not shipping it to you.")
        }
    },
    computed: {
        computed_deck_image: function() {
            return "images/" + this.deck_type + ".jpg";
        }, 
        computed_wheel_image: function() {
            return "images/" + this.wheel_type + ".jpg";
        },
        computed_art_image: function() {
            return "images/" + this.art_type + ".jpg";
        },
        computed_cost: function() {
            this.cost  = 0;
            this.tax   = 0;
            this.total = 0;

            if(this.deck_type == "oak")    this.cost += 30;
            if(this.deck_type == "pine")   this.cost += 20;
            if(this.deck_type == "maple")  this.cost += 40;

            if(this.wheel_type == "red")    this.cost += 5;
            if(this.wheel_type == "green")  this.cost += 30;
            if(this.wheel_type == "purple") this.cost += 25;

            if(this.art_type == "pink")     this.cost += 10;
            if(this.art_type == "bird")     this.cost += 30;
            if(this.art_type == "peanuts")  this.cost += 45;

            this.tax   = this.cost * 0.2
            this.total = this.cost + this.tax;

            return "$" + this.total;
        }
    }
})