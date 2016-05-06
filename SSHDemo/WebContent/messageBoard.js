
window.onload = function(){
	var display = document.getElementById("note");
	display.style.height = window.innerHeight - 230 +"px";

	var ds = document.getElementById("display");
	ds.style.height = (window.innerHeight - 230 - 75)+"px";

	var write = document.getElementById("write");
	write.style.left = (window.innerWidth - 900)/2 + "px";

	//生成留言框
	var ta = document.getElementById("text");
	var num = 0;

	/*
	document.getElementById("submit").onclick = function(){
	ds.innerHTML=ds.innerHTML+
	"<div class = \"words\" ><div class = \"head\"></div><span class = \"msg\" id = \"msg" + num + "\" ><span class = \"user\">囧囧先生&nbsp</span> : </span><div class = \"time\" id = \"time" + num + "\" >时间</div><div class = \"from\">来自网页</div><div class = \"forward\">转发</div></div>";
	var msg = document.getElementById("msg"+ num);	

	//转换表情
	var s = ta.value;
	for(var i = 1; i < 40; i++)
	{
		s = s.replace("(F_"+i+".gif)","<img src=\"img/faces/F_"+i+".gif\" height=\"24\" width=\"24\" />");
	}

	msg.innerHTML=msg.innerHTML + s;
	ta.value = "";

	var myDate = new Date();
	var time = document.getElementById("time"+ num);	
	time.innerHTML=myDate.toLocaleString();

	num++;
	};*/

	document.getElementById("submit").onclick = function(){
		document.getElementById("send").submit();
	}

	/*
	//表情框
	var fd = document.getElementById("faceDiv");
	fd.innerHTML = fd.innerHTML + "<table id = \"faceTable\" border=\"0\"></table>";
	var ft = document.getElementById("faceTable");


	var str = "";
	for(var i = 0, k = 1; i < 4; i++)
	{
		str = str + "<tr>";
		for(var j = 0; j < 10; j++, k++)
		{
			if(k > 39)
				break;
			str = str + "<td class = \"face\" id = \"face" + k + "\"></td>";
		}
		str = str + "</tr>";
	} 
	ft.innerHTML = str;

	//添加监听
	for(var i = 0, k = 1; i < 4; i++)
	{
		for(var j = 0; j < 10; j++, k++)
		{
			if(k > 39)
				break;
			var face = document.getElementById("face"+k); 
			face.style.backgroundImage="url(\"img/faces/F_"+k+".gif\")";
			face.style.backgroundColor="gray";
			face.onclick = (function(k){ // outer function 
			return function(){ //inner function 
				fd.style.display="none";
				ta.value = ta.value + "(F_"+k+".gif)";

			};
			})(k);
		}
	} 


	document.getElementById("face").onclick = function(){
		fd.style.display="block";
	};
*/
}

window.onresize = function(){
	var display = document.getElementById("note");
	display.style.height = window.innerHeight - 230 +"px";

	var ds = document.getElementById("display");
	ds.style.height = (window.innerHeight - 230 - 75)+"px";

	var write = document.getElementById("write");
	write.style.left = (window.innerWidth - 900)/2 + "px";
}

//字数检查
window.onkeyup = function(){
	var ta = document.getElementById("text");
	var num = 140 - ta.value.length;
	document.getElementById("promote").innerHTML = num;
	if(num < 0)
		document.getElementById("submit").disabled=true; 
	else
		document.getElementById("submit").disabled=false; 
}