import React from 'react'

function Form({ show, setShow, form, setForm, setFormSubmit }) {

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const showUser = (event) => {
        event.preventDefault();
        setShow(false);
        setFormSubmit(true);
    }



    return (
        <>
            <div style={{ display: show ? "flex" : "none" }} className='form-section'>
                <form onSubmit={showUser} method='POST' className='form'>
                    <input required value={form.name} name="name" onChange={handleChange} placeholder='User name' type="text" />
                    <input required value={form.email} name="email" onChange={handleChange} placeholder='Email' type="email" />
                    <input required value={form.password} name="password" onChange={handleChange} placeholder='Password' type="paswword" />
                    <button type='submit' >Log in</button>
                </form>
            </div>
        </>
    )
}

export default Form