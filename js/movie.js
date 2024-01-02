const academy = window.localStorage.getItem('academy');
const gender = window.localStorage.getItem('gender');
const yourname = window.localStorage.getItem('name');

const academymessage = document.getElementById("academy-message");
const namemessage = document.getElementById("name-message");
const avatarmessage = document.getElementById("avatar-message");

const btnhint = document.getElementById("btnhint");
const plotbtn = document.getElementById("plotbtn");

const arrow = document.getElementById("arrow");
const movielist = document.getElementById("movie-list");
const vedioplayer = document.getElementById("mui-player");

var vedioname = '../movie/' + document.title + '.mp4';

// 信息块填补信息
academymessage.innerText = academy;
namemessage.innerText = yourname;
if (academy === "格兰芬多" && gender === "男巫师") {
    avatarmessage.src = "../image/avatar-2.jpg";
}
if (academy === "格兰芬多" && gender === "女巫师") {
    avatarmessage.src = "../image/avatar-3.jpg";
}
if (academy === "拉文克劳" && gender === "男巫师") {
    avatarmessage.src = "../image/avatar-4.jpg";
}
if (academy === "拉文克劳" && gender === "女巫师") {
    avatarmessage.src = "../image/avatar-5.jpg";
}
if (academy === "赫奇帕奇" && gender === "男巫师") {
    avatarmessage.src = "../image/avatar-6.jpg";
}
if (academy === "赫奇帕奇" && gender === "女巫师") {
    avatarmessage.src = "../image/avatar-7.jpg";
}
if (academy === "斯莱特林" && gender === "男巫师") {
    avatarmessage.src = "../image/avatar-8.jpg";
}
if (academy === "斯莱特林" && gender === "女巫师") {
    avatarmessage.src = "../image/avatar-9.jpg";
}

arrow.addEventListener("click", () => {
    if (movielist.style.left != "-270px") {
        movielist.style.transition = "all 1.2s";
        movielist.style.left = "-270px";

        arrow.style.right = "200px";
        arrow.style.transition = "all 1.2s";
        arrow.src = "../image/右拉.svg"

        vedioplayer.style.transition = "all 1.2s";
        vedioplayer.style.left = "50%";
        return;
    }
    if (movielist.style.left != "0px") {
        movielist.style.transition = "all 1.2s";
        movielist.style.left = "0px";

        arrow.style.right = "0";
        arrow.style.transition = "all 1.2s";
        arrow.src = "../image/左拉.svg"

        vedioplayer.style.transition = "all 1.2s";
        vedioplayer.style.left = "60%";
        return;
    }

})
plotbtn.addEventListener("click", () => {
    if (btnhint.innerText === "查看情节") {
        document.getElementById('plot').scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth',
        })
        btnhint.innerText = "返回";
        return;
    }
    if (btnhint.innerText === "返回") {
        document.getElementById('top').scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth',
        })
        btnhint.innerText = "查看情节";
        return;
    }

})

var mp = new MuiPlayer({
    container: '#mui-player',
    title: document.title,
    src: vedioname,
    width: '70%',
    height: 'auto',
})
console.log(vedioname)