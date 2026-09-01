(function () {
    let LuckyBagTimer
    let ResultTimer
    let ResultClassName = ".hJ3SHYaQ"
    let LuckyBagClassName = ".ycjwPFJI"
    let SendMsgClassName = ".WrS6ZBHo"

    async function sleep(ms = 1000) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function checkLuckyBag() {
        return new Promise(resolve => {
            LuckyBagTimer = setInterval(() => {
                const dom = document.querySelector(LuckyBagClassName)
                console.log("开始检测福袋。。。")
                if (dom) {
                    const m = dom.innerText.split(":")[0]
                    console.log("当前分钟：", m)
                    if (dom && m == '02') {
                        console.log("时间到已点击福袋")
                        dom.click()
                        clearInterval(LuckyBagTimer)

                        await sleep()
                        clickSendMsg()
                    }
                } else {
                    console.log("没有福袋。。。")
                }

            }, 1000)
        })
    }

    async function checkResult() {
        return new Promise(resolve => {
            ResultTimer = setInterval(() => {
                const dom = document.querySelector(ResultClassName)
                console.log("检测结果弹窗。。。");

                if (dom) {
                    console.log("检测到结果弹窗已关闭");
                    dom.click()
                    clearInterval(ResultTimer)

                    await sleep()
                    checkLuckyBag()
                } else {
                    console.log("结果还没出来");
                }
            }, 1000)
        })
    }

    async function clickSendMsg() {
        const dom = document.querySelector(SendMsgClassName)
        if (dom && dom?.innerText == '一键发评论参与福袋') {
            console.log("抽奖弹窗已打开，已发送消息");
            dom.click()
            checkResult()
        }
    }


    checkLuckyBag()
})()
