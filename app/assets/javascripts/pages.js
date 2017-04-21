/*function changeColors() {
  setTimeout(function() {
    document.querySelector("#first").style["color"] = "red";
    setTimeout(function() {
      document.querySelector("#second").style["background-color"] = "yellow";
      setTimeout(function() {
        document.querySelector("#third").style["font-style"] = "italic";
        setTimeout(function() {
          document.querySelector("#forth").style["color"] = "green";
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
} */
/* global $ */

$.get("https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=01372794d65d437b88b19d238dab8f89", function(data) {
  console.log(data["status"]);
  console.log(data["source"]);
  console.log(data["sortBy"]);
  console.log(data["articles"][0]);
  console.log(data["articles"][0].author);
  console.log(data["articles"][0].title);
  console.log(data["articles"][0].description);
  console.log(data["articles"][0].url);
  console.log(data["articles"][0].urlToImage);
  console.log(data["articles"][0].publishedAt);
  var htmlString = "";
  for (var i = 0; i < data["articles"].length; i++) {
    var image = data["articles"][i].urlToImage;
    htmlString += "<div>" + data["articles"][i].title + "</div>";
    htmlString += "<div>" + "<img src=" + image + ">" + "</div>";
  }
  document.querySelector("#articles").innerHTML = htmlString;
});

//   for (var i = 0; i < data["articles"].length; i++) {
//     document.querySelector("#articles").innerHTML += "<div>" + data["articles"][i].title + "</div>";
//   }
// });
