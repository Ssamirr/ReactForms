import React from 'react'

function Header({ ShowForm, form, formSubmit }) {



    return (
        <>
            <div className='header-form'>
                {formSubmit ? (
                    <>
                        <h1>{form.name}</h1>
                        <h1>Welcome</h1>
                    </>
                )
                    : (
                        <>
                            <h1>User</h1>
                            <button onClick={ShowForm}>Log in</button>
                        </>
                    )}


            </div>
        </>
    )
}

export default Header