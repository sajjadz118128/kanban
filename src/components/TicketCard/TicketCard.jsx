import "./TicketCard.css";
import TicketCardHeader from "./TicketCardHeader";
import TicketCardBody from "./TicketCardBody";

const TicketCard = ({ id, status, title, tag, name}) => {
    return (
        <div className="ticket-card-container border-curve">
            <TicketCardHeader 
                id={id}
                status={status}
                name={name}
            />
            <TicketCardBody 
                title={title}
                tag={tag}
            />
        </div>
    );
};

export default TicketCard;
