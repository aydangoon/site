import React from 'react'
import $ from 'jquery';

export function makeProjectCard(src = '', title = 'title', desc = 'desc', href='#', hrefDesc='link description', tags = ['sample tag'], modalName = 'bonk', longDesc = '') {
    let imgsrc = ''
    try {
        imgsrc = require('../assets/' + src)
    } catch (e) {
        console.log('image loading error:', e.message)
    }
    return (
        <div className="card m-2 p-1 text-center grow-hover theme" style={{width: '18rem'}}>
            <img src={imgsrc} className="card-img-top rounded" alt='' />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="card-text">{desc}</div>
                <div><a href={href} className="btn btn-primary mt-2">{hrefDesc}</a></div>
                <button type="button" class="btn btn-primary mt-2"
                    data-toggle="modal" data-target={'#'+modalName}
                    onClick={() => {
                        $('#'+modalName).appendTo("body")
                    }}>
                    learn more
                </button>
                <InfoModal title={title} desc={longDesc} name={modalName} />
                <div className='row mt-3 tag-list'>
                    {tags.map((tag, i) => {
                        return <div className = 'col-sm-auto border rounded tag mr-2 mb-1' key={i}>{tag}</div>
                    })}
                </div>
            </div>
        </div>
    )
}
export class InfoModal extends React.Component {
    render() {
        return (
            <div className="modal fade" id={this.props.name} tabindex="-1" role="document" aria-labelledby={this.props.name + 'Label'} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content theme">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.props.title}</h5>
                            <button type="button" className ="close theme" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">{this.props.desc}</div>
                    </div>
                </div>
            </div>
        )
    }
}
export function makeVideoCard(link='', title = 'title', desc = 'desc', hrefDesc = 'see on youtube') {
    const embeded = 'https://www.youtube.com/embed/' + link
    const hrefLink = 'https://www.youtube.com/watch?v=' + link
    return (
        <div className="card m-2 p-1 text-center grow-hover theme" style={{width: '18rem'}}>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={embeded} allowFullScreen sameSite='None'title={title}></iframe>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="card-text">{desc}</div>
                <a href={hrefLink} className="btn btn-vid">{hrefDesc}</a>
            </div>
        </div>
    )
}
