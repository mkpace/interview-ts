/**
 * Question:
 * Code Review the following code snippets?
 * Comments / Suggestiong
 */
export const general = (apiKeyFromDb: string, apiKeyReceived: string) => {
  if (apiKeyFromDb === apiKeyReceived) {
    return true;
  } else {
    return false;
  }
};

/**
 * Question:
 * What's the output of following code snippet?
 */
/**
  Promise.resolve(1)
    .then((x) => x + 1) 
    .then((x) => {
      throw new Error("My Error");
    })
    .catch(() => 1)
    .then((x) => x + 1)
    .then((x) => console.log(x))
    .catch(console.error);
*/
