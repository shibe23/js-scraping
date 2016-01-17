var fileArray = new Array();
var readerArray = new Array();
var resultArray =  new Array();

var $domObjectsArray = new Array();
var $titleObject = new Array();
var $authorObject = new Array();
var $mainTextObject = new Array();
var $mainTextObjectResult = new Array();


$(document).ready(function() {

  var fileInput = document.getElementById('fileInput');

  $("input[type=file]").change(function(e) {

    var fileLength = fileInput.files.length;
    var i = 0;
    $('.result').text("処理中…");
    ( function loop(){
      if (i < fileLength){

        fileArray[i] = fileInput.files[i];
        readerArray[i] = new FileReader();
        readerArray[i].readAsText(fileArray[i] , "Shift-JIS");  //FileReaderオブジェクトの読み込み

        readerArray[i].onload = convertToDOM(i);
        setTimeout(loop, 0);

        if(i == fileLength-1){$('.result').text("完了しました")};
      }

      i ++;

    })();

  });
});


//読み込み成功
function convertToDOM(i){
    return function(){

      //DOMオブジェクトへ変換
      $domObjectsArray[i] = $(readerArray[i].result);

      //ブラウザ上へ表示
      $('<div></div>').addClass('data' + i).appendTo('div.box')
      $domObjectsArray[i].appendTo('.data' + i);

      getContents(i);
      if($('.data' + i).size()){$('.data' + i).remove();}
      console.log(fileArray[i]);
      console.log(resultArray);
    }
}

//コンテンツを取得する方法を指定
function getContents(i){

     //テキスト取得用のDOM操作
      $titleObject[i] = $('.data' + i).find('.title').text();
      $authorObject[i] = $('.data' + i).find('.author').text();

      //タブ区切りに置き換え
      resultArray[i] = $titleObject[i] + "\t" + $authorObject[i] + "\n";
}

function startDownload() {
    var text = resultArray;
    //タブ区切りでダウンロード
    var blob = new Blob(resultArray);
    var url = window.URL.createObjectURL(blob);
    document.getElementById('download').href = url;
} 