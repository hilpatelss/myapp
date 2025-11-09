screen.orientation.lock("portrait-primary");
window.onload = function () {
    document.getElementById("name_1").style.visibility = "hidden";
    document.getElementById("name_2").style.visibility = "hidden";
    document.getElementById("name_3").style.visibility = "hidden";
    document.getElementById("name_4").style.visibility = "hidden";
    document.getElementById("name_5").style.visibility = "hidden";
    document.getElementById("name_6").style.visibility = "hidden";
    document.getElementById("name_7").style.visibility = "hidden";
    document.getElementById("name_8").style.visibility = "hidden";
    document.getElementById("name_9").style.visibility = "hidden";
    setTimeout(function () {
        document.getElementById("name_1").style.visibility = "visible";
        document.getElementById("name_1").style.color = "#rgba(0, 0, 0, 0)";
    }, 100)
    setTimeout(function () {
        document.getElementById("name_2").style.visibility = "visible";
        document.getElementById("name_1").style.color = "rgba(0, 0, 0, 0.33)";
        document.getElementById("name_2").style.color = "rgba(0, 0, 0, 0)";
    }, 200)
    setTimeout(function () {
        document.getElementById("name_3").style.visibility = "visible";
        document.getElementById("name_1").style.color = "rgba(0, 0, 0, 0.66)";
        document.getElementById("name_2").style.color = "rgba(0, 0, 0, 0.33)";
        document.getElementById("name_3").style.color = "rgba(0, 0, 0, 0)";
    }, 300)
    setTimeout(function () {
        document.getElementById("name_4").style.visibility = "visible";
        document.getElementById("name_1").style.color = "rgba(0, 0, 0, 1)";
        document.getElementById("name_2").style.color = "rgba(0, 0, 0, 0.66)";
        document.getElementById("name_3").style.color = "rgba(0, 0, 0, 0.33)";
        document.getElementById("name_4").style.color = "rgba(0, 0, 0, 0)";
    }, 400)
    setTimeout(function () {
        document.getElementById("name_5").style.visibility = "visible";
        document.getElementById("name_2").style.color = "rgba(0, 0, 0, 1)";
        document.getElementById("name_3").style.color = "rgba(0, 0, 0, 0.66)";
        document.getElementById("name_4").style.color = "rgba(0, 0, 0, 0.33)";
        document.getElementById("name_5").style.color = "rgba(0, 0, 0, 0)";
    }, 500)
    setTimeout(function () {
        document.getElementById("name_6").style.visibility = "visible";
        document.getElementById("name_3").style.color = "rgba(0, 0, 0, 1)";
        document.getElementById("name_4").style.color = "rgba(0, 0, 0, 0.66)";
        document.getElementById("name_5").style.color = "rgba(0, 0, 0, 0.33)";
        document.getElementById("name_6").style.color = "rgba(0, 0, 0, 0)";
    }, 600)
    setTimeout(function () {
        document.getElementById("name_7").style.visibility = "visible";
        document.getElementById("name_4").style.color = "rgba(0, 0, 0, 1)";
        document.getElementById("name_5").style.color = "rgba(0, 0, 0, 0.66)";
        document.getElementById("name_6").style.color = "rgba(0, 0, 0, 0.33)";
        document.getElementById("name_7").style.color = "rgba(0, 0, 0, 0)";
    }, 700)
    setTimeout(function () {
        document.getElementById("name_8").style.visibility = "visible";
        document.getElementById("name_5").style.color = "rgba(0, 0, 0, 1)";
        document.getElementById("name_6").style.color = "rgba(0, 0, 0, 0.66)";
        document.getElementById("name_7").style.color = "rgba(0, 0, 0, 0.33)";
        document.getElementById("name_8").style.color = "rgba(0, 0, 0, 0)";
    }, 800)
    setTimeout(function () {
        document.getElementById("name_9").style.visibility = "visible";
        document.getElementById("name_6").style.color = "rgba(0, 0, 0, 1)";
        document.getElementById("name_7").style.color = "rgba(0, 0, 0, 0.66)";
        document.getElementById("name_8").style.color = "rgba(0, 0, 0, 0.33)";
        document.getElementById("name_9").style.color = "rgba(0, 0, 0, 0)";
    }, 900)
    setTimeout(function () {
        document.getElementById("name_7").style.color = "rgba(0, 0, 0, 1)";
        document.getElementById("name_8").style.color = "rgba(0, 0, 0, 0.66)";
        document.getElementById("name_9").style.color = "rgba(0, 0, 0, 0.33)";
    }, 1000)
    setTimeout(function () {
        document.getElementById("name_8").style.color = "rgba(0, 0, 0, 1)";
        document.getElementById("name_9").style.color = "rgba(0, 0, 0, 0.66)";
    }, 1100)
    setTimeout(function () {
        document.getElementById("name_9").style.color = "rgba(0, 0, 0, 1)";
    }, 1200)
    document.getElementById("logo_1").style.visibility = "hidden";
    document.getElementById("logo_2").style.visibility = "hidden";
    document.getElementById("logo_3").style.visibility = "hidden";
    document.getElementById("logo_4").style.visibility = "hidden";
    document.getElementById("logo_5").style.visibility = "hidden";
    document.getElementById("logo_6").style.visibility = "hidden";
    document.getElementById("logo_7").style.visibility = "hidden";
    document.getElementById("logo_8").style.visibility = "hidden";
    setTimeout(function () {
        document.getElementById("logo_1").style.visibility = "visible";
    }, 1400)
    setTimeout(function () {
        document.getElementById("logo_2").style.visibility = "visible";
    }, 1500)
    setTimeout(function () {
        document.getElementById("logo_3").style.visibility = "visible";
    }, 1600)
    setTimeout(function () {
        document.getElementById("logo_4").style.visibility = "visible";
    }, 1700)
    setTimeout(function () {
        document.getElementById("logo_5").style.visibility = "visible";
    }, 1800)
    setTimeout(function () {
        document.getElementById("logo_6").style.visibility = "visible";
    }, 1900)
    setTimeout(function () {
        document.getElementById("logo_7").style.visibility = "visible";
    }, 2000)
    setTimeout(function () {
        document.getElementById("logo_8").style.visibility = "visible";
    }, 2100)
    document.getElementById("links_info").style.display = "none";
};

document.getElementById("logo_1").onmouseover = function () {
    document.getElementById("links_info").style.display = "flex";
    document.getElementById("link_info_text").innerHTML = "Instagram";
    document.getElementById("link_info_text").style.animation = "info-text-in linear 0.3s ";

};
document.getElementById("logo_1").onmouseout = function () {
    document.getElementById("links_info").style.display = "none";

};
document.getElementById("logo_2").onmouseover = function () {
    document.getElementById("links_info").style.display = "flex";
    document.getElementById("link_info_text").innerHTML = "Telegram";
    document.getElementById("link_info_text").style.animation = "info-text-in linear 0.3s ";

};
document.getElementById("logo_2").onmouseout = function () {
    document.getElementById("links_info").style.display = "none";
};
document.getElementById("logo_3").onmouseover = function () {
    document.getElementById("links_info").style.display = "flex";
    document.getElementById("link_info_text").innerHTML = "X";
    document.getElementById("link_info_text").style.animation = "info-text-in linear 0.3s ";

};
document.getElementById("logo_3").onmouseout = function () {
    document.getElementById("links_info").style.display = "none";
};
document.getElementById("logo_4").onmouseover = function () {
    document.getElementById("links_info").style.display = "flex";
    document.getElementById("link_info_text").innerHTML = "Linkedin";
    document.getElementById("link_info_text").style.animation = "info-text-in linear 0.3s ";

};
document.getElementById("logo_4").onmouseout = function () {
    document.getElementById("links_info").style.display = "none";
};
document.getElementById("logo_5").onmouseover = function () {
    document.getElementById("links_info").style.display = "flex";
    document.getElementById("link_info_text").innerHTML = "Threads";
    document.getElementById("link_info_text").style.animation = "info-text-in linear 0.3s ";

};
document.getElementById("logo_5").onmouseout = function () {
    document.getElementById("links_info").style.display = "none";
};
document.getElementById("logo_6").onmouseover = function () {
    document.getElementById("links_info").style.display = "flex";
    document.getElementById("link_info_text").innerHTML = "Github";
    document.getElementById("link_info_text").style.animation = "info-text-in linear 0.3s ";
};
document.getElementById("logo_6").onmouseout = function () {
    document.getElementById("links_info").style.display = "none";
};
document.getElementById("logo_7").onmouseover = function () {
    document.getElementById("links_info").style.display = "flex";
    document.getElementById("link_info_text").innerHTML = "Snapchat";
    document.getElementById("link_info_text").style.animation = "info-text-in linear 0.3s ";
};
document.getElementById("logo_7").onmouseout = function () {
    document.getElementById("links_info").style.display = "none";
};
document.getElementById("logo_8").onmouseover = function () {
    document.getElementById("links_info").style.display = "flex";
    document.getElementById("link_info_text").innerHTML = "Mail";
    document.getElementById("link_info_text").style.animation = "info-text-in linear 0.3s ";
};
document.getElementById("logo_8").onmouseout = function () {
    document.getElementById("links_info").style.display = "none";
};