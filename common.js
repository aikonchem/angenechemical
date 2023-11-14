//根据url，对应的菜单高亮
jQuery(function ($) {
    /*// 定义导航菜单宽度
    var WidthSum = $(".myNav").width();
    var MenuCount = $(".myNav div.dropdown").length;
    var WidthMenu = WidthSum / MenuCount;
    $(".myNav div.dropdown").width(WidthMenu);
    $(".myNav div.dropdown ul.dropdown-menu").width(WidthMenu);
    if (WidthMenu < 240) {
        $(".myNav div.dropdown ul.dropdown-menu li a").css("font-size", "14px");
    } else {
        $(".myNav div.dropdown ul.dropdown-menu li a").css("font-size", "16px");
    }
*/

    //定义页脚宽度
    var footerWidth = $(".fat-footer .container").width();
    var footerDiv = $(".fat-footer .no-padding-new div");
    var footerCount = footerDiv.length;
    var Widthfooter = footerWidth / footerCount;
    footerDiv.width(Widthfooter);


    var url = window.location.href;
    //当前菜单颜色高亮
    $(".myNav .dropdown").removeClass('nav-itemBg');
    if ($(".myNav .dropdown  [href='" + url + "']").parent().is(".dropdown")) {
        if ($(".myNav .dropdown  [href='" + url + "']").length == 1) {
            $(".myNav .dropdown  [href='" + url + "']").addClass('item-linkColor').parent().addClass('nav-itemBg').find('.caret').addClass('item-linkColor')
        }
    } else {
        $(".myNav .dropdown ul [href='" + url + "']").parent().parent().siblings('.caret').addClass('item-linkColor').siblings('a').addClass('item-linkColor').parent().addClass('nav-itemBg');
    }
    //搜索类型高亮
    $('.search-kind li').each(function () {
        $(this).click(function(){
            $(this).addClass('searchItemActive').siblings().removeClass('searchItemActive');
        })
    })

})
function dosearch(){
    jQuery(function($) {
        var content = $("input[name='inp-search']").val().trim();
        if (content.length <= 5) {
            $('#myModal').modal('show');
        }else{
            var array = { "inp-search":content };
            var content = jQuery.param(array);
           /* window.open(BASE_URL+"goods/Goods/search?"+content, "_self");*/
        }
    });
}

function getSmiles(){
    var ketcherFrame = document.getElementById('ifKetcher');
    var ketcher;
    if ('contentDocument' in ketcherFrame){
        ketcher = ketcherFrame.contentWindow.ketcher;
    }else // IE7
    {
        ketcher = document.frames['ifKetcher'].window.ketcher;
    }
    b=ketcher.getSmiles();
    document.getElementById("key").value= b;
    document.getElementById('searchType').value='2';
    document.form1.submit();
}

function getSmiles2(){
    var ketcherFrame = document.getElementById('ifKetcher');
    var ketcher;
    if ('contentDocument' in ketcherFrame){
        ketcher = ketcherFrame.contentWindow.ketcher;
    }else // IE7
    {
        ketcher = document.frames['ifKetcher'].window.ketcher;
    };
    b=ketcher.getSmiles();
    document.getElementById("key").value= b;
    document.getElementById('searchType').value='1';
    document.form1.submit();
}

function getSmiles3(){
    var ketcherFrame = document.getElementById('ifKetcher');
    var ketcher;
    if ('contentDocument' in ketcherFrame){
        ketcher = ketcherFrame.contentWindow.ketcher;
    }else // IE7
    {
        ketcher = document.frames['ifKetcher'].window.ketcher;
    };
    b=ketcher.getSmiles();
    document.getElementById("key").value= b;
    document.getElementById('searchType').value='3';
    document.form1.submit();
}


