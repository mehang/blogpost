$("#comment_post").click(function(){
	var name = $("#name").val();
	var comment = $("textarea#user_comment").val();
	console.log(comment)
	if ((name == "" )||( comment == "")){
		if (name == ""){ 
		$("#message-body").text("Please Provide Valid Name!!");
		}
		else {
		$("#message-body").text("Please Provide Valid Comment!!");
		}
	}
	else{
		$("#message-body").text("Comment Posted!")
	}
	document.getElementById("message").className = "";
});
$("#btn-close").click(function(){
	document.getElementById("message").className = "alert-message";
});

