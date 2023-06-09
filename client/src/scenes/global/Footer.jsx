import { useTheme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { shades } from '../../theme';

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px,30px,40px)"
      >
        <Box width="clamp(20%,30%,40%)">
          <Typography
            variant="h3"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            ECOMMER
          </Typography>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            velit, sed, possimus expedita at ad reprehenderit maiores qui ut
            officiis dicta ex? Laboriosam modi voluptatibus molestiae, quos
            temporibus consectetur autem.
          </div>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
        </Box>
        <Box width="clamp(20%,30%,40%)">
          <Typography variant="h3" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px" variant="h4" fontWeight="bold">
            DLF Tower 3 , Sector 53 , near Golf Course road{' '}
          </Typography>
          <Typography mb="30px" variant="h4" fontWeight="bold">email: something@something.com</Typography>
          <Typography mb="30px" variant="h4" fontWeight="bold">(222)-333-4444</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
