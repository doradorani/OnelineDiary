const memeberDB = new Map();
const diaryDB = new Map();


/* MEMBER DB START */
const addMember = (id, pw, mail) => {
    console.log('addMember() CALLED!!!');


    memeberDB.set(id, {
        u_id: id,
        u_pw: pw,
        u_mail: mail,
    });
    diaryDB.set(id, []); // modify되므로 데이터를 배열에 쌓음

    console.log(memeberDB.get(id));
}
const searchMember = () => {
    console.log('searchMember() CALLED!!!');

    let memObj = memberDB.get(id);
    if (memObj !== undefined && memObj.u_pw === pw) {
        console.log('SIGN IN SUCCESS!!!!');
        return true;
    }

    console.log('SIGN IN FAIL!!!');
    return false;
}
/* MEMBER DB START */


/* Diary DB START */
const addDiary = (txt) => {
    console.log('addDiary() CALLED!!!');

    let diaryArr = diaryDB.get(signInedMemberId);
    diaryArr.push(txt);
    console.log('diaryArr: ' + diaryArr);

}
const searchDiary = () => {
    console.log('searchDiary() CALLED!!!');

    let diaryArr = diaryDB.get(signInedMemberId);
    console.log('diaryArr:', diaryArr);

    return diaryArr;
}
/* Diary DB START */ 