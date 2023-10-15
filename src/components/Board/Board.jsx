import Card from "../TicketCard/TicketCard";
import BoardHeader from "./BoardHeader";
import "./Board.css";

const Board = ({ tickets, header, users }) => {
    return (
        <div className="boaboard_container">
            <BoardHeader 
                tickets={tickets}
                header={header}
            />
            <div className="board_body">
                {tickets.map((ticket) => (
                    <Card
                        key={ticket.id}
                        id={ticket.id}
                        status={users[ticket.userId] ? users[ticket.userId].available: false}
                        title={ticket.title}
                        tag={ticket.tag[0]}
                        name={users[ticket.userId] ? users[ticket.userId].name: ""}
                    />
                ))}
            </div>
        </div>
    );
}

export default Board;
