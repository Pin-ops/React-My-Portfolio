import React from 'react'
import {Link} from 'react-router-dom'
function ErrorPage404() {
    return (
        <div>
            <h1>404 - PAGE NOT FOUND</h1>
            <Link to="/">Back to HomePage</Link>
        </div>
    )
}

export default ErrorPage404
