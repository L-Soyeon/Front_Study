import logo from "./logo.svg";
import "./App.css";
import ImportConponent from "./R003_ImportConponent";
import LifecycleEx from "./R004_LifecycleEx";
import LifecycleEx_1 from "./R005_LifecycleEx";
import google_logo from "./img/google_logo.svg";
import google_search from "./img/search.svg";
import googlemic from "./img/googlemic_clr_24px.svg";
import aidu_logo from "./img/AIDU.png";
import add from "./img/add.svg";
import naver from "./img/naver.png";
import store from "./img/store.png";
import dot_btn from "./img/dot_btn.png";

function App() {
  return (
    <div>
      <header>
        <div class="main">
          <div class="useritem_1">
            <button>Gmail</button>
          </div>
          <div class="useritem_1">
            <button>이미지</button>
          </div>
          <div class="useritem">
            <button class="dot-icon">
              <img src={dot_btn} alt="dot_btn" />
            </button>
          </div>
          <div class="useritem_2">
            <button>연</button>
          </div>
        </div>
      </header>
      <div>
        <img src={google_logo} alt="google_logo" />
      </div>

      <div class="input-gruop">
        <form action="https://www.google.com/search?q=">
          <div class="search-bar">
            <span class="search-icon">
              <img src={google_search} alt="google_search" />
            </span>

            <input
              id="input"
              type="search"
              autoComplete="off"
              role="combobox"
              placeholder="Google 검색 또는 URL 입력"
              aria-live="polite"
            ></input>
            <a href="https://www.google.com/search?q=">
              <button class="voice-icon" type="button" id="button-voice">
                <img src={googlemic} alt="googlemic" />
              </button>
            </a>
          </div>
        </form>
      </div>
      <footer>
        <div class="footercontainer">
          <div class="footeritemadd_1">
            <div class="footeritem">
              <button>
                <img src={naver} width="40px" height="40px" />
                <div class="footername">NAVER</div>
              </button>
            </div>
            <div class="footeritem">
              <button>
                <img src={naver} width="40px" height="40px" />
                <div class="footername">NAVER</div>
              </button>
            </div>
            <div class="footeritem">
              <button>
                <img src={naver} width="40px" height="40px" />
                <div class="footername">NAVER</div>
              </button>
            </div>
            <div class="footeritem">
              <button>
                <img src={store} width="40px" height="40px" />
                <div class="footername">STORE</div>
              </button>
            </div>
          </div>
          <div class="footeritemadd_2">
            <div class="footeritem2">
              <button>
                <img src={store} width="40px" height="40px" />
                <div class="footername">STORE</div>
              </button>
            </div>
            <div class="footeritem2">
              <button>
                <img src={store} width="40px" height="40px" />
                <div class="footername">STORE</div>
              </button>
            </div>
            <div class="footeritem2">
              <button>
                <img src={store} width="40px" height="40px" />
                <div class="footername">STORE</div>
              </button>
            </div>
            <div class="footeritem2">
              <button>
                <img src={add} width="40px" height="40px" />
                <div class="footername">PLUS</div>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
