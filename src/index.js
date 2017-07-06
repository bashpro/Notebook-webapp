function deepCopy(ob){
  return ob; // TODO
}

var notes;

$(() => {
  if(localStorage.getItem("notes") === null || localStorage.getItem("notes") === "null"){
    notes = deepCopy(startingNotes);
  }
  else{
    try{
      notes = JSON.parse(localStorage.getItem("notes"));
    }
    catch(e){
      notes = deepCopy(startingNotes);
    }
  }

  $("#notesFile").append(renderNotes(notes))
  //$("#notesFile").load("../html/notes.html");
})

$(window).on("beforeunload", () => {
  localStorage.setItem("notes", JSON.stringify(notes));
})

function renderFindResults(findResults){
  $("#find-results").html(findResults.map(result => `
    <p>${result}</p>
  `).join("\n"));
}

function renderNote(note){
  return `<div class="note-box">
    <div class="in-noteBox indent${note.level}">
      <p>${note.text}</p>
    </div>
  </div>`;
}

function renderSection(section){
  return `<div class="nh-section">
    ${section.map(renderNote).join("\n")}
  </div>`
}

function renderNotes(notesToRender){
  return Array.from(notesToRender).map(section => renderSection(section)).join("\n")
}

function addNote(note){
  notes[0].splice(0, 0, note);
  $(".nh-section").first().prepend(renderNote(note));
}

var startingNotes = [
  [ /* Section 1 */
    {
      text: "hi everybody",
      level: 0
    }, {
      text: "second test note",
      level: 1
    }, {
      text: "test",
      level: 1
    }, {
      text: "extra note",
      level: 3
    }, {
      text: "testing indents to see how it would look like",
      level: 3
    }
  ],
  [ /* Section 2 */
    {
      text: "second set of notes",
      level: 0
    }, {
      text: "this is a cool test",
      level: 1
    }, {
      text: "another test extra note",
      level: 2
    }
  ]
]

$(function() {
    $("#exit").click(() => {
      notes = null; // nonsense, so will fail when reloading
      location.reload()
    })

    $(".note-input").keypress(function(e) {
      if(e.which == 13/*Enter pressed*/) {
        addNote({
          text: $(".note-input").val(),
          level: 0
        });
        $(".note-input").val("");
      }
    });

    $('#note-settings').click(function(){
      $('.bkg-menu').removeClass("hide");
      $('#nset-title').removeClass("hide");
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