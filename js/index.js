document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM READY!!!!');

    init();
});


const init = () => {
    console.log('init() CALLED!!!');

    initViews();

    addEvents();
}


const addEvents = () => {
    console.log('addEvents() CALLED!!!');

    /* MENU CLICK EVENT START */
    let signUpMenuBtn = document.querySelector('div.menu_wrap a.sign_up');
    signUpMenuBtn.addEventListener('click', function() {
        console.log('signUpMenuBtn CLICKED!!!');
        

        showSelectedView(SIGN_UP_VIEW);
    });

    let signInMenuBtn = document.querySelector('div.menu_wrap a.sign_in');
    signInMenuBtn.addEventListener('click', function() {
        console.log('signInMenuBtn CLICKED!!!');


        showSelectedView(SIGN_IN_VIEW);
    });

    let signOutMenuBtn = document.querySelector('div.menu_wrap a.sign_out');
    signOutMenuBtn.addEventListener('click', function() {
        console.log('signOutMenuBtn CLICKED!!!');

        signInedMemberId = '';
        setMenuStatus(SIGN_OUT_STATUS);

        showSelectedView(SIGN_IN_VIEW);
    });

    let writeMenuBtn = document.querySelector('div.menu_wrap a.write');
    writeMenuBtn.addEventListener('click', function() {
        console.log('writeMenuBtn CLICKED!!!');

        if (signInedMemberId === ''){
            alert('Please SIGN IN!');

            showSelectedView(SIGN_IN_VIEW);
            return;
        };

        showSelectedView(DIARY_WRITE_VIEW);
    });

    let listMenuBtn = document.querySelector('div.menu_wrap a.list');
    listMenuBtn.addEventListener('click', function() {
        console.log('listMenuBtn CLICKED!!!');

        if (signInedMemberId === ''){
            alert('Please SIGN IN!');

            showSelectedView(SIGN_IN_VIEW);
            return;
        };

        listUpDiaries();

        showSelectedView(DIARY_LIST_VIEW);
    });
    /* MENU CLICK EVENT END */

    /* FUNCTION CLICK EVENT START*/
    let signUpBtn = document.querySelector('div.sign_up_wrap input[type="button"]');
    signUpBtn.addEventListener('click', function() {
        console.log('signUpBtn CLICKED!!!');

        let u_id = document.querySelector('div.sign_up_wrap input[name="u_id"]').value;
        let u_pw = document.querySelector('div.sign_up_wrap input[name="u_pw"]').value;
        let u_mail = document.querySelector('div.sign_up_wrap input[name="u_mail"]').value;


        addMember(u_id, u_pw, u_mail);

        alert('SIGN UP SUCCESS!!!');
        document.querySelector('div.sign_up_wrap input[name="u_id"]').value = '';
        document.querySelector('div.sign_up_wrap input[name="u_pw"]').value = '';
        document.querySelector('div.sign_up_wrap input[ngetCurrentDateTimeame="u_mail"]').value = '';
    });


    let signInBtn = document.querySelector('div.sign_in_wrap input[type="button"]');
    signInBtn.addEventListener('click', function() {
        console.log('signInBtn CLICKED!!!');

        let u_id = document.querySelector('div.sign_in_wrap input[name="u_id"]').value;
        let u_pw = document.querySelector('div.sign_in_wrap input[name="u_pw"]').value;

        let isMember = searchMember(u_id, u_pw);

        if (isMember) {

            alert('SIGN IN SUCCESS!!!');

            signInedMemberId = u_id;
            setMenuStatus(SIGN_IN_STATUS);


            listUpDiaries();
            showSelectedView(DIARY_LIST_VIEW);
        } else {
            
            alert('SIGN IN FAIL!!!');

            signInedMemberId ='';

        }
        document.querySelector('div.sign_in_wrap input[name="u_id"]').value = '';
        document.querySelector('div.sign_in_wrap input[name="u_pw"]').value = '';
    });

    let writeBtn = document.querySelector('div.write_wrap button');
    writeBtn.addEventListener('click', function(){
        console.log('writeBtn CLICKED!!!!!!!!')

        let txt = `${getCurrentDateTime()}${document.querySelector('div.write_wrap input').value}`;
        addDiary(txt);

        document.querySelector('div.write_wrap input').value = '';
        
        listUpDiaries();
        showSelectedView(DIARY_LIST_VIEW);

    });
    /* FUNCTION CLICK EVENT END*/
}


const listUpDiaries = () => {
    console.log('listUpDiary() CALLED!!');

    listWrap.textContent = '';
    let diaryArr = searchDiary();
    for (let i = 0; i < diaryArr.length; i++){
        console.log(diaryArr[i]);

        let tpl = document.querySelector('#list_item');
        let clone = document.importNode(tpl.content, true);
        let txt = clone.querySelector('div.txt');

        txt.textContent = diaryArr[i];

        listWrap.prepend(clone);

    }
}