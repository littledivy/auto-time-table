function displayTimeTable(o) {
    console.log(o)
    document.getElementById("day").innerHTML = `<b>${o.day}</b>`;
    var bgNumbers = [3, 4, 8, 10, 11];
    document.getElementById("append-from-db").innerHTML = '';
    for(var x=0;x<o.timeTable.length;x++) {
        var colorForList = bgNumbers[Math.floor(Math.random()*bgNumbers.length)];
        document.getElementById("append-from-db").innerHTML += `<li class="table-row color-${colorForList}">
        <div class="col col-1">${x+1}</div>
        <div class="col col-2">${o.timeTable[x].name}</div>
        <div class="col col-3">${o.timeTable[x].duration}</div>
        <div class="col col-4">${o.timeTable[x].teacher}</div>
      </li>
      `;
    }
   
}
/**
 function getRandomBackgroundColor() {
    var bgNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    var bgcolor = 'color-' + bgNumbers[Math.floor(Math.random()*bgNumbers.length)];
    document.getElementsByTagName("body")[0].className = bgcolor;
    console.log(document.getElementsByTagName("body")[0].className)
}
 */
function moveNext() {
    window.day += 1;
    for(var i=0;i<window.db.length;i++) {
        if(window.db[i].id == window.day) {
            displayTimeTable(window.db[i]);
            getRandomBackgroundColor()
            type()
        }
    }
}
function moveBack() {
    window.day += -1;
    for(var i=0;i<window.db.length;i++) {
        if(window.db[i].id == window.day) {
            displayTimeTable(window.db[i]);
            getRandomBackgroundColor()
            type()
        }
    }
}
function startWatch() {
    window.time = {}
    setInterval(function() {
        window.time["hour"] = new Date().getHours()
        window.time["minutes"] = new Date().getMinutes()
        window.time["seconds"] = new Date().getSeconds()
        document.getElementById("time").innerHTML = `<b>${window.time["hour"]}:${window.time["minutes"]}:${window.time["seconds"]}</b>`
    }, 1000)
   
}
function getCurrentDay() {
    
    window.day = new Date().getDay();
    for(var i=0;i<window.db.length;i++) {
        if(window.db[i].id == window.day) {
            displayTimeTable(window.db[i]);
            //getRandomBackgroundColor()
            //type()
            startWatch()
        }
    }
}

function type() {
    var app = document.getElementById('type-in');

  var typewriter = new Typewriter(app, {
      loop: true
  });

  typewriter.typeString('The automated time table')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Auto day detection')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Get rid of stupid handwritten time tables')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Made with <b>love</b> by Divy ;)')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Yayy!')
      .start(); 
  
}

