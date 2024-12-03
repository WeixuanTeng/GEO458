var config = {
    style: 'mapbox://styles/mapbox/streets-v12',
    accessToken: 'pk.eyJ1Ijoid3RlbmcwMjEyIiwiYSI6ImNtMXBkZzB4MDAzaW0ya29kbXg3YzRqbjkifQ.VNzDni3iko1Tm_oG2ztG4A',
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Mapping Californias Education:',
    subtitle: 'Unveiling Disparities to Create Equal Opportunities',
    byline: 'Group Brotato',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'Chapter1',
            alignment: 'left',
            hidden: false,
            title: 'California Overview',
            image: '5.avif',
            description: "Hello! Welcome to an interactive exploration of California's educational system. In this presentation, we will highlight key areas of focus: private schools, district disparities, early learning centers, and school performance. The primary intention of this project was to show you the educational inequalities and their potential causes in California. The target audience includes a variety of people such as policymakers, educators, researchers, and parents. We used a map-based storytelling approach and we want to to uncover how these factors impact schools and students across California. Please sit back and enjoy the presentation!.",
            location: {
                center: [-120.28623, 37.15959],
                zoom: 5.5,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                { layer: 'privateschool-layer', opacity: 0 },
                { layer: 'DistrictAreas-layer', opacity: 0 },
                {
                    layer: 'schoolperformance-layer',
                    opacity: 0
                },
                {
                    layer: 'earlylearning-layer',
                    opacity: 0,
                },
                { layer: 'clusters', opacity: 0 },
                { layer: 'cluster-count', opacity: 0 }

            ],
            onChapterExit: []
        },

        {
            id: 'chapter2',
            alignment: 'left',
            hidden: false,
            image: '6.jpg',
            title: 'How many private schools are in California?',
            description: 'First of all, private schools in California represent an opportunity for enhanced educational resources, but their distribution is far from equal. This chapter visualizes the geographic spread of private schools, with data points colored by total enrollment. (Lets check the map!) The darker colors represent larger schools, concentrated in more developed and populated regions like Los Angeles and the Bay Area. These patterns shows how ecomonics and location intersect to create more advantages for some communities, leaving others with fewer opportunities.',
            location: {
                center: [-120.278797, 35.973381],
                zoom: 6,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'privateschool-layer',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'DistrictAreas-layer',
                    opacity: 0
                },
                {
                    layer: 'earlylearning-layer',
                    opacity: 0,
                },
                {
                    layer: 'schoolperformance-layer',
                    opacity: 0
                },
                { layer: 'cluster-count', opacity: 0 }
            ],
            onChapterExit: []
        },
        
        {
            id: 'chapter3',
            alignment: 'left',
            hidden: false,
            image: null, // Set to null as we are embedding multiple images directly
            title: 'How many percent of SED students?',
            description: `
                <p>"Economics plays a important role in almost everything, including shaping educational outcomes. In this chapter, school districts are color-coded to reflect the percentage of socioeconomically disadvantaged (SED) students, ranging from green (low percentages) to red (high percentages). This gradient provides a visual representation of where resources and support are most critically needed. (We can see that the farther from the developed areas, the more red the map is. which means more SED students.) The chapter shows the systemic inequities many students face and how these disparities can shape the trajectories of entire communities."</p>
                <img src="9.jpeg" alt="Visualization 1" style="width:100%; margin-bottom:10px;">
                <img src="7.jpg" alt="Visualization 2" style="width:30%;">
            `,
            location: {
                center: [-120.28623, 37.15959],
                zoom: 5.5,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'DistrictAreas-layer',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'privateschool-layer',
                    opacity: 0
                },
                {
                    layer: 'earlylearning-layer',
                    opacity: 0,
                },
                {
                    layer: 'schoolperformance-layer',
                    opacity: 0
                },
                { layer: 'cluster-count', opacity: 0 }
            ],
            onChapterExit: []
        },
        

        {
            id: 'chapter4',
            alignment: 'right',
            hidden: false,
            image: '2.jpeg',
            title: 'Early Learning and Care Sites',
            description: `
                "The importance of early learning cannot be overstated, it sets the foundation for lifelong educational success. This chapter maps early learning and care sites across California, we can click on each site to uncover details about the number of 3- and 4-year-old students enrolled. By revealing these enrollment patterns, we gain insights into the accessibility and reach of early childhood education programs and their role in leveling the playing field for disadvantaged communities."`,
            location: {
                center: [-118.2426, 34.0549],
                zoom: 9.5,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                    layer: 'DistrictAreas-layer',
                    opacity: 0,
                    duration: 2000
                },
                {
                    layer: 'privateschool-layer',
                    opacity: 0
                },
                {
                    layer: 'earlylearning-layer',
                    opacity: 1,
                },
                {
                    layer: 'schoolperformance-layer',
                    opacity: 0
                },
                { layer: 'cluster-count', opacity: 0 }
            ],
            onChapterExit: []
        },

        {
            id: 'chapter5',
            alignment: 'right',
            hidden: false,
            image: '10.jpg',
            title: 'School performance',
            description: '"Fianlly, Graduation rates are a key measure of educational success, it offers a useful insight into how well schools prepare students for the future. In this chapter we maps school performance with green dots indicating high graduation rates and red dots signaling lower rates. Additionally, a clustering layer shows how many schools are in that area. As we can see from this visualization, the stark differences in outcomes, the dots thats located in more rural areas appears to be more red.."',
            location: {
                center: [-120.28623, 37.15959],
                zoom: 5.5,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                    layer: 'privateschool-layer',
                    opacity: 0,
                    duration: 2000
                },
                {
                    layer: 'DistrictAreas-layer',
                    opacity: 0
                },
                {
                    layer: 'earlylearning-layer',
                    opacity: 0,
                },
                {
                    layer: 'schoolperformance-layer',
                    opacity: 1
                },
                {
                    layer: 'clusters',
                    opacity: 1
                },
                { layer: 'cluster-count', opacity: 1 }
            ],
            onChapterExit: [        {
                layer: 'clusters',
                opacity: 0 
            }]
        },

        {
            id: 'chapter6',
            alignment: 'left',
            hidden: false,
            image: '8.jpg',
            title: 'Conclusion',
            description: '"In conclusion, we’ve shown you a few important aspects of California’s educational system. From private school enrollments to district level SED statistics, early learning resources, and graduation rates, it’s evident that disparities persist because most conclusion we have is related to "the more developed an area is the better education is has.". In our opinion, solving these inequities requires focused investments, policy interventions, and community engagement. The phenomenon shown from this map serves as a realization for the government to create a more equal education environment for all students, we need to make sure that no child’s future is limited by geography or economic status. Thank you for listening."',
            location: {
                center: [-120.28623, 37.15959],
                zoom: 5.5,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                    layer: 'privateschool-layer',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'DistrictAreas-layer',
                    opacity: 0.8
                },
                {
                    layer: 'schoolperformance-layer',
                    opacity: 0
                },
                { layer: 'cluster-count', opacity: 0 }
            ],
            onChapterExit: []
        }
        
    ]
};
