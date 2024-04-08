import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import { getToken } from '../../utils/storage';
import { RegisterModal } from './register-modal';
import { LoginModal } from './login-modal';

export function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // bad
  const token = getToken();

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <AccountCircleIcon sx={{ color: '#fff' }} />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            border: '1px solid #eee',
            borderRadius: '8px',
            boxShadow: 14,
            p: 4,
          }}
        >
          <IconButton sx={{ position: 'absolute', top: 1, right: 1 }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          {token ? <LoginModal /> : <RegisterModal />}
        </Box>
      </Modal>
    </div>
  );
}
