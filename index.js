const Box = (props) => {
  //  Write your code here.
  const { textSize } = props;
  return <p className="size-name">{textSize}</p>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="main-heading">Boxes</h1>
    <div className="boxes-container">
      <div class="small-box">
        <Box textSize="Small" />
      </div>
      <div class="medium-box">
        <Box textSize="Medium" />
      </div>
      <div class="large-box">
        <Box textSize="Large" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
