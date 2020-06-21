/* eslint-disable no-use-before-define */
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
        '& > * + *': {
            marginTop: theme.spacing(3),
        },
    },
}));

export default function Tags({ options, handleChange }) {
    const classes = useStyles();

    return (
        <div style={{ margin: '1rem 0 0 1rem' }} className={classes.root}>
            <Autocomplete
                multiple
                id="tags-outlined"
                options={options}
                getOptionLabel={(option) => option}
                defaultValue={[]}
                filterSelectedOptions
                onChange={(e, newValue) => {
                    handleChange(newValue);
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        label="Languages"
                        placeholder="Type a language and pick it to get started..."
                    />
                )}
            />
        </div>
    );
}
