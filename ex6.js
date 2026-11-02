// Exercise 6: Delay with Fetch
// Rules: the function returns a Promise (an async function does that for you) and shows the result with console.log.
// Use async/await + try/catch (recommended) or .then()/.catch() - both are fine.

/**
 * Wait for delay milliseconds (setTimeout inside a new Promise, then await it)
 * Then fetch the URL
 * Show the first 50 characters of the response
 *
 * Example output:
 *   First 50 chars: { "userId": 1, "id": 1, "title": "sunt aut...
 *
 * @param {string} url
 * @param {number} delay - milliseconds to wait before fetching
 * @returns {Promise} resolves after the result was printed (so whoever calls the function can wait for it)
 */
async function fetchWithDelay(url, delay) {
  try{
    const p = await new Promise((res) => setTimeout(()=>res(),delay))
    const data = await fetch(url)
    const text = await data.text();
    const char50 = text.substring(0, 50);
    console.log(`First 50 chars: ${char50}`)
    return p
  }
  catch (error) {
    console.log("Something went wrong:", error.message);
  }
}

module.exports = { fetchWithDelay };
