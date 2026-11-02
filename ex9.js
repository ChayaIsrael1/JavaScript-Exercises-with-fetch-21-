// Exercise 9: Fetch Post, Then Comments Count
// Rules: the function returns a Promise (an async function does that for you) and shows the result with console.log.
// Use async/await + try/catch (recommended) or .then()/.catch() - both are fine.

/**
 * Step 1: Fetch post by ID
 * Step 2: Fetch comments for that post
 * Show: "Post has <N> comments"
 *
 * Example output:
 *   Post has 5 comments
 *
 * @param {number} postId
 * @returns {Promise} resolves after the result was printed (so whoever calls the function can wait for it)
 */
function getPostCommentsCount(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .catch((error) => console.log("Something went wrong:", error.message)), 
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then((response) => response.json())
    .then((post) => console.log(`Post has ${post.length} comments`))
    .catch((error) => console.log("Something went wrong:", error.message))}

module.exports = { getPostCommentsCount };
