if (document.documentElement.clientWidth <= 414) {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 37.5 + 'px';
}

window.addEventListener('resize', function () {
  if (document.documentElement.clientWidth <= 414) {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 37.5 + 'px'; 
  } else {
    if (document.documentElement.style.fontSize !== '62.5%') {
      document.documentElement.style.fontSize = '62.5%';
    }
  }

  if (document.documentElement.clientWidth > 768) {
    document.querySelector('.header-nav').style.display = "block";
  } else {
    document.querySelector('.header-nav').style.display = "none";
  }
}, false);

document.querySelector('.header .fa-bars').addEventListener('click', function () {
  if (document.querySelector('.header-nav').style.display === "block") {
    document.querySelector('.header-nav').style.display = "none";
  } else {
    document.querySelector('.header-nav').style.display = "block";
  }
}, false);