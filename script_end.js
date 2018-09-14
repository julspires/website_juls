var myVar;

    function myFunction() {
        myVar = setTimeout(showPage, 3000);
    }

    function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("home").style.display = "grid";
        document.getElementById("proj_1").style.display = "grid";
        document.getElementById("proj_2").style.display = "grid";
        document.getElementById("proj_3").style.display = "grid";
        document.getElementById("proj_4").style.display = "grid";
        document.getElementById("proj_5").style.display = "grid";
        document.getElementById("header_top").style.display = "grid";
        document.getElementById("phone").style.display = "block";
    }