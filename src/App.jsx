/* eslint-disable */
import React, { createRef, useEffect, useRef, useState } from "react"

import { Box, Typography } from "@mui/material"

import { Menu } from "./components"

const preventDefault = event => event.preventDefault()

export default function App() {
    const fieldScroll = useRef()
    const sectionsRef = useRef([])

    const [inMove, setMove] = useState(false)
    const [activeSection, setActiveSection] = useState(0)
    const sectionsCount = 4

    sectionsRef.current = [...Array(sectionsCount).keys()].map(
        (_, i) => sectionsRef.current[i] ?? createRef()
    )

    useEffect(() => {
        fieldScroll.current.addEventListener("wheel", preventDefault)
        return () => {
            fieldScroll.current.removeEventListener("wheel", preventDefault)
        }
    }, [])

    useEffect(() => {
        sectionsRef.current[activeSection].current.scrollIntoView({
            behavior: "smooth",
        })

        setTimeout(() => {
            setMove(false)
        }, 400)
    }, [activeSection])

    const handleScroll = index => () => {
        setActiveSection(index)
    }

    const sectionStyle = {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: "1 1 auto",
    }

    const handleWheel = event => {
        if (event.deltaY < 30 && !inMove) {
            console.log("вверх")
            setMove(true)
            setActiveSection(prev => (prev - 1 < 0 ? sectionsCount - 1 : prev - 1))
        } else if (event.deltaY > 30 && !inMove) {
            console.log("вниз")
            setMove(true)
            setActiveSection(prev => (prev + 1 > sectionsCount - 1 ? 0 : prev + 1))
        }
    }

    return (
        <Box sx={{ display: "flex" }}>
            <Menu value={activeSection} handleChange={handleScroll} />

            <Box
                ref={fieldScroll}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    flexGrow: "1",
                }}
                onWheel={handleWheel}
            >
                <section ref={sectionsRef.current[0]} style={sectionStyle}>
                    <Typography>Большой блок 1</Typography>
                </section>

                <section ref={sectionsRef.current[1]} style={sectionStyle}>
                    <Typography>Большой блок 2</Typography>
                </section>

                <section ref={sectionsRef.current[2]} style={sectionStyle}>
                    <Typography>Большой блок 3</Typography>
                </section>

                <section ref={sectionsRef.current[3]} style={sectionStyle}>
                    <Typography>Большой блок 4</Typography>
                </section>
            </Box>
        </Box>
    )
}
