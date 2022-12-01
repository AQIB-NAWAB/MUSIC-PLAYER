const artist=document.getElementById("artist");
const title=document.getElementById("title");

const previous=document.getElementById("pre");
const play=document.getElementById("play");
const forward=document.getElementById("for");
const music=document.querySelector("audio");
const img=document.querySelector("img");
songs=[
    {
        name:"295",
        artist:"SIDU MOSE WALA",
        img:1,
    },
    {
        name:"Same Beef",
        artist:"SIDU MOSE WALA",
        img:2,
    },
    {
        name:"Legend",
        artist:"SIDU MOSE WALA",
        img:3, 
    },
    {
        name:"SO High",
        artist:"SIDU MOSE WALA",
        img:4,
    },
    {
        name:"Last Ride",
        artist:"SIDU MOSE WALA",
        img:5,
    }
]
let exp=false;
const playMusic=()=>{
    exp=true;
    music.play();
    img.classList.add("anime");
    play.classList.add("active");
    play.innerHTML="PAUSE"
};

const pauseMusic=()=>{
    exp=false;
    music.pause();
    img.classList.remove("anime");
    play.classList.remove("active");
    play.innerHTML="PLAY";
};
play.addEventListener("click",()=>{
    if(exp){
        pauseMusic();
    }else{
        playMusic();
    }
});
const loadSong = (songs) => {
    title.textContent = songs.name;
    artist.textContent = songs.artist;
    music.src = `${songs.name}.mp3`;
    img.src = `${songs.img}.jpg`;
  };
  let index=  0;
  forward.addEventListener("click",()=>{
      index=(index+1)%songs.length
      loadSong(songs[index]);
      playMusic()
  });
  previous.addEventListener("click",()=>{
      index=(index-1)%songs.length;
      loadSong(songs[index]);
      playMusic()
  })
  
  