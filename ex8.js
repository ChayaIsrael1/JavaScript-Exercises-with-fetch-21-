// Exercise 8: Fetch User, Then Their First Post
// Rules: the function returns a Promise (an async function does that for you) and shows the result with console.log.
// Use async/await + try/catch (recommended) or .then()/.catch() - both are fine.

/**
 * Step 1: Fetch user by ID
 * Step 2: Fetch posts by same user
 * Step 3: Show the title of the first post
 *
 * Example output:
 *   First post title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
 *
 * @param {number} userId
 * @returns {Promise} resolves after the result was printed (so whoever calls the function can wait for it)
 */
function getUserFirstPost(userId) {
return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .catch((error) => console.log("Something went wrong:", error.message)), 
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => response.json())
    .then((post) => console.log(`First post title: ${post[0].title}`))
    .catch((error) => console.log("Something went wrong:", error.message))}

module.exports = { getUserFirstPost };
