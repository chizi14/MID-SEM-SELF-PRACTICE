let post = {
    title : " This is my Post",
    likes : 10,
    tags : ["Tech","CodeMasters","JavaScript"]
};

post.comment = "Wow,wow,wow";
post.likes++;
post.tags.pop()

const Stringify = JSON.stringify(post);
console.log(post);
const Parse =JSON.parse(Stringify);
console.log(post)