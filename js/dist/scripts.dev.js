"use strict";

var settings = [];
settings['Минимальные'] = 1;
settings['Средние'] = 2;
settings['Высокие'] = 3;

function onDOMContentLoaded() {
  setTimeout(function () {
    $(".context").fadeIn(2000);
  }, 200);
}

document.addEventListener("DOMContentLoaded", onDOMContentLoaded); // const animItems = document.querySelectorAll('._anim-items');

var animItems = $("._anim-items");

if (animItems.length > 0) {
  var animScroll = function animScroll() {
    for (var index = 0; index < animItems.length; index++) {
      var animItem = animItems[index];
      var animItemHeight = animItem.offsetHeight;
      var animItemOffset = offset(animItem).top;
      var animStart = 8;
      var animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (pageXOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add("_anim");
      }
    }
  };

  var offset = function offset(el) {
    // const rect = el.getBoundingClientRect(),
    // scollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    // scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // return {top: rect.top + scrollTop, left: rect.left + scollLeft}
    var elementBoundary = el.getBoundingClientRect();
    var top = elementBoundary.top; // var bottom = elementBoundary.bottom;

    var height = elementBoundary.height; // alert(top + height >= 0)
    // alert(top - height)

    return {
      top: top - height
    };
  };

  window.addEventListener('scroll', animScroll);
}

$(window).ready(function () {});
$("span.hernyaSelect").on("click", function (the) {
  $('.hernya').each(function (meow) {
    $(this).removeClass("full");
  });
  var lvl = settings[$(this).text()];
  var news = $(this).text();
  $(this).text($("span#hernyaText")[0].attributes[1].nodeValue);
  $("span#hernyaText")[0].attributes[1].nodeValue = news;
  $("span#hernyaText").text(news + " требования для игры ");

  for (var i = 1; i <= lvl; i++) {
    $("#st" + i).addClass("full");
  }
});

function closeSub(el) {
  $('.index_bg').css({
    'filter': 'blur(0px)',
    '-webkit-filter': 'blur(0px)',
    '-moz-filter': 'blur(0px)',
    '-o-filter': 'blur(0px)',
    '-ms-filter': 'blur(0px)'
  });
  $(el).fadeOut(500);
}

$(".index_bg.index").on("click", function (the) {
  if ($('.modalContainer').is(':visible')) {
    $('.index_bg').css({
      'filter': 'blur(0px)',
      '-webkit-filter': 'blur(0px)',
      '-moz-filter': 'blur(0px)',
      '-o-filter': 'blur(0px)',
      '-ms-filter': 'blur(0px)'
    });
    $(".modalContainer").fadeOut(500, function () {});
  }
});
$("#systemRequirements").on("click", function (the) {
  setTimeout(function () {
    $(".modalContainer").fadeIn(1000);
    $('.index_bg').css({
      'filter': 'blur(2px)',
      '-webkit-filter': 'blur(2px)',
      '-moz-filter': 'blur(2px)',
      '-o-filter': 'blur(2px)',
      '-ms-filter': 'blur(2px)'
    });
  }, 100);
  the.preventDefault();
});
$("button#download, .downloadClient_button").on("click", function (the) {
  setTimeout(function () {
    $(".modalDownload").fadeIn(1000);
    $('.index_bg').css({
      'filter': 'blur(2px)',
      '-webkit-filter': 'blur(2px)',
      '-moz-filter': 'blur(2px)',
      '-o-filter': 'blur(2px)',
      '-ms-filter': 'blur(2px)'
    });
  }, 100);
  window.scrollBy(0, -(window.innerHeight * 2));
  the.preventDefault();
});
$("#myVideo").mouseenter(function () {// $("#myVideo").prop('muted', false);
});