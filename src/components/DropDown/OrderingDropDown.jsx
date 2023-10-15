import { OrderingList } from "../../constants/data";

const OrderingDropDown = ({ selectedOrdering, orderHandler }) => {
    return (
        <div className="flex_container">
            <p>Ordering</p>
            <select
                className="select_element"
                name="group-select"
                onChange={(e) => orderHandler(e)}
                value={selectedOrdering}
            >
                {OrderingList.map((item) => (
                    <option
                        value={item}
                        label={item}
                        key={item}
                    />
                ))}
            </select>
        </div>
    );
};

export default OrderingDropDown;