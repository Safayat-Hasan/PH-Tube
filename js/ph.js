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
        if (video.authors[0].verified === true) {
            videoCard.innerHTML = `
            <div class="">
                <figure><img src="${video.thumbnail}" alt="" /></figure>
                <div class="flex gap-3">
                    <div>
                        <img class="mt-3 w-10 h-10 rounded-[40px]" src="${video.authors[0].profile_picture}" alt="" /></figure>
                    </div>
                    <div class="mt-4">
                        <h2 class="font-bold text-base">${video.title}</h2>
                        <div class="flex gap-2">
                            <p class="font-normal text-sm text-[#171717B3]">${video.authors[0].profile_name}</p>
                            <img src="verified.png" alt="" />
                        </div>    
                        <p id="views" class="font-normal text-sm text-[#171717B3]">${video.others.views} views</p>
                    </div>
                </div>
            </div>
        `
        }
        else {
            videoCard.innerHTML = `
            <div class="">
                <figure><img src="${video.thumbnail}" alt="" /></figure>
                <div class="flex gap-3">
                    <div>
                        <img class="mt-3 w-10 h-10 rounded-[40px]" src="${video.authors[0].profile_picture}" alt="" /></figure>
                    </div>
                    <div class="mt-4">
                        <h2 class="font-bold text-base">${video.title}</h2>
                        <p class="font-normal text-sm text-[#171717B3]">${video.authors[0].profile_name}</p>
                        <p id="views" class="font-normal text-sm text-[#171717B3]">${video.others.views} views</p>
                    </div>
                </div>
            </div>
        `
        }
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

function sortViews() {
    const loadVideoAll = async () => {
        const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
        const data = await res.json();
        console.log(data.data);
        const videos = data.data;

        displayVideosAll(videos);
        videos.forEach(video => {
            const views = video.others.views;
            const viewsNum = parseInt(views);
            // console.log(viewsNum);
            video.others.views = viewsNum;
        })
        // videos.sort(viewsNum);
    }

    const displayVideosAll = (videos) => {
        const videoContainer = document.getElementById('video-container');
        videoContainer.textContent = '';
        const oopsContainer = document.getElementById('oops-section');
        oopsContainer.textContent = '';
        videos.forEach(video => {
            const videoCard = document.createElement('div');
            videoCard.classList = `card bg-gray-100 p-4 shadow-xl`
            const views = video.others.views;
            const viewsNum = parseInt(views);
            console.log(viewsNum);
            if (video.authors[0].verified === true) {
                videoCard.innerHTML = `
                <figure><img src="${video.thumbnail}" alt="" /></figure>
                <div class="flex gap-3">
                    <div>
                        <img class="mt-3 w-10 h-10 rounded-[40px]" src="${video.authors[0].profile_picture}" alt="" /></figure>
                    </div>
                    <div class="mt-4">
                        <h2 class="font-bold text-base">${video.title}</h2>
                        <div class="flex gap-2">
                            <p class="font-normal text-sm text-[#171717B3]">${video.authors[0].profile_name}</p>
                            <img src="verified.png" alt="" />
                        </div>    
                        <p id="views" class="font-normal text-sm text-[#171717B3]">${video.others.views} views</p>
                    </div>
                </div>
            `
            }
            else {
                videoCard.innerHTML = `
                <figure><img src="${video.thumbnail}" alt="" /></figure>
                <div class="flex gap-3">
                    <div>
                        <img class="mt-3 w-10 h-10 rounded-[40px]" src="${video.authors[0].profile_picture}" alt="" /></figure>
                    </div>
                    <div class="mt-4">
                        <h2 class="font-bold text-base">${video.title}</h2>
                        <p class="font-normal text-sm text-[#171717B3]">${video.authors[0].profile_name}</p>
                        <p id="views" class="font-normal text-sm text-[#171717B3]">${video.others.views} views</p>
                    </div>
                </div>
            `
            }
            videoContainer.appendChild(videoCard);

        });
    }
    loadVideoAll();
}

// loadVideo(1000);
function sortViews2() {
    // Get the container of the cards
    const cardContainer = document.getElementById("video-container");

    // Convert the cards into an array
    const cards = Array.from(cardContainer.getElementsByClassName("card"));

    // Sort the cards based on the numbers inside
    cards.sort((a, b) => {
        const numberA = parseInt(a.querySelector("#views").textContent, 10);
        const numberB = parseInt(b.querySelector("#views").textContent, 10);
        return numberB - numberA; // Change to b - a for descending order
    });

    // cardContainer.textContent = '';
    // Reappend the sorted cards to the container
    cards.forEach(card => cardContainer.appendChild(card));

}