import {Box, outlinedInputClasses, styled, TextField, Typography} from "@mui/material";

export const StyledTypography = styled(Typography)`
  color: white;
  text-align: start;
`;
export const StyledBox = styled(Box)`
  background-color: black;
  height: 100vh;
  overflow-y: scroll;
  width: auto;
  display: flex;
  flex-direction: row;
  padding: 20px;
`;
export const StyledTextField = styled(TextField)`
  width: 40%;
  & .${outlinedInputClasses.root} {
    width: 100%;
    background-color: white;
  }
  & .${outlinedInputClasses.input} {
    background-color: white;
    border-radius: 5px;
  }
`;