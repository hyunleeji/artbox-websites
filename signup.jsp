
<!DOCTYPE html>
<html lang="ko">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>회원가입</title>
<link href="/css/picture/icons8_owl.ico" rel="shortcut icon" type="image/x-icon">
<link rel="stylesheet" href="/css/base.css" type="text/css"></link>
<link rel="stylesheet" href="/css/signup.css" type="text/css"></link>
<link rel="stylesheet" href="/css/agreement-middle.css" type="text/css"></link>
<script src="/js/ajax/ajaxID.js" type="text/javascript" defer></script>
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous" defer></script>

</head>

<body>
	<header>
		<a href="/"> <img src="/image/artboxlogo.png" alt="로고사진">
		</a>
	</header>
	<section>
		<div class="signup__form">
			<form action="/member/signupProc" method="post" id="ckpoint">
				<div class="signup__id">
					<input type="text" placeholder="아이디" name="id" id="id" oninput="checkId()" maxlength="10">
					<p class="id__text"></p>
				</div>
				<div class="signup__pwd">
					<input type="password" placeholder="비밀번호" name="pw" id="pw"
						maxlength="10">
					<p class="pw__text"></p>
				</div>
				<div class="signup__pwd_check">
					<input type="password" placeholder="비밀번호 재확인" name="cpw" id="cpw"
						maxlength="10">
					<p class="cpw__text"></p>
				</div>
				<div class="signup__name">
					<input type="text" placeholder="이름" name="name" id="name"
						maxlength="6">
					<p class="name__text"></p>
				</div>
				<div class="signup__phone">
					<input type="tel" placeholder="전화번호" name="tel" id="tel"
						maxlength="11">
					<p class="tel__text"></p>
				</div>
				<div class="signup__gender">
					<select name="gender" id="gender">
						<option value="남">남성</option>
						<option value="여">여성</option>
					</select>
				</div>
				<div class="signup__agree" id="signup__box">
					<div class="agree__container">
						<div>
							<p class="agree__text">개인정보동의(필수)</p>
						</div>
						<input type="checkbox" name="info_fl" id="info_fl" value="true">
					</div>
					<div class="agree__container">
						<div>
							<p class="agree__text">광고수신동의(선택)</p>
						</div>
						<input type="checkbox" name="sms_fl" id="sms_fl" value="true">
					</div>
				</div>
			</form>
			<div class="btn-container">
				<button id="signup__button" onclick="join()">가입하기</button>
			</div>
			<div class="signup__line">또는 다른 것이 필요하신가요?</div>
			<div class="sign__up__kakao">
				<a id="kakao-text" href="#">카카오톡으로 회원가입</a>
			</div>
			<div class="sign__up__naver">
				<a id="naver-text" href="#">네이버로 회원가입</a>
			</div>
	</section>
	<footer>
		<div class="signup__form">
			<p class="agreement">로그인하거나 회원으로 가입하시면 당사</p>
			<span>
				<a href="#" class="agreement__text"onclick="createFeed()">이용약관</a>
			 	및
			 	<a href="#" class="agreement__text" onclick="createFeed()">개인정보 보호정책</a>에
			</span>
			 <p class="agreement">동의하시는 것으로 간주됩니다.</p>
		</div>
	</footer>
	<script src="/js/agreement/agree.js" type="text/javascript"></script>
	<script src="/js/signup.js" type="text/javascript"></script>
	<script src="/js/member/ajax.js" type="text/javascript"></script>
	
</body>

</html>