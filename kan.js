function start(){

// httprequest(url,refrerr,ua)

var json = httprequest('https://www.dailymotion.com/player/metadata/video/x7wjmog','','');

json = JSON.parse(json)

var link = json.qualities.auto[0].url

return link


}
