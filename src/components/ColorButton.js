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
    boxShadow: '0 3px 3px rgb(0 0 0 / 0.2)'
}));

export const HighlightButton = styled(Button)(({ theme }) => ({
  color: 'white',
  marginRight: '10px',
  marginBottom: '10px',
  backgroundColor: 'var(--color-primary)',
  '&:hover': {
    backgroundColor: 'var(--color-secondary)',
  },
  boxShadow: '0 3px 3px rgb(0 0 0 / 0.2)'
}));