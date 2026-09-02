(function () {

    // // 控制台注入脚本
    // var scriptElement = document.createElement("script");
    // scriptElement.src = "https://ikun1998802.github.io/auto/auto.js?t=" + Date.now();
    // scriptElement.onload = () => console.log('脚本加载完成');
    // scriptElement.onerror = () => console.log('脚本加载失败');
    // document.body.appendChild(scriptElement);

    let LuckyBagTimer
    let ResultTimer
    let ResultClassName = ".hJ3SHYaQ"
    let LuckyBagClassName = ".ycjwPFJI"
    let SendMsgClassName = ".WrS6ZBHo"

    function checkLuckyBag() {
        console.log("auto 开始检测福袋")

        LuckyBagTimer = setInterval(() => {
            const dom = document.querySelector(LuckyBagClassName)
            if (dom) {
                const m = dom.innerText.split(":")[0]
                console.log("auto 有福袋，剩余时间：", dom.innerText)
                if (dom && m == '02') {
                    console.log("auto 剩余时间3分钟，自动点击福袋")
                    dom.click()
                    clearInterval(LuckyBagTimer)
                    setTimeout(() => clickSendMsg(), 3000)
                }
            } else {
                console.log("auto 没有福袋")
            }
        }, 1000)
    }

    function checkResult() {
        console.log("auto 检测结果中");

        ResultTimer = setInterval(() => {
            const dom = document.querySelector(ResultClassName)
            if (dom) {
                console.log("auto 检测到结果，查看是否中奖，3秒后继续检测福袋");
                clearInterval(ResultTimer)
                setTimeout(() => {
                    dom.click()
                    checkLuckyBag()
                }, 3000)
            } else {
                console.log("auto 等待福袋结果中");
            }
        }, 1000)
    }

    function clickSendMsg() {
        const dom = document.querySelector(SendMsgClassName)
        if (dom && dom?.innerText == '一键发评论参与福袋') {
            console.log("auto 抽奖弹窗已打开，已发送消息");
            dom.click()
            checkResult()
        }
    }

    checkLuckyBag()
})()
