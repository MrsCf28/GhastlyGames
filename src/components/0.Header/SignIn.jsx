import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export default function SignIn() {
    const { user, setUser } = useContext(UserContext);

    function signIn() {
        const newUser = { ...user}
        newUser.name = user.name;
        newUser.signedIn = !user.signedIn;
        newUser.avatar_url = user.avatar_url
        setUser(newUser);
    }

    return (
        <button
            onClick={signIn}
            className={`button_${user.signedIn} signInButton`}
        >
            {user.signedIn && <img src={user.avatar_url} alt={`${user.name}'s avatar`} className="avatar"></img>}
            {!user.signedIn && <>Sign In</>}
        </button>
    );
}
