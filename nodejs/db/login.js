// 必要なモジュールをロード
const mysql = require('mysql');

// MySQL接続情報
const connection = mysql.createConnection({
  host: '192.168.100.10',     // データベースのホスト名
  user: 'php-login',      // データベースのユーザー名
  password: '',  // データベースのパスワード
  database: 'nodejs' // 使用するデータベース名
});

// MySQLに接続
connection.connect((err) => {
  if (err) {
    console.error('データベースに接続できませんでした: ' + err.stack);
    return;
  }

  console.log('データベースに接続しました');
});

// ここでクエリを実行したり、他のデータベース操作を行います

// 接続を終了する（プログラム終了前に必ず実行すること）
connection.end((err) => {
  if (err) {
    console.error('データベース接続を終了できませんでした: ' + err.stack);
    return;
  }

  console.log('データベース接続を終了しました');
});
