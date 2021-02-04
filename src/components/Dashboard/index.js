import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'
import app from 'firebase/app'

function Dashboard(props) {

    const auth = app.auth()

    const [user, setUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged(function(user) {
            if (user) {
            // User is signed in.
                setUser(auth.currentUser)
            } else {
            // No user is signed in.
                props.history.push('/')
            }
        })
    })

    return(
        <div>
            <h1>Dashboard component</h1>
            <h3>Ruta protegida</h3>

            {
                user && (
                    <p>{user.displayName}</p>
                )
            }

        </div>
    )
}

export default Dashboard /*we export to access other files.*/
