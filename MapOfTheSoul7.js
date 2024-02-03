const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

const mapOfTheSoul7Songs = [
  {
    id: 0,
    title: "Intro: Persona",
    artist: "BTS",
    duration: "2:54",
    src:"https://youtu.be/wUccVthSGCc?si=vejBrx8XFrpF2nT9",
  },
  {
    id: 1,
    title: "Boy with Luv",
    artist: "BTS ft. Halsey",
    duration: "3:49",
    src: "https://youtu.be/3J7rt7bkDCY?si=ojODr5E4i4SSzDzE",
  },
  {
    id: 2,
    title: "Mikrokosmos",
    artist: "BTS",
    duration: "3:46",
    src: "https://youtu.be/Fw7C6IsDYgI?si=GIXL91Z-w1TsmuQT",
  },
  {
    id: 3,
    title: "Make It Right",
    artist: "BTS",
    duration: "3:47",
    src: "https://youtu.be/p9qYZz8PVDU?si=s3IEriNjzbRibwAL",
  },
  {
    id: 4,
    title: "HOME",
    artist: "BTS",
    duration: "4:00",
    src: "https://youtu.be/ghJURdZKq3I?si=_82kAnNjiqLd0mVg",
  },
  {
    id: 5,
    title: "Jamais Vu",
    artist: "BTS",
    duration: "3:46",
    src: "https://youtu.be/G3x17KyNJtg?si=McLMPY7QfHRqYHw4",
  },
  {
    id: 6,
    title: "Dionysus",
    artist: "BTS",
    duration: "4:08",
    src: "https://youtu.be/cU-J6m79k0I?si=5OVGW18iUq6LUotE",
  },
  {
    id: 7,
    title: "Interlude: Shadow",
    artist: "BTS",
    duration: "4:20",
    src: "https://youtu.be/YgBlISXhoP8?si=eIfTbZGBFR9johe7",
  },
  {
    id: 8,
    title: "Black Swan",
    artist: "BTS",
    duration: "3:18",
    src: "https://youtu.be/0vFDPnkoYuQ?si=gkIanbOicCKfnGcE",
  },
  {
    id: 9,
    title: "Filter",
    artist: "BTS",
    duration: "3:00",
    src: "https://youtu.be/dNUnnb8F-Cw?si=1gPhEv3T0H6JeCmJ",
  },
  {
    id: 10,
    title: "My Time",
    artist: "BTS",
    duration: "3:54",
    src: "https://youtu.be/a_zk4JFK43g?si=pszYccLXJgLxvGK9",
  },
  {
    id: 11,
    title: "Louder than Bombs",
    artist: "BTS",
    duration: "3:37",
    src: "https://youtu.be/4ZSVbrV4-Xs?si=IsAnSHqb58UZ5uXM",
  },
  {
    id: 12,
    title: "ON",
    artist: "BTS",
    duration: "4:06",
    src: "https://youtu.be/1o0CtxZ_Cbo?si=i6zaDANdM0hSx9ZN",
  },
  {
    id: 13,
    title: "UGH!",
    artist: "BTS",
    duration: "3:45",
    src: "https://youtu.be/1yxEmmYQdl8?si=T1jAXvWNoivSIDus",
  },
  {
    id: 14,
    title: "00:00 (Zero O'Clock)",
    artist: "BTS",
    duration: "4:10",
    src: "https://youtu.be/Nr3ot5gSvkM?si=1_j2mmSBwFnp9FRk",
  },
  {
    id: 15,
    title: "Inner Child",
    artist: "BTS",
    duration: "3:53",
    src: "https://youtu.be/nt4f4pPCEFs?si=5jJJAeF_hDpS_klP",
  },
  {
    id: 16,
    title: "Friends",
    artist: "BTS",
    duration: "3:19",
    src: "https://youtu.be/h7mZX8INIYI?si=nPmiZTTDaM2_JrIU",
  },
  {
    id: 17,
    title: "Moon",
    artist: "BTS",
    duration: "3:29",
    src: "https://youtu.be/F5H3g0UR7CI?si=I7-glRd_ff30DtW5",
  },
  {
    id: 18,
    title: "Respect",
    artist: "BTS",
    duration: "3:59",
    src: "https://youtu.be/53BA0C6dXpY?si=8dx5WYyw1C--4SGM",
  },
  {
    id: 19,
    title: "We Are Bulletproof: The Eternal",
    artist: "BTS",
    duration: "4:22",
    src: "https://youtu.be/UNdad29_G20?si=-KVzq0vIcMUPimji",
  },
  {
    id: 20,
    title: "ON (Feat. Sia)",
    artist: "BTS",
    duration: "4:06",
    src: "https://youtu.be/AlwmaGcMjNE?si=_IfkgctwaCqJYWyq",
  },
  {
    id: 21,
    title: "Outro:Ego",
    artist: "BTS",
    duration: "3:10",
    src: "https://youtu.be/EWLlUBax4X4?si=3MOfY5vgsgdUqr_B",
  },
];

const audio = new Audio();
let userData = {
  songs: [...mapOfTheSoul7Songs],
  currentSong: null,
  songCurrentTime: 0,
};

const playSong = (id) => {
  const song = userData?.songs.find((song) => song.id === id);
  audio.src = song.src;
  audio.title = song.title;

  if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData?.songCurrentTime;
  }
  userData.currentSong = song;
  playButton.classList.add("playing");

  highlightCurrentSong();
  setPlayerDisplay();
  setPlayButtonAccessibleText();
  audio.play();
};

const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime;
  playButton.classList.remove("playing");
  audio.pause();
};

const playNextSong = () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    const currentSongIndex = getCurrentSongIndex();
    const nextSong = userData?.songs[currentSongIndex + 1];

    playSong(nextSong.id);
  }
};

const playPreviousSong = () => {
  if (userData?.currentSong === null) return;
  else {
    const currentSongIndex = getCurrentSongIndex();
    const previousSong = userData?.songs[currentSongIndex - 1];

    playSong(previousSong.id);
  }
};

const shuffle = () => {
  userData?.songs.sort(() => Math.random() - 0.5);
  userData.currentSong = null;
  userData.songCurrentTime = 0;

  renderSongs(userData?.songs);
  pauseSong();
  setPlayerDisplay();
  setPlayButtonAccessibleText();
};

const deleteSong = (id) => {
  if (userData?.currentSong?.id === id) {
    userData.currentSong = null;
    userData.songCurrentTime = 0;

    pauseSong();
    setPlayerDisplay();
  }

  userData.songs = userData?.songs.filter((song) => song.id !== id);
  renderSongs(userData?.songs);
  highlightCurrentSong();
  setPlayButtonAccessibleText();

  if (userData?.songs.length === 0) {
    const resetButton = document.createElement("button");
    const resetText = document.createTextNode("Reset Playlist");

    resetButton.id = "reset";
    resetButton.ariaLabel = "Reset playlist";
    resetButton.appendChild(resetText);
    playlistSongs.appendChild(resetButton);

    resetButton.addEventListener("click", () => {
      userData.songs = [...mapOfTheSoul7Songs];

      renderSongs(userData?.songs);
      setPlayButtonAccessibleText();
      resetButton.remove();
    });
  }
};

const setPlayerDisplay = () => {
  const playingSong = document.getElementById("player-song-title");
  const songArtist = document.getElementById("player-song-artist");
  const currentTitle = userData?.currentSong?.title;
  const currentArtist = userData?.currentSong?.artist;

  playingSong.textContent = currentTitle ? currentTitle : "";
  songArtist.textContent = currentArtist ? currentArtist : "";
};

const highlightCurrentSong = () => {
  const playlistSongElements = document.querySelectorAll(".playlist-song");
  const songToHighlight = document.getElementById(
    `song-${userData?.currentSong?.id}`
  );

  playlistSongElements.forEach((songEl) => {
    songEl.removeAttribute("aria-current");
  });

  if (songToHighlight) songToHighlight.setAttribute("aria-current", "true");
};

const renderSongs = (array) => {
  const songsHTML = array
    .map((song) => {
      return `
      <li id="song-${song.id}" class="playlist-song">
        <button class="playlist-song-info" onclick="playSong(${song.id})">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
        </button>
        <button onclick="deleteSong(${song.id})" class="playlist-song-delete" aria-label="Delete ${song.title}">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
        </button>
      </li>
      `;
    })
    .join("");

  playlistSongs.innerHTML = songsHTML;
};

const setPlayButtonAccessibleText = () => {
  const song = userData?.currentSong || userData?.songs[0];

  playButton.setAttribute(
    "aria-label",
    song?.title ? `Play ${song.title}` : "Play"
  );
};

const getCurrentSongIndex = () => userData?.songs.indexOf(userData?.currentSong);

playButton.addEventListener("click", () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    playSong(userData?.currentSong.id);
  }
});

pauseButton.addEventListener("click", pauseSong);

nextButton.addEventListener("click", playNextSong);

previousButton.addEventListener("click", playPreviousSong);

shuffleButton.addEventListener("click", shuffle);

audio.addEventListener("ended", () => {
  const currentSongIndex = getCurrentSongIndex();
  const nextSongExists =
    userData?.songs[currentSongIndex + 1] !== undefined;

  if (nextSongExists) {
    playNextSong();
  } else {
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    pauseSong();
    setPlayerDisplay();
    highlightCurrentSong();
    setPlayButtonAccessibleText();
  }
});

userData?.songs.sort((a, b) => a.title.localeCompare(b.title));

renderSongs(userData?.songs);
setPlayButtonAccessibleText();