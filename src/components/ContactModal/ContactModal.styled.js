import styled from 'styled-components';
export const customStyles = {
        overlay: {
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100vw',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(229, 227, 234, 0.8)',
              zIndex: '1200',        
},
        content: {
            top: '50%', 
            left: '50%', 
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)', 
            padding: '0', 
            border: 'none', 
            maxWidth: 'calc(100vw - 48px)',
            maxHeight: 'calc(100vh - 24px)',
            overflow: 'hidden',
        },
};

export const ModalContainer = styled.div`
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 20px;
`
    
