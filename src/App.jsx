/* eslint-disable */
import React, { createRef, useEffect, useRef, useState } from "react"

import { Box, Typography } from "@mui/material"

import { Main, About } from "./components"
import { Skills } from "./screens"

const preventDefault = event => event.preventDefault()

export default function App() {
    const fieldScroll = useRef()
    const sectionsRef = useRef([])

    const [inMove, setMove] = useState(false)
    const [activeSection, setActiveSection] = useState(0)

    const sections = [<Main />, <About />, <Skills />]

    sectionsRef.current = [...Array(sections.length).keys()].map(
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

    const handleWheel = event => {
        if (event.deltaY < 30 && !inMove) {
            setMove(true)
            setActiveSection(prev => (prev - 1 < 0 ? sections.length - 1 : prev - 1))
        } else if (event.deltaY > 30 && !inMove) {
            setMove(true)
            setActiveSection(prev => (prev + 1 > sections.length - 1 ? 0 : prev + 1))
        }
    }

    return (
        <Box sx={{ display: "flex" }}>
            <Box
                ref={fieldScroll}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    width: "100%",
                    flex: "1 1 auto",
                }}
                onWheel={handleWheel}
            >
                {sections.map((item, index) => (
                    <section
                        ref={sectionsRef.current[index]}
                        style={{
                            height: "100vh",
                            paddingLeft: 150,
                            paddingRight: 150,
                            paddingTop: 50,
                            paddingBottom: 50,
                        }}
                    >
                        {item}
                    </section>
                ))}
            </Box>
        </Box>
    )
}
