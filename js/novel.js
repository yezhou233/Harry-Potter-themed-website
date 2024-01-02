// 设置背景颜色
function backcolor() {
    console.log("saadfasdf")

    // 创建一个包含样式的对象
    var zhuti = {
        name: "123",
        style: {
            body: {
                color: $("#textcolor").val(),
                background: $("#backcolor").val(),
            },
        },
    }
    console.log(zhuti)

    // 注册主题
    themes.register(zhuti.name, zhuti.style);

    // 选择主题
    themes.select(zhuti.name);

}

// 设置字体大小
var fontsize = 14;

// 获取字体增加按钮元素
var dafont = document.getElementById("dafont")
dafont.addEventListener("click", function () {
    fontsize = fontsize + 1
    // 设置字体大小
    themes.fontSize(fontsize + "px")
});

// 获取字体减小按钮元素
var xiaofont = document.getElementById("xiaofont")
xiaofont.addEventListener("click", function () {
    fontsize = fontsize - 1
    // 设置字体大小
    themes.fontSize(fontsize + "px")
});


// 获取上一页按钮元素
var prevPageBtn = document.getElementById("prevPageBtn");
// 获取下一页按钮元素
var nextPageBtn = document.getElementById("nextPageBtn");

// 绑定上一页按钮的点击事件
prevPageBtn.addEventListener("click", function () {
    // 上一页
    rendition.prev();
});

// 绑定下一页按钮的点击事件
nextPageBtn.addEventListener("click", function () {
    // 下一页
    rendition.next();
});


// 创建一个电子书对象
var book = ePub("../novel/哈利波特.epub");
// var book = ePub("12994-Shao Huo Gong.epub");

// 渲染电子书
var rendition = book.renderTo("read", {

});

// 使用渲染电子书对象的主题
var themes = rendition.themes;

// 显示电子书
rendition.display();

// 等待电子书加载完成
book.ready.then(function () {
    // 获取目录
    var toc = book.navigation.toc;
    console.log(toc);
});