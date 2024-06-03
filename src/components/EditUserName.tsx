import { useState } from "react";
import "../styles/EditUserName.css"

interface EditUserNameProps {
    handleClick: () => void;
    firstName: string;
    lastName: string;
    setFirstName: React.Dispatch<React.SetStateAction<string>>;
    setLastName: React.Dispatch<React.SetStateAction<string>>;
}

export default function EditUserName({ handleClick, firstName, setFirstName, lastName, setLastName }: EditUserNameProps) {

    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if ((newFirstName === firstName) && (newLastName === lastName)) {
            alert("Vous n'avez pas modifier vos informations!")
        } else {
            setFirstName(newFirstName);
            setLastName(newLastName);
            handleClick();
        }
    }

    return <div className="userName-container">
        <h1>Welcome back</h1>
        <form onSubmit={handleSubmit}>
            <div className="inputs-container">
                <input type="text" placeholder={firstName} required onChange={(e) => setNewFirstName(e.target.value)} />
                <input type="text" placeholder={lastName} required onChange={(e) => setNewLastName(e.target.value)} />
            </div>
            <div className="buttons-container">
                <button type="submit" className="edit-button">Save</button>
                <button onClick={handleClick} className="edit-button">Cancel</button>
            </div>
        </form>
    </div>
}
