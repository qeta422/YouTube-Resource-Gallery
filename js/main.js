const videoContainer = document.getElementById('videoContainer');
const videoIdInput = document.getElementById('videoID');
const popup = document.getElementById('popup');
const videoEl = document.querySelector('#popup > iframe');
let youTubeVideoIds = [];
const IDS_KEY = "youTubeVideoIds";

const loadVideos = () => {
    youTubeVideoIds = JSON.parse(localStorage.getItem(IDS_KEY)) || [];
};

const displayVideos = () => {
    const videosHTMLString = youTubeVideoIds.map( (id) => `
        <li onclick="clickVideo(event, '${id}')">
        <img class="thumbnail" src="https://i3.ytimg.com/vi/${id}/sddefault.jpg" 
        alt= "Cover image for YouTube video with id ${id}">
        <button class="delete-btn">&times;</button>
        </li>
    `).join('');
    videoContainer.innerHTML = videosHTMLString;
};

const clickVideo = (event, id) => {
    console.log(event, id);
    if (event.target.classList.contains("delete-btn")) {
        youTubeVideoIds = youTubeVideoIds.filter(i => i != id);
        console.log(youTubeVideoIds);
        localStorage.setItem(IDS_KEY, JSON.stringify(youTubeVideoIds));
        displayVideos();
    }
    else {
        videoEl.src =`https://www.youtube.com/embed/${id}`;
        popup.classList.add('open');
        popup.classList.remove('closed');
    }
};

const saveVideo = (e) => {
    e.preventDefault();
    const videoId = videoIdInput.value;
    youTubeVideoIds.unshift(videoId);
    videoIdInput.value = '';
    localStorage.setItem(IDS_KEY, JSON.stringify(youTubeVideoIds));
    displayVideos();
};

const hendlePopupClick = () => {
    popup.classList.add('closed');
    popup.classList.remove('open');
}

loadVideos();
displayVideos();

