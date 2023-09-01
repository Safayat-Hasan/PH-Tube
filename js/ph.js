const loadVideo = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    console.log(data.data);
    const videos = data.data;
    if (videos.length != 0) {
        displayVideos(videos);
    }
    else {
        displayOops();
    }
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('video-container');
    videoContainer.textContent = '';
    const oopsContainer = document.getElementById('oops-section');
    oopsContainer.textContent = '';
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.classList = `card bg-gray-100 p-4 shadow-xl`
        videoCard.innerHTML = `
        <figure><img src="${video.thumbnail}" alt="" /></figure>
        <div class="card-body">
            <h2 class="card-title">${video.title}</h2>
        </div>`
        videoContainer.appendChild(videoCard);
    });
}


function changeColor(id) {
    const presentClass = document.getElementById(id);
    presentClass.classList.add('bg-[#FF1F3D]')
    presentClass.classList.add('text-white')

}

function displayOops() {
    const videoContainer = document.getElementById('video-container');
    videoContainer.textContent = '';
    const oopsContainer = document.getElementById('oops-section');
    oopsContainer.textContent = '';
    const oopsPic = document.createElement('div');
    oopsPic.classList = `mt-[150px] text-center justify-center`
    oopsPic.innerHTML = `
    <div class="card">
        <figure class=""><img class="" src="Icon.png" alt="" /></figure>
        <div class="card-body">
            <h2 class="text-3xl font-bold text-center">Oops!! Sorry, There is no <br> content here</h2>
        </div>
    </div>
    `
    
    oopsContainer.appendChild(oopsPic);
}

// loadVideo();