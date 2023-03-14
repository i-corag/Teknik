const projects = [
    {
        id: "1",
        name: "Ex-Cuartel Rossani Cultural Park, Bari, Italy",
        client: "ICIS S.R.L",
        objetive: "BIM modeling of four substations",
        description: `This project was carried out as a collaboration for I.C.I.S. s.r.l.  The detailed modeling of a total of four substations needed to be delivered within a deadline of 20 days.
        The substations are a set of underground structures to house different services, such as machinery rooms, warehouses and other services with a total of 30,000 m2 that will form part of an 80,000 m2 cultural eco-park located in the city of Bari, region of Puglia in southeast Italy.
        With our team of architects and BIM specialized engineers, and more than 700 hours of work in Revit, we were able to carry out the complete documentation of the substations of the project. Beams, columns, foundation slabs, foundation plates and reinforced concrete partitions, reinforcement details, calculations and quantification of steel bars for construction were modeled.
        Below are some of the images of the drawings delivered, details of armor, the plan of the complex in its entirety and other details of interest.`,
        coverImg: "/assets/projects/project-1/caserma4.png",
        images: ["/assets/projects/project-1/caserma1.png", "/assets/projects/project-1/caserma2.png", "/assets/projects/project-1/caserma3.png", "/assets/projects/project-1/caserma4.png", "/assets/projects/project-1/caserma5.png"]
    },
    {
        id: "2",
        name: "New Industrial Plant MIRGOR, Buenos Aires, Argentina",
        client: "MIRGOR SACIFIA",
        objetive: "Design of industrial plant, crane bridge, pavement and pit for machinery room",
        description: `The work consisted on the development of the conceptual and basic engineering for quotation, including blueprints, spreadsheets and computations. A complete report of the ship was made, with structural verifications of both the roof and the foundations. 
        The direct analysis method DAM allowed us to take into account the considerations of instability, non-linearity geometric, collapse, rigidity and uncertainties for the determination of requests, efforts and reactions in elements. 
        It was also considered an expansion platform for the ship and the complete calculation of a crane bridge of 20m long and 40 tons as workload. 
        Some of the images taken from the file and deliverables are below, as well as photos of the ship during its construction.`,
        coverImg: "/assets/projects/project-2/mirgor2.png",
        images: ["/assets/projects/project-2/mirgor1.png", "/assets/projects/project-2/mirgor2.png", "/assets/projects/project-2/mirgor3.png", "/assets/projects/project-2/mirgor4.jpeg", "/assets/projects/project-2/mirgor5.jpeg"]
    },
    {
        id: "3",
        name: "Verification of antennas for new telecommunication systems installation",
        client: "CLARO PARAGUAY",
        objetive: "Diagnosis and structural verification of various antennas types",
        description: `In 2022 Claro Paraguay approved the replacement of its 4G data transmission equipment to a 5G network. 
        Potential overloads as a result of new components installations, risks due to lack of maintenance or construction errors jeopardized the stability of the structure, which is why a structural verification of the existing antennas was necessary.
        Teknik carried out the diagnosis and structural verification of more than 200 antennas: braced masts, self-supporting towers, monopoles, rooftop pedestals, among others.
        The reports submitted took into account all bending, shear, axial and torsion strains, and the effects of second and third order.
        The verifications were made under the actual regulations in Paraguay, Argentina and the USA ( NP 196; ANSI TIA 222 G; CIRSOC 306 2018-Regulation for the design of telecommunication antennas; CIRSOC 101 2005-Design loads, among others )`,
        coverImg: "/assets/projects/project-3/claro1.png",
        images: ["/assets/projects/project-3/claro1.png", "/assets/projects/project-3/claro2.png", "/assets/projects/project-3/claro3.jpg", "/assets/projects/project-3/claro4.jpg", "/assets/projects/project-3/claro5.png"]
    },
    {
        id: "4",
        name: "Manhole",
        client: "CHEDIACK",
        objetive: "Structural analysis",
        description: `Based on the executed geotechnical studies, the geometry arrangement, the pipes cover, the soil pressure, the actions due to the hydrostatic pressure, the live and permanent loads and the regulatory requirements, we carried out the modeling, analysis and verification of a manhole made of reinforced concrete. 
        The main objective was to define thicknesses and reinforcements of the structural elements to be used.Aspects related to the structural behavior of the manhole were analyzed, according to the geometric needs of the conduit, the soil characteristics, the depth and service conditions.
        The structural design and verification of the manhole enclosure were realized based on the characteristics of the area where the trace was located, evaluating the different functional and resistance states.Consequently, the analyzes involved the determination of the thrusts that will act on the system under permanent and variable actions that produce the stresses on the structures.`,
        coverImg: "/assets/projects/project-4/chediak1.jpg",
        images: ["/assets/projects/project-4/chediak1.jpg", "/assets/projects/project-4/chediak2.jpg", "/assets/projects/project-4/chediak3.jpg", "/assets/projects/project-4/chediak4.jpg"]
    },
    {
        id: "5",
        name: "Tunnel Liner",
        client: "CHEDIACK",
        objetive: "Structural analysis of the underground crossing between a storm channel and sewage pipe",
        description: `The structural analysis of the underground crossing between a storm channel and the maximum  sewer Ø800 of casing pipe formed by a liner tunnel of 1.6m in diameter was carried out. The upper edge of the liner is 40 cm from the lower edge of the storm channel.
        This report was limited to structural verification, making a special focus on the stress state and the element deformations that are part of this particular crossing, considering the characteristics of the emplacement area and functional states.
        Aspects related to the structural behavior of the storm channel when the soil is excavated below it for the passage of the casing pipe, the behavior of the tunnel liner under the action of the weight of soil above and the joint behavior between the storm channel, tunnel liner and the maximum sewer in service.`,
        coverImg: "/assets/projects/project-5/tunnel1.png",
        images: ["/assets/projects/project-5/tunnel1.png", "/assets/projects/project-5/tunnel2.png", "/assets/projects/project-5/tunnel3.png", "/assets/projects/project-5/tunnel4.png"]
    },
    {
        id: "6",
        name: "La Fabrica",
        client: "FHS INGENIERIA",
        objetive: "Modeling and analysis of a liveable complex made of CLT panels",
        description: `'La Fabrica' is a mixed-use complex located in the city of Santiago de Chile, Chile. It consists of 4 buildings, arranged evenly, covering approximately 48,000 m2.
        Each unit consists of 3 underground floors for parking, 2 floors of reinforced concrete, followed by 6 floors designed in CLT(Cross- Laminated Timber).At the time of design, consideration was given to the elevator cores.
        For the development of the model in CLT, the modules associated with RFEM5 were used.`,
        coverImg: "/assets/projects/project-6/LaFabrica1.jpg",
        images: ["/assets/projects/project-6/LaFabrica1.jpg", "/assets/projects/project-6/LaFabrica2.jpg", "/assets/projects/project-6/LaFabrica3.jpg", "/assets/projects/project-6/LaFabrica4.jpg", "/assets/projects/project-6/LaFabrica5.jpg"]
    },
    {
        id: "7",
        name: "Sports Centre Caleta Olivia",
        client: "ING. GUILLERMO GERBAUDO ",
        objetive: "Modeling, analysis, design, complete documentation and details in Revit",
        description: `From the initial sketches of the structure, Teknik performed the complete modeling of the complex in RFEM5.
        The complete design of the structure was executed, as well as its analysis against earthquakes and wind forces of more than 320 km/h. A complete report of the sports center was delivered, including  structural verifications of the roofs, foundations, thicknesses and reinforcements of the designed elements.
        We also developed the complete model in Revit 2022 and from it obtained the plans and material calculations of the details of piles, heads, columns, foundation beams, partitions, column starts.`,
        coverImg: "/assets/projects/project-7/Poli1.jpg",
        images: ["/assets/projects/project-7/Poli1.jpg", "/assets/projects/project-7/Poli2.jpg", "/assets/projects/project-7/Poli3.png", "/assets/projects/project-7/Poli4.png", "/assets/projects/project-7/Poli5.png"]
    },
    {
        id: "8",
        name: "Pump Station",
        client: "PUBLIC SERVICES MINISTRY",
        objetive: "Structural design of the pump station",
        description: `A system of reinforced concrete gantries was designed to resist vertical and horizontal actions from the corresponding level to the natural ground (elevation 506.90). From that point, and towards the underground, in excavation, the load-bearing structure is made up of reinforced concrete partitions of 30 and 25 cm of thickness, depending on the load, height, water and  soil contact, and service conditions as well.
        Added to the traditional loads, emphasis was made on the equipment and trucks overloads, hydrostatic pressure, flooding and soil pressure. Other considerations were the weight of a 4cm flooring, enclosure masonry, and a 2500-liter tank with its support structure.`,
        coverImg: "/assets/projects/project-8/ministerio1.png",
        images: ["/assets/projects/project-8/ministerio1.png", "/assets/projects/project-8/ministerio2.png", "/assets/projects/project-8/ministerio3.png", "/assets/projects/project-8/ministerio4.png", "/assets/projects/project-8/ministerio5.png"]
    },
    {
        id: "9",
        name: "Duplex Lanus",
        client: "VILLA WARCALDE",
        objetive: "Full duplex gantry design",
        description: `For this project we carried out the complete calculation of the reinforced concrete structure including its foundations.
        Ultimate Limit State combinations, expressed in the CIRSOC 201-2005 regulation, were used for the dimensioning of the structural elements.
        Soil studies were considered to determine the physical-mechanical properties of the soil, in order to choose the correct type of foundation and the admissible stresses of the underground. In accordance with that,  it was decided to use indirect foundations, with a foundation elevation of -8.00 meters.`,
        coverImg: "/assets/projects/project-9/duplex1.png",
        images: ["/assets/projects/project-9/duplex1.png", "/assets/projects/project-9/duplex2.png", "/assets/projects/project-9/duplex3.png", "/assets/projects/project-9/duplex4.png"]
    },
    {
        id: "10",
        name: "Escenario Balneario Río Tercero",
        client: "ING-COR",
        objetive: "Structural calculation of a stage",
        description: `We used Ultimate Limit State combinations, expressed in the CIRSOC 201-2005 regulation, for the dimensioning of the structural elements.
        We analyzed the permanent acting loads (its own weight from the steel elements), permanent accessory load, roof overload and wind action. Due to the structure's weight, more relevance was given to the influence of the wind over the action of the earthquake.
        The admissible soil stresses, the suction conditions of the structure and the overturning footings were also verified.`,
        coverImg: "/assets/projects/project-10/ingcor1.jpg",
        images: ["/assets/projects/project-10/ingcor1.jpg", "/assets/projects/project-10/ingcor2.png", "/assets/projects/project-10/ingcor3.png", "/assets/projects/project-10/ingcor4.png", "/assets/projects/project-10/ingcor5.png"]
    },
];

module.exports = { projects };