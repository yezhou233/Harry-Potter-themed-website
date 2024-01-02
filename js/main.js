const academy = window.localStorage.getItem('academy');
const gender = window.localStorage.getItem('gender');
const yourname = window.localStorage.getItem('name');

const academymessage = document.getElementById("academy-message");
const namemessage = document.getElementById("name-message");
const avatarmessage = document.getElementById("avatar-message");



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

const classedmessage = document.getElementById("classed-message");
classedmessage.innerHTML = "<p>你也许属于格兰芬多，</p> <p>那里有埋藏在心底的勇敢，</p><p>他们的胆识、气魄和豪爽，</p><p>使格兰芬多出类拔萃。</p><p>——分院帽</p>"

if (academy === "格兰芬多") {
    classedmessage.innerHTML = "<p>你也许属于格兰芬多，</p> <p>那里有埋藏在心底的勇敢，</p><p>他们的胆识、气魄和豪爽，</p><p>使格兰芬多出类拔萃。</p><p>——分院帽</p>";
    classedmessage.style.color = "rgb(191, 39, 19)";
}
if (academy === "拉文克劳") {
    classedmessage.innerHTML = "<p>如果你头脑精明，</p><p>或许会进智慧的老拉文克劳，</p><p>那些睿智博学的人，</p><p>总会在那里遇见他们的同道。</p><p>——分院帽</p>";
    classedmessage.style.color = "rgb(63, 69, 184)";
}
if (academy === "赫奇帕奇") {
    classedmessage.innerHTML = "<p>你也许属于赫奇帕奇，</p><p>那里的人正直忠诚，</p><p>赫奇帕奇的学子们坚忍诚实，</p><p>不畏惧艰辛的劳动。</p><p>——分院帽</p>";
    classedmessage.style.color = "rgb(191, 165, 19)";
}
if (academy === "斯莱特林") {
    classedmessage.innerHTML = "<p>也许你会进斯莱特林，</p><p>也许你在这里交上真诚的朋友，</p><p>但那些狡诈阴险之辈却会不惜一切手段，</p><p>去达到他们的目的。</p><p>——分院帽</p>";
    classedmessage.style.color = "rgb(74, 154, 31)";
}