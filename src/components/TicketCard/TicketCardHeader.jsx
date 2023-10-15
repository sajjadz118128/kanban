import "./TicketCard.css";

const TicketCardHeader = ({id, status, name}) => {
    console.log("status is", status)
    return (
        <div className="ticket-card-header">
            <p className="header-id">{id}</p>
            {(
                <div className="ticket-avatar-container">
                    <div className="ticket-image-container">
                        <img
                            src={`https://avatar.oxro.io/avatar.svg?name=${name}`}
                            className="image"
                            alt="avatar"
                            key={id}
                        />
                        <span className={`ticket-avatar-badge ${status === true ? "available" : ""}`}></span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TicketCardHeader;