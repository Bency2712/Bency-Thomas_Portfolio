export default function Contact(){
    return(
        <section id="contact">
            <h2>Contact Me</h2>

            <div>
                {/* email */}
            <div className="box">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
            <a href="mailto:bencythomas6645@gmail.com">bencythomas6645@gmail.com</a>
            </div>
            {/* telephone */}
            <div className="box">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            <a href="tel:734-596-5814">734-596-5814</a>
            </div>
            <br />

            {/* location */}
            <div className="box">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
            <a href="https://www.google.com/maps/place/Ann+Arbor,+MI/@42.2733204,-83.7376894,12z/data=!3m1!4b1!4m6!3m5!1s0x883cb00dd4431f33:0xdb09f94686c8b5e2!8m2!3d42.2808256!4d-83.7430378!16zL20vMHdoMw?entry=ttu">Ann Arbor, Michigan</a>
            </div>
            </div>

        </section>
    )
}