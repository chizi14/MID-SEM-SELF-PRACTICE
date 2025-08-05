function Post(title, likes, tags) {
    this.title = title;
    this.likes = likes;
    this.tags = tags;
    this.display = function() {
        console.log(`Title: ${this.title}, Likes: ${this.likes}, Tags: ${this.tags.join(", ")}`);
    };
}

let post = new Post("My Post", 10, ["js", "coding"]);
post.display(); 