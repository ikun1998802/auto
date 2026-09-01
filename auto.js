(function() {
    let LuckyBagTimer
    let LuckyBagClassName = ".ycjwPFJI"

    function checkLuckyBag() {
        return new Promise(resolve => {
            LuckyBagTimer = setInterval(() => {
                const dom = document.querySelector(LuckyBagClassName)
                const m = dom.innerText.split(":")[0]
                if (dom && m == '02') {
                    dom.click()
                    clearInterval(LuckyBagTimer)
                }
            }, 100)
        })
    }
})()
