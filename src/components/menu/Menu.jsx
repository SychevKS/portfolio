import * as React from "react"
import { Box, Tabs, Tab } from "@mui/material"

export default function Header() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box sx={{ width: "100%" }}>
            <Tabs value={value} onChange={handleChange} orientation="vertical">
                <Tab label="Главная" />
                <Tab label="О себе" />
                <Tab label="Мои проекты" />
                <Tab label="Связаться со мной" />
            </Tabs>
        </Box>
    )
}
