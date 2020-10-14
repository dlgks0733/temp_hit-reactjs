/** @format */

function likeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요";

  return <button onClick={() => setLiked(!liked)}>{text}</button>;
}

function container() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <likeButton />
      <div>
        <span>현재 카운트: </span>
        <span style={{ marginRight: 10 }}>{count}</span>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <button onClick={() => setCount(count - 1)}>감소</button>
      </div>
    </div>
  );
}

const domContainer = document.getElementById("root");
ReactDOM.render(React.createElement(container), domContainer);
