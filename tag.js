console.log('start');
var application_id = 772787;

if (application_id) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://demo.mamab.jp/api/v1/silver_life_cv_test', true, "demo", "karadanote");
    /*
    xhr.open('POST', 'https://demo.mamab.jp/api/v1/silver_life_cv', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    */

    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log('成功');
        } else {
            console.log('失敗:', this.response);
        }
    }

    // xhr.send("application_id=" + application_id);
    xhr.send(null);

}
console.log('end');
