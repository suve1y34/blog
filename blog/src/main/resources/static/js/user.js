let index = {
	
	init: function() {
		
		$("#btn-save").on("click", ()=> {
			this.save();
		});
		
		$("#btn-login").on("click", ()=>{ // function(){} , ()=>{} this�� ���ε��ϱ� ���ؼ�!! 
			this.login();
		});
		
	},
	
	save: function() {
		
		let data = {
			username: $("#username").val(),
			password: $("#password").val(),
			email: $("#email").val()
		};
		
		$.ajax({
			type: "POST",
			url: "/blog/rest/user",
			data: JSON.stringify(data),
			contentType: "application/json; charset=utf-8",
			dataType: "json"
		}).done(function(resp) {
			alert("ȸ�������� �Ϸ�Ǿ����ϴ�. ȯ���մϴ�.");
			location.href="/blog";
		}).faul(function(error) {
			alert(JSON.stringify(error));
		});
	},
	login: function(){
		let data = {
			username: $("#username").val(),
				password: $("#password").val()
		};

		$.ajax({ 
			type: "POST",
			url: "/blog/api/user/login",
			data: JSON.stringify(data), // http body������
			contentType: "application/json; charset=utf-8",// body�����Ͱ� � Ÿ������(MIME)
			dataType: "json" // ��û�� �������ؼ� ������ ���� �� �⺻������ ��� ���� ���ڿ� (����� json�̶��) => javascript������Ʈ�� ����
		}).done(function(resp){
			alert("�α����� �Ϸ�Ǿ����ϴ�.");
			location.href = "/blog";
		}).fail(function(error){
			alert(JSON.stringify(error));
		}); 
}
index.init();