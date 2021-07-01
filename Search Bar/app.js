var app = new Vue({
    el  : '#app',
    data: {
        search_string: "",

        articles: [
            {
                "title": "What You Need To Know About CSS Variables",
                "url"  : "https://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/",
                "image": "https://tutorialzine.com/media/2016/03/css-variables.jpg"
            },
            {
                "title": "Freebie: 4 Great Looking Pricing Tables",
                "url"  : "https://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/",
                "image": "https://tutorialzine.com/media/2016/02/great-looking-pricing-tables.jpg"
            },
            {
                "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
                "url"  : "https://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
                "image": "https://tutorialzine.com/media/2016/02/interesting-resources-february.jpg"
            },
            {
                "title": "Quick Tip: The Easiest Way To Make Responsive Headers",
                "url"  : "https://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/",
                "image": "https://tutorialzine.com/media/2016/02/quick-tip-responsive-headers.png"
            },
            {
                "title": "Learn SQL In 20 Minutes",
                "url"  : "https://tutorialzine.com/2016/01/learn-sql-in-20-minutes/",
                "image": "https://tutorialzine.com/media/2016/01/learn-sql-20-minutes.png"
            },
            {
                "title": "Creating Your First Desktop App With HTML, JS and Electron",
                "url"  : "https://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/",
                "image": "https://tutorialzine.com/media/2015/12/creating-your-first-desktop-app-with-electron.png"
            }
        ]
    },
    computed: {
        // Property that bolds only the articles that match the searching
        // Return an array
        filter_articles() {
            let articles_list = this.articles;
            let search_string = this.search_string.trim().toLowerCase();

            articles_list = articles_list.filter(function(item) {
                if (item.title.toLowerCase().indexOf(search_string) !== -1) {
                    return item
                }
            })
            return articles_list;
        }
    }
});