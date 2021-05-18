

const template = document.createElement("template");
template.innerHTML = `     <style> 
:host {
  font-family: var(--icons)
  }
.progress {
  height: 5px;
  border-radius: 5px;
  background: #cc8b86;
  box-shadow: 0 0 10px #e27f78;
  position: absolute;
  left: 0;
}
.progress__container {
  background: #d1be9c;
  width: 100%;
  height: 5px;
  border-radius: 5px;
  position: relative;
}
.musicPlayer {
  padding: 10px 30px;
  width: 300px;
  background: #f9eae1;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  border: 1px solid #aa998f;
  border-radius: 5px;
  display: flex;
  place-items: center;
}
.control {
  width: max-content;
  padding-right: 30px;
}
.hidden {
  display: none;
}
.shown {
  display: block;
}
button {
  all: unset;
  cursor: pointer;
}

</style>
<audio
class="audio"
src=""
type="audio/ogg"
></audio>   <div class="musicPlayer">
<div class="control">
  <button class="playButton">
      <span class="material-icons">play_arrow</span>        </button>
  <button class="stopButton hidden">            <span class="material-icons">stop</span>        </button>
</button>
<button class="replayButton hidden">            <span class="material-icons">replay</span>        </button>
</button>
</div>

<div class="progress__container">
  <div class="progress"></div>
</div>
</div>`;

class MusicPlayer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('audio').src = this.getAttribute('src');

    const playButton = this.shadowRoot.querySelector(".playButton");
    const stopButton = this.shadowRoot.querySelector(".stopButton");
    const replayButton = this.shadowRoot.querySelector(".replayButton");
    
    const audio = this.shadowRoot.querySelector(".audio");
    const progress = this.shadowRoot.querySelector(".progress");
    
    playButton.addEventListener("click", () => {
      audio.play();
      stopButton.classList.remove("hidden");
      playButton.classList.add("hidden");
      shadow.appendChild(para);
    });
    playButton.addEventListener("click", () => {
      audio.play();
      stopButton.classList.remove("hidden");
      playButton.classList.add("hidden");
      shadow.appendChild(para);
    });
    
    stopButton.addEventListener("click", () => {
      audio.pause();
      playButton.classList.remove("hidden");
      stopButton.classList.add("hidden");
    });
    
    replayButton.addEventListener("click", () => {
      audio.play();
      stopButton.classList.remove("hidden");
      replayButton.classList.add("hidden");
    });
    
    function updateProgress(e) {
      const { duration, currentTime } = e.srcElement;
      const progressPercent = (currentTime / duration) * 100;
      progress.style.width = `${progressPercent}%`;
    }
    
    audio.addEventListener("timeupdate", updateProgress);
    
    audio.addEventListener("ended", () => {
      playButton.classList.add("hidden");
      stopButton.classList.add("hidden");
      replayButton.classList.remove("hidden");
    });


















  }
}
window.customElements.define("music-player", MusicPlayer);
