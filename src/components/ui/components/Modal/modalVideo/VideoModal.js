import React from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function VideoModal({ isOpen, close, keyVideo }) {
    return (
        <div>
            <div className={cx('wrapper')}>
                <ModalVideo chanel="youtube" isOpen={isOpen} videoId={keyVideo} onClose={close} />
            </div>
        </div>
    );
}

export default VideoModal;
