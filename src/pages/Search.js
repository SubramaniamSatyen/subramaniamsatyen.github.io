import '../App.css';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles';
import SkillChip from '../components/SkillChip';
import PostTimeline from '../components/Timeline';
import React, { useState } from 'react';
import dayjs from 'dayjs';

import { POSTS, PRESENT_DATE } from '../constants';

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
  },
  borderTop: '0.5px solid #252e3c',

}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
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

const CssDatePicker = styled(DatePicker)({
  marginTop: '5px',
  backgroundColor: 'var(--background-tertiary)',
  color:'white', 
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
    const [startValue, setStartValue] = React.useState(dayjs(Math.min(...POSTS.map(p => p.start))));
    const [endValue, setEndValue] = React.useState(dayjs());

    const skills = [...new Set(POSTS.map(post => Object.values(post.skills).flat()).flat())].map((skill, i) => ({'label': skill, 'id': i}))

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
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ 'color': 'white'}} />}>
                    <div className="searchDropdown">Date Filter</div>
                  </AccordionSummary> 
                  <AccordionDetails>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <div className='dateFilterHeader'>
                      <CssDatePicker 
                        label={'Start Date'} 
                        value={startValue}
                        sx={{ input: { fontSize: '1em', fontWeight: '400', fontFamily: "Segoe UI", color: 'white' }, svg: { color: 'white' }, width: '28vw' }}
                        onChange={(newValue) => setStartValue(newValue)}
                        views={['year', 'month']} 
                        maxDate={dayjs(endValue)}
                      />
                      <CssDatePicker 
                        value={endValue}
                        sx={{ input: { fontSize: '1em', fontWeight: '400', fontFamily: "Segoe UI", color: 'white' }, svg: { color: 'white' }, width: '28vw' }}
                        onChange={(newValue) => setEndValue(newValue)}
                        label={'End Date'}
                        views={['year', 'month']}
                        maxDate={dayjs()}
                      />
                      </div>
                    </LocalizationProvider>
                  </AccordionDetails>
                </Accordion>
            </div>

            {/* <h1 className='leftAlign title'>Search Results</h1> */}
            {<PostTimeline posts={skillFilters.length > 0 && keywordSearch.length > 0
                                  ? POSTS.filter(post => (post.end <= endValue || (post.end === PRESENT_DATE && endValue.month() === dayjs().month() && endValue.year() === dayjs().year())) && post.start >= startValue)
                                         .filter(post => Object.values(post.skills).flat().filter(skill => skillFilters.map(sf => sf.label).includes(skill)).length > 0)
                                         .filter(post => keywordSearch.split(' ').filter(word => word.length > 0 && String(post.blurb).toLowerCase().includes(word)).length > 0 || 
                                                keywordSearch.split(' ').filter(word => word.length > 0 && (typeof(post.accomplishments) !== 'undefined' ? post.accomplishments.join(' ').toLowerCase().includes(word) : false)).length > 0)
                                  : (skillFilters.length > 0 
                                  ? POSTS.filter(post => (post.end <= endValue || (post.end === PRESENT_DATE && endValue.month() === dayjs().month() && endValue.year() === dayjs().year())) && post.start >= startValue)
                                         .filter(post => Object.values(post.skills).flat().filter(skill => skillFilters.map(sf => sf.label).includes(skill)).length > 0)
                                  : (keywordSearch.length > 0 
                                  ? POSTS.filter(post => (post.end <= endValue || (post.end === PRESENT_DATE && endValue.month() === dayjs().month() && endValue.year() === dayjs().year())) && post.start >= startValue)
                                         .filter(post => keywordSearch.split(' ').filter(word => word.length > 0 && String(post.blurb).toLowerCase().includes(word)).length > 0 ||
                                                keywordSearch.split(' ').filter(word => word.length > 0 && (typeof(post.accomplishments) !== 'undefined' ? post.accomplishments.join(' ').toLowerCase().includes(word) : false)).length > 0)
                                  : POSTS.filter(post => (post.end <= endValue || (post.end === PRESENT_DATE && endValue.month() === dayjs().month() && endValue.year() === dayjs().year())) && post.start >= startValue)))} dimensions={dimensions} />}
        </div>
    );
}

export default Search;
