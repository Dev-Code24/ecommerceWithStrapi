import { useState } from 'react';
import { InputBase, Box, Divider, Typography, IconButton } from '@mui/material';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h2">Subscribe to our NewsLetter</Typography>
      <Typography variant='h3'>
        and recieve a $20 coupon on you first order when you checkout
      </Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#F2F2F2"
      >
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
          }}
          placeholder="Enter E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider orientation="vertical" sx={{ height: 28, m: 0.5 }} />
        <Typography sx={{ p: '10px', ':hover': { cursor: 'pointer' } }}>
          Subscribe
        </Typography>
      </Box>
    </Box>
  );
};

export default Subscribe;
