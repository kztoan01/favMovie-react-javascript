
export default function Contact() {
    return (
        <>
            <div className="row">
                <h3>Contact Us</h3>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label for="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" />
                            <label for="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" className="validate" />
                            <label for="phone">Phone</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            Which is your favorite movie? 
                            <div className="input-field inline">
                                <input id="movie" type="text" className="validate" />
                                <label for="movie">Movie</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div></>
    )
}