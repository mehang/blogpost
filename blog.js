$("#comment_post").click(function(){
	var name = $("name").val();
	var comment = $("user_comment").val();
	if (name == "" || comment == ""){
		$("#message-body").text("Please Valid Name or Comment! ");
	}
	else{
		$("#message-body").text("Comment Uploaded!")
	}
	document.getElementById("message").className = "";
});
$("#btn-close").click(function(){
	document.getElementById("message").className = "alert-message";
});

