$(document).ready(function() {
  console.log("ready!");
});

//Note it should be on change, not click!
$("#sectionSelection").on("change", function() {
  $(".header").css("margin-top", "5vh");
  $(".logoImage").css("width", "170px");
  $(".container").empty();
  //console.log("changed"); //Notes: sanity check, look at console log to see if it worked
  let sectionSelected = $("#sectionSelection :selected").val();
  // console.log(sectionSelected);
  let sectionURL =
    "https://api.nytimes.com/svc/topstories/v2/" + sectionSelected + ".json";
  // console.log(sectionURL);
  $.ajax({
    method: "GET",
    url: sectionURL,
    data: {
      "api-key": "whSPI6fGaH2iGcOc68SgTPGTe0YPwVTM"
    }
  }).done(function(data) {
    console.log(data);
    // $(".container").each(function(data) {
    //   $(this).append(`<p>${results.abstract}</p>`);
    // });
    let imageCounter = 0;

    for (let n = imageCounter; n <= 12 && imageCounter < 12; n++) {
      if (data.results[n].multimedia.length > 1) {
        $(".container").append(`
        <div class="gridCell">
          <a href=${data.results[n].short_url}>
            <img class="storyImage" src=${data.results[n].multimedia[4].url}>
          </a>
          <p class="gridText">${data.results[n].abstract}</p>
        </div>`);
        imageCounter++;
      }
    }
  });
});
