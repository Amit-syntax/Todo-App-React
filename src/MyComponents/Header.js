import React from 'react'
import protoTypes from 'prop-types'

export default function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                </div>
            </nav>
        </>
    )
}


Header.defaultProps = {
    title: 'Default Master Tasks'
}

Header.protoTypes = {
    title: protoTypes.string.isRequired
}