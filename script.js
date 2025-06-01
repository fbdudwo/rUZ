let currentIndex = 0;

window.onload = function () {
  const lyric = document.getElementById('lyric');
  const songElem = document.getElementById('song');
  const artistElem = document.getElementById('artist');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const quote = document.getElementById('quote');
  const imgElem = document.getElementById("cover");

  async function getAccessToken() {
    const res = await fetch("http://localhost:3000/token");
    const data = await res.json();
    return data.token;
  }
  
  async function fetchTrackInfo(artist, title) {
    const token = await getAccessToken();
    const query = encodeURIComponent(`${artist} ${title}`);
    const res = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=1`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (data.tracks.items.length > 0) {
      const track = data.tracks.items[0];
      return {
        imageUrl: track.album.images[0].url,
        spotifyUrl: track.external_urls.spotify
      };
    }
    return null;
  }
  

  async function showLyric(index) {
    const item = lyrics[index];
    quote.textContent = item.lyric || item.quote;
    songElem.textContent = `${item.song}`;
    artistElem.textContent = `${item.artist}`;

    const imgElem = document.getElementById("cover");
    const trackInfo = await fetchTrackInfo(item.artist, item.song);
  
    if (trackInfo) {
      imgElem.src = trackInfo.imageUrl;
      imgElem.style.cursor = 'pointer';
      imgElem.onclick = () => {
        window.open(trackInfo.spotifyUrl, '_blank');
      };
    } else {
      imgElem.src = "default_cover.png";
      imgElem.onclick = null;
      imgElem.style.cursor = 'default';
    }
  }




  currentIndex = Math.floor(Math.random() * lyrics.length);
  showLyric(currentIndex);

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + lyrics.length) % lyrics.length;
    showLyric(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % lyrics.length;
    showLyric(currentIndex);
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % lyrics.length;
      showLyric(currentIndex);
    } else if (event.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + lyrics.length) % lyrics.length;
      showLyric(currentIndex);
    }
  });
};
