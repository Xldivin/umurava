import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import { Typography } from "@mui/material";
import draw4 from '../../../public/assets/images/umurava/draw4.png';
import Image from 'next/image';
import ImageListItem from '@mui/material/ImageListItem';
import { TextField } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

function Body6() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <Box>
            <Box>
                <Sidebar />
                <Box sx={{ ml: 50, display: "flex" }}>
                    <Box>
                        <Typography variant="h3" sx={{ ml: 2, mt: 5 }}>Profile</Typography>
                        <Box sx={{ width: 770, height: 130, background: "#fff", mt: 5, border: 1, borderColor: "#fff", borderRadius: "16px", ml: -5 }}>
                            <Typography variant="h3" sx={{ color: "#407BFF", ml: 5, mt: 2 }}>Finalise your profile</Typography>
                            <Typography sx={{ ml: 5, mt: 2, width: 600, fontSize: 15, fontWeight: 'bold' }}>This step involves Providing additional information to your profile</Typography>
                        </Box>
                        <Box sx={{ mt: 5, width: 750, height: 420, background: "#fff", border: 1, borderColor: "#fff", borderRadius: "16px", ml: -4, display: "flex" }}>
                            <ImageListItem sx={{ ml: 8, mt: 8 }}>
                                <Image src={draw4} />
                            </ImageListItem>
                            <Typography sx={{ width: 400, mt: 12, fontSize: 18, pl: 2, pr: 2, fontWeight: 'bold' }}>The information provided while Finalising your profile include the Cost of your services, Projects that You worked on, your location and Your Biography defining you and Your passions. This information is Used by recruiters to see you as potential fit for open positions</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: 400, height: 630, background: "#fff", ml: 3, mt: 14, border: 1, borderColor: "#fff", borderRadius: "16px" }}>
                        <Typography variant="h6" sx={{ ml: 5 }}>Pricing</Typography>
                        <TextField
                            name="price"
                            size="small"
                            type="text"
                            variant="outlined"
                            label="Pricing"
                            placeholder="$/Hour"
                            sx={{
                                borderRadius: 28,
                                ml: 5,
                                mt: 1,
                                width: 320,
                                '& fieldset': {
                                    borderRadius: '15px',
                                },
                            }}
                        />
                        <Typography variant="h6" sx={{ ml: 5, mt: 2 }}>Availability</Typography>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <FormControlLabel control={<Checkbox {...label} color="primary" />} label="Part time" sx={{ ml: 3, mt: 2 }} />
                            <FormControlLabel control={<Checkbox {...label} color="primary" />} label="Part time" sx={{ ml: 3, mt: 0 }} />
                        </Box>
                        <Typography variant="h6" sx={{ ml: 5, mt: 2 }}>Projects Completed</Typography>
                        <TextField
                            name="project"
                            size="small"
                            type="text"
                            variant="outlined"
                            label="Project completed"
                            placeholder="Eg:3"
                            sx={{
                                borderRadius: 28,
                                ml: 5,
                                mt: 1,
                                width: 320,
                                '& fieldset': {
                                    borderRadius: '15px',
                                },
                            }}
                        />
                        <Typography variant="h6" sx={{ ml: 5, mt: 2 }}>Location</Typography>
                        <Box>
                            <TextField
                                name="Location"
                                size="small"
                                type="text"
                                variant="outlined"
                                label="Location"
                                placeholder="City"
                                sx={{
                                    borderRadius: 28,
                                    ml: 5,
                                    mt: 1,
                                    width: 150,
                                    '& fieldset': {
                                        borderRadius: '15px',
                                    },
                                }}
                            />
                            <TextField
                                name="Location"
                                size="small"
                                type="text"
                                variant="outlined"
                                label="Location"
                                placeholder="Country"
                                sx={{
                                    borderRadius: 28,
                                    ml: 3,
                                    mt: 1,
                                    width: 150,
                                    '& fieldset': {
                                        borderRadius: '15px',
                                      },
                                }}
                            />
                        </Box>
                        <Typography variant="h6" sx={{ ml: 5, mt: 2 }}>Your Bio</Typography>
                        <TextField
                            name="Location"
                            size="small"
                            type="text"
                            variant="outlined"
                            label="Bio"
                            placeholder="Bio"
                            multiline={true}
                            rows={3}
                            sx={{
                                ml: 5,
                                mt: 1,
                                width: 320,
                                border: 1,
                                borderColor: "#fff",
                                borderRadius: "16px",
                                '& fieldset': {
                                    borderRadius: '15px',
                                  },
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ background: '#2B71F0', color: '#fff',mt:3,ml:5,width:320,border: 1, borderColor: "#2B71F0", borderRadius: "16px" }}
                        >
                            Continue
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Body6