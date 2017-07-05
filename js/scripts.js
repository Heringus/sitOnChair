document.addEventListener("DOMContentLoaded", function() {
      var list = document.querySelectorAll('.page-nav .nav-parent');
      console.log(list);
      var nav = document.querySelectorAll('.page-nav-sublist');
      console.log(nav);


      for (var i = 0; i < list.length; i++) {
        list[i].addEventListener('mouseover', function() {
          var hasChildren = this.querySelectorAll('li').length;
          if(hasChildren > 0){
            this.querySelector('.page-nav-sublist').style.display = 'block';
            
          }

        });
      }

      for (var i = 0; i < list.length; i++) {
        list[i].addEventListener('mouseout', function() {
          var hasChildren = this.querySelectorAll('li').length;
          if(hasChildren > 0){
            this.querySelector('.page-nav-sublist').style.display = 'none';

          }

        });
      }

      //slider
      var next = document.getElementById('next');
      var prev = document.getElementById('previous');
      var lis = document.querySelectorAll(".slider-element");
      var iS = 0;
      console.log(lis);
      for (var i = 0; i < lis.length; i++) {
        lis[i].style.display = "none";
      }
      lis[0].style.display = "flex";
      next.addEventListener('click', function() {
        lis[iS].style.display = "none";
        iS++;
        if (iS == lis.length) {
          iS = 0;
        }
        lis[iS].style.display = 'flex'
      });
      prev.addEventListener('click', function() {
        lis[iS].style.display = "none";
        iS--;
        if (iS == -1) {
          iS = lis.length - 1;
        }

        lis[iS].style.display = 'flex';
      });

      var gallBox = document.querySelectorAll('.gallBoxEvent');
      var stripe = document.querySelectorAll('.stripe');


      for (var i = 0; i < gallBox.length; i++) {
        gallBox[i].addEventListener('mouseover', function() {
            console.log(this.children);
            this.querySelector('.stripe').style.display = "none";
        });

      }
      for (var i = 0; i < gallBox.length; i++) {
        gallBox[i].addEventListener('mouseout', function() {
            console.log(this.children);
            this.querySelector('.stripe').style.display = "block";

        });
      }







});
