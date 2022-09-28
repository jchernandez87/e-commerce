import { TextField, Grid } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <TextField onChange={onChange} fullWidth required label={label} />
        )}
      />
    </Grid>
  );
};

export default FormInput;
