import { useEffect, React, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/userReducer";
import { StyledTableCell } from "../tools/Theme";
import { StyledTableRow } from "../tools/Theme";

const DataTable = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [checkBoxValue, setCheckBoxValue] = useState("");
  const data = useSelector((state) => state.userValue.data.items);

  useEffect(() => {
    setUserData(data);
  }, [data]);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    if (checkBoxValue == "Type_0") {
      const data = userData.filter((item) => item.type === 0);
      setUserData(data);
    }
    if (checkBoxValue == "Type_1") {
      const data = userData.filter((item) => item.type === 1);
      setUserData(data);
    }
    if (checkBoxValue == "Type_2") {
      const data = userData.filter((item) => item.type === 0);
      setUserData(data);
    }
    if (checkBoxValue == "Type_3") {
      const data = userData.filter((item) => item.type === 1);
      setUserData(data);
    }
    if (checkBoxValue == "Type_4") {
      const data = userData.filter((item) => item.type === 1);
      setUserData(data);
    }
  }, [checkBoxValue]);

  const TYPE_COLORS = {
    0: "#48BEFF",
    1: "#3DFAFF",
    2: "#43C59E",
    3: "#3D7068",
    4: "#14453D",
  };

  const [state, setState] = useState({
    All: true,
    Type_0: false,
    Type_1: false,
    Type_2: false,
    Type_3: false,
    Type_4: false,
  });

  const handleChange = (event) => {
    const value = event.target.name;
    setCheckBoxValue(value);
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    if (value === "All") {
      setUserData(data);
    }
  };
  const { All, Type_0, Type_1, Type_2, Type_3, Type_4 } = state;
  const error =
    [All, Type_0, Type_1, Type_2, Type_3, Type_4].filter((v) => v).length !== 2;

  return (
    <Box>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        marginTop={15}
      >
        <Grid item xs={9}>
          <Box sx={{ display: "flex" }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend">Filter</FormLabel>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={All}
                      onChange={handleChange}
                      name="All"
                    />
                  }
                  label="All"
                />
                <FormControlLabel
                  style={{ borderBlockEnd: "5px solid #48BEFF" }}
                  control={
                    <Checkbox
                      checked={Type_0}
                      onChange={handleChange}
                      name="Type_0"
                    />
                  }
                  label="Type 0"
                />
                <FormControlLabel
                  style={{ borderBlockEnd: "5px solid #3DFAFF" }}
                  control={
                    <Checkbox
                      checked={Type_1}
                      onChange={handleChange}
                      name="Type_1"
                    />
                  }
                  label="Type 1"
                />
                <FormControlLabel
                  style={{ borderBlockEnd: "5px solid #43C59E" }}
                  control={
                    <Checkbox
                      checked={Type_2}
                      onChange={handleChange}
                      name="Type_2"
                    />
                  }
                  label="Type 2"
                />
                <FormControlLabel
                  style={{ borderBlockEnd: "5px solid #3D7068" }}
                  control={
                    <Checkbox
                      checked={Type_3}
                      onChange={handleChange}
                      name="Type_3"
                    />
                  }
                  label="Type 3"
                />
                <FormControlLabel
                  style={{ borderBlockEnd: "5px solid #14453D" }}
                  control={
                    <Checkbox
                      checked={Type_4}
                      onChange={handleChange}
                      name="Type_4"
                    />
                  }
                  label="Type 4"
                />
              </FormGroup>
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <TableContainer component={Paper}>
            <Table sx={{}} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Number</StyledTableCell>
                  <StyledTableCell align="right">Email</StyledTableCell>
                  <StyledTableCell align="right">Name</StyledTableCell>
                  <StyledTableCell align="right">Wallet-1</StyledTableCell>
                  <StyledTableCell align="right">Wallet-2</StyledTableCell>
                  <StyledTableCell align="right">Wallet-3</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData &&
                  userData.map((item) => (
                    <StyledTableRow key={item.index}>
                      <StyledTableCell
                        style={{ backgroundColor: TYPE_COLORS[item.type] }}
                        component="th"
                        scope="row"
                      >
                        {item.index}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.email}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.fullName}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.wallet1}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.wallet2}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.wallet3}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DataTable;
