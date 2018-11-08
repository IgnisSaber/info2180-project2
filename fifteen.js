

function first(){
	var puzzlearea = $("#puzzlearea");
	var c = puzzlearea.children();

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

	for(var j=0;j<c.length;j++){
		$(c[j]).css('background-position',`${a}px ${b}px`);

		a-=100;
		counter+=1;
		if(counter%4==0){
			b-=100;
			a=0;
		}
		
	}
}

//function learnPosition(){
//	$(c[0]).click(function(){
//	var x = $(c[0]).position();

//	alert("Top position: " + x.top + " Left position: " + x.left);})
//}

//function testMove(){
//	$(c[0]).click(function(){
//	$(c[0]).css({top: 300, left 300});
//	}
//}

//function moveTile(){
//	for(var j=0;j<c.length;j++){
//		$(c[i]).click(function(){
//			$(c[i]).offset({top: 300, left: 300});
//		});
//	}
//}

//function assignPos(){
//	var xPosition = 0;
//	var yPosition = 0;
//	counting = 0;
//	for(var k=0; k<c.length; k++){
//		xPosition+=1;
//	}

//}

//funtion canSlide(){
//	var emptyX = 4;
//	var emptyY = 4;
//}

//function adjustBackground(){
//	var topLeft = puzzlearea
//}

window.onload = first;
