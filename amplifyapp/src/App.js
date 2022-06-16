import CardContainer from "./components/Card/Card";

import "./App.scss";

function App() {
  const data = [
    {
      title: "NON-CATALOG SUPPLIER",
      body: "AIOPS.D has ACCEPTED this validation.",
      viewAttachment: false,
    },
    {
      title: "CURRENCY",
      body: "AIOPS.D has ACCEPTED this validation.",
      viewAttachment: false,
    },
    {
      title: "ATTACHMENT",
      body: "AIOPS.D has ACCEPTED this validation.",
      viewAttachment: true,
    },
  ];

  return (
    <div className="App">
      <header className="app-header">
        <div>
          <select className="item-selector">
            <option>Choose line item 1</option>
            <option>Choose line item 2</option>
            <option>Choose line item 3</option>
          </select>
        </div>
        <div className="key-value-pair-container">
          <div className="key">Description:</div>
          <div className="value">Ruled Notepads</div>
        </div>
        <div className="key-value-pair-container">
          <div className="key">Supplier:</div>
          <div className="value">4001234 - Office Supply Depot</div>
        </div>
        <div className="key-value-pair-container">
          <div className="key">Qty:</div>
          <div className="value">5</div>
        </div>
        <div className="key-value-pair-container">
          <div className="key">Amount:</div>
          <div className="value">USD 510.00</div>
        </div>
      </header>
      <div className="app-body">
        {data.map(({ title, body, viewAttachment }) => (
          <CardContainer
            title={title}
            body={body}
            viewAttachment={viewAttachment}
          />
        ))}
      </div>
      <div className="app-footer">
        <div className="left">
          <button className="btn btn-primary">SAVE</button>
        </div>
        <div className="right">
          <button className="btn btn-primary">APPROVE</button>
          <button className="btn btn-secondary">REJECT</button>
        </div>
      </div>
    </div>
  );
}

export default App;
