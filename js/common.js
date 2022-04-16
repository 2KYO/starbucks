// ** sub menu 영역 작업 **
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

//.search 요소를 클릭했을 때 input 요소도 마찬가지로 focus 되도록 이벤트 생성
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

// searchInputEl에 해당하는 요소가 focus 되었을 때 focused class를 생성하고 placeholder 요소에 통합검색 문자를 set한다
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  // 속성(Attribute)을 set 할 땐 속성의 이름과 속성의 값을 입력
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// focused class 생성 이후 focus가 풀려 blur 되었을 때 focused class를 remove한다
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2022