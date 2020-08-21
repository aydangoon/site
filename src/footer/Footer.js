import React from 'react'
import './Footer.scss'

export default class Footer extends React.Component {
    render() {
        return (
            <div className = 'container-fullwidth d-flex justify-content-center align-items-center' id='footer'>
                <div>Send me a message!</div>
                <div>
                    <form className = 'form-inline m-1' action='mailto:aydan.gooneratne@gmail.com' method='POST' encType='multipart-formdata'>
                        <button type="submit" value='Submit' className="btn btn-primary">send an email</button>
                    </form>
                </div>
            </div>
        )
    }
}
