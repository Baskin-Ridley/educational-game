  
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit").addEventListener("click", handleSubmit);
});


function handleSubmit(e) {
    e.preventDefault();
    if(!document.getElementById("name")){
        name = "Anonymous"
    }
    else{
        name = document.getElementById("name").value
    }
    const category = document.getElementById("category").value;
    const questions = document.getElementById("questions").value;
  
    const newUrl = `../../client/questionPage/questionPage.html?name=${name}&category=${category}&questions=${questions}`;
  
    window.location.href = newUrl;
    console.log(newUrl)
  }

  module.exports = {
    handleSubmit,
};
