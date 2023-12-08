import { Chip } from '@mui/material';
import '../App.css';

function SkillChip({ name, search, props}) {
    return (
        <Chip 
            label={name} 
            className={typeof(search) !== 'undefined' && search != null ? "searchSkill" : "skill"} 
            style={{backgroundColor:'var(--dark-secondary)',
                    fontSize: '1em', 
                    color: 'var(--background-highlight)',
                    fontWeight: 400, 
                    boxShadow: '0 3px 3px rgb(0 0 0 / 0.2)'}} 
            {...props}
        />
      );
}

export default SkillChip;