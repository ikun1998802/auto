(function() {
    let LuckyBagTimer
    let LuckyBagClassName = ".ycjwPFJI"

    function checkLuckyBag() {
        return new Promise(resolve => {
            LuckyBagTimer = setInterval(() => {
                const dom = document.querySelector(LuckyBagClassName)
                const m = dom.innerText.split(":")[0]
                console.log("当前分钟：", m)
                if (dom && m == '02') {
                    dom.click()
                    clearInterval(LuckyBagTimer)
                }
            }, 1000)
        })
    }
    checkLuckyBag()
})()
