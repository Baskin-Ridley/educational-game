const qId = (new URLSearchParams(window.location.search)).get("id");
if(qId == null){window.location.href = "/questionList.html"}
console.log(qId);
