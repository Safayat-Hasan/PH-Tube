const loadVideo = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    console.log(data.data);
    if(id===1000){
        changeColorOrange(1000);
        changeColorNormal(1001);
        changeColorNormal(1003);
        changeColorNormal(1005);
    }
    else if(id===1001){
        changeColorOrange(1001);
        changeColorNormal(1000);
        changeColorNormal(1003);
        changeColorNormal(1005);
    }
    else if(id===1003){
        changeColorOrange(1003);
        changeColorNormal(1000);
        changeColorNormal(1001);
        changeColorNormal(1005);
    }
    else if(id===1005){
        changeColorOrange(1005);
        changeColorNormal(1000);
        changeColorNormal(1001);
        changeColorNormal(1003);
    }
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
            if(video.others.posted_date != ''){
            videoCard.innerHTML = `
            <div class="">
                <figure class="relative">
                    <img src="${video.thumbnail}" alt="" />
                    <p id="time" class="p-2 text-xs bottom-[12px] right-[12px] absolute font-normal text-white bg-[#171717] rounded">${video.others.posted_date ? returnTime(video.others.posted_date):''} </p>
                </figure>
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
        `}
            else{
                videoCard.innerHTML = `
                <div class="">
                    <figure class="relative">
                        <img src="${video.thumbnail}" alt="" />
                        <p id="time" class="p-2 text-xs bottom-[12px] right-[12px] absolute font-normal text-white rounded">${video.others.posted_date ? returnTime(video.others.posted_date):''} </p>
                    </figure>
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
        }
        else {
            if(video.others.posted_date != ''){
            videoCard.innerHTML = `
            <div class="">
                <figure class="relative">
                    <img src="${video.thumbnail}" alt="" />
                    <p id="time" class="time p-2 text-xs bottom-[12px] right-[12px] absolute font-normal text-white bg-[#171717] rounded">${video.others.posted_date ? returnTime(video.others.posted_date):''} </p>
                </figure>
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
        `}
            else{
            videoCard.innerHTML = `
            <div class="">
                <figure class="relative">
                    <img src="${video.thumbnail}" alt="" />
                    <p id="time" class="time p-2 text-xs bottom-[12px] right-[12px] absolute font-normal text-white rounded">${video.others.posted_date ? returnTime(video.others.posted_date):''} </p>
                </figure>
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
        `}
        }
        videoContainer.appendChild(videoCard);
    });
}


function changeColorOrange(id) {
    const presentClass = document.getElementById(id);
    presentClass.classList.add('bg-[#FF1F3D]')
    presentClass.classList.add('text-white')

}
function changeColorNormal(id) {
    const presentClass = document.getElementById(id);
    presentClass.classList.remove('bg-[#FF1F3D]')
    presentClass.classList.remove('text-white')

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

function blogSite(){
    window.location.href='blog.html';
}

function returnTime(seconds){
    const remaining = seconds % 3600;
    const minutes = parseInt(remaining / 60);
    const hours = parseInt(seconds / 3600);
    // document.getElementById('time').createElement();
    // timeField.classList.add('bg-[#171717]')
    return `${hours} hrs ${minutes} min ago`;
}

loadVideo(1000);