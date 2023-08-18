document.addEventListener('DOMContentLoaded', function(){
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linksElement = document.querySelector('#link');

    fetch('https://api.github.com/users/DenisDev3')
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        nameElement.innerHTML = json.name;
        usernameElement.innerHTML = json.login;
        avatarElement.src = json.avatar_url;
        followersElement.innerHTML = json.followers;
        followingElement.innerHTML = json.following;
        reposElement.innerHTML = json.public_repos;
        linksElement.href = json.html_url;
    })
})