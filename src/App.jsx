import React from "react"

import { Box } from "@mui/material"

import { Menu } from "./components"

export default function App() {
    return (
        <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex", height: 224 }}>
            <Menu />
            <Box>Большой блок</Box>
        </Box>
    )
}
