$(document).ready(function () {

	// Js Modal
	var modal = document.getElementsByClassName('m_btn');
		var jsmodal = document.getElementsByClassName('modal_card');
		var button = document.getElementById('cancel');
		var button2 = document.getElementById('cancel2');
		var button3 = document.getElementById('cancel3');

		
		jsmodal[0].style.display = ('none');
		jsmodal[1].style.display = ('block');
		jsmodal[2].style.display = ('none');

		modal[0].addEventListener('click', function(){
			jsmodal[0].style.display = ('block');
			jsmodal[1].style.display = ('block');
			jsmodal[2].style.display = ('block');
		});
		button.addEventListener('click', function(){
			jsmodal[0].style.display = ('none');
		});
		button2.addEventListener('click', function(){
			jsmodal[1].style.display = ('none');
		});
		button3.addEventListener('click', function(){
			jsmodal[2].style.display = ('none');
		});
		
	// Image Gallery
	var imgClick = document.getElementById('main_img');
		var imgClick1 = document.getElementById('main_img1');
		var imgClick2 = document.getElementById('main_img2');
		var del = document.getElementById('del');
		var fullImg = document.getElementById('fullImg');
		var fullImg1 = document.getElementById('fullImg1');
		var fullImg2 = document.getElementById('fullImg2');
		fullImg.style.display = 'none';
		fullImg1.style.display = 'none';
		fullImg2.style.display = 'none';
		del.style.display = 'none';
		imgClick.addEventListener('click', function(){
			fullImg.style.display = 'block';
			fullImg.style.position = 'fixed';
			fullImg.style.top = '0';
			fullImg.style.left = '0';
			fullImg.style.zIndex = '99';

			del.style.display = 'block';
			del.style.position = 'fixed';
			del.style.top = '20px';
			del.style.right = '20px';
			del.style.color = 'red';
			del.style.fontSize = '30px';
			del.style.zIndex = '999';		

		});

		imgClick1.addEventListener('click', function(){
			fullImg1.style.display = 'block';
			fullImg1.style.position = 'fixed';
			fullImg1.style.top = '0';
			fullImg1.style.left = '0';
			fullImg1.style.zIndex = '99';

			del.style.display = 'block';
			del.style.position = 'fixed';
			del.style.top = '20px';
			del.style.right = '20px';
			del.style.color = 'red';
			del.style.fontSize = '30px';
			del.style.zIndex = '999';		

		});

		imgClick2.addEventListener('click', function(){
			fullImg2.style.display = 'block';
			fullImg2.style.position = 'fixed';
			fullImg2.style.top = '0';
			fullImg2.style.left = '0';
			fullImg2.style.zIndex = '99';

			del.style.display = 'block';
			del.style.position = 'fixed';
			del.style.top = '20px';
			del.style.right = '20px';
			del.style.color = 'red';
			del.style.fontSize = '30px';
			del.style.zIndex = '999';		

		});

		del.addEventListener('click', function(){
			del.style.display = 'none';
			fullImg.style.display = 'none';
			fullImg1.style.display = 'none';
			fullImg2.style.display = 'none';
		});

});

