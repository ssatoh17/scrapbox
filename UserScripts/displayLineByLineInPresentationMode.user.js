/** プレゼンテーションモード時に、下矢印キーで1行ずつ表示（上矢印キーで全て表示） */
(function () { 
  
let _lis = document.querySelectorAll('.dropdown-menu.dropdown-menu-right')[3].querySelectorAll('li');
const convertedTypeArrayLis = [].map.call(_lis, li => li); // NodeList to Arry
let startPresentationMenu = convertedTypeArrayLis.filter( li => {
  return li.textContent.trim().toLowerCase() == 'start presentation';
})[0];

// document.querySelector('#page-edit-menu').addEventListener('click', ()=> {  // ２番目のアイコン(document icon)をクリックした時
// document.querySelectorAll('.dropdown-menu.dropdown-menu-right')[3].querySelectorAll('li')[19].addEventListener('click', ()=> {
startPresentationMenu.addEventListener('click', ()=> {

  // hide all rows
  document.querySelectorAll('.lines .line').forEach( line => {
   	// line.style.display = 'block'; // 効かなかった・・・
   	line.style.display = 'none';
  });
  
  let displayLineByLine = () => {
    document.addEventListener('keydown', e=> {
    	// console.log(e); console.log(e.keyCode);
    	let curSection = document.querySelector('#app-container style').textContent.replace('.lines .line:not(.','').replace(') { display: none; }','');
    	if(e.keyCode == 40){ // down arrow key
         try {
            if(document.querySelector('.lines .line.' + curSection+'[style*="display: none"]')){
    	         document.querySelector('.lines .line.' + curSection+'[style*="display: none"]').style.display = '';
            } else {
               let keyDownAndUp = code => {
                  let k = document.createEvent("Event");
                  k.initEvent("keydown",true,true);
                  k.keyCode = code;
                  document.dispatchEvent(k);
                  let k2 = document.createEvent("Event");
                  k2.initEvent("keyup",true,true);
                  k2.keyCode = code;
                  document.getElementById("text-input").dispatchEvent(k2);
               }
               keyDownAndUp(39); // force a right arrow keypress(keydown→keyup) event to fire
            }
         } catch(err) { console.error(err) }
    	}
    	if(e.keyCode == 38) { // up arrow key
    		// display line by line
    		document.querySelectorAll('.lines .line.' + curSection).forEach( line => line.style.display = '' );
    	}
    	if(e.keyCode == 39) { // right arrow key
    	    // show only first row (= title) 
    	    setTimeout( () => {
    	    	console.log('right arrow key pressed.');
    	    	let curSection2 = document.querySelector('#app-container style').textContent.replace('.lines .line:not(.','').replace(') { display: none; }','');
    	    	document.querySelector('.lines .line.' + curSection2).style.display = ''; 
    	    } , 200);
    	}
    	if(e.keyCode == 27) { // ESC key
    	    // display all lines
    	    setTimeout( () => document.querySelectorAll('.lines .line').forEach( line => line.style.display = '' ), 500);
    	}
    	
    });
  };
  displayLineByLine();
});

})();
