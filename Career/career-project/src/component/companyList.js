import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import Box from "@mui/material/Box";

export default function CompanyList() {
    const [getdata, setData] = useState([]);
    useEffect(() => {
        const gettodata = async () => {
            const responce = await fetch('http://localhost:5000/recruiterperson');
            const data = await responce.json();
            setData(data);
        };
        gettodata();
    }, [])
    console.log(getdata);
    

    return (
        <Box sx={{marginTop:'50px'}}>
            <Container>
                <Box sx={{textAlign:'end'}}>
                    <Button variant="contained">Myjobs</Button>
                </Box>
                <Box>
                    <Box sx={{marginTop:'100px'}}>
                        <table style={{margin:"0 auto"}}>
                            <thead>
                                <tr>
                                    <th>Company Name</th>
                                    <th>Experience</th>
                                    <th>Qualification</th>
                                    <th>Job Title</th>
                                    <th>Job Description</th>
                                    <th>Apply Section</th>
                                </tr>
                            </thead>
                            <tbody style={{textAlign:'center'}}>
                                {getdata.map((get, i) => (
                                    <tr key={i}  >
                                        <td>{get.companyname}</td>
                                        <td>{get.experience}</td>
                                        <td>{get.qualificaton}</td>
                                        <td>{get.jobtitle}</td>
                                        <td>{get.jobdescription}</td>
                                        <td><Button variant="contained" sx={{backgroundColor:'red !important'}}>Apply</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}