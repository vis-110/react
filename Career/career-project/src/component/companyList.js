import { Typography } from "@mui/material";
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
        <Box>
            <Box sx={{ margin: '100px 300px', textAlign: 'center' }}>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Experience</th>
                                <th>Qualification</th>
                                <th>Job Title</th>
                                <th>Job Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getdata.map((get, i) => (
                                <tr key={i}>
                                    <td>{get.companyname}</td>
                                    <td>{get.experience}</td>
                                    <td>{get.qualificaton}</td>
                                    <td>{get.jobtitle}</td>
                                    <td>{get.jobdescription}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Box>
        </Box>
    )
}