var scrollTop = 0;
var modules = document.querySelectorAll('.Module')
var menuItems = document.querySelectorAll('.Menu-item')
var moduleTops = [];
var sections = document.querySelectorAll('section');

document.addEventListener('scroll',scrollHandler);
window.addEventListener('resize',resizeHandler);
var mollys = ['Inactive','Waking','Serious','Urgent','Serious','Active','Logo','Grid','Thinking','Designing','Cool!','Doing Stuff']
resizeHandler();
setTimeout(setTops,1);

function scrollHandler(e) {
	scrollTop = document.querySelector('body').scrollTop
	for (var i = 0; i < modules.length; i++) {
		if(i == modules.length-1 && scrollTop > moduleTops[i]){
			menuItems[i].classList.add('active');
			modules[i].classList.add('active');
		}else if(scrollTop > moduleTops[i] && scrollTop < moduleTops[i+1]){
			menuItems[i].classList.add('active');
			modules[i].classList.add('active');
		}else{
			menuItems[i].classList.remove('active');
			modules[i].classList.remove('active');
		}
	}
}

function resizeHandler(e) {
	setTops();
}

function activeFirst(argument) {
	sections[0].classList.remove('current');
	sections[1].classList.add('current');
	setTimeout(function(){
		sections[1].querySelectorAll('li')[0].classList.remove('current');
		sections[1].querySelectorAll('li')[0].classList.add('inactive');
		sections[1].querySelectorAll('li')[1].classList.add('current');
	},1000);

	setTimeout(function(){
		sections[1].querySelectorAll('li')[1].classList.remove('current');
		sections[1].querySelectorAll('li')[1].classList.add('inactive');
		sections[1].querySelectorAll('li')[2].classList.add('current');
	},3000);

	setTimeout(function(){
		sections[1].querySelectorAll('li')[2].classList.remove('current');
		sections[1].querySelectorAll('li')[2].classList.add('inactive');
		sections[1].querySelectorAll('li')[3].classList.add('current');
	},5000);

	setTimeout(function(){
		sections[1].querySelectorAll('li')[3].classList.remove('current');
		sections[1].querySelectorAll('li')[3].classList.add('inactive');
		sections[1].querySelectorAll('li')[4].classList.add('current');
		sections[1].querySelectorAll('li')[4].classList.add('current');
		sections[1].querySelectorAll('li')[5].classList.add('current');
	},6500);
}

sections[0].querySelector('.submit').addEventListener('click', function() {
	activeFirst()
})

sections[1].querySelector('.submit').addEventListener('click', function(){
	sections[1].classList.remove('current');
	sections[2].classList.add('current');
	sections[2].querySelectorAll('li')[0].classList.add('current');
})

sections[2].querySelector('.submit').addEventListener('click', function(){
	sections[2].classList.remove('current');
	sections[3].classList.add('current');
	sections[3].querySelectorAll('li')[0].classList.add('current');
})

sections[3].querySelector('.submit').addEventListener('click', function(){
	sections[3].classList.remove('current');
	sections[4].classList.add('current');
	sections[4].querySelectorAll('li')[0].classList.add('current');
})
sections[4].querySelector('.submit').addEventListener('click', function(){
	sections[4].classList.remove('current');
	sections[5].classList.add('current');
	sections[5].querySelectorAll('li')[0].classList.add('current');
})
sections[4].querySelector('.submit').addEventListener('click', function(){
	sections[4].classList.remove('current');
	sections[5].classList.add('current');
	sections[5].querySelectorAll('li')[0].classList.add('current');
})
sections[5].querySelector('.submit').addEventListener('click', function(){
	sections[5].classList.remove('current');
	sections[6].classList.add('current');
	sections[6].querySelectorAll('li')[0].classList.add('current');
})
sections[6].querySelector('.submit').addEventListener('click', function(){
	sections[6].classList.remove('current');
	sections[7].classList.add('current');
	sections[7].querySelectorAll('li')[0].classList.add('current');
})
sections[7].querySelector('.submit').addEventListener('click', function(){
	sections[7].classList.remove('current');
	sections[8].classList.add('current');
	sections[8].querySelectorAll('li')[0].classList.add('current');
})
sections[8].querySelector('.submit').addEventListener('click', function(){
	sections[8].classList.remove('current');
	sections[9].classList.add('current');
	sections[9].querySelectorAll('li')[0].classList.add('current');
})
sections[9].querySelector('.submit').addEventListener('click', function(){
	sections[9].classList.remove('current');
	sections[10].classList.add('current');
	sections[10].querySelectorAll('li')[0].classList.add('current');
})
sections[10].querySelector('.submit').addEventListener('click', function(){
	window.location.reload()
})

var j=0;
var spans = document.querySelectorAll('.big-molly span');
var spanInterval = setInterval(function(){
	spans[j].classList.add('active');
	j++
	if (j > 4) {
		clearInterval(spanInterval)
	}
},100)

function nextMolly(num) {
	document.querySelector('.icon').src = 'ui/assets/images/molly' + num + '.png';
	document.querySelector('.type').innerHTML = mollys[num-1]
}

var i=1;
nextMolly(i);
setInterval(
	function(){
		i++;
		nextMolly(i)
		if (i == mollys.length) {
			i = 0;
		}
	}

,2000)

function setTops() {
	moduleTops = []
	for (var i = 0; i < modules.length; i++) {
		moduleTops.push(modules[i].getBoundingClientRect().top - menuItems[menuItems.length-1].getBoundingClientRect().top + document.querySelector('body').scrollTop)
	}
}
