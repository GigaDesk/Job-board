import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import MuiPhoneNumber from 'mui-phone-number';

export default function InputPhoneNumber(props: {
  handlechange: any;
  disableSubmit: boolean;
}) {
  return (
    <div>
      <Stack spacing={1}>
        <MuiPhoneNumber defaultCountry={"ke"} onChange={props.handlechange} onlyCountries={["ke"]} countryCodeEditable={false}/>
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
        >
          Submit
        </Button>
      </Stack>
    </div>
  );
}
