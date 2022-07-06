var baseUrl = "https://api.eduso.vn/game/";
var token = "";
var current_page = 1;
var current_star_page = 1;
var page_size = 10;

function getConfig() {
  var url = baseUrl + "getconfig";
  var settings = {
    cache: false,
    dataType: "json",
    async: false,
    crossDomain: true,
    url: url,
    method: "GET",
    headers: {
      accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  $.ajax(settings).done(function (response) {
    token = response.token_type + response.access_token;
    setConfig(response);
  });
}

function getNormalQuestion(page, pageSize) {
  var url =
    baseUrl +
    `getquestion?type=normal&subjectid&pageIndex=${page}&pageLimit=${pageSize}`;
  var settings = {
    cache: false,
    dataType: "json",
    async: false,
    crossDomain: true,
    url: url,
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: token,
      "Access-Control-Allow-Origin": "*",
    },
  };
  $.ajax(settings).done(function (response) {
    setNormalQuestion(response);
  });
}

function getStarQuestion(page, pageSize) {
  var url =
    baseUrl +
    `getquestion?type=special&subjectid&pageIndex=${page}&pageLimit=${pageSize}`;
  var settings = {
    cache: false,
    dataType: "json",
    async: false,
    crossDomain: true,
    url: url,
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: token,
      "Access-Control-Allow-Origin": "*",
    },
  };
  $.ajax(settings).done(function (response) {
    setStarQuestion(response);
  });
}

function answer(qId, aId) {
  var url = baseUrl + `answer`;
  var postReq = {
    QuestionID: qId,
    AnswerID: aId,
  };
  var settings = {
    cache: false,
    dataType: "json",
    async: false,
    crossDomain: true,
    url: url,
    method: "POST",
    data: postReq,
    headers: {
      accept: "application/json",
      Authorization: token,
      "Access-Control-Allow-Origin": "*",
    },
  };
  $.ajax(settings).done(function (response) {
    getResultAnswer(response);
  });
}
getConfig();
getNormalQuestion(current_page, page_size);
getStarQuestion(current_star_page, page_size);
