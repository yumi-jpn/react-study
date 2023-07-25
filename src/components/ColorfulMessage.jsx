import React from "react";

// propsを渡す場合は、渡す方と渡され方どちらにも引数を書く
// props名は任意で好きなものを書けるがpropsとするとわかりやすいのでおすすめ
const ColorfulMessage = (props) => {
  // props → {color: "blue", message: "お元気ですか？"あ}

  // 分割代入を使うことで、props.colorなどのpropsを省略して書ける！
  const { color, children } = props;
  // オブジェクトとプロパティ名が一緒の場合、JSでは省略できる！
  const contentStyle = {
    color,
    fontSize: "18px", // cssの記法ではなく、Reactではキャメルケースで書く
  };

  {
    /* messageのpropsを削除して、中のコメントを反映したい場合、props.childrenとすることでも使える */
  }
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
