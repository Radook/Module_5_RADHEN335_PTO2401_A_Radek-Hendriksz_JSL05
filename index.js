// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Symphony No. 9 in D Minor, Op. 125", artist: "Ludwig van Beethoven", genre: "Classical" },
    { title: "The Four Seasons", artist: "Antonio Vivaldi", genre: "Classical" },
    { title: "Clair de Lune", artist: "Claude Debussy", genre: "Classical" },
    { title: "Super Freak", artist: "Rick James", genre: "Classical" },
    { title: "Swan Lake", artist: "Pyotr Ilyich Tchaikovsky", genre: "Funk" },
    { title: "Give Up the Funk (Tear the Roof off the Sucker)", artist: "Parliament", genre: "Funk" },
    { title: "Funky Town", artist: "Lipps Inc.", genre: "Funk" },
    { title: "All Night Forever", artist: "TWRP", genre: "Funk" },
    { title: "Enter Sandman", artist: "Metallica", genre: "Metal" },
    { title: "Iron Man", artist: "Black Sabbath", genre: "Metal" },
    { title: "Breaking the Law", artist: "Judas Priest", genre: "Metal" },
    { title: "Ace of Spades", artist: "Motörhead", genre: "Metal" },
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Groot": "Funk",
    "Rocket": "Metal",
    "Drax": "Classical"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use map() to create playlists for each Guardian
    const playlists = {};
    
    // Loop through each guardian
    Object.keys(guardians).forEach(guardian => {
        const preferredGenre = guardians[guardian];
        
        // Filter songs by preferred genre
        const playlist = songs.filter(song => song.genre === preferredGenre);
        
        // Map to create playlist object with titles and artists
        playlists[guardian] = {
            name: `${guardian}'s Playlist`,
            songs: playlist.map(song => ({
                title: song.title,
                artist: song.artist
            }))
        };
    });
    
    return playlists;
}

// Function to display playlists on the webpage
function displayPlaylists(playlists) {
    const playlistsContainer = document.getElementById('playlists');
    
    // Loop through each Guardian's playlist and create HTML elements
    Object.keys(playlists).forEach(guardian => {
        const playlist = playlists[guardian];
        
        // Create playlist container
        const playlistDiv = document.createElement('div');
        playlistDiv.classList.add('playlist');
        
        // Create heading for Guardian's playlist
        const heading = document.createElement('h2');
        heading.textContent = playlist.name;
        playlistDiv.appendChild(heading);
        
        // Create list of songs
        const songList = document.createElement('ul');
        playlist.songs.forEach(song => {
            const songItem = document.createElement('li');
            songItem.classList.add('song');
            
            const songTitle = document.createElement('span');
            songTitle.classList.add('song-title');
            songTitle.textContent = `${song.title} by ${song.artist}`;
            songItem.appendChild(songTitle);
            
            songList.appendChild(songItem);
        });
        
        playlistDiv.appendChild(songList);
        
        // Append playlist to container
        playlistsContainer.appendChild(playlistDiv);
    });
}

// Call generatePlaylist and display the playlists for each Guardian
const playlistsData = generatePlaylist(guardians, songs);
displayPlaylists(playlistsData);