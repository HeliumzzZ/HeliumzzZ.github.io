!(function() {
    var oldLoadAp = window.onload;
    window.onload = function () {
      oldLoadAp && oldLoadAp();
  
      new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        autoplay: false,
        loop: 'all',
        order: 'random',
        theme: '#b7daff',
        preload: 'none',
        audio: [
          {
            
            name: "浴室",
            artist: 'deca joins',
            url: 'https://www.ytmp3.cn/down/47484.mp3',
            cover: 'img/OIP.jpg',	
          }
        ]
      });
    }
  })();