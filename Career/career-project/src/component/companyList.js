import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import Box from "@mui/material/Box";
import { Navigate, useNavigate } from 'react-router-dom'


export default function CompanyList() {
    const [getData, setData] = useState([]);
    const [columnData, setColumnData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/user_logintable');
                setColumnData(response.data);
            } catch (error) {
                console.error('Error fetching column data:', error);
            }
        };

        fetchData();
    }, []);
    // const [selectedRow, setSelectedRow] = useState(null);
        console.log(columnData);
    const navigate = useNavigate();
    useEffect(() => {
        const gettodata = async () => {
            const responce = await fetch('http://localhost:5000/recruiterperson');
            const data = await responce.json();
            setData(data);
        };
        gettodata();
    }, [])
    // console.log(getdata);

    const myJobsnavi = () => {
        navigate('/myjobs');
    }


    // const handleRowClick = (rowData) => {
    //     if (rowData !== selectedRow) {
    //         setSelectedRow(rowData);
    //       }
    // };

    const handleButtonClick = (selectedRow) => {
        // Handle button click here, you can use the selectedRow state
        if (selectedRow) {
            console.log(selectedRow); // or perform any other action
        }
    };

    return (
        <Box sx={{ marginTop: '50px' }}>
            <Container>
                <Box sx={{ textAlign: 'end' }}>
                    <Button onClick={myJobsnavi} variant="contained">Myjobs</Button>
                </Box>
                <Box>
                    <Box sx={{ marginTop: '100px' }}>
                        <table style={{ margin: "0 auto" }}>
                            <thead>
                                <tr >
                                    <th>S.No</th>
                                    <th>Company Name</th>
                                    <th>Experience</th>
                                    <th>Qualification</th>
                                    <th>Job Title</th>
                                    <th>Job Description</th>
                                    <th>Apply Section</th>
                                </tr>
                            </thead>
                            <tbody style={{ textAlign: 'center' }}>
                                {getData.map((get, i) => (
                                    <tr key={get.s_no} >
                                        <td>{get.s_no}</td>
                                        <td>{get.companyname}</td>
                                        <td>{get.experience}</td>
                                        <td>{get.qualificaton}</td>
                                        <td>{get.jobtitle}</td>
                                        <td>{get.jobdescription}</td>
                                        <td><Button variant="contained" onClick={()=>{handleButtonClick(get.s_no)}} sx={{ backgroundColor: 'red !important' }}>Apply</Button></td>
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