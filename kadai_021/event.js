const btn = document.getElementById('btn');
const text = document.getElementById('text');
//ボタンクリックで実行
btn.addEventListener('click',()=>{
  //2秒後に実行
  setTimeout(()=>{
    text.textContent='ボタンをクリックしました';

  },2000);

      });
