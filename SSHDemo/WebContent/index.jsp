<%@ page language="java" contentType="text/html; charset=GB18030"
    pageEncoding="GB18030"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=GB18030">
<script src="lib/jquery-2.1.3.min.js"></script>
<title>ssh2_test演示</title>

<script type="text/javascript">
     function test(){
 	
    	 $.ajax({ 
    			type:"POST", //请求方式
    			url:"userLogin.action", //请求路径
    			cache: false,   
    			data:{userName : '123', password : '456'},  //传参
    			dataType: 'json',   //返回值类型
    	       success:function(msg){	    
    	    	   alert(msg.user.password);
    	           },
    	 		error:function(){
    	 			alert("error");
    	 		}
    			});
      }
</script>


</head>
<body onload = test()>
<form action="userLogin" method="post">
	用户名:<input type="text" name="userName"/><br />
	密码:<input type="password" name="password"/><br />
	<input type="submit" value="登录" />
</form>
</body>
</html>