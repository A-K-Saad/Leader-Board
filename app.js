document.getElementById("players").style.color = "#653a3a";
document.getElementById("players").style.backgroundColor = "rgb(227 209 209)";
document.getElementById("blogs").style.color = "#653a3a";

//Adding Comment
document.getElementById("add-comment").addEventListener("click", function () {
    const comment = document.createElement("div");
    comment.className = "comment";
    comment.innerHTML = `
    <h2>Severus Snape</h2>
    <p>An awesome course to learn. Help were always been given to the student.</p>
    `;
    const commentContainer = document.getElementById("comment-container");
    const commentCount = document.getElementById("comment-container").childElementCount;
    if (commentCount < 5) {
        commentContainer.appendChild(comment);
    }
    //Removing Comment
    document.getElementById("remove-comment").addEventListener("click", function () {
        const commentContainer = document.getElementById("comment-container");
        commentContainer.removeChild(comment);
    })
});

function likeIncreasing() {
    let likes = parseInt(document.getElementById("like-count").value);
    likes++;
    document.getElementById("like-count").value = likes;
}