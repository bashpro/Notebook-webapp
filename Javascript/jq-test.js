function getNotes(){
  return [
    "The first note",
    "A second note"
  ]
}

$(function(){
    $("#notesFile").load("../html/notes.html");
});

function renderFindResults(findResults){
  $("#find-results").html(findResults.map(result => `
    <p>${result}</p>
  `).join("\n"));
}

$(function() {
    $('#note-settings').click(function(){
      $('.bkg-menu').removeClass("hide");
      $('#nset-title').removeClass("hide");console.log ("hi");
    });

    $('#settings').click(function(){
      $('.bkg-menu').removeClass("hide");
      $('#set-title').removeClass("hide");
    });

    $('#profile').click(function(){
      $('.bkg-menu').removeClass("hide");
      $('#pro-title').removeClass("hide");
    });

    $('.menu-close').click(function(){
      $('.bkg-menu').addClass("hide");
      $('#set-title').addClass('hide');
      $('#pro-title').addClass('hide');
      $('#nset-title').addClass('hide');
    });

    $("#find-input").keyup(() => {
      var notes = getNotes();
      var f = new Fuse(notes, {});
      var searchResults = f.search($("#find-input").val());

      renderFindResults(searchResults.map(noteI => notes[noteI]));
    })
});
