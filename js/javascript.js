
let browserDetail = document.getElementById('browserType');
let osDetailType = document.getElementById('osType');

var browserList = [
    {name:'Firefox', value: 'Firefox'},
    {name:'Opera', value: 'Opera' },
    {name:'Chrome', value: 'Chrome' },
    {name:'Edge', value: 'Edge' },
    {name:'Safari', value: 'Safari' },
];
var osList = [
    {name:'Androit', value: 'Androit'},
    {name:'iOS', value: 'iOS' },
    {name:'Linux', value: 'Linux' },
    {name:'Windows', value: 'Windows' },
    {name:'Macintosh', value: 'Mac' },
    {name:'ipad', value: 'iPad' },
];

let browserCherker = () => {
    let userDetails = navigator.userAgent;
    console.log(userDetails);
    for (let i in browserList){
        if(userDetails.includes(browserList[i].value)){
            browserDetail.innerHTML = browserList[i].name || 'Unknown Browser';
            break;
        }
    }
    for (let i in osList){
        if(userDetails.includes(osList[i].value)){
            osDetailType.innerHTML = osList[i].name;
            break;
        }
    }

};
window.onload = browserCherker();