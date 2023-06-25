var vm = new Vue({
    el: "#main",
    data: {
        items:[
        ],
    },
});


if (localStorage.getItem("open_history") == null || localStorage.getItem("open_history") == "") {
    localStorage.setItem("open_history", "[]");
}
var open_history = localStorage.getItem("open_history");
open_history = JSON.parse(open_history);

var count = 0;
open_history.forEach(data => {
    var sticker_url = "https://media.discordapp.net/attachments/" + data['other']['discord_baseurl'] + data['urls'][count];
    vm.items.push({no:count, name:data['other']['sticker_name'], cover:sticker_url, link:data['other']['short_link']+"?short_url="+data['other']['short_link'], categoryNo:'0'});
    count += 1;
});

site_imgcount.innerText = open_history.length+"項目";