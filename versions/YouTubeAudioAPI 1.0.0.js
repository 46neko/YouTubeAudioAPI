var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var players={};
var events={onPlayerReady:[],playing:[],ended:[],paused:[],buffering:[],cued:[]};
var recount={};
function onYouTubeIframeAPIReady(){
var elements=document.getElementsByTagName("yaudio");
for(i=0;i<elements.length;i++){
var eid=elements[i].id;
document.getElementById(eid).setAttribute("style","display:none");
elements[i].removeAttribute("id");
elements[i].innerHTML='<div id="'+eid+'"></div>';
players[eid]=new YT.Player(eid,{width:300,height:150,videoId:elements[i].getAttribute("v"),events:{'onReady': onPlayerReady,'onStateChange':onPlayerStateChange}});
document.getElementById(eid).setAttribute("autoplay",elements[i].getAttribute("autoplay"));
document.getElementById(eid).setAttribute("loop",elements[i].getAttribute("loop"));
recount[eid]=3;
}
}
function addYaudioEvent(id,ev,cb){
var el=events[ev];
if(ev=="onPlayerReady")el.push([id,cb]);
if(ev=="playing")el.push([id,cb]);
if(ev=="ended")el.push([id,cb]);
if(ev=="paused")el.push([id,cb]);
if(ev=="buffering")el.push([id,cb]);
if(ev=="cued")el.push([id,cb]);
}
function onPlayerReady(event){
if(document.getElementById(event.target.a.id).getAttribute("autoplay")=="")event.target.playVideo();
for(i=0;i<events.onPlayerReady.length;i++){
if(events.onPlayerReady[i][0]==event.target.a.id)events.onPlayerReady[i][1]();
}
}
function onPlayerStateChange(event){
var ytStatus = event.data;
if(ytStatus==0 ){
if(document.getElementById(event.target.a.id).getAttribute("loop")=="")event.target.playVideo();
for(i=0;i<events.ended.length;i++){
if(events.ended[i][0]==event.target.a.id)events.ended[i][1]();
}
}
if(ytStatus==1){
if(recount[event.target.a.id]==0){
for(i=0;i<events.playing.length;i++){
if(events.playing[i][0]==event.target.a.id)events.playing[i][1]();
}
}else{
recount[event.target.a.id]--;
}
}
if(ytStatus==2){
for(i=0;i<events.paused.length;i++){
if(events.paused[i][0]==event.target.a.id)events.paused[i][1]();
}}
if(ytStatus==3){
if(recount[event.target.a.id]==0){
for(i=0;i<events.buffering.length;i++){
if(events.buffering[i][0]==event.target.a.id)events.buffering[i][1]();
}
}else{
recount[event.target.a.id]--;
}
}
if(ytStatus==5){
for(i=0;i<events.cued.length;i++){
if(events.cued[i][0]==event.target.a.id)events.cued[i][1]();
}
}
}
function getPlayer(id){
return players[id];
}
var ytaControls={
play:function(id){getPlayer(id).playVideo();},
pause:function(id){getPlayer(id).pauseVideo();},
seekTo:function(id,seconds){getPlayer(id).seekTo(seconds,true);},
getCurrentTime:function(id){return getPlayer(id).getCurrentTime();},
getLoadedFraction:function(id){return getPlayer(id).getVideoLoadedFraction();},
getDuration:function(id){return getPlayer(id).getDuration();},
setVolume:function(id,volume){getPlayer(id).setVolume(volume);},
getVolume:function(id){return getPlayer(id).getVolume();},
mute:function(id){getPlayer(id).mute();},
unMute:function(id){getPlayer(id).unMute();},
isMuted:function(id){return getPlayer(id).isMuted();},
change:function(id,v){
ele=document.getElementById(id).parentNode;
ele.innerHTML='<div id="'+id+'"></div>';
players[id]=new YT.Player(id,{width:300,height:150,videoId:v,events:{'onReady': onPlayerReady,'onStateChange':onPlayerStateChange}});
document.getElementById(id).setAttribute("autoplay",ele.getAttribute("autoplay"));
document.getElementById(id).setAttribute("loop",ele.getAttribute("loop"));
recount[id]=3;
}};