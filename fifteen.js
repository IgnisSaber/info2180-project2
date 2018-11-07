

function first(){
	var puzzlearea = $("#puzzlearea");
	var c = puzzlearea.children();
//	c[0].style.backgroundColor = "yellow";
	var x = 0;
	var y = 0;
	var count = 0;
	for(var i=0; i<c.length; i++){
		$(c[i]).addClass("puzzlepiece");
		c[i].style.left = x + "px";
		c[i].style.top = y + "px";
		x+=100;
		count+=1;
		if(count%4==0){
			y+=100;
			x=0;
		}
	}
	var a = 0;
	var b = 0;
	var counter = 0;
//	$(c[5]).css('background-position', `${a}px ${b}px`) ;
//	$(c[5]).css('background-position', '-100px -100px') ;
	for(var j=0;j<c.length;j++){
		$(c[j]).css('background-position',`${a}px ${b}px`);
//		backgroundPosition = "${x}px ${y}px";
		a-=100;
		counter+=1;
		if(counter%4==0){
			b-=100;
			a=0;
		}
		
	}
}

function adjustBackground(){
	var topLeft = puzzlearea
}

window.onload = first;
