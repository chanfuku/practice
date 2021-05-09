const xhr = new XMLHttpRequest();

xhr.open("POST", "http://ec2-18-191-16-33.us-east-2.compute.amazonaws.com/api/fuga", true);

xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function() { // 状態が変化すると関数が呼び出されます。
    if (this.readyState === XMLHttpRequest.DONE && this.status !== 200) {
        // リクエストの終了。ここの処理を実行します。
        console.log(false);
    }
}

xhr.send("foo=bar");
