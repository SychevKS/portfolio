import React from "react"

import { Box, Typography } from "@mui/material"

import photo from "../../assets/photo.jpg"

export default function About() {
    return (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                /* justifyContent: "center", */
            }}
        >
            <Typography variant="h3" sx={{ mb: 4 }}>
                Обо мне
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 4 }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h5">
                        Я фронтенд разработчик, проживающий в Перми. Получил образование в Пермском
                        политехническом университете на кафедре
                        {` "Информационные технологии и автоматизированные системы"`}. Мой интерес к
                        веб-разработке начался еще на 2 курсе, когда я разрабатал информационную систему
                        проведения городских эстафет и попробывал себя в роли проектировщика и дизайнера.
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 1 }}>
                        В настоящее время работаю в сообществе компаний Flexberry.
                    </Typography>
                </Box>
                <Box sx={{ maxWidth: 300, position: "relative", paddingTop: "56.25%" }}>
                    <img
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "auto",
                        }}
                        src={photo}
                        alt="i"
                    />
                </Box>
            </Box>
        </Box>
    )
}
