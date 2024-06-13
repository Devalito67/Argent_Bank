import "../styles/EditUserName.css"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFirstName, setLastName, updateFirstName, updateLastName } from "../redux/userInfosSlice";
import { RootState } from "../redux/store";

interface EditUserNameProps {
    handleClick: () => void;
    token: string;
}

export default function EditUserName({ handleClick, token }: EditUserNameProps) {
    const {firstName, lastName, newFirstName, newLastName} = useSelector((state: RootState)=> state.UserInfos)
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if ((newFirstName === firstName) && (newLastName === lastName)) {
            alert("Vous n'avez pas modifier vos informations!")
        } else {
            console.log("newFirstname",newFirstName)
            dispatch(setFirstName(newFirstName))
            dispatch(setLastName(newLastName))
            console.log("firstname", firstName)
            axios.put('http://localhost:3001/api/v1/user/profile', {
                    "firstName": newFirstName,
                    "lastName": newLastName
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            
            handleClick();
        }
    }

    return <div className="userName-container">
        <h1>Welcome back</h1>
        <form onSubmit={handleSubmit}>
            <div className="inputs-container">
                <input type="text" placeholder={firstName} required onChange={(e) => dispatch(updateFirstName(e.target.value))} />
                <input type="text" placeholder={lastName} required onChange={(e) => dispatch(updateLastName(e.target.value))} />
            </div>
            <div className="buttons-container">
                <button type="submit" className="edit-button">Save</button>
                <button type="button" onClick={handleClick} className="edit-button">Cancel</button>
            </div>
        </form>
    </div>
}
