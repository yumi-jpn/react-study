// 今回はReactのコンポーネントと明示的にするために、拡張子を「.jsx」にしている。「.js」でも可
import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  // JSX記法：JSのreturn内にhtmlの要素を記載することができる
  // JSXのルール：returnするhtml要素は一つのタグで囲わないといけない（<div>, <>, <React.Fragment>など）
  // returnする内容が複数ある場合、()で囲う
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* props名は任意で渡したいものが書ける */}
      {/* 一つのコンポーネントにproprを渡すのでスッキリ書ける */}
      {/* messageのpropsを削除して、中のコメントを反映したい場合、props.childrenとすることでも使える */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です！</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
// 他のファイルでも使用できるうに「export default 関数名」を記載している
// 使用先のファイルにも「import - from - ;」の記載が必要
export default App;
