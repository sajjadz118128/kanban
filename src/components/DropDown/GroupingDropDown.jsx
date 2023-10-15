import { GroupingList } from "../../constants/data";

const GroupingDropDown = ({ selectedGrouping, groupHandler }) => {
    return (
        <div className="flex_container">
            <p>Grouping</p>
            <select
                className="select_element"
                name="group-select"
                onChange={(e) => groupHandler(e)}
                value={selectedGrouping}
            >
                {GroupingList.map((item) => (
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

export default GroupingDropDown;