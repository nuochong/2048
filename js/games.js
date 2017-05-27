// JavaScript Document


//----------绘制游戏主界面
function initialize(){
	document.write("<table border='1' style='border:1px solid red'>");
	for(var i=0;i<20;i++)
	{
		document.write("<tr>");
		for(var j=0;j<10;j++)
		{
			document.write("<td style='width=10px'>&nbsp;</td>");
		}
		document.write("</tr>");
	}
	document.write("</table>");
}

initialize();
//----------绘制分值界面
function score(){
	var score=56;
	//alert("debug");
	document.getElementById("top").style.width=score +"%";
	document.getElementById("top").innerHTML=score+"%";
}

score();