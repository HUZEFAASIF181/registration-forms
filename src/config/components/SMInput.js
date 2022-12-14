const { TextField } = require("@mui/material")


function SMInput(props) {
    const { label, onChange, value, type, disabled, required } = props;
    return (
        <TextField fullWidth={true} variant="standard" disabled={disabled} required={required} label={label} value={value} type={type} onChange={onChange} />
    );
}
export default SMInput;