(() => {
  const protects = document.querySelectorAll('.buttonContainer'),
        lightCase = document.querySelector('.lightcase'),
        lbClose = lightCase.querySelector('.down'),
        houseVideo = lightCase.querySelector('video'),
        theBanners = document.getElementById('boxpictures'),
        boxName= document.querySelector('#boxName');

  function popLightCase () {
      lightCase.classList.add('show-lightbox');
      houseVideo.play();
  }

  function closeLightCase () {
      lightCase.classList.remove('show-lightbox');
      houseVideo.pause();
      houseVideo.currentTime = 0;
  }

  function animateBanners() {
      let offset = this.dataset.offset;
      theBanners.style.right = (offset * 600) + 'px';
  }

function getboxName(box) {
    console.log(box[1]);
    boxName.textContent = 'box ${box[1]}';
  }


  protects.forEach(protects => protects.addEventListener('click', animateBanners))

  houseVideo.addEventListener('ended', closeLightCase);
  lbClose.addEventListener('click', closeLightCase);

})();
