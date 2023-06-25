var url = new URL(location.href);
var params = new URLSearchParams(url.search);
var data = JSON.parse(params.get('data'));

icon.href = "https://media.discordapp.net/attachments/" + data['other']['discord_baseurl'] + data['urls'][0];

data['urls'].forEach(element => {
    sticker_url = "https://media.discordapp.net/attachments/" + data['other']['discord_baseurl'] + element;
    if (sticker_url.indexOf('.mp4') != -1) {
        document.body.innerHTML += "<a href='" + sticker_url + "'><img src='" + sticker_url + "' class='image'></a>";
    }else{
        document.body.innerHTML += "<img src='" + sticker_url + "' class='image'>";
    }
});

// ----------------------------------------------------
document.title = data['other']['sticker_name'] + " - Archive";
site_title.innerText = data['other']['sticker_name'];
site_title.parentElement.href = data['other']['sticker_link'];
site_link.innerText = params.get('short_url');
site_link.parentElement.href = params.get('short_url')+"?short_url="+params.get('short_url')
site_imgcount.innerText = data['urls'].length+"項目";

// ----------------------------------------------------
document.getElementsByClassName("image")[0].onload = function(){
    resize_e();
}
window.addEventListener('resize', resize_e);
function resize_e(){
    var allimg = document.getElementsByClassName("image");
    for(var i = 0; i < allimg.length; i++) {
        allimg[i].height = allimg[i].width;
    }
}

// ----------------------------------------------------
if (localStorage.getItem("open_history") == null || localStorage.getItem("open_history") == "") {
    localStorage.setItem("open_history", "[]");
}
var open_history = localStorage.getItem("open_history");
open_history = JSON.parse(open_history);

data['other']['short_link'] = params.get('short_url');

add = true;
open_history.forEach(element => {
    if (JSON.stringify(element) == JSON.stringify(data)) {
        add = false;
    }
});
if (add == true) {
    open_history.push(data);
    localStorage.setItem("open_history", JSON.stringify(open_history));
}
// ----------------------------------------------------
var options_tag = "<div id='footer'><div class='footer_content'>[mode] ";
data['options'].forEach(element => {
    options_tag += element['name']+": "+element['value']+"　"
});
options_tag += "</div></div>";
document.body.innerHTML += options_tag;