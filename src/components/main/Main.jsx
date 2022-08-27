import React from "react"

import { Box, Button, Typography, Card, CardContent } from "@mui/material"

export default function Main() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h5">Привет, меня зовут</Typography>
                    <Typography variant="h2">Кирилл Сычев</Typography>
                    <Typography variant="h5">я FRONT-END WEB РАЗРАБОТЧИК</Typography>
                </Box>
                <Button variant="contained" sx={{ textTransform: "none" }}>
                    Скачать резюме
                </Button>
            </Box>
            <Box sx={{ display: "flex" }}>
                <Card>
                    <CardContent sx={{ "p": 4, "&:last-child": { pb: 4 } }}>
                        <Typography variant="h6">1 &nbsp; class Student &nbsp;{`{`}</Typography>
                        <Typography variant="h6">
                            2 &nbsp;&nbsp;&nbsp;&nbsp; constructor() &nbsp;{`{`}
                        </Typography>
                        <Typography variant="h6">
                            3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = {`"Kirill Sychov"`};
                        </Typography>
                        <Typography variant="h6">
                            4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.traits = {`["DESIGN", "DEV"]`};
                        </Typography>
                        <Typography variant="h6">
                            5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.age = new Date().getFullYear() -
                            2001;
                        </Typography>
                        <Typography variant="h6">6 &nbsp;&nbsp;&nbsp;&nbsp; {`}`}</Typography>
                        <Typography variant="h6">7 &nbsp; {`}`}</Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}
