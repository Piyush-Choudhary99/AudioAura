new Vue({
    el: "#app",
    data() {
      return {
        audio: null,
        circleLeft: null,
        barWidth: null,
        duration: null,
        currentTime: null,
        isTimerPlaying: false,
        tracks: [        
          {
            name: "Kill This Love 💔",
            artist: "BlackPink",
            cover: "https://iili.io/H1hGdV2.jpg",
            source: "https://audio.jukehost.co.uk/XMq8hSwgPKbHkY4srMhPWEFqHSigxcNQ",
            url: "https://www.youtube.com/watch?v=2S24-y0Ij3Y&ab_channel=BLACKPINK",
            favorited: false
          },
          {
            name: "DDU DU DDU DU 🔫 ",
            artist: "BlackPink",
            cover: "https://iili.io/H1hGJol.jpg",
            source: "https://audio.jukehost.co.uk/FamrE48qfWUNWmskzgBfiFW5mbaSUCG7",
            url: "https://www.youtube.com/watch?v=IHNzOHi8sJs&ab_channel=BLACKPINK",
            favorited: true
          },
  
          {
            name: "Lovesick Girls",
            artist: "BlackPink",
            cover: "https://iili.io/H1hEyNf.jpg",
            source: "https://audio.jukehost.co.uk/kmMdEcT0mVFDBlkcf1ZoydqaM19deMJ1",
            url: "https://www.youtube.com/watch?v=dyRsYk0LyA8&ab_channel=BLACKPINK",
            favorited: false
          },
  
          {
            name: "Playing With Fire 🔥",
            artist: "BlackPink",
            cover: "https://iili.io/H1hGFK7.jpg",
            source: "https://audio.jukehost.co.uk/9t8OuMg1bqsR0JtyADcqKaXbTaLvGOkl",
            url: "https://www.youtube.com/watch?v=9pdj4iJD08s&ab_channel=BLACKPINK",
            favorited: false
          },
          {
            name: "As If It's Your Last",
            artist: "BlackPink",
            cover: "https://iili.io/H1hGKl9.jpg",
            source: "https://audio.jukehost.co.uk/cXSnf1QxAl4N7keT52hTID5wZC8Nmfu1",
            url: "https://www.youtube.com/watch?v=Amq-qlqbjYA&ab_channel=BLACKPINK",
            favorited: true
          },
            {
              name: "Raatan Lambiyan",
              artist: "Jubin Nautiyal, Asees Kaur",
              cover: "https://iili.io/JRihfEl.jpg",
              source: "https://audio.jukehost.co.uk/xlY4jFhgQcWAFXM3VsVKaQFSAIB7kgLP",
              url: "https://youtu.be/gvyUuxdRdR4?si=MHkW-UOG1GQovs53",
              favorited: false
            },
            {
              name: "Kamariya",
              artist: "Aastha Gill, Sachin Sanghvi, Jigar Saraiya, Divya Kumar",
              cover: "https://iili.io/JRihC2S.jpg",
              source: "https://audio.jukehost.co.uk/S4pRWnHscTVHwMvmYvCKzlRp3X14tEl8",
              url: "https://youtu.be/i0_m90T04uw?si=loV6_3WtiVtRf1gl",
              favorited: false
            },
            {
              name: "Gerua",
              artist: "Arijit Singh, Antara Mitra",
              cover: "https://iili.io/JRiXtBR.jpg",
              source: "https://audio.jukehost.co.uk/nCXpAriELKrNrjNnOBzsfQH3bZBmyMJp",
              url: "https://youtu.be/AEIVhBS6baE?si=WdJsvJ8e6RajEZx4",
              favorited: false
            },
            {
              name: "Kar Gayi Chull",
              artist: "Badshah, Neha Kakkar, Amaal Mallik, Fazilpuria, Sukriti Kakar",
              cover: "https://iili.io/JRihnY7.jpg",
              source: "https://audio.jukehost.co.uk/TgGhSCDvhB8XddLLWKK9QkcPIEkzsSSR",
              url: "https://youtu.be/NTHz9ephYTw?si=YxLb09s7h2Ozfasn",
              favorited: false
            },
            {
              name: "Param Sundari",
              artist: "Shreya Ghoshal",
              cover: "https://iili.io/JRihITu.jpg",
              source: "https://audio.jukehost.co.uk/4b6tTYg3Oleo1taOzyynp033RaSrbSDy",
              url: "https://youtu.be/w4ClQO0FFQg?si=JalW8TitvpphCKt1",
              favorited: false
            },
            {
              name: "Kolaveri Di",
              artist: "Dhanush",
              cover: "https://iili.io/JRihuQj.jpg",
              source: "https://audio.jukehost.co.uk/erT5vtE71uITCraUzlGJcySFaQhArv2U",
              url: "https://youtu.be/YR12Z8f1Dh8?si=0Ka-69M9Atr1-O6x",
              favorited: false
            },
            {
              name: "Kya Baat Ay",
              artist: "Harrdy Sandhu",
              cover: "https://iili.io/JRihdIs.jpg",
              source: "https://audio.jukehost.co.uk/VfrVTxLuykDkGqkfGnnxtd38VpFTGwDb",
              url: "https://youtu.be/G0Hx6uN2AJE?si=kWG1RT5kCZYpffDt",
              favorited: false
            },
            {
              name: "Naah",
              artist: "Harrdy Sandhu, Nora Fatehi",
              cover: "https://iili.io/JRiXQLv.jpg",
              source: "https://audio.jukehost.co.uk/xAZjS2wAJ8C3LgFRO9RxDq0FtzrQaxO0",
              url: "https://youtu.be/8qs2dZO6wcc?si=HKVqvWwhd3jIJTdj",
              favorited: false
            },
            {
              name: "Backbone",
              artist: "Hardy Sandhu",
              cover: "https://iili.io/JRiXsIa.jpg",
              source: "https://audio.jukehost.co.uk/u1NTfZNz59JhF2GJj08BrxIjbvpWU0Bx",
              url: "https://youtu.be/bqGtrvcR5ls?si=_tMgEubtyo9rlTBE",
              favorited: false
            },
            {
              name: "DJ Waley Babu",
              artist: "Badshah, Aastha Gill",
              cover: "https://iili.io/JRihov9.jpg",
              source: "https://audio.jukehost.co.uk/FS51y5v9rDdVhzKqduzJMapBw1Ka0xFA",
              url: "https://youtu.be/OulN7vTDq1I?si=bLZ36BqqNQJPQWIb",
              favorited: false
            },
            {
              name: "Hawayein",
              artist: "Arijit Singh",
              cover: "https://iili.io/JRihHpn.jpg",
              source: "https://audio.jukehost.co.uk/5IbppdCA0wFYbleYphsTfFTiafX2i1Wm",
              url: "https://youtu.be/cYOB941gyXI?si=a1iNZb34hUjB44HC",
              favorited: false
            },
            {
              name: "Naagin",
              artist: "Aastha Gill, Akasa",
              cover: "https://iili.io/JRihxpe.jpg",
              source: "https://audio.jukehost.co.uk/Jzd8iFGmy5uqffn6GKn4izWKfgslD7Dm",
              url: "https://youtu.be/Oi8q1zIGph0?si=A9KrpExZEkpWIMoh",
              favorited: false
            },
            {
              name: "Channa Mereya",
              artist: "Arijit Singh",
              cover: "https://iili.io/JRiXLhJ.jpg",
              source: "https://audio.jukehost.co.uk/C3dtDx7sJzv9DuxgFwNhIy0mMJUVWXMW",
              url: "https://youtu.be/bzSTpdcs-EI?si=ETARZvj32p9YFSXx",
              favorited: false
            },
            {
              name: "Proper Patola",
              artist: "Diljit Dosanjh, Badshah, Aastha Gill",
              cover: "https://iili.io/JRihThb.jpg",
              source: "https://audio.jukehost.co.uk/nbg100W6FU2ZISEiwuqMOhH8qSUEqzyn",
              url: "https://youtu.be/YmXJp4RtBCM?si=EPF5xdoBrJsI5USw",
              favorited: false
            },
            {
              name: "The Breakup Song",
              artist: "Arijit Singh, Badshah, Jonita Gandhi, Nakash Aziz",
              cover: "https://iili.io/JRiXy7t.jpg",
              source: "https://audio.jukehost.co.uk/K8sD8mkrE53jaGm2JIzIWOD2mLdeUocl",
              url: "https://youtu.be/CvPdtf8Ijj4?si=a60vWKCj_0cxwfa-",
              favorited: false
            },
            {
              name: "The Motivational Mix",
              artist: "None of Your Business",
              cover: "https://iili.io/JRsnsgS.png",
              source: "https://audio.jukehost.co.uk/brSTsUpfEy1gKAmnO8Kb4RSIZQcz7ZsB",
              url: "https://youtu.be/5hBh7NR5wVM?si=5vJMMI91o0URogUo",
              favorited: false
            },
          
        ],
        currentTrack: null,
        currentTrackIndex: 0,
        transitionName: null
      };
    },
    methods: {
      play() {
        if (this.audio.paused) {
          this.audio.play();
          this.isTimerPlaying = true;
        } else {
          this.audio.pause();
          this.isTimerPlaying = false;
        }
      },
      generateTime() {
        let width = (100 / this.audio.duration) * this.audio.currentTime;
        this.barWidth = width + "%";
        this.circleLeft = width + "%";
        let durmin = Math.floor(this.audio.duration / 60);
        let dursec = Math.floor(this.audio.duration - durmin * 60);
        let curmin = Math.floor(this.audio.currentTime / 60);
        let cursec = Math.floor(this.audio.currentTime - curmin * 60);
        if (durmin < 10) {
          durmin = "0" + durmin;
        }
        if (dursec < 10) {
          dursec = "0" + dursec;
        }
        if (curmin < 10) {
          curmin = "0" + curmin;
        }
        if (cursec < 10) {
          cursec = "0" + cursec;
        }
        this.duration = durmin + ":" + dursec;
        this.currentTime = curmin + ":" + cursec;
      },
      updateBar(x) {
        let progress = this.$refs.progress;
        let maxduration = this.audio.duration;
        let position = x - progress.offsetLeft;
        let percentage = (100 * position) / progress.offsetWidth;
        if (percentage > 100) {
          percentage = 100;
        }
        if (percentage < 0) {
          percentage = 0;
        }
        this.barWidth = percentage + "%";
        this.circleLeft = percentage + "%";
        this.audio.currentTime = (maxduration * percentage) / 100;
        this.audio.play();
      },
      clickProgress(e) {
        this.isTimerPlaying = true;
        this.audio.pause();
        this.updateBar(e.pageX);
      },
      prevTrack() {
        this.transitionName = "scale-in";
        this.isShowCover = false;
        if (this.currentTrackIndex > 0) {
          this.currentTrackIndex--;
        } else {
          this.currentTrackIndex = this.tracks.length - 1;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      nextTrack() {
        this.transitionName = "scale-out";
        this.isShowCover = false;
        if (this.currentTrackIndex < this.tracks.length - 1) {
          this.currentTrackIndex++;
        } else {
          this.currentTrackIndex = 0;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      resetPlayer() {
        this.barWidth = 0;
        this.circleLeft = 0;
        this.audio.currentTime = 0;
        this.audio.src = this.currentTrack.source;
        setTimeout(() => {
          if(this.isTimerPlaying) {
            this.audio.play();
          } else {
            this.audio.pause();
          }
        }, 300);
      },
      favorite() {
        this.tracks[this.currentTrackIndex].favorited = !this.tracks[
          this.currentTrackIndex
        ].favorited;
      }
    },
    created() {
      let vm = this;
      this.currentTrack = this.tracks[0];
      this.audio = new Audio();
      this.audio.src = this.currentTrack.source;
      this.audio.ontimeupdate = function() {
        vm.generateTime();
      };
      this.audio.onloadedmetadata = function() {
        vm.generateTime();
      };
      this.audio.onended = function() {
        vm.nextTrack();
        this.isTimerPlaying = true;
      };
  
      // this is optional (for preload covers)
      for (let index = 0; index < this.tracks.length; index++) {
        const element = this.tracks[index];
        let link = document.createElement('link');
        link.rel = "prefetch";
        link.href = element.cover;
        link.as = "image"
        document.head.appendChild(link)
      }
    }
  });
  