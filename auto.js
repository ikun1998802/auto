(function () {
    let LuckyBagTimer
    let ResultTimer
    let ResultClassName = ".hJ3SHYaQ"
    let LuckyBagClassName = ".ycjwPFJI"
    let SendMsgClassName = ".WrS6ZBHo"

    function checkLuckyBag() {
        LuckyBagTimer = setInterval(() => {
            const dom = document.querySelector(LuckyBagClassName)
            console.log("auto.js 开始检测福袋。。。")
            if (dom) {
                const m = dom.innerText.split(":")[0]
                console.log("auto.js 当前分钟：", m)
                if (dom && m == '02') {
                    console.log("auto.js 时间到已点击福袋")
                    dom.click()
                    clearInterval(LuckyBagTimer)
                    setTimeout(() => clickSendMsg(), 1000)
                }
            } else {
                console.log("auto.js 没有福袋。。。")
            }
        }, 1000)
    }

    function checkResult() {
        ResultTimer = setInterval(() => {
            const dom = document.querySelector(ResultClassName)
            console.log("auto.js 检测结果弹窗。。。");
            if (dom) {
                console.log("auto.js 检测到结果弹窗已关闭");
                dom.click()
                clearInterval(ResultTimer)
                setTimeout(() => checkLuckyBag(), 1000)
            } else {
                console.log("auto.js 结果还没出来");
            }
        }, 1000)
    }

    function clickSendMsg() {
        const dom = document.querySelector(SendMsgClassName)
        if (dom && dom?.innerText == '一键发评论参与福袋') {
            console.log("auto.js 抽奖弹窗已打开，已发送消息");
            dom.click()
            checkResult()
        }
    }

    checkLuckyBag()
})()
