var YTSearch = require("youtube-api-search");
var View = require("./view");

const API_KEY = "AIzaSyAUb7A_OhjujffpZM41z8XCM2KxTW_bsB4";

function app() {
  var view = new View(document.getElementById("root"));
  view.renderHome();
  setupHandlers();

  function setupHandlers() {
    document.getElementById("submitButton").onclick = function() {
      var searchTerm = document.getElementById("search").value;
      console.log(searchTerm);
      videoSearch(searchTerm);
    };

    if (document.getElementsByClassName("list-group-item").length !== 0) {
      var videoList = document.getElementsByClassName("list-group-item");
      for (var i = 0; i < videoList.length; i++) {
        videoList[i].onclick = function() {
          console.log(this);
          var videoId = this.getAttribute("id");
          getVideoDetail(videoId);
        };
      }
    }

    function videoSearch(searchTerm) {
      YTSearch({ key: API_KEY, term: searchTerm }, videos => {
        console.log(videos);
        // render list of videos
        view.renderVideoList(videos);
        setupHandlers();
      });
    }

    function getVideoDetail(videoId) {
      view.renderVideoDetail(videoId);
      setupHandlers();
    }
  }
}
window.app = app;
