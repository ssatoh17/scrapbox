/** プレゼンテーションモード時に、下矢印キーで1行ずつ表示（上矢印キーで全て表示） */

let _lis = document.querySelectorAll('.dropdown-menu.dropdown-menu-right')[3].querySelectorAll('li');
const convertedTypeArrayLis = [].map.call(_lis, li => li); // NodeList to Arry
let startPresentationMenu = convertedTypeArrayLis.filter( li => {
  return li.textContent.trim().toLowerCase() == 'start presentation';
})[0];

// document.querySelector('#page-edit-menu').addEventListener('click', ()=> {  // ２番目のアイコン(document icon)をクリックした時
// document.querySelectorAll('.dropdown-menu.dropdown-menu-right')[3].querySelectorAll('li')[19].addEventListener('click', ()=> {
startPresentationMenu.addEventListener('click', ()=> {

  // 全てを非表示にする
  document.querySelectorAll('.lines .line').forEach( line => {
   	// line.style.display = 'block'; // 効かなかった・・・
   	line.style.display = 'none';
  });
  
  let 下矢印キーを押す度に１行ずつ表示 = () => {
    document.addEventListener('keydown', e=> {
    	// console.log(e); console.log(e.keyCode);
    	let curSection = document.querySelector('#app-container style').textContent.replace('.lines .line:not(.','').replace(') { display: none; }','');
    	if(e.keyCode == 40){ // ↓(下矢印)キー     	   
    	   // console.log({curSection});
    	   // document.querySelectorAll('.lines .line.' + curSection).forEach( line => {
    	   // // document.querySelectorAll('.lines .line.section-0').forEach( line => {
    	   		// console.log(line);
    	   		// // if(line.style.display == 'block') {
    	   		// if(line.style.display == 'none') {
    	   			// line.style.display = '';
    	   			// // line.style.display = 'block';
    	   			// return;
    	   		// }
    	   // });
    	   document.querySelector('.lines .line.' + curSection+'[style*="display: none"]').style.display = '';
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
  下矢印キーを押す度に１行ずつ表示();
});
