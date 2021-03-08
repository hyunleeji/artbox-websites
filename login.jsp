
<!DOCTYPE html>
<html lang="ko">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>로그인</title>
<link href="/css/picture/icons8_owl.ico" rel="shortcut icon" type="image/x-icon">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
<link rel="stylesheet" href="/css/login.css" type="text/css"></link>
<script src="/js/login.js" defer></script>
</head>

<body>
	<header>
		<a href="/"> <img src="/image/artboxlogo.png" alt="로고사진">
		</a>
	</header>
	<section>
		<div class="login__form">
			<form action="/member/loginProc" method="POST" id="ckpoint"
				onsubmit="retrun validateCheck()">
				<div class="login__id">
					<input type="text" placeholder="아이디" id="id" name="id"
						maxlength="10">
					<p class="id__text"></p>
				</div>
				<div class="login__pwd">
					<input type="password" placeholder="비밀번호" id="pw" name="pw"
						maxlength="10">
					<p class="pw__text"></p>
				</div>
			</form>
			<div class=login__submit>
				<button onclick="validateCheck()">로그인</button>
			</div>

			<div class="forgot__container">
				<div class=forgot__form>
					<a href="/member/forgotId">아이디 찾기</a> 
					<a href="/member/forgotPw">비밀번호 찾기</a>
					<a href="/signup.html">회원가입</a>
				</div>
			</div>
			<div id="information__bar">
				<p>로그인하거나 회원으로 가입하시면 당사</p>
					<span>
				<a href="#" class="agreement" onclick="createFeed()">이용약관</a> 및 
				<a href="#" class="agreement" onclick="createFeed()">개인정보 보호 정책</a>에
					</span>
				<p class="agreement">동의하시는 것으로 간주됩니다.</p>
			</div>
		</div>
	</section>
	<script defer="defer" src="/js/ajaxID.js" type="text/javascript"></script>

</body>

</html>