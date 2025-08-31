document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');
toggle.addEventListener('click', () => {
    navList.classList.toggle('open');
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
});
navList.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navList.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
}));

const channelId = "UCWtiMUKu0pE9UFlDLy7nN2A"; // coloque seu channel_id aqui
const url = `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

const gallery = document.getElementById("gallery");
const modal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const closeModal = document.getElementById("closeModal");

fetch(url)
    .then(res => res.json())
    .then(data => {
        const videos = data.items.slice(0, 6); // pega só os 6 primeiros

        videos.forEach(video => {
            const videoId = video.link.split("v=")[1];
            const div = document.createElement("div");
            div.classList.add("video");
            div.innerHTML = `
            <img src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg" alt="${video.title}">
            <h3>${video.title}</h3>
          `;
            div.addEventListener("click", () => {
                videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                modal.style.display = "flex";
            });
            gallery.appendChild(div);
        });
    });

// Fechar modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    videoFrame.src = "";
});

// Fechar clicando fora do vídeo
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        videoFrame.src = "";
    }
});