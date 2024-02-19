import { RxCross1 } from "react-icons/rx";
import { LiaFileImportSolid } from "react-icons/lia";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { MdLocalPrintshop } from "react-icons/md";
import { LuRefreshCw } from "react-icons/lu";

import "./index.css";

const orderMenuItems = [
  {
    id: 1,
    displayText: "Pending",
    value: "Pending",
  },
  {
    id: 2,
    displayText: "Accepted",
    value: "Accepted",
  },
  {
    id: 3,
    displayText: "AWB Created",
    value: "AWB Created",
  },
  {
    id: 4,
    displayText: "Redy to Ship",
    value: "Redy to Ship",
  },
  {
    id: 5,
    displayText: "Shipped",
    value: "Shipped",
  },
  {
    id: 6,
    displayText: "Completed",
    value: "Completed",
  },
  {
    id: 7,
    displayText: "Cancelled",
    value: "Cancelled",
  },
];

const orderDetails = [
  {
    orderNo: "#TKN20203754",
    orderDate: "2022-05-04",
    city: "Lucknow",
    customerName: "Abhishek Dixit",
    orderValue: 0.0,
    status: "pending",
  },
  {
    orderNo: "#TKN20203753",
    orderDate: "2022-05-04",
    city: "Lucknow",
    customerName: "Abhishek Dixit",
    orderValue: 0.0,
    status: "pending",
  },
  {
    orderNo: "#TKN20203752",
    orderDate: "2022-05-04",
    city: "Lucknow",
    customerName: "Abhishek Dixit",
    orderValue: 0.0,
    status: "pending",
  },
];

const MainContent = () => {
  return (
    <div className="main-container">
      <div className="active-card">
        <p className="active">
          Order
          <span className="delete-icon">
            <RxCross1 />
          </span>
        </p>
      </div>
      <div className="order-header">
        <ul className="oreder-menu-items">
          {orderMenuItems.map((each) => (
            <li className="item" key={each.id}>
              <p>{each.displayText}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="order-details">
        <div className="tebal-header">
          <ul className="header-button-items">
            <li className="header-button">
              <button>
                <span>
                  <LiaFileImportSolid />
                </span>
                Import Oreders
              </button>
            </li>
            <li className="header-button">
              <button>
                <span>
                  <RiArrowRightDoubleFill />
                </span>
                Accept
              </button>
            </li>
            <li className="header-button">
              <button>
                <span>
                  <MdLocalPrintshop />
                </span>
                Print
              </button>
            </li>
          </ul>
          <button>
            <span>
              <LuRefreshCw />
            </span>
            Refresh
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th> </th>
              <th>
                <input type="checkbox" />{" "}
              </th>
              <th> Channel</th>
              <th>Order No</th>
              <th>Order Date</th>
              <th>City</th>
              <th>Customer Name</th>
              <th>Order Value</th>
              <th>Status</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.map((each) => (
              <tr>
                <th>+</th>
                <th>
                  <input type="checkbox" />
                </th>
                <th>{each.channel}</th>
                <th>{each.orderNo}</th>
                <th>{each.orderDate}</th>
                <th>{each.city}</th>
                <th>{each.customerName}</th>
                <th>{each.orderValue}</th>
                <th>
                  <span>{each.status}</span>
                </th>
                <th>
                  <select>
                    <option>Actions</option>
                    <option>Other</option>
                  </select>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MainContent;
