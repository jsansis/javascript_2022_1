(function(){
	"use strict";	
	function hideSubMenus(){
			const submenus = document.querySelectorAll('ul li ul');
			for (let i=0; i<submenus.length;i++){
				submenus[i].className ="hide-menu";
			}
		}
		hideSubMenus();
		const menuLink = document.querySelectorAll('.menulink');
		for (let i=0; i<menuLink.length;i++){
			menuLink[i].addEventListener('click',function(e){
				e.preventDefault();
				const thisMenu=this.parentNode.querySelector('ul');
				hideSubMenus();
				//console.log(thisMenu.innerHTML);
				
				if(thisMenu.classList.contains('hide-menu'))
					thisMenu.className="show-menu";
				else
					thisMenu.className="hide-menu";
				
			}
			)
		}
}())