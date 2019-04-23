//solution 1

function setup(){
    var els = document.getElementsByClassName('remove');
    //transform HTML collection to array
     els= Array.from(els);
      //console.log(els);

        els.forEach(function(removeDom){
            removeDom.addEventListener('click', function(){
                this.parentNode.remove();
        });

    });
   
    
}

setup();



//solution 2

function setup() {
    var els = document.getElementsByClassName('remove');
  
  for (var i = 0; i < els.length; i++) {
    els[i].addEventListener('click', function () {
      this.parentNode.remove();
    });
   }
  }

  setup();
  