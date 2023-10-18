import { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, TextField } from "@mui/material"
import Header from "../components/Header"
import { Typography } from '@mui/material';
import { Backdrop } from '@mui/material';



export default function Demo_view() {

    const [selectedType, setSelectedType] = useState("StartDate");
    const [selectedType2, setSelectedType2] = useState<string>("StartDate");

    const handleChange = (event: SelectChangeEvent<string>) => {
        setSelectedType(event.target?.value);
    };

    const handleChange2 = (event: SelectChangeEvent<string>) => {
        setSelectedType2(event.target?.value);
    };


    return (
        <Box className="h-full w-full  absolute bg-black bg-opacity-5">
   
            <Header />

            {/* <Box className='p-5 relative z-10 mt-20'> */}
            <Box
                  sx={{
                  padding: 5,
                  position: 'relative',
                  zIndex: 10,
                  marginTop: 20,}}
             >
                
                <Typography variant='h4' align='center' fontWeight="bold" color="textPrimary">
                  Start a new Gantt Chart
                </Typography>
               
            </Box>

            <main className="">
                <Box width='75%' mx='auto'>

                    <TextField fullWidth={true }
                    id="outlined-basic" 
                    label="Title" 
                    variant="outlined" 
                    placeholder="Enter something..." />

                </Box>





                
                
                <Box
                sx={{
                width: '75%', // Equivalent to "w-9/12"
                margin: '0 auto', // Equivalent to "mx-auto"
                display: 'flex',
                justifyContent: 'center',
                marginTop: 5, // Equivalent to "mt-5"
                position: 'relative',
                }} >
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Gantt Chart Type</InputLabel>
                        <Select
                            labelId="GanttChartType"
                            id="GanttChartType"
                            value={selectedType}
                            label="Gantt Chart Type"
                            onChange={handleChange}
                        >

                            <MenuItem value={"StartDate"}>Start Date</MenuItem>
                            <MenuItem value={"FinishDate"}>Finish Date</MenuItem>
                            <MenuItem value={"EstimatedHours"}>Estimated hours</MenuItem>
                        </Select>
                    </FormControl>
                </Box>









                
                <Box
                 sx={{
                  width: '75%', // Equivalent to "w-9/12"
                  margin: '0 auto', // Equivalent to "mx-auto"
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: 5, // Equivalent to "mt-5"
                  position: 'relative',
                  }} >
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Associated Branchs</InputLabel>
                        <Select
                            labelId="AssociatedBranchs"
                            id="AssociatedBranchs"
                            value={selectedType2}
                            label="Associated Branchs"
                            onChange={handleChange2}
                        >
                            <MenuItem value={"Restrictions"}>Restrictions</MenuItem>
                            <MenuItem value={"Footnotes"}>Footnotes</MenuItem>
                        </Select>
                    </FormControl>
                </Box>







                {/* <Box className="w-9/12 mx-auto flex justify-between gap-x-10 mt-4"> */}
                <Box
                 sx={{
                  width: '75%', // Equivalent to "w-9/12"
                  margin: '0 auto', // Equivalent to "mx-auto"
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap:'20px',
                  marginTop: 5 // Equivalent to "mt-5"
                  }} >

                    <Box width='50%'>
                        <Typography variant='h5' align="center" fontWeight='bold' gutterBottom>Gantt chart Detail</Typography>

                        {/* <Box className="p-4 h-72 rounded-lg flex flex-col justify-center gap- gap-y-10" style={{ background: "#f0feff" }}> */}
                        <Box sx = {{
                          padding:4,
                          height:72,
                          borderRadius:16,
                          display:'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          gap: '10px', // Equivalent to "gap"
                          gapY: '10px', // Equivalent to "gap-y-10


                        }}>
                          <Paper elevation={3} sx={{ padding: 6, display: 'flex', flexDirection: 'column' ,marginTop:'8rem',width:'35rem',height:'50rem'}}>
      
                  
                        
                        <Typography variant='h6' fontWeight='bold'>Start Date</Typography>
                            <Typography variant='h6' fontWeight='bold'>Finish Date</Typography>
                            <Typography variant='h6' fontWeight='bold'>Estimate hours</Typography>
                            </Paper>
                        </Box>
                    </Box>



                    <Box width='50%'>
                    <Typography variant='h5' align="center" fontWeight='bold' gutterBottom>Personalization</Typography>
                    <Box sx = {{
                          padding:4,
                          height:72,
                          borderRadius:16,
                          display:'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          gap: '10px', // Equivalent to "gap"
                          gapY: '10px', // Equivalent to "gap-y-10
                        }}>
                           <Paper elevation={3} sx={{ padding: 6, display: 'flex', flexDirection: 'column' ,marginTop:'8rem',width:'35rem',height:'50rem'}}>
                           <Typography variant='h6' fontWeight='bold'>Restrictions</Typography>
                           <br/>
                           <Typography variant='h6' fontWeight='bold'>Footnotes</Typography>
            
                            </Paper>
                        </Box>
                    </Box>

                </Box>
            </main >

        </Box>
     

    )
}