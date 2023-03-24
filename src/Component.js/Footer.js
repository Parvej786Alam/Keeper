import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="footer">
                <small>Copyright &copy; {year}</small>
            </footer>
        </>
    )
}

export default Footer
