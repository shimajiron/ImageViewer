var url = new URL(location.href);
var params = new URLSearchParams(url.search);
var data = JSON.parse(params.get('data'));

var headData = document.head.children;
for (var i = 0; i < headData.length; i++) {
    // OGPの設定
    var propertyVal = headData[i].getAttribute('property');
    if(propertyVal !== null) {
        if(propertyVal.indexOf('og:title') != -1) {
            headData[i].setAttribute('content', data['other']['sticker_name'] + " - Archive");
        }
        if(propertyVal.indexOf('og:site_name') != -1) {
            headData[i].setAttribute('content', data['other']['sticker_name'] + " - Archive");
        }
        if(propertyVal.indexOf('og:image') != -1) {
            headData[i].setAttribute('content', "https://media.discordapp.net/attachments/" + data['other']['discord_baseurl'] + data['urls'][0]);
        }
    }
}