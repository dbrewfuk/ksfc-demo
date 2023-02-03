import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { programs } from "../assets/data.js";



const AcademicProgramsCard = () => {
  const [filteredPrograms, setFilteredPrograms] = useState(programs);
  const [filter, setFilter] = useState({
    college: "",
    program: "",
    academicArea: ""
  });

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleClearAll = () => {
    setFilter({
      college: "",
      program: "",
      academicArea: ""
    });
  };

  const isFilterApplied = () => {
    return (
      filter.college !== "" ||
      filter.program !== "" ||
      filter.academicArea !== ""
    );
  };

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    setOpen(false);
  };

  useEffect(() => {
    setFilteredPrograms(
      programs.filter(
        (program) =>
          program.college
            .toLowerCase()
            .includes(filter.college.toLowerCase()) &&
          program.program
            .toLowerCase()
            .includes(filter.program.toLowerCase()) &&
          program.academicArea
            .toLowerCase()
            .includes(filter.academicArea.toLowerCase())
      )
    );
  }, [filter, programs]);

    useEffect(() => {
    fetch("https://wrky-api.kctcsweb.com/api/programs/search")
      .then((res) => res.json())
      .then((res) => {
      console.log(res);
      // setFilteredPrograms(res.json().data);
    });
  }, []);


  return (
    <>
      <form>
        <div className="ap-filters-list">
          <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">College</InputLabel>
              <Select
                id="college"
                name="college"
                label="College"
                value={filter.college}
                onChange={handleFilterChange}
                displayEmpty
              >
                {[...new Set(programs.map((p) => p.college))].map((college) => (
                  <MenuItem key={college} value={college}>
                    {college}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Area</InputLabel>

              <Select
                id="academicArea"
                name="academicArea"
                label="Area"
                value={filter.academicArea}
                onChange={handleFilterChange}
                displayEmpty
              >
                {[...new Set(programs.map((p) => p.academicArea))].map(
                  (academicArea) => (
                    <MenuItem key={academicArea} value={academicArea}>
                      {academicArea}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Program</InputLabel>
              <Select
                id="program"
                name="program"
                label="Program"
                value={filter.program}
                onChange={handleFilterChange}
                displayEmpty
              >
                {[...new Set(programs.map((p) => p.program))].map((program) => (
                  <MenuItem key={program} value={program}>
                    {program}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="clear-filter-wrapper">
          <Box sx={{}}>
            {isFilterApplied() && (
              <Button variant="outlined" onClick={handleClearAll}>
                Clear filters
              </Button>
            )}
          </Box>
        </div>
      </form>

      <br />

      <div className="ap-card-list">
        {filteredPrograms.map((program) => (
          <div className="ap-card" key={program.id}>
            <h3>{program.program}</h3>
            <p>College: {program.college}</p>
            <p>Academic Area: {program.academicArea}</p>
            <p>
              Contact Person: {program.contactPerson} <br />
              Title: {program.contactTitle}
            </p>
            <p>Contact Phone: {program.contactPhoneNumber}</p>
            <p>Contact Email: {program.contactEmail}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AcademicProgramsCard;
