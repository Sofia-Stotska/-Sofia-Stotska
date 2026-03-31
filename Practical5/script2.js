const postList = document.getElementById('postList');
const errorElem = document.getElementById('error');

async function loadPosts() {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error(`HTTP помилка: ${response.status}`);
        }

        const posts = await response.json();

       
        postList.innerHTML = posts
            .map(post => `<li><strong>${post.title}</strong><br>${post.body}</li>`)
            .join('');

    } catch (err) {
       
        errorElem.textContent = 'Помилка завантаження постів: ' + err.message;
    }
}


loadPosts();
