
/* CONTENTS */

$(".icon").mouseenter(function(){
    $(".arrow").animate({marginLeft: "-1em"}, 500).animate({marginLeft: "0"});
});


document.getElementById("skills-button").onclick = function () {
    location.href = "pages/skills.html";
};

document.getElementById("education-button").onclick = function () {
    location.href = "pages/education.html";
};

document.getElementById("design-button").onclick = function () {
    location.href = "pages/design.html";
};

document.getElementById("style-button").onclick = function () {
    location.href = "https://www.pinterest.co.uk/rnegyzet";
};


/* Show icon-related info-spans */

$(".icons2").hover(function(){
    $(".hidden2").show();
  },
  function(){
    $(".hidden2").hide();
});
  
  
$(".icons3").hover(function(){
    $(".hidden3").show();
},
function(){
    $(".hidden3").hide();
}
    );

  
    $(".icons4").hover(function(){
      $(".hidden4").show();
  },
  function(){
      $(".hidden4").hide();
  }
      );
  
    