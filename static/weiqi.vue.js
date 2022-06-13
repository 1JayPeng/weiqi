var butvm = new Vue({
    el: "#butvues",
    data: {
        butvues: [
            { name: "重新开始" },
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
        rightclicks: [
            { name: "重新开始" },
            { name: "悔棋" },
            { name: "放弃" }
        ]
    }
});
var appvm = new Vue({
    el: "#grids"
});
var rclicksvm = new Vue({
    el: "#rightclicks",
    data: {
        rightclicks: [
            { name: "悔棋" },
            { name: "放弃" }
        ]
    }
})