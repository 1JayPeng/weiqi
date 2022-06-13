$(document).ready(function(){
	$(".butvue").click(function(){
		butvues($(this));
	});
	$(".grid-item").click(function(){
		grids($(this));
	});
	$(".rightclick").click(function(){
		butvues($(this));
	});
});
function butvues(tthis) {
	switch ($(tthis).attr("id")) {
		case "新计时":
			chongxinkaishi();
			break;
		case "悔棋":
			chongxia();
			break;
		case "放弃":
			fangqi();
			break;
		case "显示":
			xianshi();
			break;
		default: 
			alert("发生了一件事情~");
	};
};
function grids(tthis) {
	luozistep[0]++;
	luozistep[luozistep[0]]=$(tthis).attr("id");
	if (weiqipan[luozistep[luozistep[0]]]>0){
		luozistep[0]--;
		alert("有棋子！"+luozistep[0]+"."+luozistep[luozistep[0]]);
	}else{
		if ($("#qizi").val()=="黑") {
			luoziswitch[luozistep[0]]=1;
			weiqipan[luozistep[luozistep[0]]]=1;
			$("#qizi").val("白");
		} else {
			luoziswitch[luozistep[0]]=2;
			weiqipan[luozistep[luozistep[0]]]=2;
			$("#qizi").val("黑");
		};
		for (i = 0; i <= 361; i++) {
			fenzupan[i]=0;
		};
		for (j = 1; j <= 361; j++) {
			if (weiqipan[j]==1&&fenzupan[j]==0) {
				fenzufun(j);
			};
		};
		fenzupan[0]=0;
		for (j = 1; j <= 361; j++) {
			if (weiqipan[j]==2&&fenzupan[j]==0) {
				fenzufun(j);
			};
		};
	};
	weiqipancss();
};
