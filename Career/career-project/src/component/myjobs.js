import { Typography, Box, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Myjobs() {

    // const { personlogin } = useParams();
    // console.log(personlogin);
    const [jobData, setJobData ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/appliedjob');
                const jsonData = await response.json();
                setJobData(jsonData);
                console.log(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <Box sx={{textAlign:'center',marginTop:'50px'}}>
            <Typography variant="h3">
                Applied Job Lists 
            </Typography>

            {/* <Typography>{personlogin}</Typography> */}

            <Box sx={{ marginTop: '50px' }}>
                        <table style={{ margin: "0 auto" }}>
                            <thead>
                                <tr >
                                    <th>S.No</th>
                                    <th>Company Name</th>
                                    <th>Experience</th>
                                    <th>Qualification</th>
                                    <th>Job Title</th>
                                    <th>Job Description</th>
                                </tr>
                            </thead>
                            <tbody style={{ textAlign: 'center' }}>
                                {jobData.map((get, i) => (
                                    <tr key={get.s_no} >
                                        <td>{get.s_no}</td>
                                        <td>{get.companyname}</td>
                                        <td>{get.experience}</td>
                                        <td>{get.qualificaton}</td>
                                        <td>{get.jobtitle}</td>
                                        <td>{get.jobdescription}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Box>
        </Box>
    )
}