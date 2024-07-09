'use strict';

const btn = document.querySelector('#btn');

const addtext = () => {
  const textArea = document.querySelector('#textArea');
  const textOutput = document.querySelector('#textOutput');
  const addTag = document.createElement('li');
  const addBtn = document.createElement('button');

  // ボタン押下で追加
  textOutput.appendChild(addTag);
  addTag.innerText = textArea.value;
  addTag.appendChild(addBtn);
  addBtn.innerText = '削除';
  textArea.value = '';

  // 削除ボタンをクリック時に削除
  addBtn.addEventListener('click', removeTag);

  // 削除ファンクション
  function removeTag() {
    addBtn.parentNode.parentNode.removeChild(addTag);
  }
}

btn.addEventListener('click', addtext);
