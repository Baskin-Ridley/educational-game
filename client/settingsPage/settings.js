function handleSubmit(e) {
    e.  preventDefault();
    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;
    const questions = document.getElementById("questions").value;
    // !! vv might need fixing
    const newUrl = `/questionPage/questionPage.html?name=${name}&category=${category}&questions=${questions}`;
  
    window.location.href = newUrl;
    console.log(newUrl)
  }
  
  document.getElementById("submit").addEventListener("click", handleSubmit);
