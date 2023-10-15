import "./Board.css";
import { BiPlusCircle } from "react-icons/bi";
import { BiDotsHorizontal } from "react-icons/bi";
// import { SiQuasar } from "react-icons/si";
import InProgress from "../../assets/inProgress.png";

const BoardHeader = ({tickets, header}) => {
    console.log("header is ", header);
    return (
        <div className="board_header">
            <div>
                <div className="flex_gap">
                    <img src={InProgress} alt="in progress" height="30px" width="30px"/>
                    {/* <SiQuasar className="bg_color_status_icon" /> */}
                    <p>{header}</p>
                    <span>{tickets.length}</span>
                </div>
            </div>
            <div className="flex_gap">
                <BiPlusCircle className="bg_color_icon" />
                <BiDotsHorizontal className="bg_color_icon" />
            </div>
        </div>
    );
};

export default BoardHeader;
