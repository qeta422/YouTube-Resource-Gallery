const videoContainer = document.getElementById('videoContainer');

let youTubeVideoIds = [];

const loadVideos = () => {
    youTubeVideoIds = JSON.parse(localStorage.getItem('youTubeVideoIds')) || [];
    console.log(youTubeVideoIds);
}

const displayVideos = () => {
    const videosHTMLString = youTubeVideoIds.map( id => `
        <li onclick="clickVideo(event, '${id}'">
        <img class="thumbnail" src="https://i3.ytimg.com/vi/${id}/sddefault.jpg" 
        alt= "Cover image for YouTube video with id ${id}">
        <button class="delete-btn">&times;</button>
        </li>
    `).join("");
    videoContainer.innerHTML = videosHTMLString;
    console.log(videosHTMLString);

    // for (let i = 0; i < youTubeVideoIds.length; i++) {
    //     console.log(youTubeVideoIds[i]);
        
    // }
}

loadVideos();
displayVideos();
