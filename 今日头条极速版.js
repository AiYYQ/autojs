function init() {
    app.launchApp("今日头条极速版");
    console.show();
    //sleep(150);

    toast("今日头条极速版启动成功");
}


function isExistensAD() {
    if (
        id("f8").exists() || id("b62").exists()) {
        console.info("检测到广告");
        return true;
    }
    return false;
}

function go() {
    console.error(id("a6q").find());

    var objList = new Array();
    var idx = 0;
    id("a6q").findOne().children().forEach(child => {
        objList[idx++] = child;
        console.error(idx);
        console.log(child.text());
    });
    id("b_").findOne().children().forEach(child => {
        objList[idx++] = child;
        console.error(idx);
        console.log(child.text());
    });

    //console.info(objList.length);

    for (var i = 0; i < objList.length; i++) {
        var rdm_math = random(0, 100);

        //console.info(rdm_math);
        //console.log(objList[i].text());
    }
}

function closeAD() {
    if (id("fm").exists()) {
        id("fm").click();
        console.info("广告已关闭");
    }
    if (id("bb7").exists()) {
        id("bb7").click();
        console.info("广告已关闭");
    }
    if (id("b62").exists()) {
        id("b62").click();
        console.info("开屏广告已关闭");
    }
}





threads.start(

    function adThread() {

        console.info("检测广告线程已开启");

        while (true) {
            if (isExistensAD()) {
                closeAD();
            }
            //sleep( 1800 );
        }
    }
)

init();
sleep(3500);
go();
