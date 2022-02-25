function checkItem(e) {
  if (e.target.tagName == "INPUT") {
    if (e.target.checked) {
      e.target.parentElement.style.backgroundColor = "";
    } else {
      e.target.parentElement.style.backgroundColor = "rgb(39, 48, 71)";
    }
  } else if (e.target.tagName == "DIV") {
    if (e.target.lastChild.checked) {
      e.target.style.backgroundColor = "";
      e.target.lastChild.checked = false;
    } else {
      e.target.style.backgroundColor = "darkgreen";
      e.target.lastChild.checked = true;
    }
  }
}

function addItem(e) {
  if (e.target.classList.contains("confirm")) {
    e.target.parentElement.parentElement.style.display = "none";
    var dueDate = document.getElementsByClassName("dateInput")[0].value;
    var name = document.getElementsByClassName("nameInput")[0].value;
    otherItems.push(<Item key={Math.random()} name={name} dueDate={dueDate} />);
    document.getElementsByClassName("nameInput")[0].value = '';
    document.getElementsByClassName("dateInput")[0].value = '';
  } else {
    e.target.parentElement.parentElement.style.display = "none";
    document.getElementsByClassName("nameInput")[0].value = '';
    document.getElementsByClassName("dateInput")[0].value = '';
  }
}

function Item(props) {
  return (
    <div className="itemCasing" onClick={checkItem}>
      <span className="itemDate">{props.dueDate}</span>
      <span className="itemName">{props.name}</span>
      <input className="itemDone" type="checkbox" onClick={checkItem}></input>
    </div>
  );
}

function Window() {
  return (
    <div className="windowRoot">
    <div className="overlay"></div>
      <div className="Window">
        <label htmlFor="dateInput">Due Date:</label>
        <input className="dateInput" name="dateInput" type="date"></input>
        <br />
        <label htmlFor="nameInput">Item:</label>
        <input autoComplete="off" maxLength="20" className="nameInput" name="nameInput" type="text"></input>
        <button className="confirm" onClick={addItem}>Confirm</button>
        <button className="cancel" onClick={addItem}>Cancel</button>
      </div>
    </div>
  );
}

function revealWindow() {
  document.getElementsByClassName("windowRoot")[0].style.display = "block";
}

let elementrenderList = (
    <div className="renderRoot">
      <button className="addOne" onClick={revealWindow}>+</button>
      <Item dueDate="NOW" name="Create a task" />
      <Window />
    </div>
);

let otherItems = [];

function render() {
  ReactDOM.render(
    <div>
      <span className="Labels">It is {new Date().toLocaleTimeString()}</span>
      {elementrenderList}
      {otherItems.map(otherItems => otherItems)}
    </div>,
    document.getElementById("root")
  );
}

setInterval(render, 500);
