import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

export default function CheckboxesGroup({ options, current, handleChange, title }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">{title}</FormLabel>
                <FormGroup>
                    {options.map(opt => {
                        return (
                            <FormControlLabel
                                key={opt}
                                control={
                                    <Checkbox
                                        checked={current.includes(opt)}
                                        onChange={() => handleChange(opt)}
                                        name={opt}
                                    />
                                }
                                label={opt}
                            />
                        )
                    })}
                </FormGroup>
            </FormControl>
        </div>
    );
}
