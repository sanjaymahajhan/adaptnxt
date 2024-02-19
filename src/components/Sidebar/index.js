import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineInventory2 } from "react-icons/md";
import { CiViewTimeline } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";

import "./index.css";

const iconMap = {
  AiOutlineDashboard,
  MdOutlineInventory2,
  CiViewTimeline,
  MdOutlineLocalShipping,
  IoShareSocialOutline,
};

const sideBarOption = [
  {
    id: 1,
    displayText: "Dashboard",
    displayIcon: "AiOutlineDashboard",
    value: "Dashboard",
  },
  {
    id: 2,
    displayText: "Inventory",
    displayIcon: "MdOutlineInventory2",
    value: "Inventory",
  },
  {
    id: 3,
    displayText: "Orders",
    displayIcon: "CiViewTimeline",
    value: "Orders",
  },
  {
    id: 4,
    displayText: "Shipping",
    displayIcon: "MdOutlineLocalShipping",
    value: "Shipping",
  },
  {
    id: 5,
    displayText: "Channel",
    displayIcon: "IoShareSocialOutline",
    value: "Channel",
  },
];

const Sidebar = () => {
  return (
    <ul className="sidebar-items">
      {sideBarOption.map((each) => {
        const IconComponent = iconMap[each.displayIcon];
        return (
          <li className="item" key={each.id}>
            <p>
              <span>
                <IconComponent />
              </span>{" "}
              {each.displayText}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
