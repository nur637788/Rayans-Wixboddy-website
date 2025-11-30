import React from 'react'

function Footer() {
    return (
        <footer className="footer  bg-base-200 text-base-content px-10 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between">
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <form className=''>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="w-80">
                    <label>Enter your email address</label>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item bg-white text-black" />
                        <button className="btn btn-primary join-item">Send</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    )
}

export default Footer
