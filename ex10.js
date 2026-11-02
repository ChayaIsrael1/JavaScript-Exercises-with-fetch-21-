// Exercise 10: Fetch Todo -> Fetch User -> Show Both
// Rules: the function returns a Promise (an async function does that for you) and shows the result with console.log.
// Use async/await + try/catch (recommended) or .then()/.catch() - both are fine.

/**
 * Step 1: Fetch todo by ID
 * Step 2: From todo, get userId
 * Step 3: Fetch user by userId
 * Show both lines
 *
 * Example output:
 *   Todo title: delectus aut autem
 *   User name: Leanne Graham
 *
 * @param {number} todoId
 * @returns {Promise} resolves after the result was printed (so whoever calls the function can wait for it)
 */
async function todoAndUser(todoId) {
  try {
  const p = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
  const data = await p.json()
  const userId = data.userId
  const p1 = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  const data1 = await p1.json()
  console.log(`Todo title: ${data.title}`)
  console.log(`User name: ${data1.name}`)
  }
  catch (error) {
     console.log("Something went wrong:", error.message)
  }}

module.exports = { todoAndUser };
