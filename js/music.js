const play = document.getElementById("play");
const img = document.querySelector("img");
const music = document.querySelector("audio");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const title = document.getElementById("title");

const songs = [
  {
    name: "song1",
    title: "StarBoy",
    artist: "The Weekend",
  },
  {
    name: "song2",
    title: "Humnava Mere",
    artist: "Jubin Nautiyal",
  },
  {
    name: "song3",
    title: "Tere Hawale",
    artist: "Arjit Singh",
  },
  {
    name: "song4",
    title: "Heer Ranjha",
    artist: "Rito Raba",
  },
  {
    name: "song5",
    title: "Creepin'",
    artist: "The Weekend",
  },
];

let isPlaying = false;

const playMusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

play.addEventListener("click", () => {
  isPlaying ? pauseMusic() : playMusic();
});

// changing the music data
const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = `music/${songs.name}.mp3`;
  img.src = `images/${songs.name}.jpg`;
};

// loadSong(songs[2]);
songIndex = 0;
const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
