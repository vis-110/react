import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import Box from "@mui/material/Box";
import { Navigate, useNavigate, useParams } from 'react-router-dom'


export default function CompanyList() {
    const [getData, setData] = useState([]);
    const [columnData, setColumnData] = useState([]);
    const [userData, setUserData] = useState({});
    // const {loginemail} = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/user_logintable');
                const jsonData = await response.json();
                setColumnData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/recruiterperson');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const myJobsnavi = () => {
        // console.log(loginemail);
        // navigate(`/myjobs/${loginemail}`);
        navigate(`/myjobs`);

    }

    // const handleButtonClick = async (selectedRow) => {
    //     console.log(loginemail);
    //     console.log(selectedRow);
    //     if (selectedRow) {
    //         const updatedUserData = { ...selectedRow, email: loginemail };
    //         setUserData(updatedUserData);
    //         console.log(updatedUserData); 
    //         try {
    //             console.log(getData);
    //             console.log(columnData);
    //             const response = await axios.post("http://localhost:5000/applylists", updatedUserData);
    //             console.log(response.data);
    //         } catch (error) {
    //             console.error("Error", error);
    //         }
    //     }
    // };

        const handleButtonClick = async (selectedRow) => {
        // console.log(loginemail);
        console.log(selectedRow);
        if (selectedRow) {
            // const updatedUserData = { ...selectedRow, email: loginemail };
            // setUserData(selectedRow);
            // console.log(selectedRow); 
            try {
                // console.log(getData);
                // console.log(columnData);
                const response = await axios.post("http://localhost:5000/rowData", selectedRow);
                console.log(response.data);
            } catch (error) {
                console.error("Error", error);
            }
        }
    };

    useEffect(() => {
        console.log(userData);
    }, [userData]);


    return (
        <Box sx={{ marginTop: '50px' }}>
            <Container>
                <Box sx={{ textAlign: 'end' }}>
                    <Button onClick={myJobsnavi} variant="contained">Applied Jobs</Button>
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
                                        <td><Button variant="contained" onClick={() => { handleButtonClick(get) }} sx={{ backgroundColor: 'red !important' }}>Apply</Button></td>
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