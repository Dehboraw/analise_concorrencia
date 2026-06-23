export const db = {
    cursos: [
        {
            id: 1,
            nome: "Medicina",
            modalidade: "Integral",
            salarioMedioAtual: 10017,
            cotas: [
                {
                    ano: 2025,
                    tipoCota: [
                        { tipo: "Negro", vagas: 2, candidatos: 124, notaMinima: 5736 },
                        { tipo: "publicaNegro", vagas: 4, candidatos: 63, notaMinima: 4624 },
                        { tipo: "publica", vagas: 5, candidatos: 634, notaMinima: 5975 },
                        { tipo: "PCD", vagas: 2, candidatos: 95, notaMinima: 5933 },
                        { tipo: "Universal", vagas: 14, candidatos: 2182, notaMinima: 6352 }
                    ]
                },
                {
                    ano: 2024,
                    tipoCota: [
                        { tipo: "Negro", vagas: 2, candidatos: 86, notaMinima: 5285 },
                        { tipo: "publicaNegro", vagas: 4, candidatos: 57, notaMinima: 4363 },
                        { tipo: "publica", vagas: 5, candidatos: 610, notaMinima: 5789 },
                        { tipo: "PCD", vagas: 2, candidatos: 78, notaMinima: 5380 },
                        { tipo: "Universal", vagas: 14, candidatos: 1814, notaMinima: 6118 }
                    ]
                },
                {
                    ano: 2023,
                    tipoCota: [
                        { tipo: "Negro", vagas: 2, candidatos: 83, notaMinima: 5965 },
                        { tipo: "publicaNegro", vagas: 3, candidatos: 50, notaMinima: 4032 },
                        { tipo: "publica", vagas: 12, candidatos: 662, notaMinima: 5514 },
                        { tipo: "PCD", vagas: 2, candidatos: 47, notaMinima: 5667 },
                        { tipo: "Universal", vagas: 11, candidatos: 1884, notaMinima: 6312 }
                    ]
                },
                {
                    ano: 2022,
                    tipoCota: [
                        { tipo: "Negro", vagas: 2, candidatos: 65, notaMinima: 5151 },
                        { tipo: "publicaNegro", vagas: 3, candidatos: 67, notaMinima: 4185 },
                        { tipo: "publica", vagas: 12, candidatos: 643, notaMinima: 5139 },
                        { tipo: "PCD", vagas: 2, candidatos: 32, notaMinima: 4210 },
                        { tipo: "Universal", vagas: 11, candidatos: 2107, notaMinima: 5857 }
                    ]
                },
                {
                    ano: 2021,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 2, candidatos: 54, notaMinima: 4177 },
                        { tipo: "publica", vagas: 6, candidatos: 828, notaMinima: 5587 },
                        { tipo: "Universal", vagas: 7, candidatos: 3373, notaMinima: 6160 }
                    ]
                },
                {
                    ano: 2020,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 5, candidatos: 59, notaMinima: 4397 },
                        { tipo: "publica", vagas: 12, candidatos: 1013, notaMinima: 5206 },
                        { tipo: "Universal", vagas: 15, candidatos: 3673, notaMinima: 5910 }
                    ]
                },
                {
                    ano: 2019,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 1, candidatos: 32, notaMinima: 4648 },
                        { tipo: "publica", vagas: 6, candidatos: 477, notaMinima: 5101 },
                        { tipo: "Universal", vagas: 8, candidatos: 1414, notaMinima: 5650 }
                    ]
                },
                {
                    ano: 2018,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 1, candidatos: 46, notaMinima: 4857 },
                        { tipo: "publica", vagas: 6, candidatos: 616, notaMinima: 5224 },
                        { tipo: "Universal", vagas: 8, candidatos: 1582, notaMinima: 5784 }
                    ]
                },
                {
                    ano: 2017,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 2, candidatos: 54, notaMinima: 4400 },
                        { tipo: "publica", vagas: 6, candidatos: 587, notaMinima: 4971 },
                        { tipo: "Universal", vagas: 7, candidatos: 1505, notaMinima: 5484 }
                    ]
                },
                {
                    ano: 2016,
                    tipoCota: [
                        { tipo: "Negro", vagas: 1, candidatos: 46, notaMinima: 4499 },
                        { tipo: "publica", vagas: 6, candidatos: 617, notaMinima: 5142 },
                        { tipo: "Universal", vagas: 7, candidatos: 1615, notaMinima: 5868 }
                    ]
                }
            ]
        },
        {
            id: 2,
            nome: "Engenharia de Software",
            modalidade: "Noturno",
            salarioMedioAtual: 10779,
            cotas: [
                {
                    ano: 2025,
                    tipoCota: [
                        { tipo: "Negro", vagas: 2, candidatos: 16, notaMinima: 4015 },
                        { tipo: "publicaNegro", vagas: 3, candidatos: 16, notaMinima: 2899 },
                        { tipo: "publica", vagas: 4, candidatos: 156, notaMinima: 3952 },
                        { tipo: "PCD", vagas: 2, candidatos: 11, notaMinima: 3077 },
                        { tipo: "Universal", vagas: 13, candidatos: 176, notaMinima: 4706 }
                    ]
                },
                {
                    ano: 2024,
                    tipoCota: [
                        { tipo: "Negro", vagas: 2, candidatos: 15, notaMinima: 3730 },
                        { tipo: "publicaNegro", vagas: 3, candidatos: 11, notaMinima: 3486 },
                        { tipo: "publica", vagas: 4, candidatos: 160, notaMinima: 3951 },
                        { tipo: "PCD", vagas: 2, candidatos: 4, notaMinima: 1916 },
                        { tipo: "Universal", vagas: 13, candidatos: 184, notaMinima: 4692 }
                    ]
                },
                {
                    ano: 2023,
                    tipoCota: [
                        { tipo: "Negro", vagas: 2, candidatos: 11, notaMinima: 3240 },
                        { tipo: "publicaNegro", vagas: 3, candidatos: 9, notaMinima: 2525 },
                        { tipo: "publica", vagas: 12, candidatos: 151, notaMinima: 3537 },
                        { tipo: "PCD", vagas: 2, candidatos: 4, notaMinima: 2449 },
                        { tipo: "Universal", vagas: 11, candidatos: 171, notaMinima: 4457 }
                    ]
                },
                {
                    ano: 2022,
                    tipoCota: [
                        { tipo: "Negro", vagas: 2, candidatos: 4, notaMinima: 2800 },
                        { tipo: "publicaNegro", vagas: 3, candidatos: 10, notaMinima: 2947 },
                        { tipo: "publica", vagas: 12, candidatos: 173, notaMinima: 3345 },
                        { tipo: "PCD", vagas: 2, candidatos: 2, notaMinima: 2212 },
                        { tipo: "Universal", vagas: 11, candidatos: 222, notaMinima: 4368 }
                    ]
                },
                {
                    ano: 2021,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 2, candidatos: 4, notaMinima: 0 },
                        { tipo: "publica", vagas: 6, candidatos: 89, notaMinima: 3262 },
                        { tipo: "Universal", vagas: 7, candidatos: 180, notaMinima: 4193 }
                    ]
                },
                {
                    ano: 2020,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 3, candidatos: 3, notaMinima: 1942 },
                        { tipo: "publica", vagas: 12, candidatos: 71, notaMinima: 2949 },
                        { tipo: "Universal", vagas: 15, candidatos: 150, notaMinima: 3437 }
                    ]
                },
                {
                    ano: 2019,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 1, candidatos: 4, notaMinima: 2809 },
                        { tipo: "publica", vagas: 6, candidatos: 88, notaMinima: 3007 },
                        { tipo: "Universal", vagas: 8, candidatos: 126, notaMinima: 3409 }
                    ]
                },
                {
                    ano: 2018,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 3, candidatos: 5, notaMinima: 0 },
                        { tipo: "publica", vagas: 12, candidatos: 55, notaMinima: 2466 },
                        { tipo: "Universal", vagas: 15, candidatos: 110, notaMinima: 3172 }
                    ]
                },
                {
                    ano: 2017,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 2, candidatos: 5, notaMinima: 0 },
                        { tipo: "publica", vagas: 6, candidatos: 73, notaMinima: 2693 },
                        { tipo: "Universal", vagas: 7, candidatos: 103, notaMinima: 3539 }
                    ]
                },
                {
                    ano: 2016,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 1, candidatos: 3, notaMinima: 2331 },
                        { tipo: "publica", vagas: 6, candidatos: 86, notaMinima: 2700 },
                        { tipo: "Universal", vagas: 7, candidatos: 118, notaMinima: 3158 }
                    ]
                }
            ]
        },
        {
            id: 3,
            nome: "Farmácia",
            modalidade: "Integral",
            salarioMedioAtual: 4281,
            cotas: [
                {
                    ano: 2025,
                    tipoCota: [
                        { tipo: "Negro", vagas: 2, candidatos: 2, notaMinima: 2482 },
                        { tipo: "publicaNegro", vagas: 4, candidatos: 4, notaMinima: 1967 },
                        { tipo: "publica", vagas: 5, candidatos: 55, notaMinima: 3393 },
                        { tipo: "PCD", vagas: 2, candidatos: 3, notaMinima: 2627 },
                        { tipo: "Universal", vagas: 14, candidatos: 77, notaMinima: 4255 }
                    ]
                },
                {
                    ano: 2024,
                    tipoCota: [
                        { tipo: "Negro", vagas: 2, candidatos: 2, notaMinima: 3024 },
                        { tipo: "publicaNegro", vagas: 4, candidatos: 3, notaMinima: 1620 },
                        { tipo: "publica", vagas: 5, candidatos: 69, notaMinima: 2961 },
                        { tipo: "PCD", vagas: 2, candidatos: 1, notaMinima: 0 },
                        { tipo: "Universal", vagas: 14, candidatos: 73, notaMinima: 3764 }
                    ]
                },
                {
                    ano: 2023,
                    tipoCota: [
                        { tipo: "Negro", vagas: 2, candidatos: 1, notaMinima: 0 },
                        { tipo: "publicaNegro", vagas: 3, candidatos: 1, notaMinima: 0 },
                        { tipo: "publica", vagas: 14, candidatos: 48, notaMinima: 2793 },
                        { tipo: "PCD", vagas: 2, candidatos: 0, notaMinima: 0 },
                        { tipo: "Universal", vagas: 13, candidatos: 79, notaMinima: 4280 }
                    ]
                },
                {
                    ano: 2022,
                    tipoCota: [
                        { tipo: "Negro", vagas: 2, candidatos: 1, notaMinima: 4492 },
                        { tipo: "publicaNegro", vagas: 3, candidatos: 1, notaMinima: 2103 },
                        { tipo: "publica", vagas: 14, candidatos: 57, notaMinima: 2508 },
                        { tipo: "PCD", vagas: 2, candidatos: 1, notaMinima: 1969 },
                        { tipo: "Universal", vagas: 13, candidatos: 76, notaMinima: 3488 }
                    ]
                },
                {
                    ano: 2021,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 2, candidatos: 2, notaMinima: 0 },
                        { tipo: "publica", vagas: 7, candidatos: 58, notaMinima: 3201 },
                        { tipo: "Universal", vagas: 8, candidatos: 107, notaMinima: 3997 }
                    ]
                },
                {
                    ano: 2020,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 3, candidatos: 3, notaMinima: 2126 },
                        { tipo: "publica", vagas: 14, candidatos: 67, notaMinima: 2714 },
                        { tipo: "Universal", vagas: 17, candidatos: 125, notaMinima: 3132 }
                    ]
                },
                {
                    ano: 2019,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 1, candidatos: 1, notaMinima: 0 },
                        { tipo: "publica", vagas: 7, candidatos: 54, notaMinima: 2654 },
                        { tipo: "Universal", vagas: 9, candidatos: 101, notaMinima: 3506 }
                    ]
                },
                {
                    ano: 2018,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 1, candidatos: 2, notaMinima: 2887 },
                        { tipo: "publica", vagas: 7, candidatos: 53, notaMinima: 2865 },
                        { tipo: "Universal", vagas: 9, candidatos: 95, notaMinima: 3657 }
                    ]
                },
                {
                    ano: 2017,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 1, candidatos: 1, notaMinima: 0 },
                        { tipo: "publica", vagas: 8, candidatos: 58, notaMinima: 2526 },
                        { tipo: "Universal", vagas: 8, candidatos: 91, notaMinima: 3655 }
                    ]
                },
                {
                    ano: 2016,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 2, candidatos: 2, notaMinima: 0 },
                        { tipo: "publica", vagas: 6, candidatos: 62, notaMinima: 2242 },
                        { tipo: "Universal", vagas: 8, candidatos: 117, notaMinima: 3527 }
                    ]
                }
            ]
        },
        {
            id: 4,
            nome: "Odontologia",
            modalidade: "Integral",
            salarioMedioAtual: 5117,
            cotas: [
                {
                    ano: 2025,
                    tipoCota: [
                        { tipo: "Negro", vagas: 2, candidatos: 8, notaMinima: 3078 },
                        { tipo: "publicaNegro", vagas: 5, candidatos: 7, notaMinima: 2467 },
                        { tipo: "publica", vagas: 6, candidatos: 90, notaMinima: 3646 },
                        { tipo: "PCD", vagas: 2, candidatos: 4, notaMinima: 2881 },
                        { tipo: "Universal", vagas: 18, candidatos: 206, notaMinima: 4414 }
                    ]
                },
                {
                    ano: 2024,
                    tipoCota: [
                        { tipo: "Negro", vagas: 2, candidatos: 6, notaMinima: 3477 },
                        { tipo: "publicaNegro", vagas: 5, candidatos: 10, notaMinima: 2131 },
                        { tipo: "publica", vagas: 6, candidatos: 96, notaMinima: 3661 },
                        { tipo: "PCD", vagas: 2, candidatos: 5, notaMinima: 3102 },
                        { tipo: "Universal", vagas: 18, candidatos: 153, notaMinima: 4266 }
                    ]
                },
                {
                    ano: 2023,
                    tipoCota: [
                        { tipo: "Negro", vagas: 2, candidatos: 8, notaMinima: 2862 },
                        { tipo: "publicaNegro", vagas: 5, candidatos: 7, notaMinima: 2157 },
                        { tipo: "publica", vagas: 18, candidatos: 91, notaMinima: 3042 },
                        { tipo: "PCD", vagas: 2, candidatos: 2, notaMinima: 2028 },
                        { tipo: "Universal", vagas: 18, candidatos: 161, notaMinima: 4274 }
                    ]
                },
                {
                    ano: 2022,
                    tipoCota: [
                        { tipo: "Negro", vagas: 2, candidatos: 2, notaMinima: 1779 },
                        { tipo: "publicaNegro", vagas: 5, candidatos: 4, notaMinima: 1731 },
                        { tipo: "publica", vagas: 18, candidatos: 111, notaMinima: 2849 },
                        { tipo: "PCD", vagas: 2, candidatos: 2, notaMinima: 2099 },
                        { tipo: "Universal", vagas: 18, candidatos: 193, notaMinima: 4017 }
                    ]
                },
                {
                    ano: 2021,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 3, candidatos: 5, notaMinima: 2150 },
                        { tipo: "publica", vagas: 9, candidatos: 117, notaMinima: 3497 },
                        { tipo: "Universal", vagas: 11, candidatos: 303, notaMinima: 4413 }
                    ]
                },
                {
                    ano: 2020,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 5, candidatos: 7, notaMinima: 1924 },
                        { tipo: "publica", vagas: 18, candidatos: 136, notaMinima: 3126 },
                        { tipo: "Universal", vagas: 22, candidatos: 312, notaMinima: 4009 }
                    ]
                },
                {
                    ano: 2019,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 2, candidatos: 8, notaMinima: 2807 },
                        { tipo: "publica", vagas: 9, candidatos: 139, notaMinima: 3276 },
                        { tipo: "Universal", vagas: 11, candidatos: 241, notaMinima: 4226 }
                    ]
                },
                {
                    ano: 2018,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 3, candidatos: 9, notaMinima: 2493 },
                        { tipo: "publica", vagas: 9, candidatos: 157, notaMinima: 3242 },
                        { tipo: "Universal", vagas: 10, candidatos: 275, notaMinima: 4024 }
                    ]
                },
                {
                    ano: 2017,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 2, candidatos: 11, notaMinima: 2674 },
                        { tipo: "publica", vagas: 9, candidatos: 171, notaMinima: 3325 },
                        { tipo: "Universal", vagas: 11, candidatos: 326, notaMinima: 3934 }
                    ]
                },
                {
                    ano: 2016,
                    tipoCota: [
                        { tipo: "publicaNegro", vagas: 2, candidatos: 15, notaMinima: 0 },
                        { tipo: "publica", vagas: 9, candidatos: 192, notaMinima: 3139 },
                        { tipo: "Universal", vagas: 11, candidatos: 356, notaMinima: 3966 }
                    ]
                }
            ]
        }
    ]
};