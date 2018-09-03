export const
    css10= `
@-webkit-keyframes rotation {
    from {
        -webkit-transform: rotate(0);
        transform: rotate(0); }
    to {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg); } }

@keyframes rotation {
    from {
        -webkit-transform: rotate(0);
        transform: rotate(0); }
    to {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg); } }

.overlay-bg, .pages__page_videos .pages__bg, .p-bg__cont {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAEAQMAAACTPww9AAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlMmRiryqrkAAAANSURBVAjXY2BgWADCAAPIAUE7SEuEAAAAAElFTkSuQmCC"); }

.stains, .l-popup__content, .btn-container__button {
    position: relative; }
.stains:before, .l-popup__content:before, .btn-container__button:before, .stains:after, .l-popup__content:after, .btn-container__button:after {
    content: '';
    position: absolute;
    display: block;
    height: 60px;
    width: 60px;
    background-image: url("/images/funtoplay3/button-stain.png");
    background-position: center;
    background-size: contain;
    opacity: 0;
    -webkit-transition: 100ms all;
    transition: 100ms all;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    pointer-events: none;
    z-index: -1; }
.stains:before, .l-popup__content:before, .btn-container__button:before {
    right: -18px;
    top: -39px; }
.stains:after, .l-popup__content:after, .btn-container__button:after {
    left: -14px;
    bottom: -25px;
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg); }
.stains_hover:before, .l-popup__content:before, .btn-container__button:hover:before, .stains_hover:after, .l-popup__content:after, .btn-container__button:hover:after {
    opacity: 1; }
.stains_hover:before, .l-popup__content:before, .btn-container__button:hover:before {
    right: -23px;
    top: -44px; }
.stains_hover:after, .l-popup__content:after, .btn-container__button:hover:after {
    left: -19px;
    bottom: -30px; }

@font-face {
    font-family: 'bebas';
    src: url("/fonts/bebasneue/bebasneue_regular-webfont.woff2") format("woff2"), url("/fonts/bebasneue/bebasneue_regular-webfont.woff") format("woff");
    font-weight: normal;
    font-style: normal; }

@font-face {
    font-family: 'bebas';
    src: url("/fonts/bebasneue/bebasneue_bold-webfont.woff2") format("woff2"), url("/fonts/bebasneue/bebasneue_bold-webfont.woff") format("woff");
    font-weight: 700;
    font-style: normal; }

img {
    border: 0;
    max-width: 100%;
    height: auto; }

legend {
    border: 0;
    padding: 0; }

td, th {
    padding: 0; }

article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
    display: block; }

audio, canvas, progress, video {
    display: inline-block;
    vertical-align: baseline; }

b, optgroup, strong {
    font-weight: 700; }

dfn {
    font-style: italic; }

mark {
    background: #ff0;
    color: #000; }

sub {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline; }

sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
    top: -.5em; }

sub {
    bottom: -.25em; }

figure {
    margin: 1em 40px; }

pre, textarea {
    overflow: auto; }

code, kbd, pre, samp {
    font-family: monospace,monospace;
    font-size: 1em; }

button, input, optgroup, select, textarea {
    color: inherit;
    font: inherit;
    margin: 0; }
button:focus, input:focus, optgroup:focus, select:focus, textarea:focus {
    outline: 0; }

button {
    overflow: visible;
    text-transform: none; }

select {
    text-transform: none; }

button, html input[type=button] {
    -webkit-appearance: button;
    cursor: pointer; }

input[type=reset], input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer; }

button[disabled], html input[disabled] {
    cursor: default; }

button::-moz-focus-inner {
    border: 0;
    padding: 0; }

input {
    line-height: normal; }
input::-moz-focus-inner {
    border: 0;
    padding: 0; }
input[type=checkbox], input[type=radio] {
    padding: 0; }
input[type=search] {
    -webkit-appearance: textfield;
    box-sizing: content-box; }
input[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration {
    -webkit-appearance: none; }

fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: .35em .625em .75em; }

table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%; }

a {
    color: inherit;
    text-decoration: none; }
a:hover {
    color: #fcff00; }

*, *:before, *:after {
    box-sizing: border-box; }

::-moz-selection {
    background: #fcff00;
    color: #000; }

::selection {
    background: #fcff00;
    color: #000; }

::-moz-selection {
    background: #fcff00;
    color: #000; }

html {
    font-size: 24px; }
@media only screen and (max-width: 1100px) {
    html {
        font-size: 18px; } }
@media only screen and (max-width: 768px) {
    html {
        font-size: 14px; } }

body {
    line-height: 1;
    font-weight: 400;
    color: #fff;
    background-color: #000;
    margin: 0;
    font-family: 'bebas', sans-serif;
    overflow-y: scroll;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto; }

.pages__page {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-position: center;
    background-size: cover; }
.pages__page_main {
    background-image: url("https://gn691.cdn.gamenet.ru/TY0Xv2riHu/6mS5U/o_TMLiL.jpg");
    background-position: center;
}
.pages__page_hero {
    background-image: url("https://gn781.cdn.gamenet.ru/TY0Xv2riHu/6mS6E/o_5E2Tn.jpg");
    background-position: left center; }
.pages__page_hero:before {
    content: '';
    position: absolute;
    top: -35px;
    height: 96px;
    width: 100%;
    background-image: url("https://gn910.cdn.gamenet.ru/TY0Xv2riHu/6mS6a/o_2Dk5jF.png");
    z-index: 1;
    pointer-events: none; }
.pages__page_videos {
    background-image: url("https://gn553.cdn.gamenet.ru/TY0Xv2riHu/6mS79/o_qY02O.jpg"); }
.pages__page_videos .pages__bg {
    width: 100%;
    height: 100%; }
.pages__page_videos .pages__wrap {
    overflow: hidden;
    padding-bottom: calc(2rem + 100px); }

.pages__bg {
    position: absolute;
    z-index: 0;
    pointer-events: none;
    width: 100%;
    height: 100%; }

.pages__wrap {
    position: relative;
    min-height: 100vh;
    width: 100%;
    max-width: 1260px;
    margin: 0 auto;
    padding: 2rem 0;
    z-index: 500; }

@media only screen and (max-width: 1308px) {
.pages__wrap {
        padding-left: 1rem;
        padding-right: 1rem; } }

@media only screen and (max-width: 768px) {
.pages__page_videos .pages__wrap {
        padding-bottom: calc(2rem + 147px); } }

.l-title {
    text-align: center;
    margin-bottom: 2rem; }
.l-title__title {
    margin-bottom: 0.25rem; }
.l-title__subtitle {
    margin-bottom: 0;
    font-weight: 400; }

.flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    width: 100%; }
.flex_center {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center; }
.flex_columns {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column; }
.flex__item {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto; }
.flex__item_full {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1; }
.flex__item_size-1 {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1; }
.flex__item_size-2 {
    -webkit-box-flex: 2;
    -ms-flex: 2;
    flex: 2; }

.loader {
    position: relative;
    -webkit-transition: all 200ms;
    transition: all 200ms; }
.loader:after {
    content: '';
    position: absolute;
    width: 48px;
    height: 48px;
    border: solid 4px #fff;
    border-left-color: transparent;
    border-right-color: transparent;
    border-radius: 50%;
    top: calc(50% - 24px);
    left: calc(50% - 24px);
    -webkit-animation: rotation 1s linear infinite;
    animation: rotation 1s linear infinite;
    -webkit-transition: opacity 200ms;
    transition: opacity 200ms;
    opacity: 0; }
.loader__content {
    -webkit-transition: all 200ms;
    transition: all 200ms;
    opacity: 1; }
.loader_loading:after {
    opacity: 1; }
.loader_loading .loader__content {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0.3; }

@media only screen and (max-width: 1100px) {
.xmeduim-hide {
        display: none; } }

@media only screen and (max-width: 768px) {
.medium-hide {
        display: none; } }

@media only screen and (max-width: 600px) {
.small-hide {
        display: none; } }

.l-popup {
    position: fixed;
    display: none;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 9999;
    cursor: pointer; }
.l-popup_on {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex; }
.l-popup__content {
    border: 5px solid #fcff00;
    background-color: #000;
    max-width: 90%;
    max-height: 90%;
    cursor: auto; }
.l-popup__content iframe {
    display: block;
    width: 100%;
    height: 100%; }
.l-popup__content_video {
    width: 70%; }
.l-popup__close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
    pointer-events: none; }
.l-popup__close:before, .l-popup__close:after {
    content: '';
    position: absolute;
    top: 23px;
    width: 50px;
    height: 3px;
    background-color: #fcff00; }
.l-popup__close:before {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg); }
.l-popup__close:after {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg); }

h1, .h1 {
    font-size: 2.8rem;
    line-height: 2.5rem;
    font-weight: 700; }

h2, .h2 {
    font-size: 2.3rem;
    line-height: 2rem;
    font-weight: 700; }

h3, .h3 {
    font-size: 1.8rem;
    line-height: 1.5rem; }

h4, .h4 {
    font-size: 1.3rem;
    line-height: 1rem; }

p, h1, .h1, h2, .h2, h3, .h3, h4, .h4 {
    margin: 0 0 1rem 0; }

.play-btn {
    position: relative;
    background-image: url("https://gn760.cdn.gamenet.ru/TY0Xv2riHu/6mS7T/o_Rf9O5.png");
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    width: 431px;
    height: 131px;
    cursor: pointer;
    position: relative;
    z-index: 100; }
.play-btn:hover {
    background-position: center bottom; }
@media only screen and (max-width: 768px) {
.play-btn {
        width: 215.5px;
        height: 65.5px; } }

.btn-container {
    text-align: center;
    position: relative;
    z-index: 100; }
.btn-container__button {
    position: relative;
    padding: 0.8rem 2rem;
    font-size: 1.3rem;
    line-height: 1rem;
    background-color: #fff;
    color: #000;
    margin: 0 auto;
    border: 0;
    margin-bottom: 0;
    -webkit-transition: 100ms;
    transition: 100ms; }
.btn-container__button:hover {
    background-color: #fcff00; }

.p-bg__cont {
    width: 100%;
    height: 100%; }

.p-bg__heros {
    background-image: url("https://gn552.cdn.gamenet.ru/TY0Xv2riHu/6mS7l/o_178gWO.png");
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%; }

.p-bg__low {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    -webkit-transition: opacity 400ms;
    transition: opacity 400ms;
    background-color: #000;
    background-image: url("https://gn547.cdn.gamenet.ru/TY0Xv2riHu/6mSFC/o_hfj4a.png");
    background-position: center;
    background-size: cover;
}

.logo {
    display: block; }

.slogan {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    width: 100%; }
.slogan__wrap {
    width: 100%;
    background-image: url("https://gn31.cdn.gamenet.ru/TY0Xv2riHu/6mS7z/o_2EHdQ0.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    padding: 24px 0;
    text-align: center;
    margin-bottom: 2rem; }
.slogan__h2 {
    margin-bottom: 0.5rem; }
.slogan__h3 {
    margin-bottom: 0; }

.hero-tile {
    margin: 0 0.5rem 0.5rem 0;
    float: left;
    cursor: pointer;
    text-align: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden; }
.hero-tile__frame {
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    width: 130px;
    height: 150px;
    -webkit-transform: skewX(-14.92632deg) translateX(20px);
    transform: skewX(-14.92632deg) translateX(20px);
    border: 4px solid transparent;
    -webkit-transition: all 200ms;
    transition: all 200ms; }
.hero-tile__img {
    position: absolute;
    top: 0;
    left: -20px;
    width: 170px;
    max-width: 200px;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
    -webkit-transform: skewX(14.92632deg);
    transform: skewX(14.92632deg); }
.hero-tile__name {
    border-radius: 0.25rem;
    padding: 3px 5px;
    display: inline-block;
    -webkit-transition: all 200ms;
    transition: all 200ms; }
.hero-tile_active .hero-tile__frame {
    border-color: #fcff00;
    -webkit-transform: skewX(-14.92632deg) translateX(20px) scale(1.1);
    transform: skewX(-14.92632deg) translateX(20px) scale(1.1); }
.hero-tile_active .hero-tile__name {
    background-color: #fcff00;
    color: #000;
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px); }
.hero-tile:hover .hero-tile__frame {
    border-color: #fcff00; }
@media only screen and (max-width: 768px) {
.hero-tile:nth-child(6) {
        clear: left; }
.hero-tile__frame {
        width: 65px;
        height: 75px;
        -webkit-transform: skewX(-14.92584deg) translateX(10px);
        transform: skewX(-14.92584deg) translateX(10px); }
.hero-tile__img {
        left: -10px;
        width: 85px;
        -webkit-transform: skewX(14.92584deg);
        transform: skewX(14.92584deg); }
.hero-tile_active .hero-tile__frame {
        -webkit-transform: skewX(-14.92584deg) translateX(10px) scale(1.1);
        transform: skewX(-14.92584deg) translateX(10px) scale(1.1); }
.hero-tile_active .hero-tile__name {
        -webkit-transform: translateY(-7px);
        transform: translateY(-7px); } }
@media only screen and (max-width: 600px) {
.hero-tile:nth-child(6) {
        clear: none; }
.hero-tile:nth-child(5), .hero-tile:nth-child(9) {
        clear: left; } }

.p-split__detail {
    text-align: center; }

@media only screen and (max-width: 768px) {
.p-split {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column; }
.p-split .flex__item_size-2, .p-split .flex__item_size-1 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto; } }

.hero-detail__name {
    font-weight: 400; }

.hero-detail__img {
    position: relative;
    width: 100%;
    height: 430px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain; }

.hero-detail__bio {
    font-size: 20.4px;
    line-height: 1.1;
    max-width: 500px; }

@media only screen and (max-width: 768px) {
.hero-detail {
        margin-bottom: 1rem; }
.hero-detail__img {
        height: 50vh; } }

.page-2-stain {
    position: absolute;
    top: -190px;
    right: 0;
    width: 242px;
    height: 400px;
    background-image: url("https://gn390.cdn.gamenet.ru/TY0Xv2riHu/6mS8I/o_1ArsEL.png");
    background-position: center;
    background-size: contain;
    z-index: 5; }

.p-video {
    margin-bottom: 1rem;
    margin-right: -20px; }
.p-video__item-wrap {
    width: 35%;
    float: left;
    padding: 0 20px 20px 0; }
.p-video__item-wrap_size-big {
    width: 45%; }
.p-video__item-wrap_size-small {
    width: 20%; }
.p-video__item-content {
    position: relative;
    height: 11rem;
    background-color: #0f1222;
    background-position: center;
    background-size: cover;
    overflow: hidden; }
.p-video__item-content:hover .p-video__link {
    background: -webkit-linear-gradient(315deg, rgba(227, 223, 255, 0.3) 0%, rgba(23, 40, 125, 0.3) 100%);
    background: linear-gradient(135deg, rgba(227, 223, 255, 0.3) 0%, rgba(23, 40, 125, 0.3) 100%); }
.p-video__item-content:hover .p-video__link:before {
    -webkit-transform: scale(1) rotate(-120deg);
    transform: scale(1) rotate(-120deg); }
.p-video__item-content:hover .p-video__text {
    opacity: 1; }
.p-video__link {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    float: left;
    background: -webkit-linear-gradient(315deg, rgba(65, 63, 82, 0.4) 0%, rgba(28, 13, 142, 0.4) 100%);
    background: linear-gradient(135deg, rgba(65, 63, 82, 0.4) 0%, rgba(28, 13, 142, 0.4) 100%); }
.p-video__link:before, .p-video__link:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%; }
.p-video__link:before {
    margin: -43px 0 0 -43px;
    width: 86px;
    height: 86px;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    -webkit-transition: all 200ms;
    transition: all 200ms;
    background-image: url("https://gn926.cdn.gamenet.ru/TY0Xv2riHu/6mS8Y/o_QuW0p.png"); }
.p-video__link:after {
    margin: -14px 0 0 -14px;
    width: 28px;
    height: 28px;
    background-image: url("https://gn405.cdn.gamenet.ru/TY0Xv2riHu/6mS8k/o_1vp7Yy.png"); }
.p-video__text {
    position: absolute;
    bottom: 1.5rem;
    opacity: 0;
    width: 100%;
    text-align: center;
    -webkit-transition: 200ms opacity;
    transition: 200ms opacity;
    pointer-events: none; }
.p-video__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    height: 100%; }
@media only screen and (max-width: 768px) {
.p-video__item-wrap {
        width: 50%; } }
@media only screen and (max-width: 460px) {
.p-video {
        margin-right: 0; }
.p-video__item-wrap {
        width: 100%;
        padding: 0 0 20px 0; } }

.footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #000;
    z-index: 510; }
.footer:before {
    content: '';
    position: absolute;
    top: -35px;
    height: 35px;
    width: 100%;
    background-image: url("https://gn7.cdn.gamenet.ru/TY0Xv2riHu/6mS90/o_1PXoLj.png"); }
.footer__container {
    width: 100%;
    margin: 0 auto;
    max-width: 960px;
    padding-bottom: 1rem;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end; }
.footer__copy {
    font-size: 20.4px;
    font-weight: 400; }
.footer__logo {
    display: block;
    height: 54px;
    width: 112px;
    background-image: url("https://gn648.cdn.gamenet.ru/TY0Xv2riHu/6mS9E/o_uhirU.png");
    margin: 0 auto; }
.footer__link {
    margin: 0 10px; }
@media only screen and (max-width: 768px) {
.footer__container {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center; }
.footer__logo {
        margin-bottom: 10px; }
.footer__link {
        margin: 0 5px; } }

.clearfix {
*zoom: 1; }
.clearfix:before, .clearfix:after {
    content: " ";
    display: table; }
.clearfix:after {
    clear: both; }



`;