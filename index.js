// Write your code here!
// Select the ul from the page
async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await response.json();

    displayPosts([post]);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

function displayPosts(posts) {
  const ul = document.getElementById('post-list');
  if (!ul || !posts || posts.length === 0) return;

  const firstPost = posts[0];
  const topSection = document.createElement('section');
  const topHeader = document.createElement('h1');
  const topParagraph = document.createElement('p');

  topHeader.textContent = firstPost.title;
  topParagraph.textContent = firstPost.body;
  topSection.appendChild(topHeader);
  topSection.appendChild(topParagraph);

  document.body.insertBefore(topSection, document.body.firstElementChild);

  posts.forEach(post => {
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.textContent = post.title;
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  });
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', fetchPosts);
} else {
  fetchPosts();
}