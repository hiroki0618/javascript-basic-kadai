//textというidを取得し定数に代入する
const btn = document.getElementById('btn');
const text =document.getElementById('text');

//HTML要素をクリックしたときイベント処理
btn.addEventListener('click',()=>{
  text.textContent = 'ボタンをクリックしました';
  });
