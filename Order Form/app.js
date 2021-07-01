var app = new Vue({
    el  : "#app",
    data: {
        services: [
            {
                name  : "Web Development",
                price : 300,
                active: false
            },
            {
                name  : "Web Design",
                price : 100,
                active: false
            },
            {
                name  : "Integration",
                price : 400,
                active: false
            },
            {
                name  : "Training",
                price : 200,
                active: false
            },
            {
                name  : "Friend Rental",
                price : 1000,
                active: false
            }
        ],
        cost : 0,
        tax  : 0,
        total: 0
    },
    methods: {
        toggle_active_on(service) { 
            service.active = true;
        },
        toggle_active_off(service) { 
            service.active = false;
        }
    },
    computed: {
        update_total_price( ){
            this.cost  = 0;
            this.tax   = 0;
            this.total = 0;

            this.services.forEach(service => {
                if (service.active) {
                    this.cost += service.price
                }
            });

            this.tax   = this.cost * 0.2
            this.total = this.cost + this.tax;

            return "$" + this.total;
        }
    }
})
