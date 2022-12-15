"use strict";
jQuery(document).ready(function ($) {

    $(window).load(function () {
        // loading方式1
        $("#loading").fadeOut(800)
        // loading方式2（初始）
        // $(".loaded").fadeOut();
        // $(".preloader").delay(1000).fadeOut("slow");

        lodeData();

        function shuffle(pArr) {
            var array = pArr;
            var m = array.length, t, i;
            while(m) {
                i = Math.floor(Math.random() * m--);
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }

            return array;
        }

        function lodeData() {
            // 加载数据
            var gameDList = [
                {
                    index :1,
                    gameId:"0001",
                    name:"The World Cup",
                    picUrl:"assets/images2/game_0001.png",
                    videoUrl:"assets/images2/game_0001.mp4",
                    columnSpan:3,
                    rowSpan:3,
                    isFire:1,
                    isFire:1,
                },
                
                {
                    index :2,
                    gameId:"0003",
                    name:"Game",
                    picUrl:"assets/images2/game_0003.png",
                    videoUrl:"assets/images2/game_0003.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:1,
                },
                {
                    index :3,
                    gameId:"0002",
                    name:"Game",
                    picUrl:"assets/images2/game_0002.png",
                    videoUrl:"assets/images2/game_0002.mp4",
                    columnSpan:2,
                    rowSpan:2,
                    isFire:1,
                },
                {
                    index :4,
                    gameId:"0004",
                    name:"Game",
                    picUrl:"assets/images2/game_0004.png",
                    videoUrl:"assets/images2/game_0004.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:1,
                },
                {
                    index :5,
                    gameId:"0005",
                    name:"Game",
                    picUrl:"assets/images2/game_0005.png",
                    videoUrl:"assets/images2/game_0005.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:1,
                },
                {
                    index :6,
                    gameId:"0006",
                    name:"Game",
                    picUrl:"assets/images2/game_0006.png",
                    videoUrl:"assets/images2/game_0006.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:1,
                },
                {
                    index :7,
                    gameId:"0003",
                    name:"Game",
                    picUrl:"assets/images2/game_0003.png",
                    videoUrl:"assets/images2/game_0003.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:1,
                },
                {
                    index :8,
                    gameId:"0004",
                    name:"Game",
                    picUrl:"assets/images2/game_0004.png",
                    videoUrl:"assets/images2/game_0004.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :9,
                    gameId:"0001",
                    name:"The World Cup",
                    picUrl:"assets/images2/game_0001.png",
                    videoUrl:"assets/images2/game_0001.mp4",
                    columnSpan:3,
                    rowSpan:3,
                    isFire:0,
                },
                {
                    index :10,
                    gameId:"0005",
                    name:"Game",
                    picUrl:"assets/images2/game_0005.png",
                    videoUrl:"assets/images2/game_0005.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :11,
                    gameId:"0006",
                    name:"Game",
                    picUrl:"assets/images2/game_0006.png",
                    videoUrl:"assets/images2/game_0006.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :12,
                    gameId:"0006",
                    name:"Game",
                    picUrl:"assets/images2/game_0006.png",
                    videoUrl:"assets/images2/game_0006.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :13,
                    gameId:"0003",
                    name:"Game",
                    picUrl:"assets/images2/game_0003.png",
                    videoUrl:"assets/images2/game_0003.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :14,
                    gameId:"0004",
                    name:"Game",
                    picUrl:"assets/images2/game_0004.png",
                    videoUrl:"assets/images2/game_0004.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :15,
                    gameId:"0005",
                    name:"Game",
                    picUrl:"assets/images2/game_0005.png",
                    videoUrl:"assets/images2/game_0005.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :16,
                    gameId:"0006",
                    name:"Game",
                    picUrl:"assets/images2/game_0006.png",
                    videoUrl:"assets/images2/game_0006.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :3,
                    gameId:"0002",
                    name:"Game",
                    picUrl:"assets/images2/game_0002.png",
                    videoUrl:"assets/images2/game_0002.mp4",
                    columnSpan:2,
                    rowSpan:2,
                    isFire:0,
                },
                {
                    index :16,
                    gameId:"0006",
                    name:"Game",
                    picUrl:"assets/images2/game_0006.png",
                    videoUrl:"assets/images2/game_0006.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :16,
                    gameId:"0006",
                    name:"Game",
                    picUrl:"assets/images2/game_0006.png",
                    videoUrl:"assets/images2/game_0006.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :16,
                    gameId:"0006",
                    name:"Game",
                    picUrl:"assets/images2/game_0006.png",
                    videoUrl:"assets/images2/game_0006.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :3,
                    gameId:"0002",
                    name:"Game",
                    picUrl:"assets/images2/game_0002.png",
                    videoUrl:"assets/images2/game_0002.mp4",
                    columnSpan:2,
                    rowSpan:2,
                    isFire:0,
                },
                {
                    index :16,
                    gameId:"0006",
                    name:"Game",
                    picUrl:"assets/images2/game_0006.png",
                    videoUrl:"assets/images2/game_0006.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :16,
                    gameId:"0006",
                    name:"Game",
                    picUrl:"assets/images2/game_0006.png",
                    videoUrl:"assets/images2/game_0006.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :16,
                    gameId:"0006",
                    name:"Game",
                    picUrl:"assets/images2/game_0006.png",
                    videoUrl:"assets/images2/game_0006.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :3,
                    gameId:"0002",
                    name:"Game",
                    picUrl:"assets/images2/game_0002.png",
                    videoUrl:"assets/images2/game_0002.mp4",
                    columnSpan:2,
                    rowSpan:2,
                    isFire:0,
                },
                {
                    index :16,
                    gameId:"0006",
                    name:"Game",
                    picUrl:"assets/images2/game_0006.png",
                    videoUrl:"assets/images2/game_0006.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :16,
                    gameId:"0006",
                    name:"Game",
                    picUrl:"assets/images2/game_0006.png",
                    videoUrl:"assets/images2/game_0006.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :3,
                    gameId:"0002",
                    name:"Game",
                    picUrl:"assets/images2/game_0002.png",
                    videoUrl:"assets/images2/game_0002.mp4",
                    columnSpan:2,
                    rowSpan:2,
                    isFire:0,
                },
                {
                    index :3,
                    gameId:"0002",
                    name:"Game",
                    picUrl:"assets/images2/game_0002.png",
                    videoUrl:"assets/images2/game_0002.mp4",
                    columnSpan:2,
                    rowSpan:2,
                    isFire:0,
                },
                {
                    index :16,
                    gameId:"0006",
                    name:"Game",
                    picUrl:"assets/images2/game_0006.png",
                    videoUrl:"assets/images2/game_0006.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :16,
                    gameId:"0006",
                    name:"Game",
                    picUrl:"assets/images2/game_0006.png",
                    videoUrl:"assets/images2/game_0006.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :3,
                    gameId:"0002",
                    name:"Game",
                    picUrl:"assets/images2/game_0002.png",
                    videoUrl:"assets/images2/game_0002.mp4",
                    columnSpan:2,
                    rowSpan:2,
                    isFire:0,
                },
                {
                    index :3,
                    gameId:"0002",
                    name:"Game",
                    picUrl:"assets/images2/game_0002.png",
                    videoUrl:"assets/images2/game_0002.mp4",
                    columnSpan:2,
                    rowSpan:2,
                    isFire:0,
                },
                {
                    index :16,
                    gameId:"0006",
                    name:"Game",
                    picUrl:"assets/images2/game_0006.png",
                    videoUrl:"assets/images2/game_0006.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :3,
                    gameId:"0002",
                    name:"Game",
                    picUrl:"assets/images2/game_0002.png",
                    videoUrl:"assets/images2/game_0002.mp4",
                    columnSpan:2,
                    rowSpan:2,
                    isFire:0,
                },
                {
                    index :16,
                    gameId:"0006",
                    name:"Game",
                    picUrl:"assets/images2/game_0006.png",
                    videoUrl:"assets/images2/game_0006.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :3,
                    gameId:"0002",
                    name:"Game",
                    picUrl:"assets/images2/game_0002.png",
                    videoUrl:"assets/images2/game_0002.mp4",
                    columnSpan:2,
                    rowSpan:2,
                    isFire:0,
                },
                {
                    index :16,
                    gameId:"0006",
                    name:"Game",
                    picUrl:"assets/images2/game_0006.png",
                    videoUrl:"assets/images2/game_0006.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :16,
                    gameId:"0006",
                    name:"Game",
                    picUrl:"assets/images2/game_0006.png",
                    videoUrl:"assets/images2/game_0006.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :16,
                    gameId:"0006",
                    name:"Game",
                    picUrl:"assets/images2/game_0006.png",
                    videoUrl:"assets/images2/game_0006.mp4",
                    columnSpan:1,
                    rowSpan:1,
                    isFire:0,
                },
                {
                    index :3,
                    gameId:"0002",
                    name:"Game",
                    picUrl:"assets/images2/game_0002.png",
                    videoUrl:"assets/images2/game_0002.mp4",
                    columnSpan:2,
                    rowSpan:2,
                    isFire:0,
                },

            ]

            // 洗牌算法 打乱顺序
            shuffle(gameDList);

            // 排序  isFire
            gameDList.sort((a, b) => b.isFire - a.isFire);

            // 将第1 2 空出  在第一位塞入空白元素
            gameDList.unshift({
                index :0,
                gameId:"0000",
                name:"Search",
                picUrl:"",
                videoUrl:"",
                columnSpan:2,
                rowSpan:1,
            })

            // 获取到containerEx
            var containExList = document.getElementById("containerEx");
            var containList = "";
            
            // 遍历输出
            // 生成数据长度的div
            gameDList.forEach(element => {

                // 处理
                if(element.index == 0 && element.gameId == "0000" && element.name == "Search") {
                    // 搜索项开始拼接
                    var div = `<div class = "box" style = "grid-column: span ${element.columnSpan}; grid-row: span ${element.rowSpan}; background: #fff;">`;
                    var img = `<img src = '${element.picUrl}' alt = "">`

                    var imgend = `</img></div>`;

                    containList += `${div}${img}${imgend}`;
                } else {
                    var div = `<div class = "box grid_item_video" style = "grid-column: span ${element.columnSpan}; grid-row: span ${element.rowSpan};">`;
                    var img = `<img src = '${element.picUrl}' alt=""></img>`;
                    if (element.isFire == 1) {
                        img = `<img src = '${element.picUrl}' alt=""> <a style="position: absolute; top: 5%; right: 5%"><p>fire</p> </a> </img>`; 
                    }
                    var div2 = `<div class="grid_item_overlay_video">`;
                    var video = `<video width = "100%" height = "100%" muted loop = "true" alt = "" onclick = "window.open('${element.picUrl}')"> <source src = '${element.videoUrl}' type="video/mp4" /></object></video>`
                    var p = `<p class = "text-video_font"> ${element.name} </p></div></div>`

                    // 拼接
                    containList += `${div}${img}${div2}${video}${p}`;
                }

            });

            // 添加到Dom内
            containExList.innerHTML = containList;
        }
    });


    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#bs-example-navbar-collapse-1').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 0)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });

    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();

        /*---------------------------------------------*
     * Video
     ---------------------------------------------*/
      //play video on hover 
     $(document).on('mouseover', 'video', function() { 
        $(this).get(0).play(); 
       }); 
  
       //pause video on mouse leave 
       $(document).on('mouseleave', 'video', function() { 
        $(this).get(0).pause(); 
       });

// main-menu-scroll

    jQuery(window).scroll(function () {
        // var top = jQuery(document).scrollTop();
        var height = 300;
        //alert(batas);

        if (top > height) {
            // jQuery('.navbar-fixed-top').addClass('menu-scroll');
            $('.navbar-fixed-top-user').addClass('menu-scroll2')
        } else {
            // jQuery('.navbar-fixed-top').removeClass('menu-scroll');
            $('.navbar-fixed-top-user').addClass('menu-scroll2')
        }
    });

// scroll Up

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });
});

$(document).on("scroll", function () {
    if ($(document).scrollTop() > 200) {
        $("nav").addClass("small");
    } else {
        $("nav").removeClass("small");
    }
});

$(document).on("text-video_font", function () {
    $('.text-video_font').fadeIn('slow');
});

// 解决滑动报错





// 侧边栏操作
let btn = document.querySelector("#toggle-menu-btn");
let sidebarBg = document.querySelector(".sidebar-bg");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".search-btn");

// 搜索框操作
let input = document.querySelector(".finder__input");
let finder = document.querySelector(".finder");
let form = document.querySelector("form");
let clear = document.querySelector(".input_clear");


// 展开区域内  toggle按钮
btn.onclick = function(event) {
    event.stopPropagation()

    // 初始化搜索输入框
    input.value = "";

    // 放开底层界面的滚动
    document.documentElement.style.overflow = "scroll";

    // 隐藏侧边
    sidebarBg.classList.toggle("active");
    sidebar.classList.toggle("active");
    
    if(btn.classList.contains("bx-menu")){
        btn.classList.replace("bx-menu" , "bx-menu-alt-right");
    }else{
        btn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}

// 点击展示界面的搜索按钮
searchBtn.onclick = function(event) {
    event.stopPropagation()

    // 导入数据
    loadSearchData([]);

    // 阻止底层界面的滚动
    document.documentElement.style.overflow = "hidden";

    input.value = "";
    sidebarBg.classList.toggle("active");
    sidebar.classList.toggle("active");
}

// 展开的搜索区域
sidebar.onclick = function(event) {
    event.stopPropagation();
}

//展开时  黑色背景区域
sidebarBg.onclick = function(event) {
    event.stopPropagation();

    // 放开底层界面的滚动
    document.documentElement.style.overflow = "scroll";

    input.value = "";
    sidebarBg.classList.toggle("active");
    sidebar.classList.toggle("active");
}
// 侧边栏操作  end

input.addEventListener("focus", () => {
    finder.classList.add("active");
    $('.input_clear').show();
});

input.addEventListener("blur", () => {
  if (input.value.length === 0) {
    finder.classList.remove("active");
    $('.input_clear').hide();
  }
});

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  finder.classList.add("processing");
  finder.classList.remove("active");
  input.disabled = true;

  // 执行查询
  filterData(input.value);

  setTimeout(() => {
    finder.classList.remove("processing");
    input.disabled = false;
    if (input.value.length > 0) {
      finder.classList.add("active");
    }
  }, 1000);
});

clear.onclick = function(event) {
    input.value = "";
    $('.input_clear').hide();
}

// 搜索框操作  end

// 搜索框列表操作
function filterData (param) {
    var searchList = [
        {
            index :1,
            gameId:"0001",
            name:"Game1",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:1,
        },
        {
            index :2,
            gameId:"0002",
            name:"Game2",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:1,
        },
        {
            index :3,
            gameId:"0003",
            name:"Game3",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:1,
        },
        {
            index :4,
            gameId:"0004",
            name:"Game4",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:1,
        },
        {
            index :5,
            gameId:"0005",
            name:"Game5",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:1,
        },
        {
            index :6,
            gameId:"0006",
            name:"Game6",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:1,
        },
        {
            index :7,
            gameId:"0007",
            name:"Game7",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:0,
        },
        {
            index :8,
            gameId:"0008",
            name:"Game8",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:0,
        },
        {
            index :9,
            gameId:"0009",
            name:"Game9",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:0,
        },
        {
            index :10,
            gameId:"0010",
            name:"Game10",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:0,
        },
        {
            index :11,
            gameId:"0011",
            name:"Game11",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:0,
        },
        {
            index :12,
            gameId:"0012",
            name:"Game12",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:0,
        },
        {
            index :13,
            gameId:"0013",
            name:"Game13",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:0,
        },
        {
            index :14,
            gameId:"0014",
            name:"Game14",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:0,
        },
        {
            index :15,
            gameId:"0015",
            name:"Game15",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:0,
        },
        {
            index :16,
            gameId:"0016",
            name:"Game16",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:0,
        },
    
    ]

    // 是否要拦截 空 搜索
    // if(param.length <= 0 ) {
    //     return;
    // }

    let newArray = searchList.filter(element=>
        element.name.toUpperCase().indexOf(param.toUpperCase()) != -1
    )

    loadSearchData(newArray)
}


function loadSearchData(arrayData) {
    var searchList = [
        {
            index :1,
            gameId:"0001",
            name:"Game",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:1,
        },
        {
            index :2,
            gameId:"0002",
            name:"Game",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:1,
        },
        {
            index :3,
            gameId:"0003",
            name:"Game",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:1,
        },
        {
            index :4,
            gameId:"0004",
            name:"Game",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:1,
        },
        {
            index :5,
            gameId:"0005",
            name:"Game",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:1,
        },
        {
            index :6,
            gameId:"0006",
            name:"Game",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:1,
        },
        {
            index :7,
            gameId:"0007",
            name:"Game",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:0,
        },
        {
            index :8,
            gameId:"0008",
            name:"Game",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:0,
        },
        {
            index :9,
            gameId:"0009",
            name:"Game",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:0,
        },
        {
            index :10,
            gameId:"0010",
            name:"Game",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:0,
        },
        {
            index :11,
            gameId:"0011",
            name:"Game",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:0,
        },
        {
            index :12,
            gameId:"0012",
            name:"Game",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:0,
        },
        {
            index :13,
            gameId:"0013",
            name:"Game",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:0,
        },
        {
            index :14,
            gameId:"0014",
            name:"Game",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:0,
        },
        {
            index :15,
            gameId:"0015",
            name:"Game",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:0,
        },
        {
            index :16,
            gameId:"0016",
            name:"Game",
            picUrl:"assets/images2/game_0003.png",
            videoUrl:"assets/images2/game_0003.mp4",
            columnSpan:1,
            rowSpan:1,
            isFire:0,
        },
    
    ]

    if(arrayData.length > 0) {
        searchList = arrayData;
    }

    // 获取到containerEx
    var containSearchExList = document.getElementById("containerSearchEx");
    var containSearchList = "";

    // 遍历输出
    // 生成数据长度的div
    searchList.forEach(element => {
        // 处理数据
        var div = `<div class = "box grid_item_video" style = "grid-column: span ${element.columnSpan}; grid-row: span ${element.rowSpan};">`;
        var img = `<img src = '${element.picUrl}' alt="" onclick = "window.open('${element.picUrl}')"></img>`;
        if (element.isFire == 1) {
            img = `<img src = '${element.picUrl}' alt="" onclick = "window.open('${element.picUrl}')"> <a style="position: absolute; top: 5%; right: 5%; pointer-events: none;"><p>fire</p> </a> </img>`; 
        }
        var div2 = `<div class="grid_item_overlay_video" style = "pointer-events: none">`;
        var p = `<p class = "text-video_font"> ${element.name} </p></div></div>`

        // 拼接
        containSearchList += `${div}${img}${div2}${p}`;
    });

    // 添加到Dom内
    containSearchExList.innerHTML = containSearchList;
}
// 搜索框列表操作end

// test///////////////////////////////////////////////////////////////////

