import React, { useEffect } from 'react';

//transition
import { Transition } from 'react-transition-group';

//component
import Icon from '../icon/Icon';
import Div from '../div/Div';

//const
import { MODAL_DURATION } from '../../core/Constant';

/**
 * Default Style for Backlayer
 */
const defaultbackLayerStyle = {
  transition: `opacity ${MODAL_DURATION}ms ease-in-out`,
  opacity: 0,
};

/**
 * Trasition Styles for Backlayer
 */
const backLayerTransitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 0.4 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

/**
 * Default Style for ModalContent
 */
const defaultModalContentStyle = {
  transition: `opacity ${MODAL_DURATION}ms ease-in-out`,
  opacity: 0,
  overflowY: 'auto',
  overflowX: 'hidden',
};

/**
 * Trasition Styles for ModalContent
 */
const transitionModalContentStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Modal = ({
  onEntering,
  onExiting,
  children,
  isOpen,
  onClose,
  align,
  isCloseIcon,
  ...rest
}) => {
  useEffect(() => {
    return () => {
      // Anything in here is fired on component unmount.
      document.querySelector('body').style.overflow = 'auto';
    };
  }, []);

  /**
   * Disable the body scroll when Opened
   */
  const disableBodyScroll = () => {
    document.querySelector('body').style.overflow = 'hidden';

    if (onEntering) onEntering();
  };

  /**
   * Enable the body scroll when Closed
   */
  const enableBodyScroll = () => {
    document.querySelector('body').style.overflow = 'auto';

    // Start Function if recieved a onExiting Props
    if (onExiting) onExiting();
  };

  return (
    <Transition
      in={isOpen}
      timeout={MODAL_DURATION}
      onEntering={disableBodyScroll}
      onExiting={enableBodyScroll}
      unmountOnExit
    >
      {(state) => (
        <>
          <Div
            style={{
              ...defaultbackLayerStyle,
              ...backLayerTransitionStyles[state],
            }}
            pos='fixed'
            top='0'
            left='0'
            right='0'
            bottom='0'
            bg='rgba(0, 0, 0, 0.25)'
            opacity='0.4'
            zIndex='1000'
          />
          <Div
            style={{
              ...defaultModalContentStyle,
              ...transitionModalContentStyles[state],
            }}
            onClick={onClose}
            tabIndex='-1'
            pos='fixed'
            top='0'
            left='0'
            right='0'
            h='100vh'
            d='flex'
            align={align}
            justify='center'
            zIndex='1001'
            cursor='pointer'
          >
            <Div
              onClick={(e) => {
                e.stopPropagation();
              }}
              bg='white'
              {...rest}
              zIndex='1'
            >
              {isCloseIcon && (
                <Icon
                  name='Cross'
                  pos='absolute'
                  top='1rem'
                  right='1rem'
                  size='24px'
                  onClick={onClose}
                  cursor='pointer'
                />
              )}

              {children}
            </Div>
          </Div>
        </>
      )}
    </Transition>
  );
};

Modal.defaultProps = {
  m: { y: { xs: '1rem', lg: '2rem' }, x: { xs: '1rem', lg: 'auto' } },
  p: '2rem',
  maxW: '32rem',
  w: '100%',
  pos: 'relative',
  shadow: '4',
  cursor: 'default',
  align: 'start',
  onClose: () => {},
  isCloseIcon: true,
};

export default Modal;
