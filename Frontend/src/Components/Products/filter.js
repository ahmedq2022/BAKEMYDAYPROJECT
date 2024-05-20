import { Box } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
const Filter = () => {
  const [product, setproduct] = React.useState("");

  const handleChange = event => {
    setproduct(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <FormControl sx={{ m: 1, width: "50%" }} size="small">
        <InputLabel id="demo-select-small-label">Sort By Price</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={product}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Under 1000</MenuItem>
          <MenuItem value={20}>Between 500 to 1000</MenuItem>
          <MenuItem value={30}>Between 100 to 500</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: "50%" }} size="small">
        <InputLabel id="demo-select-small-label">Sort By Category</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={product}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Cakes">Cakes</MenuItem>
          <MenuItem value="Pastry">Pastry</MenuItem>
          <MenuItem value="Donuts">Donuts</MenuItem>
          <MenuItem value="Cupcakes">Cupcakes</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
