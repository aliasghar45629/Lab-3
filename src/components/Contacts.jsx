function Contacts() {
    const contacts = ["Ali", "Ahmed", "Sara", "Ayesha", "Usman"];

    return (
        <div className="contacts-box">
            <h2>Contacts</h2>
            {contacts.map((name, index) => (
                <p key={index}>{name}</p>
            ))}
        </div>
    );
}

export default Contacts;