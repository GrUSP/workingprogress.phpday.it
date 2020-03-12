document.addEventListener("DOMContentLoaded", () => {
	const e = document.querySelectorAll(".tabs");
	void 0 !== e && e.forEach(e => {
		e.children[0].addEventListener("click", e => {
			var node = e.target;
			var nodename = '';
			while(node.localName!="ul") {
				if(node.localName=="a") nodename=node.innerText;
				node=node.parentNode;
			}
      //console.log(node);
      var a=0;
      Array.from(node.children).forEach(function (n) {
        n.classList.remove("is-active"), 
        a++, 
        node.parentNode.children[1].children[a - 1].style.display = "none", 
        nodename == n.children[0].innerText && (n.classList.add("is-active"), 
        node.parentNode.children[1].children[a - 1].style.display = "block")
      })
      a = 0;
      Array.from(node.children).forEach(function (n) {
        a++;
        if (n.classList.contains("is-active")) {
          if (node.parentNode.children[1].children[a - 1].classList.contains("columns")) {
            node.parentNode.children[1].children[a - 1].style.display = "flex";
          }
        }
      })
		})
	})
});
