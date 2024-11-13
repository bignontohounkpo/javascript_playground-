document.querySelector("form").addEventListener("submit", (e) => {
  console.log(e);
  const form = e.currentTarget;
  const data = new FormData(form);
  let firstname = data.get('firstname');
  if (firstname.length < 2) {
    e.preventDefault();
  }
});
