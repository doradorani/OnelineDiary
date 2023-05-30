//없으면 안되지만 본 소스에는 입력하지 않는 부븐을 빼서 utils.js에 집어 넣음
let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];


const getCurrentDateTime = () => {
    console.log('getCurrentDateTime() CALLED!!!!');

    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let day = today.getDay();

    return `[${year}/${month}/${date}/${days[day]}] `;
}


const consoleFlag = false;


if(!consoleFlag) {
    console = {};
    console.log = function(){};
    console.warn = function(){};
    console.error = function(){};

}