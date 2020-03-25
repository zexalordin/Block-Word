setInterval(function(){
  let url = window.location.host;
  let url2 =  window.location.href;
  let word = ["corona", "covid", "covid-19","covid19", "jokowi", "virus"];

  if(url == "www.youtube.com"){
    let all;
    if(url2.includes("results?search_query") || url2.includes("feed/history") || url2.includes("feed/trending")){
      //search youtube
      all = document.getElementsByTagName("ytd-video-renderer");
    }else if(url2.includes("watch")){
      //watch youtube
      all = document.getElementsByTagName("ytd-compact-video-renderer");
    }else if(url2.includes("feed/subscriptions")){
      //subscription youtube
      all = document.getElementsByTagName("ytd-grid-video-renderer");
    }else{
      //home youtube
      all = document.getElementsByTagName("ytd-rich-item-renderer");
    }
    for (let i=0, max=all.length; i < max; i++) {
      for(let l=0; l < word.length; l++){
        let find = all[i].innerHTML.toLowerCase().search(word[l]);
        if(find != -1){
          let link = all[i].querySelectorAll("a");
          for(let j = 0; j < link.length; j++){
            link[j].classList.add("changeHref");
            let classLink = document.getElementsByClassName("changeHref");
            for(let k = 0; k < classLink.length; k++){
              classLink[k].href = "feed/subscriptions";
            }
          }
          all[i].style.filter = "blur(10px)";
          all[i].style.cursor = "not-allowed";
          break;
        }else{
          all[i].style.filter = "unset";
          all[i].style.cursor = "unset";
        }
      }
    }
  }else if(url == "twitter.com"){
    let feed;
    let i=0;
    feed = document.getElementsByClassName("css-901oao");
    for (i; i<feed.length; i++) {
      // console.log("! "+i);
      // console.log(feed[i].innerHTML.toLowerCase());
      for(let j = 0; j < word.length; j++){
        let find = feed[i].innerHTML.toLowerCase().search(word[j]);
        if(find != -1){
          feed[i].style.filter = "blur(10px)";
          feed[i].style.cursor = "not-allowed";
          break;
        }
      }
    }
  }
}, 1000);