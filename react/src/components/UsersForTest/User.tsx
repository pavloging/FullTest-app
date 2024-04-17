import { IUser } from "../users/Users";

type OnDeleteFunction = (id: string) => void;

const User = ({user, onDelete} : {user: IUser, onDelete: OnDeleteFunction}) => {
    return (
        <div>
            {user.name}
            <button id="user-delete" onClick={() => onDelete(user.id)}>delete</button>
        </div>
    );
};

export default User;