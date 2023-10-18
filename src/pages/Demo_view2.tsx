import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"
import Header from "../components/Header"


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
        <div className="h-full w-full  absolute bg-black bg-opacity-5">
            <Header />

            <div className='p-5 relative z-10 mt-20'>
                <h2 className="font-bold text-black text-2xl text-center">Start a new Gantt Chart</h2>
            </div>

            <main className="">
                <div className="w-9/12 mx-auto">
                    <TextField className="w-full" id="outlined-basic" label="Title" variant="outlined" placeholder="Enter something..." />
                </div>
                
                <div className="w-9/12 mx-auto flex justify-center mt-5 relative">
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
                </div>
                <div className="w-9/12 mx-auto flex justify-center mt-5 relative">
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
                </div>

                <div className="w-9/12 mx-auto flex justify-between gap-x-10 mt-4">
                    <div className="w-6/12">
                        <p className="text-center font-bold text-xl mb-2">Gantt chart Details</p>
                        <div className="p-4 h-72 rounded-lg flex flex-col justify-center gap- gap-y-10" style={{ background: "#f0feff" }}>
                            <p className="text-xl font-bold">Start Date</p>
                            <p className="text-xl font-bold">Finish Date</p>
                            <p className="text-xl font-bold">Estimated hours</p>
                        </div>
                    </div>
                    <div className="w-6/12">
                        <p className="text-center font-bold text-xl mb-2">Personalisation</p>
                        <div className="p-4 h-72 rounded-lg flex flex-col justify-center gap- gap-y-10" style={{ background: "#f0feff" }}>
                            <p className="text-xl font-bold">Restrictions</p>
                            <p className="text-xl font-bold">Footnotes</p>
                        </div>
                    </div>
                </div>
            </main >

        </div >

    )
}