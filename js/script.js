// Atualiza o ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Galeria de Vídeos
const channelId = "UCWtiMUKu0pE9UFlDLy7nN2A"; // seu channel_id
const url = `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
const gallery = document.getElementById("gallery");
const modal = new bootstrap.Modal(document.getElementById("videoModal"));
const videoFrame = document.getElementById("videoFrame");

fetch(url)
  .then(res => res.json())
  .then(data => {
    const videos = data.items.slice(0, 6);
    videos.forEach(video => {
      const videoId = video.link.split("v=")[1];
      const col = document.createElement("div");
      col.classList.add("col-md-4");
      col.innerHTML = `
            <div class="card video shadow-sm h-100 cursor-pointer">
              <img src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg" class="card-img-top" alt="${video.title}">
              <div class="card-body">
                <h5 class="card-title">${video.title}</h5>
              </div>
            </div>
          `;
      col.querySelector(".video").addEventListener("click", () => {
        videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        modal.show();
      });
      gallery.appendChild(col);
    });
  });

// Limpa src ao fechar modal
document.getElementById("videoModal").addEventListener("hidden.bs.modal", () => {
  videoFrame.src = "";
});
