const app = Vue.createApp({
    data() {
        return {
            url: 'http://facebook.com',
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfus', img: 'assets/book1.png', isFav: true},
                {title: 'the way of kings', author: 'brandon sanderson', img: 'assets/book2.png', isFav: false},
                {title: 'the final empire', author: 'brandon sanderson', img: 'assets/book3.png', isFav: true}
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFavorite(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')