import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';


export const ColorButton = styled(Button)(({ theme }) => ({
    color: 'white',
    marginRight: '10px',
    marginBottom: '10px',
    backgroundColor: 'var(--dark-default)',
    '&:hover': {
      backgroundColor: 'var(--dark-primary)',
    },
  }));