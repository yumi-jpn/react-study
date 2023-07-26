import React, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  // 動的に変わる予定のnum変数、それを更新する関数setNum。初期値はuseStateの()に書く
  const [num, setNum] = useState(0);
  // 表示、非表示を扱う状態（state）
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  // faceShowFlagを変えるための関数
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      // 再レンダリングの対策：初期値がtrueなので、3の倍数の場合はstateを更新しなくて良いように記載する
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* props名は任意で渡したいものが書ける */}
      {/* 一つのコンポーネントにproprを渡すのでスッキリ書ける */}
      {/* messageのpropsを削除して、中のコメントを反映したい場合、props.childrenとすることでも使える */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      {/* ボタンを押した時に顔文字の表示非表示を変える関数を埋め込む */}
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/* 論理演算子を活用して記載 */}
      {faceShowFlag && <p>(*'-'*)</p>}
    </>
  );
};
// 他のファイルでも使用できるうに「export default 関数名」を記載している
// 使用先のファイルにも「import - from - ;」の記載が必要
export default App;
