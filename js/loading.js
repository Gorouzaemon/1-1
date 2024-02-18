var bar=new ProgressBar.Line(splash_text,{
   duration: 1000,
	strokeWidth: 0.2,//進捗ゲージの太さ // 単位は何ですか？？？？？
	color: '#555',//進捗ゲージの色
	trailWidth: 0.2,//ゲージベースの線の太さ
	trailColor: '#bbb',//ゲージベースの線のカラー
	text: {//テキストの形状を直接指定				
		style: {//天地中央に配置
			position: 'absolute',  // position relativeはどこですか？？？？

			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',//バーより上に配置
			transform:'translate(-50%,-50%)',
			'font-size':'1rem',
			color: '#fff',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	} // setTextは大体想像できますが、改めてどのような作業をしていますか？？？？？
	// Math.round 四捨五入
});
$(function(){
  bar.animate(1.0,function(){
      $('#splash').dalay(500).fadeOut(800);
  });
});
