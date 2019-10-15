alert("hi, i am reinaldo =)");

function hide() {
    document.getElementById("login").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("notice").style.display = "none";
    alert('Welcome ' + document.getElementById("user").value);

    $name = document.getElementById("user").value;
    document.body.innerHTML = document.body.innerHTML.replace('guys', $name);

    document.body.innerHTML = document.body.innerHTML.replace('all', $name);

    document.getElementById("mainpage").style.display = "inline-block";
}

function menu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function canvas() {

    $scol = document.getElementById("scol").value;
    $tcol = document.getElementById("tcol").value;

    var c = document.getElementById("NewCanvas");
    var ctx = c.getContext("2d");
    // Create gradient
    var grd = ctx.createLinearGradient(0, 0, 300, 0);
    grd.addColorStop(0, $scol);
    grd.addColorStop(1, $tcol);
    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 280, 180);
}