export const getTweetsFromLocalStorage = () => {
  const tweets = localStorage.getItem("tweets");

  if (tweets) {
    return JSON.parse(tweets);
  }

  return [];
};
export const saveTweetsToLocalStorage = (tweets) => {
  localStorage.setItem("tweets", JSON.stringify(tweets));
};


    