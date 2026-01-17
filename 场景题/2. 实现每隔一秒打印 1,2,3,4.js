//1.let的块级作用域
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}

//2.使用 
for (var i = 0; i < 5; i++) {
    //通过立即执行函数，制造了五个独立的作用域环境，并且立即调用他们。 循环了五次，创建了五个环境，所以不会有只用var的问题。
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  })(i);
}