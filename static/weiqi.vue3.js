const butVues = {
    data() {
        return {
            butvues: [
                { name: "新计时" },
                { name: "悔棋" },
                { name: "放弃" },
                { name: "显示" }
            ],
            shows: [
                { name: "不显示" },
                { name: "步数" },
                { name: "分组" },
                { name: "眼图" }
            ],
            qizis: [
                { name: "黑" },
                { name: "白" }
            ],
            counter: 0
        }
    },
    mounted() {
        setInterval(() => {
          this.counter++
        }, 1000)
    }
}
const butvm = Vue.createApp(butVues).mount('#butvues')
const Grids = {
}
Vue.createApp(Grids).mount('#grids')
const rightClicks = {
    data() {
        return {
            rightclicks: [
                { name: "悔棋" },
                { name: "放弃" }
            ]
        }
      }
}
Vue.createApp(rightClicks).mount('#rightclicks')