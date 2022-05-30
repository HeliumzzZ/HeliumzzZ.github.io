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
            
            name: "春夏秋冬",
            artist: '张国荣',
            url: 'https://www.ytmp3.cn/down/47484.mp3',
            cover: 'img/OIP.jpg',	
          }
        ]
      });
    }
  })();