import React from 'react'

export default class Contact extends React.Component {
    render() {
        return (
            <div className = 'container p-4 shadow my-4 theme'>
                <div>
                    <h2 className = 'mt-4'> Contact </h2>
                    <ul className = 'list-group list-unstyled'>
                        <li className = 'list-item'>email (preferred): aydan.gooneratne@gmail.com</li>
                        <li className = 'list-item'>school email: aydang@seas.upenn.edu</li>
                        <li className = 'list-item'>cell: 484-410-1856</li>
                    </ul>
                    <h2 className = 'mt-4'> Other Media </h2>
                    <ul className = 'list-group list-unstyled'>
                        <li className = 'list-item'><a href='https://www.github.com/aydangoon'>github</a></li>
                        <li className = 'list-item'><a href='https://www.linkedin.com/in/aydan-gooneratne-118b49178/'>linkedin</a></li>
                        <li className = 'list-item'><a href='https://www.codewars.com/users/aydang'>code wars</a></li>
                    </ul>
                    <h2 className = 'mt-4'> Resume </h2>
                    <a href={require('../assets/aydang_resume.pdf')}
                    target='_blank' rel="noopener noreferrer"><img className = 'icon'src={require('../assets/download.png')} alt='' />open</a>
                </div>
            </div>
        )
    }
}
