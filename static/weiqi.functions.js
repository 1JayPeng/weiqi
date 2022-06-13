function chongxinkaishi(){
	luozistep[0]=0;
	butvm.counter=0;
	for (i = 0; i <= 361; i++) {
		$("#grids #"+i).css("background-image","url()");
		$("#grids #"+i).text("");
		weiqipan[i]=0;
		fenzupan[i]=0;
		$("#qizi").val("黑");
	};
};
function chongxia(){
	if (luoziswitch[luozistep[0]]>2){
		weiqipan = JSON.parse(JSON.stringify(luozipan[luozipan[0]]));
		luozipan[0]--;
	};
	if (luozistep[0]>0) {
		weiqipan[luozistep[luozistep[0]]]=0;
		fenzupan[luozistep[luozistep[0]]]=0;
		luozistep[0]--;
		if (weiqipan[0]==0) {
			weiqipan[0]=1;
			$("#qizi").val("黑");
		} else {
			weiqipan[0]=0;
			$("#qizi").val("白");
		};
	}else{
		$("#qizi").val("黑");
		alert("请开始下棋子！已无可以悔棋子。");
	};
	weiqipancss();
};
function fangqi(){
	if ($("#qizi").val()=="黑") {
		$("#qizi").val("白");
	} else {
		$("#qizi").val("黑");
	};
};
function xianshi(){
	for (i = 1; i <= 361; i++) {
		$("#grids #"+i).text("");
	};
	switch ($("#show").val()) {
		case "不显示":
			break;
		case "步数":
			for (i = 1; i <= luozistep[0]; i++) {
				$("#grids #"+luozistep[i]).text(i);
			};
			break;
		case "分组":
			for (j = 1; j <= 361; j++) {
				if (fenzupan[j]>0) {
					$("#grids #"+j).text(fenzupan[j]);
				};
			};
			break;
		default: 
			alert("发生了一件事情~");
	};
};
function fenzufun(id){
	var i=id;
	var c=0, d=1, e=0;
	var lingshi = new Array();
	lingshi[0]=1;
	lingshi[1]=id;
	fenzupan[0]++;
	while (d<=lingshi[0]){
		var a=(i-1)%19;
		var b=(i-1-a)/19;
		if (b>0){
			c=Number(i)-19;
			if (weiqipan[c]==weiqipan[i]&&fenzupan[c]==0){
				lingshi[0]++;
				lingshi[lingshi[0]]=c;
			};
			if (weiqipan[c]==0||"undefined" == typeof weiqipan[c]) {
				e++;
			};
		};
		if (b<18){
			c=Number(i)+19;
			if (weiqipan[c]==weiqipan[i]&&fenzupan[c]==0){
				lingshi[0]++;
				lingshi[lingshi[0]]=c;
			};
			if (weiqipan[c]==0||"undefined" == typeof weiqipan[c]) {
				e++;
			};
		};
		if (a>0){
			c=Number(i)-1;
			if (weiqipan[c]==weiqipan[i]&&fenzupan[c]==0){
				lingshi[0]++;
				lingshi[lingshi[0]]=c;
			};
			if (weiqipan[c]==0||"undefined" == typeof weiqipan[c]) {
				e++;
			};
		};
		if (a<18){
			c=Number(i)+1;
			if (weiqipan[c]==weiqipan[i]&&fenzupan[c]==0){
				lingshi[0]++;
				lingshi[lingshi[0]]=c;
			};
			if (weiqipan[c]==0||"undefined" == typeof weiqipan[c]) {
				e++;
			};
		};
		fenzupan[i]=fenzupan[0];
		d++;
		i=lingshi[d];
	};
	if (e==0&&weiqipan[id]!=weiqipan[luozistep[luozistep[0]]]) {
		luoziswitch[luozistep[0]]+=2;
		luozipan[0]++;
		//数组赋值意味着现在的a,b其实指向的都是同一段内存地址，如下不会
		luozipan[luozipan[0]] = JSON.parse(JSON.stringify(weiqipan));
		while (lingshi[0]>0){
			weiqipan[lingshi[lingshi[0]]]=0;
			fenzupan[lingshi[lingshi[0]]]=0;
			lingshi[0]--;
		};
	};
};
