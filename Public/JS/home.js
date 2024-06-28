
//Generation of Categories
const CategoryContainer = document.querySelector('.categories-container')
function generateCategory(url, category, text) {
    return (
        CategoryContainer.innerHTML = CategoryContainer.innerHTML + `
                
                    <div class="card w-72 h-96 rounded-3xl overflow-hidden">
                        <div class="img w-full h-3/5 bg-cover bg-center "
                            style="background-image: url(/Images/${url});"></div>
                        <div class="text w-full h-1/5 px-4 py-2">
                            <p class="heading text-center text-xl font-Lobster text-theme-two">${category}</p>
                            <p class="text text-center font-Playwrite">
                                ${text}
                            </p>
                        </div>
                    </div>
            `
    )
}
//Declaring Class Category
class Category {
    constructor(url, category, text) {
        this.url = url
        this.category = category
        this.text = text
    }
}

//Database of Different Categories
const Categories = [
    new Category("Food.jpg", "Food", "Savor the flavors of the world with our easy-to-follow recipes, cooking tips, and culinary inspiration."),
    new Category("Fitness.jpg", "Fitness", "Transform your health with expert workouts, nutrition tips, and motivational stories to keep you on track."),
    new Category("Tech.jpeg", "Tech", "Stay ahead of the curve with the latest in technology, gadget reviews, and industry insights."),
    new Category("Cinema.jpeg", "Movies", "Discover reviews, analysis, and behind-the-scenes insights into the latest films and timeless classics."),
    new Category("Music.avif", "Songs", "Explore song reviews, artist interviews, and playlists that span genres and moods."),
    new Category("Electronics.jpg", "Electronics", "Get the latest reviews, comparisons, and insights on mobile phones, laptops and more"),
    new Category("Travel.avif", "Travel", "Embark on adventures with travel guides, destination reviews, and tips for your next journey."),
    new Category("Politics.jpeg", "Politics", "Stay informed with analysis, commentary, and updates on the latest political events and issues."),
]
Categories.forEach(Categorie => {
    generateCategory(Categorie.url, Categorie.category, Categorie.text)
})
