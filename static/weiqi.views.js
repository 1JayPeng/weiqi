function weiqipancss() {
	for (i = 1; i <= 361; i++) {
		switch (weiqipan[i]) {
			case 1:
				$("#grids #"+i).css("background-image","url('static/bd.png')");
				break;
			case 2:
				$("#grids #"+i).css("background-image","url('static/wd.png')");
				break;
			case 3:
				$("#grids #"+i).css("background-image","url('static/bd.png')");
				break;
			case 4:
				$("#grids #"+i).css("background-image","url('static/wd.png')");
				break;
			default: 
				$("#grids #"+i).css("background-image","url('')");
		};
	};
};
