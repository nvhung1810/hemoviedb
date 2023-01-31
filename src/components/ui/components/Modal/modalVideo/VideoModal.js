import React from 'react';
import ModalVideo from 'react-modal-video';
import './ModalVideo.scss';

// const cx = classNames.bind(styles);

function VideoModal({ isOpen, close, keyVideo }) {
    console.log(keyVideo);
    return (
        <div>
            <div className="wrapper">
                {keyVideo === '' ? (
                    ''
                ) : (
                    <ModalVideo chanel="youtube" isOpen={isOpen} videoId={keyVideo} onClose={close} />
                )}
            </div>
        </div>
    );
}

export default VideoModal;
