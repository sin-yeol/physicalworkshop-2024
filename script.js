document.addEventListener("DOMContentLoaded", function() {
    var titleScreen = document.querySelector('.title-screen');
    var content = document.querySelector('.content');


    // 타이틀 페이드인
    titleScreen.classList.add('show');

    // 본문 페이드인
    setTimeout(function() {
        content.classList.add('show');
    }, 1000);

    // 스크롤 이벤트 리스너
    window.addEventListener('scroll', function() {
        const backToTopButton = document.getElementById('backToTop');
        const scrollPositionPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        if (scrollPositionPercent > 30) {
            backToTopButton.style.display = 'block';
        }
        else {
            backToTopButton.style.display = 'none';
        }
        const scrollPosition = window.scrollY + window.innerHeight - backToTopButton.clientHeight - 20;
        backToTopButton.style.top = scrollPosition + 'px';
    });
});

// 처음으로 돌아가는 함수
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}