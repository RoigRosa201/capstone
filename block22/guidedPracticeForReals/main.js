const BASE_URL = 'https://fsa-async-await.herokuapp.com/api/guided-practice';
const songContainerEl = document.querySelector('#song-container');
const newSongFormEl = document.querySelector('#new-song-form');

async function fetchAllSongs() {
  try {
    const response = await fetch(`${BASE_URL}/songs`);
    const data = await response.json();
    return data;
  } catch(err) {
    console.error(err);
  }
}

async function addNewSong(song) {
  try {
    const response = await fetch(`${BASE_URL}/songs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(song)
    });
    const data = await response.json();
    return data;
  } catch(err) {
    console.error(err);
  }
}

async function deleteSong(id) {
  try {
    await fetch(`${BASE_URL}/songs/${id}`, {
      method: 'DELETE'
    });
  } catch(err) {
    console.error(err);
  }
}

function renderAllSongs(songs) {
  const songsTemplate = songs.map(({id, title, release_date}) => `
    <div>
      <h2>Title: ${title}</h2>
      <p>Release Date: ${release_date}</p>
      <button data-id="${id}">Delete Song</button>
    </div>
  `)
  songContainerEl.innerHTML = songsTemplate.join('');
}

function renderNewSongForm() {
  newSongFormEl.innerHTML = `
    <form id="songForm">
      <label for="songTitle">Title</label>
      <input id="songTitle" type="text" />
      <label>Artist</label>
      <input id="songArtist" type="text" />
      <label>Genre</label>
      <input id="songGenre" type="text" />
      <label>Release Date</label>
      <input id="songReleaseDate" type="text" />
      <button type="submit">Submit</button>
    </form>
  `
}

const init = async () => {
  const songs = await fetchAllSongs();
  renderAllSongs(songs);
  renderNewSongForm();

  const songForm = document.querySelector('#new-song-form form');

  songForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const title = document.getElementById('songTitle').value;
    const artist = document.getElementById('songArtist').value;
    const genre = document.getElementById('songGenre').value;
    const releaseDate = document.getElementById('songReleaseDate').value;

    const newSong = {
        title,
        artist_id: artist,
        genre_id: genre,
        release_date: releaseDate
    };

    await addNewSong(newSong);
    const songs = await fetchAllSongs();
    renderAllSongs(songs);
  })
}

init();

songContainerEl.addEventListener('click', async function(e) {
  if (e.target.matches('button')) {
    const id = e.target.dataset.id;

    await deleteSong(id);
    const songs = await fetchAllSongs();
    renderAllSongs(songs);
  }
})