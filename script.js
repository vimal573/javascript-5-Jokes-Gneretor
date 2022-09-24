document.querySelector(".btn").addEventListener("click", function (e) {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then(
      (response) => (document.querySelector(".joke").innerText = response.value)
    )
    .catch((err) => console.error(err));
});
