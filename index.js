// Write your code here!
async function fetchPosts() {
  try {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    displayPosts(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

function displayPosts(posts) {
  const ul = document.getElementById('post-list');

  posts.forEach(post => {
    const li = document.createElement('li');

    const h1 = document.createElement('h1');
    h1.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  });
}

fetchPosts();


