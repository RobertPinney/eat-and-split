import "./app.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <EatAndSplit />
    </div>
  );
}

function EatAndSplit() {
  return (
    <div>
      <List />
      <FormFriend />
      <FormBill />
    </div>
  );
}

function List() {
  return (
    <div>
      <SideBar />
    </div>
  );
}

function SideBar() {
  return (
    <div>
      <ul className="sidebar">
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <h3>Name</h3>
        </li>
        <li>
          <p>Money owed</p>
        </li>
        <li>
          <button className="button">Select</button>
        </li>
      </ul>
    </div>
  );
}

function FormFriend() {
  return (
    <div className="form-add-friend">
      <span>
        <emote></emote>
        <p>Friend Name</p>
        <input></input>
      </span>
      <span>
        <emote></emote>
        <p>Image URL</p>
        <input></input>
      </span>
      <button className="button">Add</button>
    </div>
  );
}

function FormBill() {
  return (
    <div>
      <h2>SPLIT A BILL WITH (NAME)</h2>
      <span>
        <emote></emote>
        <label>Bill Value:</label>
        <input type="text" />
      </span>
      <span>
        <emote></emote>
        <label>Your expense:</label>
        <input type="text" />
      </span>
      <span>
        <emote></emote>
        <label>(Name) expense:</label>
        <input type="text" />
      </span>
      <span>
        <emote></emote>
        <label>Who is paying the bill?</label>
        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </span>
    </div>
  );
}
