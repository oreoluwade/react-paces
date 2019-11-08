import React, { useRef, useContext, useEffect } from 'react';
import { FirebaseContext } from '../firebase';
import './home.scss';

function Homepage() {
    const inputRef = useRef(null);
    const { users } = useContext(FirebaseContext);

    const fetchUsers = () => {
        users().on('value', snapshot => {
            const usersObject = snapshot.val();
            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key
            }));

            console.log(usersList);
        });
    };

    useEffect(() => {
        fetchUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="root">
            I am looking for...
            <input type="text" className="search-bar" ref={inputRef} />
        </div>
    );
}

export default Homepage;
