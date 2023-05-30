// 다른 함수에서도 많이 쓰일거라 전역변수로 옮김

const SIGN_UP_VIEW = 1;
const SIGN_IN_VIEW = 2;
const SIGN_OUT_VIEW = 3;
const DIARY_WRITE_VIEW = 4;
const DIARY_LIST_VIEW = 5;

let signUpWrap = '';
let signInWrap = '';
let writenWrap = '';
let listWrap = '';

const initViews = () => {
    console.log('initViews() CALLED!!!');

    signUpWrap = document.querySelector('div.sign_up_wrap');
    signInWrap = document.querySelector('div.sign_in_wrap');
    writenWrap = document.querySelector('div.write_wrap');
    listWrap = document.querySelector('div.list_wrap');
}

const showSelectedView = (viewNo) => {
    console.log('showSelectedView() CALLED!!!');

    switch (viewNo) {
        case SIGN_UP_VIEW:
            signUpWrap.style.display = 'block';
            signInWrap.style.display = 'none';
            writenWrap.style.display = 'none';
            listWrap.style.display = 'none';

            break;
        case SIGN_IN_VIEW:
        case SIGN_OUT_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'block';
            writenWrap.style.display = 'none';
            listWrap.style.display = 'none';

            break;
        case DIARY_WRITE_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            writenWrap.style.display = 'block';
            listWrap.style.display = 'none';

            break;
        case DIARY_LIST_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            writenWrap.style.display = 'none';
            listWrap.style.display = 'block';

            break;
    }
}