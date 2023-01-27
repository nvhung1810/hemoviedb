import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
//** { to: link nội bộ, href: link bên ngoài, onClick: sự kiện onClick } */
// to: link nội bộ, href: link bên ngoài
function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    big = false,
    text = false,
    rounded = false,
    disabled = false,
    borderWhite = false,
    borderColorPrimaryDark = false,
    borderColorPrimaryLight = false,
    children,
    onClick,
    className,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Compo = 'button';
    const _props = {
        onClick,
        ...passProps,
    };

    // remove btn khi đc ẩn
    if (disabled) {
        Object.keys(_props).forEach((key) => {
            if (key.startsWith('on') && typeof _props[key] === 'function') {
                delete _props[key];
            }
        });
    }

    if (to) {
        _props.to = to;
        Compo = Link;
    } else if (href) {
        _props.href = href;
        Compo = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        big,
        text,
        disabled,
        rounded,
        borderWhite,
        borderColorPrimaryDark,
        borderColorPrimaryLight,
        [className]: className,
    });

    return (
        <Compo className={classes} {..._props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon ')}>{rightIcon}</span>}
        </Compo>
    );
}

export default Button;
