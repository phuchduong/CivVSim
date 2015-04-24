var technologies = {
    Habitation: {
        Position: {
            Node: 0,
            Oclock: 0,
            Leaf: 0
        },
        Enables: {
            Engineering: 1,
            Physics: 1,
            Chemistry: 1,
            Genetics: 1,
            Ecology: 1
        },
        Buildings: {
            "Old Earth Relic": 1,
            Clinic: 1
        },
        Units: {
            Worker: 1,
            Explorer: 1,
            Soldier: 1
        },
        Leaf: {
            Pioneering: 1,
            "Planetary Survey": 1
        }
    },
    Pioneering: {
        Position: {
            Node: 0,
            Oclock: 0,
            Leaf: 1
        },
        Science: 80,
        Node: "Habitation",
        Buildings: {
            "Trade Depot": 1
        },
        Units: {
            Colonist: 1,
            "Trade Convoy": 1,
            "Trade Vessel": 1
        }
    },
    "Planetary Survey": {
        Position: {
            Node: 0,
            Oclock: 0,
            Leaf: 2
        },
        Science: 80,
        Node: "Habitation",
        Effect: {
            Units: {
                Description: "Allows land units to embark and cross water tiles."
            }
        },
        "Tile Improvement": {
            "Work Barge": {
                Units: "Worker",
                Coral: {
                    Science: 1,
                    Production: 1
                },
                Algae: {
                    Food: 1
                },
                Description: "{Tile Improvement|yellow} buildable by {Worker|pink} units on {Coral|orange} and {Algae|orange} resources. Provides: [newline] [list-item] 1 [science] Science, 1 [production] Production on [coral] Coral. [list-item] 1 [food] Food on [algae] Algae."
            
}        }
    },
    Ecology: {
        Position: {
            Node: 1,
            Oclock: 4,
            Leaf: 0
        },
        Enables: {
            Computing: 1,
            Terraforming: 1,
            "Alien Sciences": 1
        },
        Science: 95,
        Buildings: {
            Vivarium: 1,
            "Ultrasonic Fence": 1
        },
        Units: {
            "Miasmic Repulsor": 1
        },
        Leaf: {
            Geophysics: 1,
            "Alien Biology": 1
        }
    },
    Geophysics: {
        Position: {
            Node: 1,
            Oclock: 4,
            Leaf: 1
        },
        Science: 249,
        Node: "Ecology",
        "Tile Improvement": {
            "Geothermal Well": {
                Description: "GEOTHERMAL WELL [linebreak] {Tile Improvement|yellow} buildable by {Worker|pink} units on {Geothermal|orange} resources. [newline] [newline] Adds the [geothermal] {Geothermal|orange} quantity to your global total."
            }
        },
        Resource: "Geothermal"
    },
    "Alien Biology": {
        Position: {
            Node: 1,
            Oclock: 4,
            Leaf: 2
        },
        Science: 249,
        Node: "Ecology",
        Affinity: {
            Harmony: 12
        },
        "Tile Improvement": {
            "Clear Miasma": {
                Units: "Worker",
                Description: "Clear Miasma."
            }
        },
        Effect: {
            Miasma: {
                Immunity: 1,
                Description: "Allows {green} Worker Miasma Immunity {white} [newline] [newline] (Worker Units Take No Damage From Miasma.)"
            }
        },
        Description: "Grants Worker units {yellow} immunity to Miasma damage."
    },
    Genetics: {
        Position: {
            Node: 1,
            Oclock: 2,
            Leaf: 0
        },
        Enables: {
            "Alien Sciences": 1,
            "Genetic Design": 1,
            Cognition: 1
        },
        Science: 95,
        Buildings: {
            Cytonursery: 1,
            Pharmalab: 1
        },
        Leaf: {
            "Alien Lifeforms": 1,
            "Genetic Mapping": 1
        }
    },
    "Alien Lifeforms": {
        Position: {
            Node: 1,
            Oclock: 2,
            Leaf: 1
        },
        Science: 249,
        Node: "Genetics",
        Buildings: {
            "Alien Preserve": 1
        },
        Effect: {
            Paddock: {
                Culture: 1
            }
        }
    },
    "Genetic Mapping": {
        Position: {
            Node: 1,
            Oclock: 2,
            Leaf: 2
        },
        Science: 249,
        Node: "Genetics",
        Buildings: {
            "Gene Vault": 1
        },
        Affinity: {
            Purity: 12
        }
    },
    Chemistry: {
        Position: {
            Node: 1,
            Oclock: 12,
            Leaf: 0
        },
        Enables: {
            Biology: 1,
            Organics: 1
        },
        Science: 95,
        Buildings: {
            Laboratory: 1,
            Recycler: 1
        },
        Leaf: {
            Biochemistry: 1
        },
        Resource: "Petroleum",
        "Tile Improvement": {
            "Petroleum Well": {
                Units: "Worker",
                Maintenance: 2,
                Health: -1,
                Resource: {
                    Petroleum: "x"
                },
                Description: "PETROLEUM WELL [linebreak] {Tile Improvement|yellow} buildable by {Worker|pink} units on {Petroleum|orange} resources. [newline] [newline] Adds the [petroleum] {Petroleum|orange} quantity to your global total. [linebreak] Maintenance: [energy] 2 [unhealth] 1"
            }
        }
    },
    Biochemistry: {
        Position: {
            Node: 1,
            Oclock: 12,
            Leaf: 1
        },
        Science: 249,
        Node: "Chemistry",
        Buildings: {
            "Water Refinery": 1,
            "Petrochemical Plant": 1
        }
    },
    Physics: {
        Position: {
            Node: 1,
            Oclock: 10,
            Leaf: 0
        },
        Enables: {
            Bionics: 1,
            Robotics: 1
        },
        Science: 95,
        Buildings: {
            Observatory: 1,
            "Launch Complex": 1
        },
        Units: {
            Ranger: 1
        },
        Leaf: {
            Ballistics: 1
        },
        Effect: {
            Quarry: {
                Production: 1
            }
        }
    },
    Ballistics: {
        Position: {
            Node: 1,
            Oclock: 10,
            Leaf: 1
        },
        Science: 249,
        Node: "Physics",
        Buildings: {
            "Rocket Battery": 1,
            "Stellar Codex": 1
        }
    },
    Engineering: {
        Position: {
            Node: 1,
            Oclock: 8,
            Leaf: 0
        },
        Enables: {
            Robotics: 1,
            Computing: 1,
            Fabrication: 1
        },
        Science: 95,
        Buildings: {
            "Thorium Reactor": 1,
            "Repair Facility": 1
        },
        Units: {
            "Combat Rover": 1
        },
        Resource: "Titanium",
        Leaf: {
            "Power Systems": 1,
            "Defense Grid": 1
        }
    },
    "Power Systems": {
        Position: {
            Node: 1,
            Oclock: 8,
            Leaf: 1
        },
        Science: 249,
        Node: "Engineering",
        Effect: {
            "Geothermal Well": {
                Energy: 1
            },
            Quarry: {
                Production: 1
            }
        },
        Affinity: {
            Supremacy: 12
        }
    },
    "Defense Grid": {
        Position: {
            Node: 1,
            Oclock: 8,
            Leaf: 2
        },
        Science: 249,
        Node: "Engineering",
        Buildings: {
            "Defense Perimeter": 1,
            Panopticon: 1
        }
    },
    Computing: {
        Position: {
            Node: 1,
            Oclock: 6,
            Leaf: 0
        },
        Enables: {
            Ecology: 1,
            Engineering: 1,
            Communications: 1,
            "Artificial Intelligence": 1
        },
        Science: 380,
        Buildings: {
            "Spy Agency": 1,
            Network: 1
        },
        Units: {
            "Missile Rover": 1,
            Gunboat: 1
        },
        Leaf: {
            "Autonomous Systems": 1,
            "Transcendental Math": 1
        }
    },
    "Autonomous Systems": {
        Position: {
            Node: 1,
            Oclock: 6,
            Leaf: 1
        },
        Science: 770,
        Node: "Computing",
        Affinity: {
            Supremacy: 18
        },
        Buildings: {
            "Master Control": 1
        },
        "Tile Improvement": {
            Node: {
                Units: "Worker",
                Terrain: "Any",
                Effect: {
                    "Adjacent Unit Heal 20": 1
                },
                Energy: 2,
                Description: "NODE [linebreak] {Tile Improvement|yellow} buildable by {Worker|pink} units on any terrain. Provides [newline] [list-item] +20 HP heal for adjacent units every turn [linebreak] {Yields:|green} [energy] 2"
            }
        }
    },
    "Transcendental Math": {
        Position: {
            Node: 1,
            Oclock: 6,
            Leaf: 2
        },
        Science: 770,
        Node: "Computing",
        Buildings: {
            "Transcendental Equation": 1
        },
        Description: "Allows discovery of the Transcendental Equation and commencement of the Contact Victory."
    },
    Biology: {
        Position: {
            Node: 2,
            Oclock: 11,
            Leaf: 0
        },
        Enables: {
            Chemistry: 1,
            Bionics: 1,
            Bioengineering: 1,
            Organics: 1
        },
        Science: 770,
        Buildings: {
            "Biofuel Plant": 1,
            Growlab: 1
        },
        "Tile Improvement": {
            Dome: {
                Units: "Worker",
                Terrain: "Any",
                Description: "[Tile Improvement] buildable by [Worker] units on any terrain. Provides: +10 City Hit Points.",
                Effect: {
                    "City Hit Points 10": 1
                },
                Yields: {
                    Culture: 2
                },
                Maintenance: 2
            }
        },
        Leaf: {
            "Vertical Farming": 1
        }
    },
    "Vertical Farming": {
        Position: {
            Node: 2,
            Oclock: 11,
            Leaf: 1
        },
        Science: 1160,
        Node: "Biology",
        Affinity: {
            Purity: 25
        },
        Effect: {
            Farm: {
                Energy: 1,
                Food: 1
            }
        }
    },
    Organics: {
        Position: {
            Node: 2,
            Oclock: 12,
            Leaf: 0
        },
        Enables: {
            Chemistry: 1,
            Biology: 1,
            Bioengineering: 1,
            Synergetics: 1,
            Cognition: 1
        },
        Science: 770,
        Buildings: {
            Biofactory: 1,
            "Mass Digester": 1
        },
        Effect: {
            Generator: {
                Energy: 1
            }
        },
        Leaf: {
            Photosystems: 1
        }
    },
    Photosystems: {
        Position: {
            Node: 2,
            Oclock: 12,
            Leaf: 1
        },
        Science: 1160,
        Node: "Organics",
        Affinity: {
            Harmony: 25
        },
        Units: {
            "Solar Collector": 1
        },
        Effect: {
            Plantation: {
                Food: 1
            }
        }
    },
    Cognition: {
        Position: {
            Node: 2,
            Oclock: 1,
            Leaf: 0
        },
        Enables: {
            Genetics: 1,
            Organics: 1,
            "Social Dynamics": 1
        },
        Science: 770,
        Buildings: {
            Neurolab: 1,
            Holosuite: 1
        },
        "Tile Improvement": {
            Academy: {
                Units: "Worker",
                Terrain: "Any",
                Description: "[Tile Improvement] buildable by [Worker] units on any terrain. Provides: +2 Science Points.",
                Effect: {
                    "City Hit Points 10": 1
                },
                Yields: {
                    Science: 3
                },
                Maintenance: 2
            }
        },
        Leaf: {
            "Collaborative Thought": 1
        }
    },
    "Collaborative Thought": {
        Position: {
            Node: 2,
            Oclock: 1,
            Leaf: 1
        },
        Science: 1160,
        Node: "Cognition",
        Affinity: {
            Supremacy: 25
        },
        Buildings: {
            "Precog Project": 1
        },
        Description: "Unlocks the Precog Project Wonder."
    },
    "Genetic Design": {
        Position: {
            Node: 2,
            Oclock: 2,
            Leaf: 0
        },
        Enables: {
            Genetics: 1,
            "Social Dynamics": 1,
            Transgenics: 1
        },
        Science: 254,
        Buildings: {
            "Gene Garden": 1,
            "Cloning Plant": 1,
            "Ectogenesis Pod": 1
        },
        Leaf: {
            "Alien Genetics": 1
        }
    },
    "Alien Genetics": {
        Position: {
            Node: 2,
            Oclock: 2,
            Leaf: 1
        },
        Science: 770,
        Node: "Genetic Design",
        Affinity: {
            Purity: 18
        },
        Effect: {
            Biowell: {
                Culture: 1
            },
            "Xenomass Well": {
                Science: 1
            }
        }
    },
    "Alien Sciences": {
        Position: {
            Node: 2,
            Oclock: 3,
            Leaf: 0
        },
        Enables: {
            Genetics: 1,
            Ecology: 1,
            "Alien Ethics": 1
        },
        Science: 254,
        Buildings: {
            "Xenofuel Plant": 1,
            Xenonursery: 1
        },
        Leaf: {
            "Alien Adaptation": 1,
            "Alien Ecology": 1
        },
        "Tile Improvement": {
            "Xenomass Well": {
                Description: "Tile Improvement buildable by Worker units on Xenomass resources.",
                Effect: {
                    Description: "Adds the Xenomass quantity to your global total."
                },
                Maintenance: 2
            }
        }
    },
    "Alien Adaptation": {
        Position: {
            Node: 2,
            Oclock: 3,
            Leaf: 1
        },
        Science: 770,
        Node: "Alien Sciences",
        Affinity: {
            Harmony: 18
        },
        Units: {
            "Xeno Swarm": 1
        }
    },
    "Alien Ecology": {
        Position: {
            Node: 2,
            Oclock: 3,
            Leaf: 2
        },
        Science: 770,
        Node: "Alien Sciences",
        Units: {
            "Miasmic Condenser": 1
        },
        "Tile Improvement": {
            "Add Miasma": {
                Description: "Allows Workers to Add Miasma on any tile.",
                Effect: {
                    Miasma: 1
                }
            }
        }
    },
    Terraforming: {
        Position: {
            Node: 2,
            Oclock: 4,
            Leaf: 0
        },
        Enables: {
            Ecology: 1,
            "Planetary Engineering": 1
        },
        Science: 770,
        Buildings: {
            "Gaian Well": 1
        },
        Leaf: {
            Biospheres: 1,
            "Climate Control": 1
        },
        "Tile Improvement": {
            Terrascape: {
                Description: "Tile Improvement buildable by Worker units on any terrain. Provides:",
                Food: 2,
                Production: 2,
                Culture: 2,
                Yields: {
                    Food: 2,
                    Production: 2,
                    Culture: 2
                },
                Maintenance: 6,
                Description: "{red} Cannot coexist with Miasma."
            },
            "Floatstone Quarry": {
                Description: "Tile Improvement buildable by Worker units on Floatstone resources.",
                Effect: {
                    Description: "Adds the Xenomass quantity to your global total."
                }
            }
        }
    },
    Biospheres: {
        Position: {
            Node: 2,
            Oclock: 4,
            Leaf: 1
        },
        Science: 1160,
        Node: "Terraforming",
        Affinity: {
            Purity: 25
        },
        Effect: {
            City: {
                "Food Carryover": .1,
                Description: "+10% [food] Food carried over after city growth in all cities."
            },
            Dome: {
                Energy: 1
            }
        },
        Description: "Carries over 10% of a City's [food] Food after City Growth."
    },
    "Climate Control": {
        Position: {
            Node: 2,
            Oclock: 4,
            Leaf: 2
        },
        Science: 1160,
        Node: "Terraforming",
        Affinity: {
            Supremacy: 25
        },
        Units: {
            "Weather Controller": 1
        }
    },
    Communications: {
        Position: {
            Node: 2,
            Oclock: 5,
            Leaf: 0
        },
        Enables: {
            "Field Theory": 1
        },
        Science: 770,
        Leaf: {
            "Orbital Networks": 1
        },
        Units: {
            "Tacnet Hub": 1
        },
        Buildings: {
            "Command Center": 1,
            "Feedsite Hub": 1
        },
        "Tile Improvement": {
            Array: {
                Description: "Tile Improvement buildable by Worker units on any terrain. Provides:",
                Effect: {
                    City: {
                        "Orbital Coverage": 1
                    },
                    Description: "+1 City Orbital Coverage"
                },
                Yields: {
                    Science: 1,
                    Energy: 1
                }
            }
        }
    },
    "Orbital Networks": {
        Position: {
            Node: 2,
            Oclock: 5,
            Leaf: 1
        },
        Science: 1160,
        Node: "Communications",
        Buildings: {
            Memetwork: 1
        },
        Units: {
            "Lasercom Satellite": 1
        }
    },
    "Artificial Intelligence": {
        Position: {
            Node: 2,
            Oclock: 6,
            Leaf: 0
        },
        Enables: {
            Computing: 1,
            Fabrication: 1,
            Hypercomputing: 1
        },
        Science: 770,
        Leaf: {
            "Synthetic Thought": 1,
            "Swarm Intelligence": 1
        },
        Buildings: {
            "CEL Cradle": 1,
            "Surveillance Web": 1,
            "Markov Eclipse": 1
        }
    },
    "Synthetic Thought": {
        Position: {
            Node: 2,
            Oclock: 6,
            Leaf: 1
        },
        Science: 1160,
        Node: "Artificial Intelligence",
        Affinity: {
            Supremacy: 25
        },
        Buildings: {
            Cynosure: 1
        },
        Units: {
            SABR: 1
        }
    },
    "Swarm Intelligence": {
        Position: {
            Node: 2,
            Oclock: 6,
            Leaf: 2
        },
        Science: 1160,
        Node: "Artificial Intelligence",
        Affinity: {
            Harmony: 25
        },
        Buildings: {
            Bytegeist: 1
        }
    },
    Fabrication: {
        Position: {
            Node: 2,
            Oclock: 7,
            Leaf: 0
        },
        Enables: {
            Engineering: 1,
            "Artificial Intelligence": 1,
            Mechatronics: 1,
            Cybernetics: 1
        },
        Science: 770,
        Leaf: {
            "Civil Support": 1
        },
        Buildings: {
            "Alloy Foundry": 1
        },
        Units: {
            Carrier: 1
        },
        "Tile Improvement": {
            Magrail: {
                Description: "Construct Magrail"
            }
        }
    },
    "Civil Support": {
        Position: {
            Node: 2,
            Oclock: 7,
            Leaf: 1
        },
        Science: 1160,
        Node: "Fabrication",
        Affinity: {
            Purity: 25
        },
        Units: {
            Holomatrix: 1
        }
    },
    Mechatronics: {
        Position: {
            Node: 2,
            Oclock: 8,
            Leaf: 0
        },
        Enables: {
            Robotics: 1,
            Fabrication: 1,
            Astrodynamics: 1
        },
        Science: 1160,
        Leaf: {
            "Mobile LEV": 1,
            "Ballistic LEV": 1
        },
        Buildings: {
            "LEV Plant": 1,
            "Optical Surgery": 1,
            Crawler: 1
        }
    },
    "Mobile LEV": {
        Position: {
            Node: 2,
            Oclock: 8,
            Leaf: 1
        },
        Science: 1820,
        Node: "Mechatronics",
        Affinity: {
            Purity: 32
        },
        Units: {
            "LEV Tank": 1
        }
    },
    "Ballistic LEV": {
        Position: {
            Node: 2,
            Oclock: 8,
            Leaf: 2
        },
        Science: 1820,
        Node: "Mechatronics",
        Buildings: {
            "Mass Driver": 1
        }
    },
    Robotics: {
        Position: {
            Node: 2,
            Oclock: 9,
            Leaf: 0
        },
        Enables: {
            Engineering: 1,
            Physics: 1,
            Mechatronics: 1,
            Bionics: 1,
            Nanotechnology: 1
        },
        Science: 254,
        Leaf: {
            "Tactical Robotics": 1,
            "Swarm Robotics": 1
        },
        Buildings: {
            Autoplant: 1
        },
        Units: {
            Tacjet: 1
        },
        "Tile Improvement": {
            "Firaxite Mine": {
                Description: "Tile Improvement buildable by Worker units on Firaxite resources.",
                Units: "Worker",
                Resource: "Firaxite",
                Effect: {
                    "Adds the Firaxite quantity to your global total.": 1
                },
                Maintenance: 2
            },
            Manufactory: {
                Description: "Tile Improvement buildable by Worker units on any terrain. Provides:",
                Units: "Worker",
                Production: 2,
                Yields: {
                    Production: 3
                },
                Maintenance: 2,
                Health: -2
            }
        }
    },
    "Tactical Robotics": {
        Position: {
            Node: 2,
            Oclock: 9,
            Leaf: 1
        },
        Science: 770,
        Node: "Robotics",
        Affinity: {
            Supremacy: 18
        },
        Units: {
            CNDR: 1
        }
    },
    "Swarm Robotics": {
        Position: {
            Node: 2,
            Oclock: 9,
            Leaf: 2
        },
        Science: 770,
        Node: "Robotics",
        Affinity: {
            Harmony: 18
        },
        Buildings: {
            "Drone Sphere": 1
        },
        Discovery: {
            "Transcendence victory": 1
        },
        Description: "Required to complete the Transcendence victory."
    },
    Bionics: {
        Position: {
            Node: 2,
            Oclock: 10,
            Leaf: 0
        },
        Enables: {
            Physics: 1,
            Robotics: 1,
            Biology: 1,
            Augmentation: 1
        },
        Science: 770,
        Leaf: {
            Servomachinery: 1,
            "Tissue Engineering": 1
        },
        Buildings: {
            "Bionics Lab": 1,
            Institute: 1
        },
        "Tile Improvement": {
            Biowell: {
                Description: "Tile Improvement buildable by Worker units on any terrain. Provides:",
                Units: "Worker",
                Health: 1,
                Yeilds: {
                    Food: 2
                },
                Maintenance: 2
            }
        }
    },
    Servomachinery: {
        Position: {
            Node: 2,
            Oclock: 10,
            Leaf: 1
        },
        Science: 1160,
        Node: "Bionics",
        Affinity: {
            Purity: 25
        },
        Units: {
            Battlesuit: 1
        }
    },
    "Tissue Engineering": {
        Position: {
            Node: 2,
            Oclock: 10,
            Leaf: 2
        },
        Science: 1160,
        Node: "Bionics",
        Affinity: {
            Harmony: 25
        },
        Effect: {
            Units: {
                Heal: 10,
                Restriction: "None",
                Description: "+10 Healing for all units."
            }
        },
        Description: "Allows units to heal faster."
    },
    Bioengineering: {
        Position: {
            Node: 3,
            Oclock: 11.5,
            Leaf: 0
        },
        Enables: {
            Biology: 1,
            Organics: 1
        },
        Science: 2480,
        Leaf: {
            "Industrial Ecology": 1,
            Biometallurgy: 1
        },
        Buildings: {
            "Molecular Forge": 1,
            "Bioglass Furnace": 1,
            Xenomalleum: 1
        }
    },
    "Industrial Ecology": {
        Position: {
            Node: 3,
            Oclock: 11.5,
            Leaf: 1
        },
        Science: 3216,
        Node: "Bioengineering",
        Affinity: {
            Purity: 40
        },
        Effect: {
            Farm: {
                Production: 1
            }
        }
    },
    Biometallurgy: {
        Position: {
            Node: 3,
            Oclock: 11.5,
            Leaf: 2
        },
        Science: 3216,
        Node: "Bioengineering",
        Affinity: {
            Supremacy: 40
        },
        Effect: {
            Generator: {
                Science: 1
            },
            Mine: {
                Energy: 1
            }
        }
    },
    Synergetics: {
        Position: {
            Node: 3,
            Oclock: .5,
            Leaf: 0
        },
        Science: 2480,
        Leaf: {
            "Designer Lifeforms": 1
        },
        Buildings: {
            "Microbial Mine": 1,
            "Organ Printer": 1,
            Armasail: 1
        }
    },
    "Designer Lifeforms": {
        Position: {
            Node: 3,
            Oclock: .5,
            Leaf: 1
        },
        Science: 3216,
        Node: "Synergetics",
        Affinity: {
            Harmony: 40
        },
        Units: {
            Rocktopus: 1
        }
    },
    "Social Dynamics": {
        Position: {
            Node: 3,
            Oclock: 1.5,
            Leaf: 0
        },
        Enables: {
            Cognition: 1,
            "Genetic Design": 1
        },
        Science: 2480,
        Leaf: {
            "Human Idealism": 1,
            "Human Conservation": 1,
            Euthenics: 1
        },
        Buildings: {
            "Civil Creche": 1,
            "Soma Distillery": 1,
            "Terra Vault": 1
        }
    },
    "Human Idealism": {
        Position: {
            Node: 3,
            Oclock: 1.5,
            Leaf: 1
        },
        Science: 3216,
        Node: "Social Dynamics",
        Buildings: {
            "New Terran Myth": 1
        }
    },
    "Human Conservation": {
        Position: {
            Node: 3,
            Oclock: 1.5,
            Leaf: 2
        },
        Science: 3216,
        Node: "Social Dynamics",
        Affinity: {
            Purity: 40
        },
        Buildings: {
            "Deep Memory": 1
        }
    },
    Euthenics: {
        Position: {
            Node: 3,
            Oclock: 1.5,
            Leaf: 3
        },
        Science: 3216,
        Node: "Social Dynamics",
        Affinity: {
            Supremacy: 40
        },
        Buildings: {
            "Human Hive": 1
        }
    },
    Transgenics: {
        Position: {
            Node: 3,
            Oclock: 2.5,
            Leaf: 0
        },
        Enables: {
            "Genetic Design": 1,
            "Artificial Evolution": 1
        },
        Science: 1160,
        Leaf: {
            Photogenetics: 1,
            "Alien Hybridization": 1
        },
        Buildings: {
            "Gene Smelter": 1,
            Promethean: 1
        },
        Description: "Required to complete the Transcendence victory."
    },
    Photogenetics: {
        Position: {
            Node: 3,
            Oclock: 2.5,
            Leaf: 1
        },
        Science: 1820,
        Node: "Transgenics",
        Affinity: {
            Supremacy: 32
        },
        Effect: {
            Academy: {
                Culture: 1
            }
        }
    },
    "Alien Hybridization": {
        Position: {
            Node: 3,
            Oclock: 2.5,
            Leaf: 2
        },
        Science: 1820,
        Node: "Transgenics",
        Affinity: {
            Harmony: 32
        },
        Effect: {
            Miasma: {
                Heal: 10,
                Description: "+10 Healing for all units in Miasma, and immunity from Miasma"
            }
        },
        Description: "Allows Units to heal in Miasma."
    },
    "Artificial Evolution": {
        Position: {
            Node: 4,
            Oclock: 2.75,
            Leaf: 0
        },
        Enables: {
            Transgenics: 1,
            "Alien Ethics": 1
        },
        Science: 2480,
        Leaf: {
            "Alien Evolution": 1,
            "Alien Materials": 1
        },
        Buildings: {
            "Progenitor Garden": 1,
            "Resurrection Device": 1
        },
        Effect: {
            Farm: {
                Science: 1
            }
        }
    },
    "Alien Evolution": {
        Position: {
            Node: 4,
            Oclock: 2.75,
            Leaf: 1
        },
        Science: 3216,
        Node: "Artificial Evolution",
        Affinity: {
            Harmony: 40
        },
        Units: {
            "Xeno Titan": 1
        }
    },
    "Alien Materials": {
        Position: {
            Node: 4,
            Oclock: 2.75,
            Leaf: 2
        },
        Science: 1820,
        Node: "Artificial Evolution",
        Affinity: {
            Supremacy: 40
        },
        Buildings: {
            Xenonova: 1
        }
    },
    "Alien Ethics": {
        Position: {
            Node: 3,
            Oclock: 3.25,
            Leaf: 0
        },
        Enables: {
            "Alien Sciences": 1,
            "Planetary Engineering": 1,
            "Artificial Evolution": 1
        },
        Science: 1160,
        Leaf: {
            "Alien Domestication": 1
        },
        Buildings: {
            "Xeno Sanctuary": 1,
            "Mind Stem": 1,
            Xenodrome: 1
        }
    },
    "Alien Domestication": {
        Position: {
            Node: 3,
            Oclock: 3.25,
            Leaf: 1
        },
        Science: 1820,
        Node: "Alien Ethics",
        Affinity: {
            Harmony: 32
        },
        Units: {
            "Xeno Cavalry": 1
        },
        Effect: {
            "Xenomass Well": {
                Culture: 1
            }
        }
    },
    "Planetary Engineering": {
        Position: {
            Node: 3,
            Oclock: 4,
            Leaf: 0
        },
        Enables: {
            Terraforming: 1,
            "Alien Ethics": 1
        },
        Science: 2480,
        Leaf: {
            Geoscaping: 1,
            "Seismic Induction": 1
        },
        Buildings: {
            Borehole: 1
        },
        Effect: {
            Generator: {
                Production: 1
            }
        }
    },
    Geoscaping: {
        Position: {
            Node: 3,
            Oclock: 4,
            Leaf: 1
        },
        Science: 3216,
        Node: "Planetary Engineering",
        Affinity: {
            Supremacy: 40
        },
        Units: {
            "Orbital Fabricator": 1
        }
    },
    "Seismic Induction": {
        Position: {
            Node: 3,
            Oclock: 4,
            Leaf: 2
        },
        Science: 3216,
        Node: "Planetary Engineering",
        Affinity: {
            Purity: 40
        },
        Buildings: {
            "Archimedes Lever": 1
        }
    },
    "Field Theory": {
        Position: {
            Node: 3,
            Oclock: 5,
            Leaf: 0
        },
        Science: 2480,
        Leaf: {
            "Exotic Matter": 1
        },
        Buildings: {
            "Field Reactor": 1,
            Mantle: 1,
            "Quantum Computer": 1
        }
    },
    "Exotic Matter": {
        Position: {
            Node: 3,
            Oclock: 5,
            Leaf: 1
        },
        Science: 3216,
        Node: "Field Theory",
        Affinity: {
            Harmony: 40
        },
        Buildings: {
            Ansible: 1
        }
    },
    Hypercomputing: {
        Position: {
            Node: 3,
            Oclock: 6,
            Leaf: 0
        },
        Science: 2480,
        Leaf: {
            Hyperconductors: 1,
            "Neural Uploading": 1
        },
        Buildings: {
            Hypercore: 1,
            "Emancipation Gate": 1
        },
        Effect: {
            Node: {
                Science: 1
            }
        }
    },
    Hyperconductors: {
        Position: {
            Node: 3,
            Oclock: 6,
            Leaf: 1
        },
        Science: 3216,
        Node: "Hypercomputing",
        Affinity: {
            Purity: 40
        },
        Buildings: {
            "Holon Chamber": 1
        }
    },
    "Neural Uploading": {
        Position: {
            Node: 3,
            Oclock: 6,
            Leaf: 2
        },
        Science: 3216,
        Node: "Hypercomputing",
        Affinity: {
            Supremacy: 40
        },
        Units: {
            ANGEL: 1
        }
    },
    Cybernetics: {
        Position: {
            Node: 3,
            Oclock: 7,
            Leaf: 0
        },
        Science: 2480,
        Leaf: {
            Autogyros: 1,
            Metamaterials: 1
        },
        Buildings: {
            "Node Bank": 1
        },
        Units: {
            "Orbital Laser": 1,
            "Phasal Transporter": 1
        }
    },
    Autogyros: {
        Position: {
            Node: 3,
            Oclock: 7,
            Leaf: 1
        },
        Science: 3216,
        Node: "Cybernetics",
        Affinity: {
            Supremacy: 40
        },
        Units: {
            CARVR: 1
        }
    },
    Metamaterials: {
        Position: {
            Node: 3,
            Oclock: 7,
            Leaf: 2
        },
        Science: 3216,
        Node: "Cybernetics",
        Affinity: {
            Harmony: 40
        },
        Buildings: {
            "Tectonic Anvil": 1
        }
    },
    Astrodynamics: {
        Position: {
            Node: 3,
            Oclock: 8,
            Leaf: 0
        },
        Science: 2480,
        Leaf: {
            "Orbital Automation": 1,
            "Dark Networks": 1
        },
        Buildings: {
            Neoplanetarium: 1,
            Skycrane: 1
        },
        Units: {
            "Planet Carver": 1
        }
    },
    "Orbital Automation": {
        Position: {
            Node: 3,
            Oclock: 8,
            Leaf: 1
        },
        Science: 3216,
        Node: "Astrodynamics",
        Units: {
            "Deep Space Telescope": 1
        },
        Effect: {
            Array: {
                Science: 1
            }
        }
    },
    "Dark Networks": {
        Position: {
            Node: 3,
            Oclock: 8,
            Leaf: 2
        },
        Science: 3216,
        Node: "Astrodynamics",
        Units: {
            "All-Seer": 1
        }
    },
    Nanotechnology: {
        Position: {
            Node: 3,
            Oclock: 9,
            Leaf: 0
        },
        Science: 2480,
        Leaf: {
            "Tactical LEV": 1,
            Nanorobotics: 1
        },
        Buildings: {
            Nanopasture: 1,
            Nanothermite: 1,
            "Exodus Gate": 1
        }
    },
    "Tactical LEV": {
        Position: {
            Node: 3,
            Oclock: 9,
            Leaf: 1
        },
        Science: 3216,
        Node: "Nanotechnology",
        Affinity: {
            Purity: 40
        },
        Units: {
            "LEV Destroyer": 1
        }
    },
    Nanorobotics: {
        Position: {
            Node: 3,
            Oclock: 9,
            Leaf: 2
        },
        Science: 3216,
        Node: "Nanotechnology",
        Affinity: {
            Harmony: 40
        },
        Effect: {
            Manufactory: {
                Science: 1
            }
        },
        Description: "Required to complete the Transcendence victory."
    },
    Augmentation: {
        Position: {
            Node: 3,
            Oclock: 10,
            Leaf: 0
        },
        Science: 2480,
        Leaf: {
            Surrogacy: 1
        },
        Buildings: {
            Augmentary: 1,
            "Daedalus Ladder": 1
        },
        Effect: {
            Generator: {
                Energy: 1
            }
        }
    },
    Surrogacy: {
        Position: {
            Node: 3,
            Oclock: 10,
            Leaf: 1
        },
        Science: 3216,
        Node: "Augmentation",
        Affinity: {
            Purity: 40
        },
        Units: {
            Aegis: 1
        },
        Effect: {
            Units: {
                speed: .1,
                Description: "+10% Worker Speed."
            }
        }
    }
};

var $body = $('body')

for(tech in technologies){
    if(technologies.hasOwnProperty(tech)){
        
    }
};