import { useEffect, useState } from 'react';
import User from './User';
import { IUser } from '../users/Users';

const UsersForTest = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                setTimeout(() => {
                    setUsers(json);
                    setIsLoading(false);
                }, 1000);
            });
    }, []);

    const onDelete = (id: string) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div>
            {isLoading && <h1 id="users-loading">Идет загрузка...</h1>}
            {users.length && (
                <div id="users-list">
                    {users.map((user) => (
                        <User key={user.id} onDelete={onDelete} user={user} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default UsersForTest;
