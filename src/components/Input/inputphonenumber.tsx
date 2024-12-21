import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import MuiPhoneNumber from 'mui-phone-number';

export default function InputPhoneNumber(props: {
  handlechange: any;
  disableSubmit: boolean;
  value: string;
  handleSubmit: any;
  loading: boolean;
}) {
  return (
    <div>
      <Stack spacing={1}>
        <MuiPhoneNumber defaultCountry={"ke"} onChange={props.handlechange} onlyCountries={["ke"]} countryCodeEditable={false} value={props.value}/>
        <Button
          type="submit"
          color="primary"
          sx={{
            "&.MuiButton-colorPrimary": {
              backgroundColor: "#3B0764",
              "&:hover": {
                backgroundColor: "#581C87",
              },
            },
          }}
          disabled={props.disableSubmit}
          onClick={props.handleSubmit}
          loading={props.loading}
        >
          Submit
        </Button>
      </Stack>
    </div>
  );
}
