import { Typography, Box, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Myjobs() {

    const { personlogin } = useParams();
    console.log(personlogin);
    const [columData, setColumnData ] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/route?personlogin=${personlogin}`);
                console.log(response.data);
                setColumnData(response.data);
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

            <Typography>{personlogin}</Typography>

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
                                {columData.map((get, i) => (
                                    <tr key={get.s_no} >
                                        <td>{get.id}</td>
                                        <td>{get.company_name}</td>
                                        <td>{get.experience}</td>
                                        <td>{get.qualification}</td>
                                        <td>{get.job_title}</td>
                                        <td>{get.job_description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Box>
        </Box>
    )
}