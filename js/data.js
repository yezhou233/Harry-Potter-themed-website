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


// 轮转图
const bannercontrol1 = document.getElementById("banner-control-1");
const bannercontrol2 = document.getElementById("banner-control-2");
const bannercontrol3 = document.getElementById("banner-control-3");
const bannercontrol4 = document.getElementById("banner-control-4");

const container = document.getElementById("container");

bannercontrol1.addEventListener("click", () => {
    container.style.transform = "translateX(0)";
})
bannercontrol2.addEventListener("click", () => {
    container.style.transform = "translateX(-25%)";
})
bannercontrol3.addEventListener("click", () => {
    container.style.transform = "translateX(-50%)";
})
bannercontrol4.addEventListener("click", () => {
    container.style.transform = "translateX(-75%)";
})


// 年级组件监听器
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");

const gradetext = document.getElementById("grade-text")

one.addEventListener("click", () => {
    gradetext.innerText = "一年级是年轻男女巫师在霍格沃茨魔法学校接受魔法教育的第一年。一年级学生的年龄通常是十一到十二岁。和老生不同的是，一年级的学生会在钥匙保管员的带领下，乘坐小船穿过湖面进入城堡。一年级新生不准自带飞天扫帚，也不许在参加飞行课之前骑扫帚。不过，哈利·波特是个例外，因为他在一年级就加入了霍格沃茨魁地奇球队，并得到了一把属于自己的飞天扫帚。一年级新生需要学习的课程包括魔药学、草药学、黑魔法防御术、变形学、魔法史、天文学、魔咒学和飞行课。";
    one.style.color = "rgb(212, 212, 212)";
    two.style.color = "black";
    three.style.color = "black";
    four.style.color = "black";
    five.style.color = "black";
    six.style.color = "black";
    seven.style.color = "black";
})
two.addEventListener("click", () => {
    gradetext.innerText = "二年级是年轻男女巫师在霍格沃茨魔法学校接受魔法教育的第二年。二年级学生的年龄通常在十二至十三岁之间，除非有人留级。对于二年级学生来说，他们将第一次乘坐由夜骐牵引的学校马车来到城堡。二年级学生需要学习的课程包括魔药学、草药学、黑魔法防御术、变形学、魔法史、天文学和魔咒学。和一年级不同的是，二年级学生的课程表上不再出现飞行课，并且他们可以拥有属于自己的飞天扫帚。在学年结束之前，二年级的学生需要选择至少两门在下学年学习的选修课。";
    one.style.color = "black";
    two.style.color = "rgb(212, 212, 212)";
    three.style.color = "black";
    four.style.color = "black";
    five.style.color = "black";
    six.style.color = "black";
    seven.style.color = "black";
})
three.addEventListener("click", () => {
    gradetext.innerText = "三年级是年轻男女巫师在霍格沃茨魔法学校接受魔法教育的第三年。三年级学生的年龄通常在十三至十四岁之间。对于三年级学生来说，这是他们上选修课的第一年。三年级学生需要学习的课程包括魔药学、草药学、黑魔法防御术、变形学、魔法史、天文学、魔咒学，外加他们在一年前选择的两门以上的选修课。从三年级开始，学生可以在某些周末前往霍格莫德村，但是这必须得到学生家长或监护人的签名许可。";
    one.style.color = "black";
    two.style.color = "black";
    three.style.color = "rgb(212, 212, 212)";
    four.style.color = "black";
    five.style.color = "black";
    six.style.color = "black";
    seven.style.color = "black";
})
four.addEventListener("click", () => {
    gradetext.innerText = "四年级是年轻男女巫师在霍格沃茨魔法学校接受魔法教育的第四年。四年级学生的年龄通常在十四至十五岁之间。四年级的活动和课程设置与三年级大致相同。学生继续学习两门以上的选修课，并在特定的周末前往霍格莫德。四年级学生需要学习的课程包括魔药学、草药学、黑魔法防御术、变形学、魔法史、天文学、魔咒学和两门以上的选修课。不过，四年级的学生在功课上会比三年级学生繁忙一些，因为他们需要开始准备O.W.L.考试。";
    one.style.color = "black";
    two.style.color = "black";
    three.style.color = "black";
    four.style.color = "rgb(212, 212, 212)";
    five.style.color = "black";
    six.style.color = "black";
    seven.style.color = "black";
})
five.addEventListener("click", () => {
    gradetext.innerText = "五年级是年轻男女巫师在霍格沃茨魔法学校接受魔法教育的第五年。五年级学生的年龄通常在十五至十六岁之间。五年级对于学生来说是及其重要的一年，他们在这一年中必须参加O.W.L.考试，而这些考试的成绩将会决定他们在接下来有资格参加哪些N.E.W.T.课程。由于O.W.L.考试同样也将决定他们未来能够从事什么样的工作，因此五年级学生还将与学院院长进行面谈，接受就业指导。在面谈中，院长将会告诉学生，为了能够从事这一工作，他们需要学习哪些N.E.W.T.级别的课程。五年级的课程包括魔药学、草药学、黑魔法防御术、变形学、魔法史、天文学、魔咒学和两门以上的选修课。在五年级开始之前，每个学院都会有一个男生和一个女生被校长任命为级长。";
    one.style.color = "black";
    two.style.color = "black";
    three.style.color = "black";
    four.style.color = "black";
    five.style.color = "rgb(212, 212, 212)";
    six.style.color = "black";
    seven.style.color = "black";
})
six.addEventListener("click", () => {
    gradetext.innerText = "六年级是年轻男女巫师在霍格沃茨魔法学校接受魔法教育的第六年。六年级学生的年龄通常在十六至十七岁之间，当然有些人会更大一些，因为他们不得不留级。六年级是N.E.W.T.课程开始的第一年。如果某一门O.W.L.考试成绩满足了当时任课教师的最低要求，学生就可以继续参加这一门课的N.E.W.T.课程。如果分数没有达到要求，他们就无法直接参加N.E.W.T.课程，只能继续学习O.W.L.课程，直到通过考试。如果学生有资格参加某一门N.E.W.T.课程，但认为自己不需要获得这门课的N.E.W.T.证书，那么他也可以选择不继续选修这门课。六年级的学生在一开始都会因为有更多的自由时间而感到高兴，但是他们需要利用这些时间进行学习和完成功课。在N.E.W.T.课程中，老师所教的内容难度很大，课后作业也会更多。六年级学生可以自愿参加幻影显形课，学费为12加隆。";
    one.style.color = "black";
    two.style.color = "black";
    three.style.color = "black";
    four.style.color = "black";
    five.style.color = "black";
    six.style.color = "rgb(212, 212, 212)";
    seven.style.color = "black";
})
seven.addEventListener("click", () => {
    gradetext.innerText = "七年级是年轻男女巫师在霍格沃茨魔法学校接受魔法教育的第七年，也是最后一年。六年级学生的年龄通常在十七至十八岁之间，当然有些人会因为留级而更大一些。七年级的学生需要参加霍格沃茨最重要的一场考试——N.E.W.T.考试。学生在这一学年中继续学习N.E.W.T课程，并在学年结束时参加相应科目的N.E.W.T.考试。学生在学校的第七学年与第六学年有着相同的课程安排，继续学习N.E.W.T.课程。不过，并不是所有学生都需要参加N.E.W.T.考试，因为有些职业只要求提供O.W.L.考试证书。每一年，都会有一个七年级男生和一个七年级女生被分别任命为男女学生会主席。校长通常会从七年级的级长中确定学生会主席的人选，但也有例外，比如从未担任级长的詹姆·波特。";
    one.style.color = "black";
    two.style.color = "black";
    three.style.color = "black";
    four.style.color = "black";
    five.style.color = "black";
    six.style.color = "black";
    seven.style.color = "rgb(212, 212, 212)";
})

const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const nav4 = document.getElementById("nav4");
const nav5 = document.getElementById("nav5");
const nav6 = document.getElementById("nav6");

nav1.addEventListener("click", () => {
    document.getElementById('hogwarts').scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
    })
})
nav2.addEventListener("click", () => {
    document.getElementById('cd-timeline').scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
    })
})
nav3.addEventListener("click", () => {
    document.getElementById('academy').scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
    })
})
nav4.addEventListener("click", () => {
    document.getElementById('subject').scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
    })
})
nav5.addEventListener("click", () => {
    document.getElementById('grade').scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
    })
})
nav6.addEventListener("click", () => {
    document.getElementById('admission').scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
    })
})

// 唱片
record.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        music.currentTime = 3;//从第三秒开始播放
        record.style.animation = "move 3s linear infinite"
        return;
    }
    else {
        music.pause();
        record.style.animation = "move 0s linear infinite"
        return;
    }
});