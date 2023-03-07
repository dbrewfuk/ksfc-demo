import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import contacts from "/src/contacts";

function ProgramFinder() {
  const [programs, setPrograms] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [collegeName, setCollegeName] = useState("");
  const [programSector, setProgramSector] = useState("");
  const [colleges, setColleges] = useState([]);
  const [programSectors, setProgramSectors] = useState([]);
  const [programsPerPage, setProgramsPerPage] = useState(10);

  useEffect(() => {
    // Fetch the list of colleges on mount
    const fetchColleges = async () => {
      const url = "https://wrky-api.kctcsweb.com/api/programs/colleges";
      const response = await fetch(url);
      const data = await response.json();
      setColleges(data);
    };
    fetchColleges();
  }, []);

  useEffect(() => {
    // Fetch the list of program sectors based on college name
    const fetchProgramSectors = async () => {
      if (!collegeName) {
        setProgramSectors([]);
        return;
      }
      const url = `https://wrky-api.kctcsweb.com/api/programs/program-sectors?college=${encodeURIComponent(
        collegeName
      )}`;
      const response = await fetch(url);
      const data = await response.json();
      setProgramSectors(data);
      setProgramSector("");
      setPrograms([]);
      setPageNumber(1);
    };
    fetchProgramSectors();
  }, [collegeName]);

  // Create a function to fetch programs based on page number, college name, and program sector
  const fetchPrograms = async (
    page,
    collegeName,
    programSector,
    limit = 10
  ) => {
    const collegeParam = encodeURIComponent(collegeName);
    const sectorParam = encodeURIComponent(programSector);
    const url = `https://wrky-api.kctcsweb.com/api/programs/search?page=${page}&college=${collegeParam}&program_sector=${sectorParam}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  };

  const handleProgramClick = (programName) => {
    // do something with the program name, e.g. update state
    console.log(`Clicked program: ${programName}`);
  };

  // Fetch initial programs on mount and when college or program sector changes
  useEffect(() => {
    const fetchInitialPrograms = async () => {
      const initialPrograms = await fetchPrograms(
        1,
        collegeName,
        programSector
      );
      setPrograms(initialPrograms);
    };
    fetchInitialPrograms();
    setPageNumber(1);
  }, [collegeName, programSector]);

  const handleNextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const handleCollegeChange = (event) => {
    setCollegeName(event.target.value);
  };

  const handleProgramSectorChange = (sector) => {
    setProgramSector(sector);
  };

  const handleLoadMore = async () => {
    const nextPage = pageNumber + 1;
    const additionalPrograms = await fetchPrograms(
      nextPage,
      collegeName,
      programSector,
      programsPerPage
    );
    setPrograms([...programs, ...additionalPrograms]);
    setPageNumber(nextPage);
  };

  return (
    <>
      <Box sx={{ minWidth: 220, marginBottom: 6 }}>
        <FormControl fullWidth>
          <InputLabel id="college-select-label">Select a College</InputLabel>
          <Select
            labelId="college-select-label"
            id="college-select"
            value={collegeName}
            label="Select a College"
            onChange={handleCollegeChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {colleges.map((college) => (
              <MenuItem key={college} value={college}>
                {college}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {programSectors.length > 0 && (
        <Box sx={{ marginBottom: 6 }}>
          <FormControl fullWidth>
            <InputLabel id="program-sector-select-label">
              Select a Program Sector
            </InputLabel>
            <Select
              labelId="program-sector-select-label"
              id="program-sector-select"
              value={programSector}
              label="Select a Program Sector"
              onChange={(event) =>
                handleProgramSectorChange(event.target.value)
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {programSectors.map((sector) => (
                <MenuItem key={sector} value={sector}>
                  {sector}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}

      {programs.map((program) => (
        <div key={program.id} className="ap-card">
          <h3 onClick={() => handleProgramClick(program.program)}>
            {program.program}
          </h3>

          <p>{program.credential}</p>
          {contacts.map((contact) => {
            if (contact.college === program.college) {
              return (
                <div key={contact.id}>
                  <p>{contact.name}</p>
                  <p>{contact.email}</p>
                  <p>{contact.phone}</p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      ))}

      {programs.length > 0 && (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
          <Button variant="outlined" onClick={handleLoadMore}>
            Load More
          </Button>
        </Box>
      )}
    </>
  );
}

export default ProgramFinder;
