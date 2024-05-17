import "../styles/EditUserName.css"

interface EditUserNameProps {
    handleClick: () => void;
  }

export default function EditUserName({handleClick}:EditUserNameProps) {
    return <div className="header">
        <h1>Welcome back</h1>
        <form action="">
            <div className="inputs-container">
                <input type="text" placeholder="Prénom" />
                <input type="text" placeholder="Nom" />
            </div>
            <div className="buttons-container">
                <button className="edit-button">Save</button>
                <button onClick={handleClick} className="edit-button">Cancel</button>
            </div>
        </form>
    </div>
}
