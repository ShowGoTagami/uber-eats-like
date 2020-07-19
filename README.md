## ubser-eats-likeについて
### 初期データの作成
基本的にseedsを回して初期データを投入します。
($ uber-eats-like > はターミナルで uber-eats-likeディレクトリで > 以下のコマンドを実行することを指します。)

```
$ uber-eats-like > bundle exec rails r db/seeds.rb
```

### 動かし方

#### APIサーバーの起動
```
$ uber-eats-like > bundle exec rails s
```

別タブで
#### frontendの起動
```
$ uber-eats-like/frontend > npm start
```

#### Chromeなどで以下にアクセス
http://localhost:3001/restaurants
