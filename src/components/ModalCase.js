export default function ModalCase({setIsOpen, thisfilm}){
    return(
        <div className='modal-show' onClick={() => setIsOpen(false)}>
            <div id="modal1" className="modal" style={{display :'block',top:'35%'}}>
                <div className="modal-content">
                    <h4>Video for {thisfilm.title}</h4>
                    <p><iframe width="100%" height="400px" src={thisfilm.clip} title={thisfilm.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
                </div>
                <div className="modal-footer">
                    <a className="modal-close red-text">Close</a>
                </div>
            </div>


        </div>
    )
}