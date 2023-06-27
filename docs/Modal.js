import React, { useState } from 'react';

// Component
import { Div, Button, Modal, Icon, Text } from '../src/index';

const TestModal = () => {
  const [showModal, setshowModal] = useState(false);

  return (
    <>
      <Button m={{ b: '1rem' }} onClick={() => setshowModal(true)}>
        Test modal
      </Button>
      <Modal
        isOpen={showModal}
        isCloseIcon={false}
        onClose={() => setshowModal(false)}
        m={{ y: '4rem', x: { xs: '1rem', lg: 'auto' } }}
        rounded='md'
      >
        <Div d='flex' m={{ b: '4rem' }}>
          <Icon
            name='AlertSolid'
            color='warning700'
            m={{ t: '0.35rem', r: '0.5rem' }}
          />
          <Text p={{ l: '0.5rem', t: '0.25rem' }} textSize='subheader'>
            Do you really want to submit the request.
          </Text>
        </Div>
        <Div d='flex' justify='flex-end'>
          <Button onClose={() => setshowModal(false)} m={{ r: '1rem' }}>
            Cancel
          </Button>
          <Button onClose={() => setshowModal(false)}>Yes, Submit</Button>
        </Div>
      </Modal>
    </>
  );
};

export default TestModal;
