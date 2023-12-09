import '../App.css';
import Autocomplete, {autocompleteClasses} from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';

import SkillChip from '../components/SkillChip';
import PostTimeline from '../components/Timeline';
import React, { useState } from 'react';


import { POSTS } from '../constants';

const CSSAutocomplete = styled((props) => (
  <Autocomplete {...props}/>
))(({ theme }) => ({
  color:'white', 
  borderColor: 'var(--dark-disabled)',
}));

const Accordion = styled((props) => (
    <MuiAccordion disableGutters {...props} />
  ))(({ theme }) => ({
    backgroundColor: 'var(--background-secondary)',
    '& .MuiAutocomplete-root': {
      '& fieldset': {
        borderColor: 'var(--dark-disabled)',
      },
      '&:hover fieldset': {
        borderColor: 'var(--dark-disabled)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'var(--dark-disabled)',
      },
    },
    "& + .MuiAutocomplete-popper .MuiAutocomplete-option": 
      {
        backgroundColor: "#363636",
      }
    // '& .MuiAutocomplete-listbox': {
    //   bgColor: 'black',

    //   '& .MuiAutocomplete-option': {
    //     bgColor: 'black',
    //   },
    // }
  }));
  
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  backgroundColor: 'var(--background-tertiary)'
}));

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'var(--dark-disabled)',
  },
  '& label': {
    color: 'var(--dark-disabled)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'var(--dark-disabled)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'var(--dark-disabled)',
    },
    '&:hover fieldset': {
      borderColor: 'var(--dark-disabled)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--dark-disabled)',
    },
  },
});
  

function Search({ dimensions }) {
    const [skillFilters, setSkillFilters] = useState([]);
    const [keywordSearch, setKeywordSearch] = useState("");
    console.log(keywordSearch);
    
    const skills = [...new Set(POSTS.map(post => post.skills).flat())].map((skill, i) => ({'label': skill, 'id': i}))
    
    return (
        <div className="App application">
            <h1 className='leftAlign title'>Search</h1>
            <div className='searchHeader'>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ 'color': 'white'}} />}>
                        <div className="searchDropdown">Filter by Skills</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CSSAutocomplete
                            multiple
                            className='searchHeaderRow'
                            options={skills}
                            getOptionLabel={(skill) =>  skill.label}
                            onChange={(event, value) => setSkillFilters(value)}
                            filterSelectedOptions
                            renderTags={(value, getTagProps) =>
                                value.map((option, index) => (
                                    <SkillChip search={true} name={option.label} props={getTagProps({ index })} />
                                ))
                            }
                            renderInput={(params) => (
                            <TextField
                                sx={{ input: { fontSize: '1em', fontWeight: '400', fontFamily: "Segoe UI", color: 'white' } }}
                                {...params}
                                placeholder="Filter Skills"
                            />
                            )}
                        />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ 'color': 'white'}}  />}>
                      <div className="searchDropdown">Keyword Filter</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CssTextField
                            label="Search Filter"
                            sx={{ input: { fontSize: '1em', fontWeight: '400', fontFamily: "Segoe UI", color: 'white' }, width: '100%' }}
                            InputProps={{
                            endAdornment: <InputAdornment position="start"><SearchIcon sx={{ color: 'white'}}/></InputAdornment>,
                            }}
                            className='searchHeaderRow'
                            onChange={(event) => setKeywordSearch(event.target.value.toLowerCase())}
                            value={keywordSearch}
                        />
                    </AccordionDetails>
                </Accordion>
            </div>

            {/* <h1 className='leftAlign title'>Search Results</h1> */}
            {<PostTimeline posts={skillFilters.length > 0 && keywordSearch.length > 0
                                  ? POSTS.filter(post => post.skills.filter(skill => skillFilters.map(sf => sf.label).includes(skill)).length > 0)
                                         .filter(post => keywordSearch.split(' ').filter(word => post.blurb.toLowerCase().includes(word)).length > 0 || 
                                                keywordSearch.split(' ').filter(word => (typeof(post.accomplishments) !== 'undefined' ? post.accomplishments.join(' ').toLowerCase().includes(word) : false)).length > 0)
                                  : (skillFilters.length > 0 
                                  ? POSTS.filter(post => post.skills.filter(skill => skillFilters.map(sf => sf.label).includes(skill)).length > 0)
                                  : (keywordSearch.length > 0 
                                  ? POSTS.filter(post => keywordSearch.split(' ').filter(word => post.blurb.toLowerCase().includes(word)).length > 0 ||
                                                keywordSearch.split(' ').filter(word => (typeof(post.accomplishments) !== 'undefined' ? post.accomplishments.join(' ').toLowerCase().includes(word) : false)).length > 0)
                                  : POSTS))} dimensions={dimensions} />}
        </div>
    );
}

export default Search;
