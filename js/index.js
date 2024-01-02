const academyselected = document.querySelector(".academy-selected");
const genderselected = document.querySelector(".gender-selected");
const academyoptionsContainer = document.querySelector(".academy-options-container");
const genderoptionsContainer = document.querySelector(".gender-options-container");
const academyoptionsList = document.querySelectorAll(".academy-option");
const genderoptionsList = document.querySelectorAll(".gender-option");

const avatar = document.getElementById("avatar");
const avatarclass = document.querySelector(".avatar");

const login = document.getElementById("login");

const record = document.getElementById("record");

const loginbtn = document.getElementById("loginbtn");

const error = document.getElementById("error");

//背景音乐音量大小
const music = document.getElementById("music");
music.volume = 0.4;

// 设置头像监听器，播放背景音乐和弹出输入框
avatar.addEventListener("click", () => {
  if (login.style.height != '500px') {
    music.play();//播放音乐
    music.currentTime = 3;//从第三秒开始播放
    record.style.animation = "move 3s linear infinite";
    avatarclass.style.transition = "all 1.5s";
    avatarclass.style.top = "120px";
    setTimeout("login.style.height='500px';", 850);
  }
}
)

// 设置性别和学院监听器
academyselected.addEventListener("click", () => {


  academyoptionsContainer.classList.toggle("active");

  genderoptionsContainer.style.transition = "all 0.5s";
  genderoptionsContainer.classList.remove("active");
  error.innerText = "";
});
genderselected.addEventListener("click", () => {

  genderoptionsContainer.classList.toggle("active");

  academyoptionsContainer.style.transition = "all 0.5s";
  academyoptionsContainer.classList.remove("active");
  error.innerText = "";
});

// 性别和学院的选项的监听器
academyoptionsList.forEach(o => {
  o.addEventListener("click", () => {
    academyselected.innerHTML = o.querySelector("label").innerHTML;
    academyoptionsContainer.classList.remove("active");


    // 切换头像
    if (academyselected.innerHTML === "格兰芬多" && genderselected.innerHTML === "男巫师") {
      avatar.src = "../image/avatar-2.jpg";
    }
    if (academyselected.innerHTML === "格兰芬多" && genderselected.innerHTML === "女巫师") {
      avatar.src = "../image/avatar-3.jpg";
    }
    if (academyselected.innerHTML === "拉文克劳" && genderselected.innerHTML === "男巫师") {
      avatar.src = "../image/avatar-4.jpg";
    }
    if (academyselected.innerHTML === "拉文克劳" && genderselected.innerHTML === "女巫师") {
      avatar.src = "../image/avatar-5.jpg";
    }
    if (academyselected.innerHTML === "赫奇帕奇" && genderselected.innerHTML === "男巫师") {
      avatar.src = "../image/avatar-6.jpg";
    }
    if (academyselected.innerHTML === "赫奇帕奇" && genderselected.innerHTML === "女巫师") {
      avatar.src = "../image/avatar-7.jpg";
    }
    if (academyselected.innerHTML === "斯莱特林" && genderselected.innerHTML === "男巫师") {
      avatar.src = "../image/avatar-8.jpg";
    }
    if (academyselected.innerHTML === "斯莱特林" && genderselected.innerHTML === "女巫师") {
      avatar.src = "../image/avatar-9.jpg";
    }


  });
});


genderoptionsList.forEach(o => {
  o.addEventListener("click", () => {
    genderselected.innerHTML = o.querySelector("label").innerHTML;
    genderoptionsContainer.classList.remove("active");


    // 切换头像
    if (academyselected.innerHTML === "格兰芬多" && genderselected.innerHTML === "男巫师") {
      avatar.src = "../image/avatar-2.jpg";
    }
    if (academyselected.innerHTML === "格兰芬多" && genderselected.innerHTML === "女巫师") {
      avatar.src = "../image/avatar-3.jpg";
    }
    if (academyselected.innerHTML === "拉文克劳" && genderselected.innerHTML === "男巫师") {
      avatar.src = "../image/avatar-4.jpg";
    }
    if (academyselected.innerHTML === "拉文克劳" && genderselected.innerHTML === "女巫师") {
      avatar.src = "../image/avatar-5.jpg";
    }
    if (academyselected.innerHTML === "赫奇帕奇" && genderselected.innerHTML === "男巫师") {
      avatar.src = "../image/avatar-6.jpg";
    }
    if (academyselected.innerHTML === "赫奇帕奇" && genderselected.innerHTML === "女巫师") {
      avatar.src = "../image/avatar-7.jpg";
    }
    if (academyselected.innerHTML === "斯莱特林" && genderselected.innerHTML === "男巫师") {
      avatar.src = "../image/avatar-8.jpg";
    }
    if (academyselected.innerHTML === "斯莱特林" && genderselected.innerHTML === "女巫师") {
      avatar.src = "../image/avatar-9.jpg";
    }
  });
});

// 点击名字输入框收回前面的下拉框
const yourname = document.getElementById("name");
yourname.addEventListener('click', () => {

  error.innerText = "";

  academyoptionsContainer.style.transition = "all 0.3s";
  academyoptionsContainer.classList.remove("active");
  genderoptionsContainer.style.transition = "all 0.3s";
  genderoptionsContainer.classList.remove("active");
}
)

// 唱片监听器
record.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    record.style.animation = "move 3s linear infinite"
    return;
  }
  else {
    music.pause();
    record.style.animation = "move 0s linear infinite"
    return;
  }
});

loginbtn.addEventListener("click", () => {

  if (academyselected.innerHTML === "格兰芬多" || academyselected.innerHTML === "拉文克劳" || academyselected.innerHTML === "赫奇帕奇" || academyselected.innerHTML === "斯莱特林") {
    if (genderselected.innerHTML === "男巫师" || genderselected.innerHTML === "女巫师") {
      if (yourname.value != "") {
        window.location.href = "main.html";
        location.href = 'main.html'
        window.localStorage.setItem('academy', academyselected.innerHTML);
        window.localStorage.setItem('gender', genderselected.innerHTML);
        window.localStorage.setItem('name', yourname.value);
      } else {
        error.innerText = "🪄🪄信息未填写完整🪄🪄";
      }
    } else {
      error.innerText = "🪄🪄信息未填写完整🪄🪄";
    }
  } else {
    error.innerText = "🪄🪄信息未填写完整🪄🪄";
  }

})