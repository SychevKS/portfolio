import React from "react"

import { Box, Tabs, Tab } from "@mui/material"

//import { colors } from "@constants"

export default function Menu({ value, handleChange }) {
    const tabs = ["Главная", "О себе", "Мои проекты", "Связаться со мной"]
    return (
        <Box
            sx={{
                position: "sticky",
                top: 0,
                display: "flex",
                height: "100vh",
                alignItems: "center",
                borderRight: 1,
                borderColor: "divider",
            }}
        >
            <Tabs value={value} orientation="vertical">
                {tabs.map((item, index) => (
                    <Tab label={item} id={`vertical-tab-${index}`} onClick={handleChange(index)} />
                ))}
            </Tabs>
        </Box>
    )
}
