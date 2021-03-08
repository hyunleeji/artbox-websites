
	var isChecked = false;

	function initCheckId() {
		isChecked = false;
	} //ajax 프론트엔드 백엔드로 넘기면 백엔드 화면으로 안넘어가고 계속실행

	function checkId() { //아이디중복체크
		initCheckId();
		var id = $('#id');
		$.ajax({
			url : "/checkId.ajax",
			type : "post",
			dataType : "json",
			data : {
				id : id.val()
			//보낼 데이터
			},
			error : function() {
				alert("통신실패");
			},
			success : function(data) {
				//alert(data.msg);//common.jsp에서 넘겨준것은 사용안함
				if (data.isTrue == 'true') {
					$('.id__text').text('사용할 수 없는 아이디 입니다.');
					$('.id__text').css('color', '#ed6174');
					//					id.val('');  //입력된 아이디가 중복이면 화면에서 지움
					id.focus();
					isChecked = false; //사용할수 없는것이니 false
				} else {
					$('.id__text').text('사용가능한 아이디 입니다.');
					$('.id__text').css('color', '#045fd4');
					isChecked = true;
				}
			}
		});
	}
