'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
let massiveCatsList = [{
  areaName: 'Agri-environmental science',
  subjects: [{
    subjectName: 'Agricultural systems',
    topics: ['Resource use efficiency', 'Sustainable agriculture', 'Forestry sylviculture', 'Short rotation coppice', 'Precision agriculture', 'Agricultural systems', 'Agricultural inputs', 'Agricultural wastes', 'Managed landscapes', 'Ecology/ecosystem', 'Cropping systems', 'Crops (non-food)', 'Grazing systems', 'Organic farming', 'Climate change', 'Biodiversity', 'Crops (food)', 'Horticulture', 'Aquaculture', 'Livestock']
  }, {
    subjectName: 'Crop protection',
    topics: ['(null)', 'Disease resistance (crops)', 'Herbicide resistant plants', 'Integrated pest management', 'Disease diagnosis (crops)', 'Disease control (crops)', 'Biological control', 'Invertebrate pests', 'Chemical ecology', 'Vertebrate pests', 'Crop protection', 'Natural enemies', 'Insecticides', 'Fungicides', 'Herbicides', 'Pesticides', 'Weeds']
  }, {
    subjectName: 'Crop science',
    topics: ['(null)', 'Genetically modified crops(GM)', 'Sustainable crop production', 'Resource use efficiency', 'Crop improvement', 'Oligosaccharides', 'Plant breeding', 'Crop genetics', 'Crop science', 'Horticulture', 'Cereals', 'Tilling']
  }, {
    subjectName: 'Earth & environmental',
    topics: ['(null)', 'Pollution/pollution control', 'Environmental protection', 'Atmosphericsciences', 'Earth & environmental', 'Environmental modelling', 'Environmental genetics', 'Environmental geology', 'Wastes management', 'Applied ecology', 'Aquatic ecology', 'Animal ecology', 'Bioclimatology', 'Climate change', 'Marine studies', 'Soil mechanics', 'Geomorphology', 'Human ecology', 'Palaeontology', 'Plant ecology', 'Biodiversity', 'Geochemistry', 'Oceanography', 'Climatology', 'Meteorology', 'Ecosystems', 'Geophysics', 'Glaciology', 'Mineralogy', 'Hydrology', 'Limnology', 'Pedology']
  }, {
    subjectName: 'Soil science',
    topics: ['(null)', 'Fertility fertilizers/manures', 'Soil chemistry & soil physics', 'Plant-soil interactions', 'Rhizosphere biology', 'Soil conservation', 'Soil microbiology', 'Rhizoremediation', 'Soil cultivation', 'Soil ecosystems', 'Soil management', 'Bioremediation', 'Organic matter', 'Soil pollution', 'Soil resources', 'Soil structure', 'Soil acidity', 'Soil biology', 'Soil science']
  }]
}, {
  areaName: 'Animal science',
  subjects: [{
    subjectName: '3Rs ',
    topics: ['(null)', 'Refinement', '3Rs ', 'Reduction (animal welfare)', 'Replacement ']
  }, {
    subjectName: 'Animal & human physiology',
    topics: ['(null)', 'Integrative animal physiology', 'Nutrient transport in animals', 'Animal & human physiology', 'Circadian rhythm (animals)', 'Kidney & renal functions', 'Cardiovascular systems', 'Tissue damage (ageing)', 'Respiratory systems', 'Biological rhythms', 'Cardiac structures', 'Animal metabolism', 'Cardioprotection', 'Sensory systems', 'Vessels in vivo', 'Anhydrobiosis', 'Organogenesis', 'Biomimetics', 'Homeostasis', 'Exercise', 'Ageing', 'Flight', 'Liver', 'Skin']
  }, {
    subjectName: 'Animal behaviour',
    topics: ['(null)', 'Circadian rhythm (animals)', 'Risk assessment by animals', 'Multi-sensory processing', 'Animal communications', 'Speech / Vocalisation', 'Modelling behaviour', 'Behavioural choice', 'Maternal behaviour', 'Mental time travel', 'Psychopharmacology', 'Sensory perception', 'Biological clocks', 'Stimulus response', 'Animal behaviour', 'Sexual selection', 'Social behaviour', 'Social cognition', 'Decision making', 'Theory of mind', 'Recognition', 'Motivation', 'Pheromones', 'Plasticity', 'Attention', 'Cognition', 'Olfaction', 'Altruism', 'Audition', 'Ethology', 'Foraging', 'Learning', 'Vision']
  }, {
    subjectName: 'Animal diseases',
    topics: ['(null)', 'TSEs', 'Host-pathogen interactions ', 'CJD', 'Pathogenesis (animal diseases)', 'Bacterial diseases (animals)', 'Foot-and-mouth disease (FMD)', 'Disease diagnosis (animals)', 'Disease modelling (animals)', 'Disease control (animals)', 'Neurodegenerative disease', 'Viral diseases (animals)', 'Disease transmission', 'Bovine tuberculosis', 'Protective immunity', 'Vaccine development', 'Parasitic diseases', 'Chemotherapeutics', 'Drug development', 'Endemic diseases', 'Animal diseases', 'Avian influenza', 'Drug resistance', 'Exotic diseases', "Marek's disease", 'Anthelmintics', 'Epidemiology', 'Inflammation', 'Tuberculosis', 'Swine fever', 'Bluetongue', 'Infection', 'Influenza', 'Necrosis', 'Zoonoses', 'Scrapie', 'Vectors']
  }, {
    subjectName: 'Animal organisms ',
    topics: ['(null)', 'C. Elegans', 'Gastropods (slugs snails)', 'Annelids (earthworms)', 'Animal organisms ', 'Fish - freshwater', 'Frogs (Xenopus)', 'Fish – farmed', 'Fish - marine', 'Invertebrates', 'Cephalopods', 'Crustaceans', 'Parasitoids', 'Pet animals', 'Amphibians', 'Arthropods', 'Drosophila', 'Zebra fish', 'Arachnids', 'Helminths', 'Hookworms', 'Myriapoda', 'Nematodes', 'Ruminants', 'Chickens', 'Molluscs', 'Primates', 'Reptiles', 'Rotifera', 'Insects', 'Mammals', 'Poultry', 'Rodents', 'Aphids', 'Cattle', 'Horses', 'Birds', 'Flies', 'Goats', 'Sheep', 'Deer', 'Mice', 'Pigs', 'Rats']
  }, {
    subjectName: 'Animal reproduction',
    topics: ['(null)', 'Tissue differentiation & prog.', 'Sperm production & development', 'Animal reproduction', 'Fetal maturation', 'Ovarian function', 'Testes function', 'Fertilisation', 'Fetal growth', 'Parturition', 'Ovulation', 'Pregnancy', 'Embryos', 'Uterus']
  }, {
    subjectName: 'Animal welfare',
    topics: ['(null)', 'Animal husbandry welfare', 'Pain (animal welfare)', 'Transport of animals', 'Stress in animals', 'Stocking density', 'Corticosteroids', 'Animal welfare', 'Consciousness', 'Deprivation', 'Enrichment', 'Stereotypy', 'Slaughter', 'Suffering', 'Anxiety']
  }, {
    subjectName: 'Endocrinology',
    topics: ['(null)', 'Calciotropic hormones', 'Reproductive hormones', 'Neuroendocrinology', 'Endocrine system', 'Stress hormones', 'Adrenal glands', 'Endocrinology', 'Melatonin', 'HPA axis', 'Steroids', 'Ghrelin', 'Insulin']
  }, {
    subjectName: 'Immunology',
    topics: ['(null)', 'Gastrointestinal tract', 'Signal transduction (immunol.)', 'Immunological tolerance', 'Reproductive immunology', 'Signalling (immunology)', 'Cell-mediated immunity', 'Comparative immunology', 'Repertoire development', 'Carbohydrate antigens', 'Monoclonal antibodies', 'Antigen presentation', 'Immunological memory', 'Ruminant immunology', 'Antigen processing', 'Disease resistance', 'Complement system', 'T cell activation', 'Hypersensitivity', 'Immunomodulation', 'Immunoregulation', 'Lymphoid system ', 'Mucosal immunity', 'Pathogen evasion', 'Cell activation', 'Immunopathology', 'Innate immunity', 'Neuroimmunology', 'Transplantation', 'Autoantibodies', 'Co-stimulation', 'Hematopoiesis', 'Immunotherapy', 'Autoimmunity', 'Inflammation', 'Vaccination', 'Antibodies', 'Immunology', 'Infection', 'Antigens', 'Allergy']
  }, {
    subjectName: 'Livestock production',
    topics: ['(null)', 'Production system husbandry', 'Transport of livestock', 'Livestock management', 'Livestock production', 'Livestock genetics', 'Animal nutrition', 'Stocking density', 'Animal breeding', 'Animal housing', 'Slaughter']
  }, {
    subjectName: 'Musculoskeletal system',
    topics: ['(null)', 'Excitation-contraction coupl.', 'Musculoskeletal development', 'Musculoskeletal system', 'Epithileal structures', 'Osteoclasts in tissue', 'Osteocytes in tissue', 'Bone formation', 'Spinal column', 'Biomechanics', 'Locomotion', 'Cartilage', 'Ligaments', 'Muscles', 'Tendons', 'Bones']
  }, {
    subjectName: 'Parasitology ',
    topics: ['(null)', 'Host symbiont interactions', 'Host-pathogen interactions', 'Parasite reproduction', 'Parasitic life cycles', 'Parasite physiology', 'Parasite biology', 'Parasitology ', 'Hosts']
  }, {
    subjectName: 'Systems neuroscience ',
    topics: ['(null)', 'Computational Neuroscience', 'Neurotransmitter receptors', 'Speech / Vocalisation', 'Synaptic transmission', 'Systems neuroscience ', 'Extracellular matrix', 'Somatosensory system', 'Synaptic plasticity', 'Synaptic signalling', 'Neurons / Neurones', 'Neural stem cells', 'Neurodegeneration', 'Neurotransmitters', 'Sensory receptors', 'Vestibular system', 'Neurodevelopment', 'Neuronal culture', 'Neuronal network', 'Cerebral cortex', 'Neural networks', 'Neurophysiology', 'Nervous system', 'Neurocomputing', 'Basal ganglia', 'Motor systems', 'Neuropeptides', 'Psychophysics', 'Sensorimotors', 'Vision system', 'Hypothalamus', 'Neuroanatomy', 'Neurobiology', 'Neuroimaging', 'Hippocampus', 'Spinal cord', 'Cerebellum', 'Glial cell', 'Perception', 'Cognition', 'Modelling', 'Neocortex', 'Audition', 'Synapses', 'Hearing', 'Memory', 'Nerves', 'Brain', 'Pain']
  }, {
    subjectName: 'Psychology',
    topics: ['(null)', 'Aggression', 'Attention', 'Awareness', 'Behaviour', 'Cognition', 'Consciousness', 'Decision making (humans)', 'Developmental psychology', 'Emotion', 'Executive control', 'Experimental psychology', 'Human performance', 'Imitation', 'Language', 'Learning', 'Memory', 'Mood', 'Neuropsychology', 'Perception', 'Priming', 'Psychology', 'Psychology of Communication', 'Psychophysics', 'Recognitions (human)', 'Reward', 'Senses', 'Sensorimotors', 'Social cognition', 'Visual cortex', 'Visual perception', 'Consumer behaviour']
  }]
}, {
  areaName: 'Archaeology',
  subjects: [{
    subjectName: 'Archaeological Theory',
    topics: ['(null)']
  }, {
    subjectName: 'Archaeology Of Human Origins',
    topics: ['(null)']
  }, {
    subjectName: 'Archaeology of Literate Soc.',
    topics: ['(null)']
  }, {
    subjectName: 'Landscape & Environ. Archaeol.',
    topics: ['(null)']
  }, {
    subjectName: 'Palaeobiology',
    topics: ['(null)']
  }, {
    subjectName: 'Prehistoric Archaeology',
    topics: ['(null)']
  }, {
    subjectName: 'Science-Based Archaeology',
    topics: ['(null)']
  }, {
    subjectName: 'Quaternary Science',
    topics: ['(null)']
  }, {
    subjectName: 'Maritime Archaeology',
    topics: ['(null)']
  }, {
    subjectName: 'Industrial Archaeology',
    topics: ['(null)']
  }, {
    subjectName: 'Palaeobiology',
    topics: ['Adaptive radiation', 'Anoxic events', 'Atmospheric oxygen', 'Biodiversity change', 'Biogeochemical cycles', 'Cenozoic', 'Climate change', 'Climatic optima', 'Computer tomography', 'Dietary analysis', 'Evolution', 'Extreme environments', 'Finite element analysis', 'Fossil fuels', 'Fossil record', 'Geographical information systems', 'Glaciation', 'Hydrothermal processes', 'Ice ages', 'Isotopic analysis', 'Marine ecosystems', 'Mass extinctions', 'Mesozoic', 'Molecular clocks', 'Mycology', 'Palaeo circulation', 'Palaeobotany/moss banks', 'Palaeoecology', 'Palaeozoic', 'Planktonic foraminifera', 'Precambrian', 'Redox geochemistry', 'Sea level history', 'Sedimentary rocks', 'Taphonomy', 'Terrestrial ecosystems', 'Thermal maxima']
  }, {
    subjectName: 'Science-Based Archaeology',
    topics: ['Ancient DNA', 'Ancient grains', 'Animal domestication', 'Biomolecular archaeology', 'Bronze age', 'Computer tomography', 'Dating - amino acid racemization', 'Dating - radiocarbon', 'Dating - reservoir effect', 'Dating - stimulated luminescence', 'Dietary adaptation', 'Early farming', 'Ecomorphology', 'Environmental transitions', 'Evolution of bipedalism', 'Extinction', 'Fossil analysis', 'Gas chromatography', 'Genetic analysis', 'Geomagnetic record', 'Human bone', 'Human dispersal', 'Ice ages', 'Iron age', 'Isotopic record', 'Marine resources', 'Mass spectrometry', 'Megafauna', 'Neolithic period', 'Organic residue analysis', 'Palaeoanthropology', 'Palaeothermometry', 'Prehistoric humans', 'Pyrogenic carbon', 'Rice agriculture', 'Sea level history', 'Soil analysis', 'Stone age', 'Volcanism']
  }]
}, {
  areaName: 'Area Studies',
  subjects: [{
    subjectName: 'African Studies',
    topics: ['Southern African Studies', 'Central African Studies', 'West African Studies', 'East African Studies', 'North African Studies']
  }, {
    subjectName: 'American Studies',
    topics: ['(null)', 'American Studies (USA)', 'Canadian Studies', 'First Nations Studies', 'Francophone Studies', 'Central American Studies']
  }, {
    subjectName: 'Hispanic & Latin American Stud',
    topics: ['(null)', 'Latin American Studies', 'Caribbean Studies']
  }, {
    subjectName: 'Asian & Middle Eastern Studies',
    topics: ['(null)', 'Central Asian Studies', 'Middle Eastern Studies', 'Northern Asian Studies', 'Western Asian Studies', 'East Asian Studies', 'South Asian Studies', 'Southeast Asian Studies', 'Russian Studies']
  }, {
    subjectName: 'European Studies',
    topics: ['(null)', 'Celtic Studies', 'French Studies', 'German Studies', 'Iberian Studies', 'Italian Studies', 'Low Countries Studies', 'Romance Studies', 'Scandinavian Studies', 'Slavonic and East European Studies', 'Baltic Studies', 'Central European Studies', 'Russian Studies']
  }, {
    subjectName: 'Pacific Studies',
    topics: ['(null)', 'Pacific Island Studies']
  }, {
    subjectName: 'Oceanic Studies',
    topics: ['(null)', 'Australian Studies', 'New Zealand Studies', 'Metis and Aboriginal Studies']
  }]
}, {
  areaName: 'Astronomy - observation',
  subjects: [{
    subjectName: 'Astron. & Space Sci. Technol.',
    topics: ['(null)']
  }, {
    subjectName: 'Data Handling & Storage',
    topics: ['(null)']
  }, {
    subjectName: 'Extra-Galactic Astron.&Cosmol.',
    topics: ['(null)']
  }, {
    subjectName: 'Galactic & Interstellar Astron',
    topics: ['(null)']
  }, {
    subjectName: 'Part. Phys/Astron. Instrument.',
    topics: ['(null)']
  }, {
    subjectName: 'Stellar Astronomy',
    topics: ['(null)']
  }]
}, {
  areaName: 'Astronomy - theory',
  subjects: [{
    subjectName: '(null)',
    topics: ['(null)']
  }, {
    subjectName: 'Computational Methods & Tools',
    topics: ['(null)']
  }, {
    subjectName: 'Extra-Galactic Astron.&Cosmol.',
    topics: ['(null)']
  }, {
    subjectName: 'Galactic & Interstellar Astron',
    topics: ['(null)']
  }, {
    subjectName: 'Stellar Astronomy',
    topics: ['(null)']
  }]
}, {
  areaName: 'Atmospheric phys. & chemistry',
  subjects: [{
    subjectName: '(null)',
    topics: ['(null)']
  }, {
    subjectName: 'Atmospheric Kinetics',
    topics: ['(null)']
  }, {
    subjectName: 'Boundary Layer Meteorology',
    topics: ['(null)']
  }, {
    subjectName: 'Large Scale Dynamics/Transport',
    topics: ['(null)']
  }, {
    subjectName: 'Radiative Processes & Effects',
    topics: ['(null)']
  }, {
    subjectName: 'Stratospheric Processes',
    topics: ['(null)']
  }, {
    subjectName: 'Tropospheric Processes',
    topics: ['(null)']
  }, {
    subjectName: 'Upper Atmos Process & Geospace',
    topics: ['(null)']
  }, {
    subjectName: 'Water In The Atmosphere',
    topics: ['(null)']
  }, {
    subjectName: 'Ocean - Atmosphere Interact.',
    topics: ['(null)']
  }, {
    subjectName: 'Land - Atmosphere Interactions',
    topics: ['(null)']
  }, {
    subjectName: 'Atmospheric Kinetics',
    topics: ['Aerosols and particles', 'Airborne pathogens', 'Aqueous phase reactions', 'Atmospheric chemistry', 'Atmospheric composition', 'Atmospheric ice', 'Atmospheric ionisation', 'Climate sensitivity', 'Cloud particles', 'Cloud properties', 'Cloud thermometry', 'Criegee intermediates', 'Global atmospheric models', 'Halogen chemistry', 'Heterogeneous chemistry', 'Intercontinental transport', 'Mesospheric chemistry', 'Nitrogen oxides', 'Organic aerosols', 'Ozone dynamics', 'Ozone production', 'Photochemical reactions', 'Precipitation', 'Radiation balance', 'Radiative forcing', 'Radical chemistry', 'Reaction rates', 'Stratospheric chemistry', 'Trace gas chemistry', 'Troposphere', 'Volatile organic compounds']
  }, {
    subjectName: 'Boundary Layer Meteorology',
    topics: ['Aerosols', 'Air pollution', 'Boundary layer models', 'Cloud droplets', 'Cloud dynamics', 'Computational fluid dynamics', 'Condensation processes', 'Continental boundary layer', 'Convective clouds and precipitation', 'Desert processes', 'Dimethyl sulphide fluxes', 'Dispersion', 'Dusts and particles', 'Evaporative processes', 'Forest canopy', 'Gas exchange', 'Ground-based measurement', 'Heat fluxes', 'Hydroxyl radical chemistry', 'Land temperature', 'Marine boundary layer', 'Mesoscale structures', 'Moisture fluxes', 'Monsoonal processes', 'Ozone chemistry', 'Radiation balance', 'Reflective processes', 'Satellite observation', 'Snow', 'Surface temperature', 'Trace gas transport', 'Turbulence', 'Urban environments', 'Wave processes', 'Weather prediction']
  }, {
    subjectName: 'Land - Atmosphere Interactions',
    topics: ['Aerosol precursors', 'Aerosols', 'Atmospheric chemistry', 'Atmospheric fluxes', 'Bioenergy crops', 'Biomass burning', 'Carbon fluxes', 'Carbon sequestration', 'Climate modelling', 'Cloud formation', 'Element cycles', 'Energy budgets', 'Forest canopy', 'Forest fires', 'Fossil fuels', 'Greenhouse gases', 'Hydroxyl radical chemistry', 'Land use change', 'Methanogenesis', 'Methylotrophy', 'Microbial communities', 'Monsoonal processes', 'Nitrification & denitrification', 'Numerical weather prediction', 'Nutrient cycling', 'Snow and ice flows', 'Soil organic matter', 'Tropical forests', 'Vegetation management', 'Vegetation modelling', 'Volatile organic compounds', 'Water resources']
  }, {
    subjectName: 'Large Scale Dynamics/Transport',
    topics: ['Adaptive mesh modelling']
  }, {
    subjectName: 'Large Scale Dynamics/Transport',
    topics: ['Atmospheric circulation', 'Circulation modelling', 'Cloud dynamics', 'Convection', 'El Nino Southern Oscillation', 'Energy budgets', 'Extratropical cyclones', 'Gravity waves', 'Halogen species', 'Jet stream dynamics', 'Large scale atmospheric modelling', 'Meridional circulation', 'Mesosphere', 'Microwave limb sounding', 'Monsoons', 'Ocean circulation indices', 'Ozone depletion', 'Radiation budget', 'Remote sensing', 'Sea ice', 'Sea surface temperature', 'Solar wind', 'Storm tracks', 'Stratosphere', 'Teleconnections', 'Thermohaline circulation', 'Trace gas transport', 'Tropical cyclones', 'Tropical tropopause dynamics', 'Troposphere', 'Turbulence', 'Water vapour', 'Wave dynamics', 'Weather modelling']
  }, {
    subjectName: 'Ocean - Atmosphere Interact.',
    topics: ['Aerosols', 'Atmospheric circulation', 'Atmospheric composition', 'Atmospheric halogens', 'Atmospheric modelling', 'Atmospheric organics', 'Atmospheric oxidants', 'Atmospheric turbulence', 'Carbon cycle', 'Climate modelling', 'Cloud physics', 'Dimethyl sulphide fluxes', 'Dissolved organics', 'El Nino Southern Oscillation', 'Gas exchange', 'Greenhouse gases', 'Heat transport', 'Marine boundary layer', 'Meridional circulation', 'Nitrogen oxides', 'Ocean circulation', 'Ocean modelling', 'Ocean turbulence', 'Particulate organics', 'Phytoplankton', 'Radical chemistry', 'Sea ice', 'Sea level', 'Sea surface temperature', 'Semi-volatile organics', 'Shelf ocean dynamics', 'Snow', 'Solar radiation', 'Surface microlayers', 'Tropical tropopause', 'Volatile organics', 'Wind waves']
  }, {
    subjectName: 'Radiative Processes & Effects',
    topics: ['Aerosols', 'Airborne spectrometry', 'Atmospheric carbon', 'Atmospheric trace compounds', 'Biomass burning', 'Cloud distribution', 'Cloud formation', 'Cloud physics', 'Heat fluxes', 'Ice nucleation', 'Infrared imaging', 'Lidar sensing', 'Mesospheric processes', 'Monsoons', 'Nitrogen cycling', 'Radiation budget', 'Radiation modelling', 'Radiation spectrum', 'Radiative cooling', 'Radiometry - limb sounder', 'Radiometry - scanning', 'Radiometry - spinning enhanced imager', 'Reflection', 'Remote sensing', 'Sea surface temperature', 'Solar radiation', 'Stratospheric ozone', 'Tropospheric processes', 'Visible spectrum imaging', 'Weather forecasting']
  }, {
    subjectName: 'Stratospheric Processes',
    topics: ['Aerosol layer', 'Aerosols', 'Aircraft measurements', 'Atmospheric composition', 'Atmospheric modelling', 'Atmospheric profiling', 'Atmospheric sounding', 'Carbon dioxide', 'Chlorine oxides', 'Earth energy budget', 'Energetic electrons', 'Greenhouse gases', 'Halocarbons', 'Halogen species', 'Ice formation', 'Mesospheric chemistry', 'Meteoric smoke particles', 'Nitrogen oxides', 'Photochemistry', 'Photolysis', 'Polar stratospheric cloud', 'Polar vortices', 'Quasi-biennial oscillation', 'Radiation belt', 'Radiative transfer', 'Radiometry', 'Satellite observation', 'Solar wind', 'Stratospheric circulation', 'Stratospheric ozone', 'Trace gases', 'Tropical tropopause', 'Tropospheric processes', 'Volcanic ash', 'Water vapour', 'Weather forecasting']
  }, {
    subjectName: 'Tropospheric Processes',
    topics: ['Aerosols', 'Atmospheric sounding', 'Biogenic volatile organic compounds', 'Biomass burning', 'Boundary layer', 'Cloud formation', 'Convective precipitation', 'Extratropical cyclones', 'Gravity waves', 'Greenhouse gases', 'Halogen chemistry', 'Hydroxyl radical chemistry', 'Microphysics', 'Mineral dust', 'Nitrogen oxides', 'Ozone chemistry', 'Radiation budget', 'Radiative forcing', 'Radical chemistry', 'Remote sensing', 'Stratosphere', 'Stratospheric ozone', 'Sulphur oxides', 'Trace gases', 'Tropical tropopause', 'Troposphere-stratosphere exchanges', 'Tropospheric modelling', 'Tropospheric ozone', 'Tropospheric winds', 'Upper troposphere', 'Volcanic plumes', 'Water vapour', 'Weather forecasting']
  }, {
    subjectName: 'Upper Atmos Process & Geospace',
    topics: ['Aerosols', 'Atmospheric chemistry', 'Atmospheric particles', 'Atmospheric sounding', 'Aurora', 'Cirrus cloud', 'Climate modelling', 'Electric fields', 'Electron precipitation', 'Energetic electrons', 'Energetic particles', 'Geomagnetism', 'Gravity waves', 'Greenhouse gases', 'High latitude physics', 'Ionosphere', 'Ionosphere-thermosphere coupling', 'Magnetosphere', 'Magnetosphere-ionosphere coupling', 'Mesosphere', 'Metal layers', 'Meteor winds', 'Microwave limb sounding', 'Noctilucent cloud', 'Nucleation', 'Ozone layer', 'Particle detection', 'Radar networks', 'Radiation belt', 'Satellite observation', 'Solar activity', 'Solar cycle', 'Solar wind', 'Stratosphere-mesosphere coupling', 'Themosphere', 'Vertical coupling', 'Weather balloons']
  }, {
    subjectName: 'Water In The Atmosphere',
    topics: ['Aerosols and particles', 'Atmospheric humidity', 'Atmospheric ice', 'Atmospheric modelling', 'Atmospheric profiling', 'Boundary layer', 'Circulation modelling', 'Cloud droplets', 'Cloud dynamics', 'Cloud physics', 'Cloud types', 'Condensation processes', 'Convective precipitation', 'Deep convection', 'Infrared radiation', 'Jet stream dynamics', 'Lidar sensing', 'Light scattering', 'Mesoscale structures', 'Micro precipitation', 'Mixed phase cloud', 'Monsoon systems', 'Nucleation', 'Radiation balance', 'Radiative forcing', 'Rain formation', 'Rainfall', 'Solar radiation', 'Stratospheric intrusion', 'Uncertainty estimation', 'Weather forecasting']
  }]
}, {
  areaName: 'Atomic & molecular physics',
  subjects: [{
    subjectName: 'Atoms & Ions',
    topics: ['(null)', 'Antihydrogen & Exotic Atoms', 'Atoms in Strong Static Fields', 'Non-adiabatic transitions', 'Orbital Angular Momentum', 'Quantum Electrodynamics (QED)', 'Relatavistic Atomic Physics']
  }, {
    subjectName: 'Cold Atomic Species',
    topics: ['(null)', 'Atom Lasers', 'Atomic Interferometry', 'Bose-Einstein Condensation', 'Cold Atoms & Applications', 'Collisions of Cold Species', 'Degenerate Fermi Gases', 'Laser Cooling & Trapping']
  }, {
    subjectName: 'Light-Matter Interactions',
    topics: ['(null)', 'Atom-intense Laser Interaction', 'Atom-light Interactions', 'Atoms/Molecules in High Fields', 'Coherent Atomic Media', 'Coherent Control', 'Laser Trapping', 'Optical Spanners', 'Optical Traps ', 'Optics - Atom', 'Quantum Chaology ']
  }, {
    subjectName: 'Scattering & Spectroscopy',
    topics: ['(null)', 'Atomic & Molecular Structure', 'Atomic Collisions', 'Atomic Photoionisation', 'Atoms in External Fields', 'Chemical Physics', 'Cluster Physics', 'Electron-Atom Scattering', 'Electron-Ion Scattering', 'Electron-Molecule Scattering', 'Excited States', 'Highly Charged Particles', 'Ionic Collisions', 'Lasers & Prepared States', 'Molecular Collisions', 'Molecular Photoionisation', 'Molecules in External Fields', 'Muon Interactions', 'Parity Nonconservation', 'Photon Interactions ', 'Reactive Scattering', 'R-Matrix', 'VUV Radiation']
  }, {
    subjectName: 'Fusion',
    topics: ['(null)', 'Fusion - Computational', 'Fusion - Engineering', 'Fusion - Experimental', 'Fusion - Instrumentation', 'Fusion - Materials', 'Fusion - Modelling/Simulation', 'Fusion - Theoretical', 'Fusion - Waste Generation', 'Magnetic Confinement Fusion', 'Neutron Damage of Materials', 'Nuclear Reactions in Blankets', 'Nuclear Reactions in Materials', 'Plasma - Diagnostics', 'Plasma - Magneto-hydrodynamics', 'Plasma/Beam Interactions', 'Plasma/Materials Interaction', 'Plasma/Microwave Interactions', 'Turbulence in Fusion Plasmas']
  }]
}, {
  areaName: 'Bioengineering',
  subjects: [{
    subjectName: 'Biochemical engineering',
    topics: ['(null)', 'Biochemical engineering', 'Scale-down production', 'Separation processes', 'Scale-up production', 'Directed evolution', 'Biotransformation', 'Cell engineering', 'Mammalian cells', 'Over-expression', 'Bioprocessing', 'Antibiotics', 'Xenobiotics', 'Enzymes']
  }, {
    subjectName: 'Bionanoscience',
    topics: ['(null)', 'Nucleic acid nanotechnology', 'Single molecule measurement', 'Cell-penetrating probes', 'Molecular self-assembly', 'Protein nanotechnology', '2-D nanoscale system', '3-D nanoscale system', 'Molecular imprinting', 'Molecular patterning', 'DNA nanostructures', 'Acoustic sensors', 'Bionanocatalysts', 'Bioelectronics', 'Bionanomagnets', 'Bionanoscience', 'Nanomechanics', 'Nanocrystals', 'Holograms']
  }, {
    subjectName: 'Bioreactors',
    topics: ['(null)']
  }, {
    subjectName: 'Environmental biotechnology',
    topics: ['(null)', 'Environmental biotechnology', 'Industrial contaminants', 'Environmental sensing', 'Biogeomicrobiology', 'Organic pollutants', 'Phytoremediation', 'Bioavailability', 'Bioremediation', 'Biotreatment', 'Heavy metals', 'Hydrocarbons', 'Water waste', 'Pesticides', 'Sediments', 'Waste']
  }, {
    subjectName: 'Macro-molecular delivery',
    topics: ['(null)', 'Complex Q', 'Drug delivery', 'Extracellular targetting', 'Intracellular targetting', 'Macro-molecular delivery', 'Molecular virology', 'Non-viral vector', 'Particle delivery', 'Peptide delivery', 'Prodrug', 'Prolonged delivery', 'Protein delivery', 'Site specific delivery', 'Small molecule delivery', 'Vaccines']
  }, {
    subjectName: 'Metabolic engineering',
    topics: ['(null)', 'Metabolic sensitivity analysis', 'Metabolic control analysis', 'Metabolic flux analysis', 'Metabolic intermediates', 'Metabolic engineering', 'Expression platforms', 'Scale-up production', 'Network dynamics', 'Increased flux', 'Plant factory', 'Cell factory']
  }, {
    subjectName: 'Novel industrial products',
    topics: ['(null)', 'Hemicellulose-based products', 'Novel industrial products', 'Chiral molecules', 'Biocomposites', 'Lubricants ', 'Biplastics', 'Biomass']
  }, {
    subjectName: 'Protein engineering',
    topics: ['(null)', 'Macromolecular integrity', 'Macromolecular structure', 'Protein reconstitution', 'Recombinant antibody', 'Protein engineering', 'Protein recognition', 'Scale-up production', 'Protein inhibitors', 'Forced evolution', 'Over-expression', 'Protein folding', 'Thermostability']
  }, {
    subjectName: 'Tissue engineering ',
    topics: ['(null)', '3D reconstruction', 'Angiogenesis', 'Bio-artificial interfaces', 'Bioartificial Organs', 'Bioartificial Tissues', 'Biodegradable', 'Biomaterials - Bladder', 'Biomaterials - Cartilage', 'Biomaterials - Lung', 'Biomimetic Structures', 'Bioreactor Tissue Engingeering', 'Bioresorbable Biocompatible', 'Cell & Tissue Mechanics', 'Cell Communication', 'Cell Function (tissue eng.)', 'Cell Guidance', 'Cell-Matrix Interactions', 'Cell-surface Interactions', 'Cellular Manip. for Tissue Eng', 'Cellular systems in vitro', 'Fibrin', 'Gut', 'Haemocompatibility', 'Immunogenicity', 'Immunology & Biocompatiblity', 'Implants', 'Matrices - Tissue Engineering', 'Mechanical stimuli', 'Mesenchymal tissue', 'Neural Tissue Engineering', 'Non-invasive Stimulation', 'Organ Support', 'Regenerative Medicine', 'Retinal Degeneration', 'Scaffolds & Scaffold Design', 'Skin - Tissue Engineering', 'Stem cell engineering', 'Stress (tissues)', 'Tissue Architecture', 'Tissue engineering ', 'Tissue Engineering of Muscle', 'Tissue regeneration', 'Tissue repair', 'Tumour - Tissue Engineering', 'Ulcer - Tissue Engineering', 'Veins', 'Wound - Tissue Engineering']
  }, {
    subjectName: 'Bioenergy',
    topics: ['(null)', 'Alternative Energy Biomass', 'Artificial photosynthesis', 'Bioenergy', 'Bioenergy - demand for', 'Bioenergy - distributed Power', 'Bioenergy feedstocks', 'Bioenergy for Clean Transport', 'Bioenergy Pyrolysis', 'Bioenergy Reaction Kinetics', 'Biofuel Life-cycle Analysis', 'Biofuels', 'Biogas', 'Biological Hydrogen Production', 'Biomass', 'Biomass Photoreactors', 'Biorefineries ', 'Bio-Refinery', 'Methane by Anaerobic Digestion', 'Co-Firing', 'Combustion of Biomass/Biofuels', 'Direct-Fired Systems', 'Energy Crops', 'Energy from Landfill', 'Energy from Waste', 'Gasification', 'Microbial hydrogen generation', 'Pollutants from Biomass', 'Pyrolysis', 'Renewables', 'Short rotation coppice', 'Sustainable energy production', 'Thermal Bioenergy Reactors']
  }, {
    subjectName: 'Biomaterials',
    topics: ['(null)', 'Acrylics', 'Adhesion of biomaterials', 'Adsorbents', 'Aggregation products', 'Amalgam', 'Amyloid fibrils', 'Antimicrobial Agents/Materials', 'Bio-artificial Interfaces', 'Bioceramics', 'Biocompatibility', 'Biofibrils', 'Bioglass', 'Bioinorganic compounds', 'Biomaterial Cements', 'Biomaterials', 'Biomaterials - Artery', 'Biomaterials - Breast', 'Biomaterials - Eye', 'Biomaterials - Finger', 'Biomaterials - Heart', 'Biomaterials - Hip', 'Biomaterials - Mouth', 'Biomaterials - Muscle', 'Biomaterials - Neural', 'Biomaterials - Tooth', 'Biomaterials - Vein', 'Biomimetic Materials', 'Biomonomers', 'Biopolymer Biomaterial', 'Biorecognition', 'Bioresponsive Material', 'Calcium Phosphates', 'Cell material interaction', 'Cohesion', 'Collagen', 'Colour - Biomaterials', 'Composite Biomaterials', 'Conductivity of Biomaterials', 'Corrosion of biomaterials', 'Degradable biomaterials', 'Dental Materials', 'Dressings -Biomaterial', 'Elasticity of Biomaterials', 'Fibrin - Biomaterials', 'Gels - Biomaterial', 'Glass Ionomers', 'Gut Biomaterials', 'Haemocompatibility of Biomat.', 'Hard Tissue Replacement', 'Heart Valve biomaterials', 'Heart Valve Replacement', 'Hydrogels', 'Hydroxyapatite', 'Interface Mechanics', 'Membranes - Biomaterials', 'Metal Alloys', 'Metal Matrix Composites BioMa', 'Microleakage', 'Modified Biomaterial Surfaces', 'Non-degradable Biomaterial', 'Polymer Matrix Bimat. Compos.', 'Polymerisation Shrinkage', 'Polymers (Biomaterials)', 'Polyurethanes (Biomaterials)', 'Soft Tissue Replacement', 'Solubility - Biomaterial', 'Sorbents -Biomaterial', 'Surface Roughness/Friction', 'Thermal Expansion', 'Vascular Grafts', 'Viscoelasticity', 'Wear of Biomaterials']
  }, {
    subjectName: 'Bioreactors',
    topics: ['Membrane biology (plant specific)']
  }, {
    subjectName: 'Novel industrial products',
    topics: ['Non-chiral molecules', 'Plant fibres', 'Solvents']
  }]
}, {
  areaName: 'Biomolecules & biochemistry',
  subjects: [{
    subjectName: 'Biochemistry & physiology',
    topics: ['(null)', 'Differentiation (microbial)', 'Biochemistry & physiology', 'Microbial photosynthesis', 'Microbial metabolism ', 'Microbial metabolites', 'Microbial substrates', 'Bacterial cell wall', 'Bacterial movement', 'Energy metabolism', 'Transport systems', 'Bacterial growth', 'Fungal cell wall', 'Gene expression', 'Quorum sensing ', 'Fungal growth', 'Fermentation', 'Sporulation', 'Enzymology', 'Biofilm']
  }, {
    subjectName: 'Bioenergetics',
    topics: ['(null)', 'NAD', 'Adenosine triphosphate (ATP)', 'Reduction (chemical process)', 'Oxidative phosphorylation', 'Cellular respiration', 'Free radical species', 'Superoxide dismutase', 'Electron transport', 'Citric acid cycle', 'Electron acceptor', 'Electron transfer', 'Nitrogen fixation', 'Electrochemistry', 'Oxidative stress', 'Redox signalling', 'Denitrification', 'Redox potential', 'Photosynthesis', 'Photosystem II', 'Bioenergetics', 'Nitrification', 'Photosystem I', 'Biosynthesis', 'Chloroplasts', 'Mitochondria', 'Cytochrome', 'Glycolysis', 'Metabolism', 'Coenzymes', 'Complex I', 'Oxidation']
  }, {
    subjectName: 'Biological membranes ',
    topics: ['(null)', 'Membrane biol.(plant specific)', 'Peripheral membrane proteins', 'Integral membrane proteins', 'Cell membrane receptors', 'Membrane translocation ', 'Transmembrane segments', 'Biological membranes ', 'Epithelial transport', 'Membrane trafficking', 'Blood brain barrier', 'Membrane proteins', 'Membrane pores', 'Phospholipids', 'Gap junction', 'Ion channels', 'Transporters', 'Glycolipids', 'Detergents', 'Lipid raft', 'Monolayers', 'Selectins', 'Bilayers', 'Connexin', 'Sterols', 'Lipids']
  }, {
    subjectName: 'Carbohydrate Chemistry',
    topics: ['(null)', 'Amino Glycosides', 'Amino Sugars', 'Anomeric carbohydrates', 'Armed/Disarmed Carbohydrates', 'C-glycoside', 'Disaccharides', 'Glycosidation', 'Glycosylation', 'Monosaccharides', 'Oligosaccharides', 'Polysaccharides']
  }, {
    subjectName: 'Catalysis & enzymology',
    topics: ['(null)', 'TPP dependent enzymes', 'PLP dependent enzymes', 'NonRibosomal peptide synthases', 'NAD-dependent oxidoreductases', 'Vitamin B12-dependent enzymes', 'Steady-state enzyme kinetics', 'Hydratases & dehydratases', 'Catalysis & enzymology', 'Mechanistic enzymology', 'ATP-dependent ligases', 'Glycosyl transferases', 'SAM-dependent enzymes', 'Catalytic inhibitors', 'Polyketide synthases', 'Catalytic mechanism', 'Allosteric enzymes', 'Esterases lipases', 'Biotransformation', 'Enzyme inhibition', 'Prosthetic groups', 'Substrate binding', 'Terpene cyclases', 'Enzyme kinetics', 'Oxidoreductases', 'Phosphorylation', 'Catalytic site', 'Protein kinase', 'Regulatory RNA', 'Thermodynamics', 'Metalloenzyme', 'RNA catalysis', 'Biocatalysis', 'Carboxylases', 'Glycosidases', 'Phosphatases', 'Transferases', 'Active site', 'Methylation', 'Specificity', 'Co-factors', 'Hydrolases', 'Inhibitors', 'Isomerases', 'Oxygenases', 'Coenzymes', 'Proteases', 'Ribozymes', 'Kinetics', 'Vitamins', 'ATPases', 'Enzymes', 'Kinases', 'Ligases', 'Lyases']
  }, {
    subjectName: 'Chemical Biology',
    topics: ['(null)', 'Biomolecular Function', 'Biomolecular imaging', 'Biomolecular Structure', 'Biophysical Approaches', 'Chemical biology', 'Chemical Genetics', 'Compound libraries', 'DNA Binding & interactions', 'Drug discovery', 'Electrostatic interactions', 'Fluorescence (Chem Biology)', 'Ionic bonds', 'Lipid structure & function', 'Macromolecular folding', 'Macromolecular structure/func.', 'Membrane-Lipids', 'Membrane-Proteins', 'Non-covalent interactions', 'Nucleotide chemistry', 'Pathogens', 'Protein Crystallography', 'Protein Structure & Function', 'RNA Ligands', 'Synthetic biological molecules', 'Vaccine discovery']
  }, {
    subjectName: 'Multiprotein complexes',
    topics: ['(null)', 'Assembly & disassembly ', 'Protein-protein interactions', 'Multiprotein complexes', 'Complex assembly', 'Molecular motors', 'DNA motors', 'Proteasome']
  }, {
    subjectName: 'Protein chemistry',
    topics: ['(null)', 'Acidic/basic proteins', 'Caged compounds', 'Denaturation', 'Detergents', 'Heat shock proteins', 'Metalloproteins', 'Protein chemistry', 'Protein conformation', 'Protein dynamics', 'Protein kinetics', 'Protein labelling', 'Protein misfolding', 'Protein sequencing', '(null)', 'Post-translat. modification', 'Cell-free expression systems', 'Bacterial expression', 'Recombinant proteins', 'Protein conjugation', 'Protein trafficking', 'Expression systems', 'Protein expression', 'Native proteins', 'Phage display']
  }, {
    subjectName: 'Protein folding / misfolding',
    topics: ['(null)', 'Transmiss. Spong. Enceph.', 'Protein folding / misfolding', 'Protein degradation', 'Protein synthesis', 'Energy landscape', 'Disulphide bond', 'Protein folding', 'Folding space', 'Alpha helix', 'Chaperones ', 'Beta sheet', 'Amyloids', 'Fibrils']
  }, {
    subjectName: 'Structural biology ',
    topics: ['(null)', 'Protein ligand interaction', 'Conformational change', 'Structural proteomics', 'Native conformation', 'Structural biology ', 'Structural genomics', 'Protein complexes', 'Protein structure', 'Protein function', '3D Structure', 'Alpha helix', 'Beta sheet', 'Domains']
  }, {
    subjectName: 'Ageing: chemistry/biochemistry',
    topics: ['(null)', 'Ageing: chemistry/biochemistry', 'DNA damage & repair', 'Homeostatic regulation', 'Ageing: chemistry/biochemistry', 'Reactive oxygen species (ROS)', "Werner's syndrome (ageing)", 'Programmed cell death', 'Neurodegeneration', 'Protein glycation', 'Protein nitration', 'Protein oxidation', 'Immunosenescence', 'Oxidative stress', 'Free radicals', 'Antioxidants', 'Cell damage', 'Superoxides', 'Biomarkers', 'Cell fate ', 'Proteasome', 'Senescence', 'Apoptosis', 'Telomeres', 'Mutation']
  }, {
    subjectName: 'Biophysics',
    topics: ['(null)', 'Actin myosin muscle', 'Biofilm physics', 'Biomolecule manipulation', 'Biophysical kinetics', 'Cellular adhesion', 'Cellular morphogenesis', 'Cellular networks', 'Cellular organelles', 'Confocal microscopy', 'DNA topology', 'Elastin', 'Extracellular Matrix Biophys.', 'Fibril biophysics', 'Fluores. lifetime imaging FLIM', 'Fluorescence Spectroscopy', 'Fluorophores', 'FRET', 'Ion Channels & Transporters', 'Lipid Bilayers', 'Macromolecular dynamics', 'Macromolecular hydrodynamics', 'Mechanical properties of cells', 'Membrane biophysics', 'Microtubule Physics', 'Molecular Biophysical Forces', 'Motor Proteins', 'Multicellular Dynamics', 'Nucleic acid biophysics', 'Optical Tweezers', 'Physics of Biophotonics', 'Physics of Biopolymers', 'Physics of Cell motility', 'Physics of Collagen', 'Protein biophysics', 'Protein-DNA interactions', 'Protein-membrane interactions', 'Single molecule imaging', 'Single molecule spectroscopy', 'Time-resolved biophysics', 'Total internal reflection', 'Two-photon processes']
  }, {
    subjectName: 'Biological membranes ',
    topics: ['Covalent bonds']
  }, {
    subjectName: 'Carbohydrate Chemistry',
    topics: ['GPI anchors', 'Inositides', 'Lectins', 'N-linked glycans', 'O-linked glycans', 'Pectin', 'Secondary metabolites', 'Starch', 'Aldolases', 'Carbohydrate chemistry', 'Heparan sulfate', 'Heparin', 'Sugar nucleotides']
  }, {
    subjectName: 'Chemical Biology',
    topics: ['Instrumentation technology', 'Energy technology', 'Polymerisation', 'Synthetic molecules', 'Chemical technology', 'Fluidics', 'Medical instrumentation', 'Pharmaceutical technology', 'Separation technology', 'Fluorescence markers']
  }]
}, {
  areaName: 'Catalysis & surfaces',
  subjects: [{
    subjectName: 'Catalysis & Applied Catalysis',
    topics: ['(null)', 'Acid/base Catalysis', 'Asymmetric Hydrogenation', 'Asymmetric Reduction', 'Autocatalysis', 'Bimetallic Catalysts', 'Biomolecular Catalysis', 'Bio-organic Catalysis', 'Catalysis in Microemulsion', 'Catalysis of Ceramics', 'Catalysis of Polymers', 'Catalyst Characterisation', 'Catalyst Coking', 'Catalyst Deactivation', 'Catalyst Impregation', 'Catalyst morphology', 'Catalyst Regeneration', 'Catalyst Surface Reactivity', 'Catalytic Acylation', 'Catalytic Acylation', 'Catalytic Cracking', 'Catalytic Dehydrogenation', 'Catalytic Halogenation', 'Catalytic Homologation', 'Catalytic Hydrogenation', 'Catalytic Hydrohalogenation', 'Catalytic Intermediate ', 'Catalytic Materials', 'Catalytic Metathesis', 'Catalytic Mixed Oxides', 'Catalytic Nitrosation ', 'Catalytic Oxidation', 'Catalytic Oxides ', 'Catalytic Polymerisation', 'Catalytic Reaction Dynamics ', 'Catalytic Reaction Mechanisms', 'Catalytic Reduction', 'Catalytic Thin Films', 'Chemisorption in Catalysis', 'Chiral Catalysis', 'Clay Catalyst', 'Desoprtion in Catalysis', 'Electrocatalysis', 'Enzyme Action', 'Green Catalytic Technologies', 'Heterogeneous Catalysis', 'Heterogeneous Reactions', 'Homogeneous Catalysis', 'Hydrocarbon Transformations', 'In-situ Catalytic Studies', 'Intramolecular Catalysis', 'Ionic Liquid Solvents', 'Kinetics & Catalysis', 'Mesoporous Catalytic Materials', 'Metallocene Catalysis', 'Microporous Catalytic Mat.', 'Nanoparticles for Catalysis', 'Organocatalysis', 'Organometallic Catalysis', 'Palladium Catalysts', 'Photocatalysis', 'Platinum Catalysts', 'Platinum Group Metal Catalysts', 'Rhodium Catalysts', 'Ruthenium Catalysts', 'Stereoelectronic', 'Stereoselective Catalysis', 'Supported Catalysts', 'Surface Dynamics', 'Transition Metal Catalysts', 'Zeolite Catalysts']
  }, {
    subjectName: 'Electrochemical Science & Eng.',
    topics: ['(null)', 'Amperometry', 'Anodes', 'Cathodes', 'Electrochem Reaction Mechan.', 'Electrochemical corrosion', 'Electrochemical Engineering', 'Electrochemical Kinetics', 'Electrochemical Membranes ', 'Electrochemical Thermodynamics', 'Electrochemistry', 'Electrochemistry of Batteries', 'Electrode', 'Electrode Potentials', 'Electrodeposition', 'Electrolysis', 'Electrolyte', 'Electron Transfer', 'Electroplating', 'Electrorefining', 'Electrowinning', 'Fuel cell engineering', 'Fused salts', 'Green electrochemistry', 'Photoelectrochemistry ', 'Polyelectrolyte', 'Solid Electrolytes', 'Voltammetry']
  }, {
    subjectName: 'Surfaces & Interfaces',
    topics: ['(null)', 'Absorption', 'Adsorption', 'Atom-Surface Interactions', 'Attenuated Total Reflection', 'Auger Spectroscopy', 'Bio-organic Surfaces', 'Catalysis at surfaces', 'Chemisorption at Surfaces', 'Chiral Surfaces', 'CVD on Surfaces', 'EELS Development', 'Growth: Thin Film Deposition', 'Growth: Vapour Deposition', 'Heterogeneous Surfaces', 'High Power Lasers at Surfaces', 'Interface Physics', 'Interfacial Double Layers', 'Interfacial Energy', 'IR Spectroscopy at Surfaces', 'Laser Spectroscopy at Surfaces', 'LEED ', 'Matrix Composites', 'Metal Particulate Composites', 'Microwave-Surface Interactions', 'Molecular Beams at Surfaces', 'Molecule-Surface Interactions', 'Monolayer Surfaces', 'Nucleation', 'Oriented Polymers', 'Photoionisation (Surfaces)', 'Surface - Morphology', 'Surface Adhesion', 'Surface corrosion', 'Surface Ellipsometry', 'Surface Femtosecond Techniques', 'Surface Kinetics', 'Surface light Scattering', 'Surface Phase Equilibria', 'Surface Phase Separation ', 'Surface Photochemistry', 'Surface PVD ', 'Surface-Molecule Collisions', 'Surfaces - Membranes', 'Surfaces - Micelles']
  }, {
    subjectName: 'Complex fluids & soft solids',
    topics: ['(null)', 'Aggregation', 'Biomimetic Complex Fluids', 'Cellulose Chemistry', 'Clays', 'Colloid Dispersions', 'Complex Fluids', 'Compressibility', 'Creams', 'Crystallisation', 'Drilling Fluids', 'Droplet Formation', 'Emulsions', 'Fluid Morphology', 'Foams', 'Injection Moulding', 'Interparticle Forces (Fluids)', 'Latex', 'Liquefaction', 'Liquid Crystalline Polymers', 'Liquid Crystals', 'Liquid-Liquid Systems', 'Lyotropes', 'Microemulsion', 'Microporous Structures', 'Organogels', 'Paints', 'Pastes', 'Phase Transformations', 'Porosimetry', 'Process Analysis', 'Processing of Complex Fluids', 'Rheopectic Fluids', 'Shear Thinning Fluids', 'Surfactants', 'Thixotropy']
  }]
}, {
  areaName: 'Cell biology',
  subjects: [{
    subjectName: 'Ageing: chemistry/biochemistry',
    topics: ['(null)', 'Ageing: chemistry/biochemistry', 'DNA damage & repair', 'Homeostatic regulation', 'Ageing: chemistry/biochemistry', 'Reactive oxygen species (ROS)', "Werner's syndrome (ageing)", 'Programmed cell death', 'Neurodegeneration', 'Protein glycation', 'Protein nitration', 'Protein oxidation', 'Immunosenescence', 'Oxidative stress', 'Free radicals', 'Antioxidants', 'Cell damage', 'Superoxides', 'Biomarkers', 'Cell fate ', 'Proteasome', 'Senescence', 'Apoptosis', 'Telomeres', 'Mutation']
  }, {
    subjectName: 'Cell cycle ',
    topics: ['(null)', 'DNA damage & repair', 'Cell differentiation', 'Cancer cell biology', 'Cell proliferation', 'Forkhead proteins', 'Cell programming', 'Replication fork', 'Telomere biology', 'DNA replication', 'Cell division', 'Cell cycle ', 'Cytokinesis', 'Cell death', 'Interphase', 'Quiescence', 'Telomerase', 'Apoptosis', 'Oncogenes', 'Meiosis', 'Mitosis', 'Cyclin']
  }, {
    subjectName: 'Cells',
    topics: ['(null)', 'Haematopoietic stem cells', 'Pancreatic alpha cells', 'Natural killer cells', 'Pancreatic beta cell', 'Photoreceptor cells', 'Regulatory T cells', 'Endothelial cells', 'Epithelial cells', 'Dendritic cells', 'Epidermal cells', 'Keratinocytes', 'Stromal cells', 'Erythrocytes', 'Granulocytes', 'Sclerenchyma', 'Chondrocyte', 'Collenchyma', 'Eosinophils', 'Guard cells', 'Hepatocytes', 'Lymphocytes', 'Macrophages', 'Melanocytes', 'Neutrophils', 'Osteoblasts', 'Osteoclasts', 'Trophoblast', 'Adipocytes', 'Basophils ', 'Blastocyst', 'Leukocytes', 'Mast cells', 'Osteocytes', 'Parenchyma', 'Stem cells', 'Platelets', 'Myocytes', 'B cells', 'Oocytes', 'T Cells', 'Cells']
  }, {
    subjectName: 'Communication & signalling',
    topics: ['(null)', 'Plant growth regulators', 'Communication & signalling', 'Cyclic nucleotide signalling', 'Protein-protein interactions', 'Hormone signalling (plants)', 'Intercellular communication', 'Cell-matrix interactions', 'Intracellular signalling', 'Cell-cell interactions', 'Metal ion homeostasis', 'Immediate early gene', 'Jasmonate signalling', 'Molecular immunology', 'Secondary messengers', 'Ethylene signalling', 'Mechanotransduction', 'Signal transduction', 'Vesicular transport', 'Calcium signalling', 'Protein expression', 'Nitric oxide (NO)', 'Plant signalling ', 'Protein targeting', 'Protein transport', 'Auxin signalling', 'Cell trafficking', 'Lipid signalling', 'Sugar signalling', 'Animal hormones', 'Cell signalling', 'Gene expression', 'Cell migration', 'Growth factors', 'Wnt signalling', 'Cell adhesion', 'Cell motility', 'Cytotoxicity', 'Ion channels', 'Phagocytosis', 'Transporters', 'Endocytosis', 'Chemokines', 'Chemotaxis', 'Eicosanoid', 'Exocytosis', 'Cytokines', 'Integrins', 'Migration', 'Secretion', 'Ubiquitin', 'Adhesion', 'Synapses', 'Annexin', 'Hypoxia']
  }, {
    subjectName: 'Organelles & components',
    topics: ['(null)', 'Organelle biology (plants)', 'Organelles & components', 'Calcium binding proteins', 'Organelle biosynthesis', 'Endoplasmic reticulum', 'Molecular chaperones', 'Protein trafficking', 'Trans Golgi Network', 'Adherens junctions', 'Nuclear structure', 'Molecular motors', 'Golgi apparatus', 'Calcium stores', 'Chloroplasts', 'Cytoskeleton', 'Microtubules', 'Mitochondria', 'Cell walls', 'Peroxisome', 'Chromatin', 'Lysosomes', 'Membranes', 'Ribosomes', 'Assembly', 'Endosome', 'Glycogen', 'Plastids', 'Synapses', 'Vacuoles', 'Vesicle', 'Nuclei', 'Actin']
  }, {
    subjectName: 'Receptors',
    topics: ['(null)', 'G-protein coupled receptors', 'Structure activity relation.', 'Protein-protein interactions', 'Neurotransmitter receptors', 'Toll-like receptors (TLRs)', 'Receptor trafficking', 'Endocrine receptors', 'Receptor signalling', 'Calcium signalling', 'Cytokine receptors', 'Integrin receptors', 'Adenylate cyclase', 'Nuclear receptors', 'Scaffold proteins', 'Second messengers', 'Receptor binding', 'Receptor kinases', 'T cell receptors', 'Cell signalling', 'Phosphorylases', 'Glycosylation', 'Nod receptors', 'Coreceptors', 'Cyclic AMP', 'Olfaction', 'Oxidation', 'Receptors', 'Hormones', 'Ligands']
  }, {
    subjectName: 'Stem cell biology',
    topics: ['(null)', 'Haematopoietic stem cells', 'Mesenchymal stem cells', 'Embryonic stem cells ', 'Neural stem cells', 'Stem cell biology', 'Adult stem cells', 'Cell programming', 'Notch signalling', 'Differentiation', 'Embryoid bodies', 'Retinoblastoma', 'Organogenesis', 'Pluripotency', 'Self-renewal', 'Karyotyping', 'Progenitors', 'Propagation', 'Quiescence', 'Cell fate', 'Teratomas', 'Ontogeny']
  }]
}, {
  areaName: 'Chem. React. Dyn. & mechanisms',
  subjects: [{
    subjectName: 'Gas & Solution Phase Reactions',
    topics: ['(null)', 'Acid/base reactions', 'Activation Parameters', 'Aerosol chemistry', 'Femtosecond Techniques', 'Gas Phase Electron Transfer', 'Gas Phase Molecular Dynamics', 'Gas Phase Reaction Mechanisms', 'Gas Transport Properties', 'Gas/Liquid phase Kinetics', 'Intermolecular Interactions', 'Intramolecular Interactions', 'Ionisation', 'Kinetic Isotope Effect', 'Laser Induced Fluorescence', 'Laser Spectroscopy ', 'Photodissociation', 'Reactions in ionic liquids', 'Reactive Collisions', 'Reactive Intermediate', 'Rydberg', 'Solution Phase Molecular Dyn.', 'Solution Phase Reaction Mech.', 'Solvolysis', 'Stopped Flow Kinetics', 'Time Resolved Studies']
  }, {
    subjectName: 'Physical Organic Chemistry',
    topics: ['(null)', 'Carbanions', 'Carbenium Ions', 'Carbocation', 'Chemical Thermodynamics', 'Flash Photolysis', 'Free Radicals', 'Ion Molecule Interactions', 'Isotope Effect', 'Linear Free Energy Relation', 'Molecular Recognition', 'Neutron Reflection', 'Organic Reactive Intermediate', 'Proton transfer', 'Pulsed Laser Techniques', 'Radiolysis', 'Reaction Kinetics', 'Reaction Mechanisms', 'Substituent Effects']
  }]
}, {
  areaName: 'Chemical measurement',
  subjects: [{
    subjectName: 'Analytical Science',
    topics: ['(null)', 'Acoustic Analysis', 'Acoustic Wave Spectroscopy', 'Affinity Chromatography', 'Analytical Biosensors', 'Analytical Photochemistry', 'Atomic Spectroscopy', 'Capillary Electrophoresis (CE)', 'Catalytic analytical methods', 'Chemical Coupling Techniques', 'Chemical Data Analysis', 'Chemical Sampling Technologies', 'Chiral Chromatography', 'Dichroism', 'Dielectric Techniques', 'Electroanalysis', 'Electrochromatography', 'Electrophoresis', 'Ellipsometry', 'EPR', 'Fluorescence-based anal. tech.', 'FT Mass Spectrometry', 'Gas Chromatography', 'Gas Sensors', 'Gel permeation chromatography', 'HPLC', 'Immunoassay', 'Ion Chromatography', 'Ion Trap Mass spectrometry ', 'Laser Induced Mass Analysis', 'Luminescence', 'Mass Spectrometry', 'Microwave analysis', 'Nuclear Magn. Resonance NMR ', 'Phosphorescence Anal. Tech.', 'Photoelectron Spectroscopy', 'Pore Size Analysis', 'Raman Spectroscopy', 'Scanning Probe Microscopy', 'Scanning Tunnelling Micros STM', '2nd Harmonic Generation Spect.', 'Sum Frequency Spectroscopy ', 'Thermal Analytical Methods', 'Ultra Trace Analysis', 'UV/Visible Spectroscopy', 'Vibrational spectroscopy']
  }, {
    subjectName: 'Chemical Structure',
    topics: ['(null)', 'Bioinorganic Molecular Struct.', 'Charge Density', 'Chemical Shifts', 'Chemical X-ray Crystallography', 'Chemical X-ray Diffraction', 'Chemical X-ray Reflection', 'Chemical X-ray Scattering', 'Chiral Structure', 'Crystal structure', 'Electron Diffraction', 'EXAFS', 'Hydrogen Bonding', 'Intermolecular Forces', 'Isomers', 'Neutron Diffraction', 'Nuclear Quadrupole Resonance', 'Nucleation process', 'Polarisability', 'Single Crystal Diffraction', 'Solid-state NMR ', 'Spin Coupling', 'Structure of Clusters', 'Structure of Dyes', 'Structure of Films', 'Structure of Fullerenes', 'Structure of Ice', 'Structure of Micelles', 'Structure of Pigments']
  }, {
    subjectName: 'Instrumentation Eng. & Dev.',
    topics: ['(null)', 'Adaptive Optics', 'Audiology', 'CCD', 'Chemical Biosensors', 'Chemical Sensors ', 'Chemometrics Instrumentation', 'Coherent Optics', 'Crystallography Instrument.', 'Data Collection', 'Data Fusion Instrumentation', 'Diffractive Optics', 'Electromagnetic Sensors ', 'Endocrinology', 'ENT', 'Environmental Sensors ', 'Functional Elect. Stimulation', 'Functional Imaging Instrument.', 'Gas Sensors Instrumentation', 'Genito-urinary Medicine', 'Holography Instrumentation', 'Impedance Sensors', 'Infrared Imaging Instrument.', 'Infrared Sensor Instrument.', 'Intelligent Instrument', 'Intensive Care', 'Micro-optics', 'Microscopy - SEM/TEM/proton', 'Microscopy - Optical', 'Probe Micros.(AFM/STM/thermal)', 'Optical Fibres', 'Optical Sensors', 'Optical Systems', 'Optics - Sol-gel', 'Physical Biosensors', 'Positron Emission Tomog. (PET)', 'Pressure Sensors', 'Process Tomography', 'Process/Manufacturing Sensors', 'Radionucleide Imaging Instrum.', 'Reactor Technology', 'Real-time Monitoring', 'Safe Handling', 'Sensor Arrays', 'Sensor Integration', 'Structural Health Monit. Sens.', 'Tomography Instrumentation', 'Ultrasound Instrumentation', 'X-ray Imaging']
  }]
}, {
  areaName: 'Chemical synthesis',
  subjects: [{
    subjectName: 'Asymmetric Chemistry',
    topics: ['(null)', 'Asymmetric synthesis', 'C2 symmetric', 'Chiral Auxiliaries', 'Chiral Reagents', 'Desymmetrisation', 'Directed Reactions', 'Enantiomeric Excess', 'Enantiomers', 'Kinetic Resolution', 'Regio-control', 'Resolving Agent', 'Sharpless Reactions', 'Stereochemistry', 'Theoretical Stereochemistry']
  }, {
    subjectName: 'Biological & Medicinal Chem.',
    topics: ['(null)', 'Alkaloids', 'Allosteric', 'Amino acids', 'Artifical Enzymes', 'Beta Sheet', 'Biomimetic Chemistry', 'Bio-organic Synthesis', 'Biophysical Chemistry', 'Biosites', 'Catalytic Antibodies', 'DNA Chemistry', 'DNA/RNA cleavage', 'Drug Design', 'Enzyme models', 'Fatty Acids', 'Ionophores', 'Lipid synthesis', 'Liposomes', 'Medicinal Bio-catalysis', 'Medicinal Biotransformations', 'Medicinal Chemistry', 'Michaelis-Menten', 'Molecular Gears', 'Natural Product Structures', 'Nucleic Acids', 'Organic Host-guest chemistry', 'Peptide Design', 'Peptide Glycans', 'Peptide Synthesis', 'Polyketides', 'Polymers for Medicinal Use', 'Porphyrins ', 'Prebiotic chemistry', 'Protein Structure', 'Shikimic Acids', 'Steroid Chemistry', 'Terpenes', 'Tracer Radioactive Elements']
  }, {
    subjectName: 'Chemical Synthetic Methodology',
    topics: ['(null)', 'Addition Reactions ', 'Aldol', 'Alkenes', 'Alkynes', 'Amination Reaction ', 'Annulation reactions', 'Arenes', 'Arynes', 'Azides', 'Baeyer-Villiger Reaction ', 'Boron reagents', 'Carbenes', 'Carbonylation', 'Cascade Processes', 'Catenanes', 'Claisen rearrangement ', 'Cryptands/Cryptates', 'Curtius rearrangment ', 'Cycloaddition reactions', 'Cyclophanes', 'Diels-Alder reaction ', 'Dihydroxylation', 'Efficient synthesis ', 'Ene Reaction', 'Epoxidation', 'Friedel-Crafts', 'Green synthesis', 'Heavy element heterocycles', 'Heck reaction', 'Heterocyclic chemistry', 'High Pressure Synthesis', 'Hydroamination', 'Hydrocarbon activation', 'Hydrothermal Synthesis', 'Imines', 'Inorganic Host-guest chemistry', 'Isomerisation', 'Lanthanide reagents', 'Lithium reagents', 'Macrocycles', 'Magnesium reagents', 'Mannich reaction', 'Metallocenes', 'Metathesis reactions', 'Michael Reaction', 'Mitsunobu Reaction', 'MOF synthesis', 'Molecular Design', 'Natural Product Synthesis', 'Nazarov', 'Nitrenes', 'Olefination', 'Organofluorine', 'Organometallic syntheses', 'Organosilicon reagents', 'Pericyclic Processes', 'Phosphorus reagents', 'Photochemical synthesis ', 'Polycyclics', 'Protecting Groups', 'Radical reactions', 'Rearrangements', 'Ring Expansion/Contraction', 'Ring Opening/Closing', 'Rotaxanes', 'Self-assembly', 'Sigmatropic reaction', 'Silicon chemistry', 'Sonochemistry', 'Staudinger reaction', 'Sulfur reagents', 'Supercritical Fluids', 'Supramolecular chemistry', 'Suzuki reaction ', 'Total Synthesis', 'Transition metal reagents', 'Vilsmeier reaction ', 'Wacker reaction ', 'Wittig reaction ']
  }, {
    subjectName: 'Combinatorial Chemistry',
    topics: ['(null)', 'Combinatorial Coupling', 'Combinatorial Library Design', 'Dynamic Combinatorial Chem.', 'High Throughput Screening', 'Library Screening Techniques', 'Parallel Synthesis', 'Resin Beads', 'Resin Synthesis', 'Solid Phase Organic Synthesis', 'Solid Supported Scavengers', 'Solid Supports', 'Solution Phase Combin. Chem.', 'Traceless Linker']
  }, {
    subjectName: 'Co-ordination Chemistry',
    topics: ['(null)', 'Actinide complexes', 'Coordination Complexes', 'Coordination Dendrimers', 'Lanthanide complexes', 'Ligand Design ', 'Ligand Synthesis ', 'Molecular Complexes Design ', 'Molecular switch complexes', 'Organometallic complexes', 'Racemisation', 'Transition metal complexes']
  }, {
    subjectName: 'Synthetic biology',
    topics: ['(null)', 'Artificial Cellular Systems', 'Artificial Vesicles/Capsules', 'Bacterial Integrons', 'Biologically Based Parts', 'Bioprocess Engineering- Synbio', 'Biosensors - Synbio', 'Biotechnology - Synbio', 'Cell Membranes - Synbio', 'Cell Signalling - Synbio', 'Cellular Design', 'Design Tools - Synbio', 'Genetically Engineered Machine', 'Manufacturing - Synbio', 'Minimal Cell', 'Modified Cell', 'Modularity - Synthetic Biology', 'Personalised Medicine', 'Synbio - Drug Development', 'Synbio - Energy/Biofuels', 'Synbio - Materials', 'Synthetic Biology Applications', 'Synthetic Biology Devices', 'Synthetic Biology Methods', 'Synthetic Cell']
  }, {
    subjectName: 'Drug Formulation & Delivery',
    topics: ['(null)', 'Creams for drug delivery', 'Drug Administration', 'Drug Delivery Devices', 'Drug Delivery Implants', 'Drug emulsions', 'Drug nanoparticles', 'Encapsulation of drugs', 'Flocculation of drugs', 'Formulation of Drugs', 'Liposomes for drugs', 'Micelles for drugs', 'Microparticles for drugs', 'Mucosal Surfaces', 'Polymer Drug Conjugates', 'Polymer Therapeutics', 'Vesicles for drugs']
  }]
}, {
  areaName: 'Civil eng. & built environment',
  subjects: [{
    subjectName: 'Building Ops & Management',
    topics: ['(null)', 'Accessibility in Buildings', 'Air Conditioning (Buildings)', 'Air Quality (indoors)', 'Building Acoustics', 'Building Control', 'Building Envelope', 'Building Modelling', 'Building Noise & Vibration', 'Building Services', 'Design for Health (Buildings)', 'Efficiency of Buildings', 'Energy Usage by Buildings', 'Fire & Rescue (Buildings)', 'Heating of Buildings', 'Human Behaviour in Buildings', 'Indoor Climatic Effects', 'Indoor Comfort', 'IT in Design of Buildings', 'Lighting (Buildings)', 'Lining Systems (Buildings)', 'Moisture & Condens. in Bldgs', 'Productivity in Buildings', 'Retrofit of Buildings', 'Smart Buildings', 'Ventilation in Buildings', 'Virtual Environments', 'Water Supply in Buildings']
  }, {
    subjectName: 'Civil Engineering Materials',
    topics: ['(null)', 'Brick', 'Building Materials from Waste', 'Cement & Concrete (Civil)', 'Coatings (Civil)', 'Corrosion (Civil)', 'Corrosion Protection (Civil)', 'Durable Materials (Civil)', 'Failure Testing (Civil)', 'Finite Element Methods (Civil)', 'Heritage Materials (Civil)', 'Lightweight Materials (Civil)', 'Low Energy Materials (Civil)', 'Materials Fire Testing (Civil)', 'Mechanical Testing (Civil)', 'Mortars', 'Novel Building Materials', 'Polymer Composites (Civil)', 'Reinforced Concrete (Civil)', 'Smart Materials (Civil)', 'Smart Structures (Civil)', 'Stone & Masonry', 'Structural Glass (Civil)', 'Timber']
  }, {
    subjectName: 'Construction Ops & Management',
    topics: ['(null)', 'Benchmarking (Construction)', 'Building Information Modelling', 'Communication (Construction)', 'Construction Life Cycle', 'Construction Management', 'Construction Process', 'Construction Procurement', 'Construction Scheduling', 'Construction Supply Chain', 'Cost Modelling (Construction)', 'Culture Issues in Construction', 'Decision Making (Construction)', 'Deconstruction', 'Design Process (Construction)', 'Facilities Management', 'Health & Safety (Construction)', 'Innovation in Construction', 'IT in Construction', 'K&I Management (Construction)', 'Lean Construction', 'Modular Construction', 'Offsite Construction', 'Productivity (Construction)', 'Risk Assessment (Construction)', 'Risk Mgmt in Construction', 'Teamworking (Construction)', 'Whole Life Costing']
  }, {
    subjectName: 'Ground Engineering',
    topics: ['(null)', 'Cement in ground engineering', 'Clay for Ground Engineering', 'Dams Prototype Monitoring', 'Deep Excavations', 'Engineering Geology', 'Environmental Geotechnics', 'Geomechanics', 'Geotechnics', 'Ground Predictive Models', 'Groundwater Investigation', 'Groundwater Pollution', 'In-situ Ground Testing', 'Mining Subsidence', 'Piling', 'Pipe Jacking', 'Reinforced Soil', 'Repair Ground Structures ', 'Retaining Walls ', 'Rock Mechanics', 'Site Investigation', 'Slopes', 'Soil', 'Soil & Rock: Fundamentals', 'Soil & Rock: Mechanics', 'Soil Behaviour', 'Soil Dynamics', 'Soil Mechanics', 'Soil Properties', 'Soil Reinforcement', 'Soil-Structure Interaction', 'Structure remediation', 'Subsidence', 'Trenchless Technology', 'Tunnelling']
  }, {
    subjectName: 'Mining & Minerals Extraction',
    topics: ['(null)', 'Minerals Extracting', 'Minerals Processing', 'Mining']
  }, {
    subjectName: 'Pavement Engineering',
    topics: ['(null)', 'Aggregate Materials', 'Bituminous Materials', 'Clay for Pavement Engineering', 'Engineering Stress Analysis', 'Ground Reinforcement', 'Highway Engineering', 'Highway Maintenance', 'Highway Management', 'Highways', 'Land Use', 'Pavement Characteristics ', 'Pavement Construction Material', 'Pavement Durability', 'Pavement Engineering', 'Pavement Geotechnics', 'Railbeds', 'Railway Noise', 'Sports Surfaces', 'Urban Pavement Design']
  }, {
    subjectName: 'Structural Engineering',
    topics: ['(null)', 'Blast Engineering (Civil)', 'Bridges', 'Cable Structures (Civil)', 'Composite Structures (Civil)', 'Concrete Structures (Civil)', 'Damage Detection (Structural)', 'Earthquake Engineering', 'Failure of Structures (Civil)', 'Fire Engineering (Civil)', 'Health Monitoring (Civil)', 'Historical Structures', 'Human-Structure Interaction', 'Large-scale Structural Tests', 'Lightweight Structures (Civil)', 'Long Spans', 'Low Carbon Structures (Civil)', 'Masonry Structures (Civil)', 'Offshore Structures (Civil)', 'Retrofit of Structures (Civil)', 'Steel Structures (Civil)', 'Structural Analysis (Civil)', 'Structural Design (Civil)', 'Structural Joints (Civil)', 'Thin-walled Structures (Civil)', 'Timber Structures (Civil)', 'Use of Sensors (Civil)', 'Vibration Engineering (Civil)']
  }, {
    subjectName: 'Transport Ops & Management',
    topics: ['(null)', 'Accident Analysis & Modelling', 'Airport Operations', 'Coast & Inland Water Trans.Ops', 'Cycling', 'Discrete Choice Modelling', 'Driver Behaviour', 'Driver Information Systems', 'Environ. Impact of Transport', 'Ferry Operations', 'Freight Operations', 'Image Analysis', 'Inclusive Transport', 'Intelligent Transport Systems', 'Logistics', 'Marine Transport Operations', 'Modal Choice', 'Network Analysis', 'Operational Research (Trans.)', 'Passenger Information Systems', 'Pedestrians', 'Port Operations', 'Public Transport Operations', 'Railway Operations', 'Road Charging Systems', 'Road Safety', 'Road Transport Operations', 'Route Choice', 'Traffic Assignment', 'Traffic Control', 'Traffic Engineering', 'Traffic Impact Assessment', 'Traffic Management', 'Traffic Modelling', 'Traffic Simulation', 'Transport & Land Use', 'Transport Economics', 'Transport Emissions', 'Transport Noise & Vibration', 'Transport Planning', 'Transport Policy', 'Transport Pollution Management', 'Transport Safety', 'Transport Scheduling', 'Transport Telematics', 'Transportation Demand Mgmt', 'Travel Behaviour', 'Vehicle Locationing Systems']
  }, {
    subjectName: 'Urban & Land Management',
    topics: ['(null)', 'Climatic Effects on Land', 'GIS Mapping', 'Land Design', 'Land Predictive Models ', 'Land Quality', 'Outdoor Air Movement', 'Outdoor Urban Climate', 'Productivity Studies', 'Public Transport Systems', 'Streetscapes', 'Surveying', 'Sustainability: Environmental', 'Sustainability: Urban', 'Traffic Forecasting', 'Transport Modelling', 'Travel Demand', 'Urban Air Quality', 'Urban Design Against Crime', 'Urban Housing Management', 'Urban Land Use', 'Urban Lighting', 'Urban Noise & Tranquility', 'Urban Pedestrians', 'Urban Planning & Management', 'Urban Pollution Management ', 'Urban Predictive Models ', 'Vehicle Emissions', 'Community design', 'Design of public spaces']
  }, {
    subjectName: 'Water Engineering',
    topics: ['(null)', 'Acoustics', 'Anaerobic Digestion Treatment', 'Biofilms in Water Engineering', 'Biofouling (Water Engineering)', 'Boundary Layers (water)', 'Climatic Effects (Water Eng.)', 'Condition Monitoring (Water)', 'Domestic Waste Water', 'Drainage Systems (Water Eng)', 'Drinking Water Systems', 'Drinking Water Treatment Proc.', 'Effluent Treatment', 'Filtration (Water Eng)', 'Fouling (Water)', 'Grey Water', 'Hot Water Supply', 'Hydraulics (Water Eng)', 'Industrial Waste Waters', 'In-situ Water Testing Tech.', 'Leakage', 'Leakage Detection', 'Membrane Separations (Water)', 'Membrane Technology (Water)', 'Network Management', 'Organic Matter in Water', 'Sewer Maintenance & Rehab.', 'Sewerage Systems', 'Sludge', 'Treated Water Quality', 'Ultrafiltration', 'Waste Water', 'Water engineering control', 'Water Pipes', 'Water Resources', 'Water Treatment']
  }, {
    subjectName: 'Coastal & Waterway Engineering',
    topics: ['(null)', 'Beach Replenishment', 'Beaches', 'Breakwaters', 'Canals', 'Cliffs', 'Climatic Effects', 'Coastal & Waterway Currents', 'Coastal Defences', 'Coastal Engineering', 'Coastal Hydrodynamics', 'Coastal Morphology', 'Coastal Zone Management', 'Dredging', 'Erosion', 'Estuaries', 'Estuary Management', 'Floating Structures', 'Flood Defences', 'Flood Risk Assessment', 'Flooding', 'Flow Around Structures', 'Groynes', 'Harbours', 'Coastal Hydraulics', 'Jetties/Piers', 'Outfalls', 'Pollution Dispersal', 'Reservoir/Dam Engineering', 'River Dynamics', 'River Engineering', 'River Hydraulics', 'Seawalls', 'Sediment', 'Sediment Transport', 'Water & Coastal Structures', 'Waterway Management', 'Wave Impact Forces', 'Wave Over-Topping', 'Waves']
  }, {
    subjectName: 'Waste Management',
    topics: ['(null)', 'Anaerobic Digestion of Waste', 'Bioremediation of Waste', 'Land Use for Waste', 'Landfill Design', 'Landfill Management', 'Leachate Management', 'Recovery of Waste Materials', 'Recycling of Waste Materials', 'Sludge management', 'Soiled Waste', 'Waste Construction Materials ', 'Waste Disposal', 'Waste Legislation', 'Waste Management', 'Waste Pollution Management', 'Waste Waters Management', 'Water Risk Assessment']
  }, {
    subjectName: 'Earth Engineering',
    topics: ['(null)']
  }, {
    subjectName: 'Materials testing & eng.',
    topics: ['(null)', 'Adaptive Structures', 'Adhesion of Materials', 'Construction of Ships', 'Corrosion Protection ', 'Diagnostics (Mechanical)', 'Diffusion Bonding ', 'Dynamic Mech. Test Anal.(DMTA)', 'Grinding (Mechanical)', 'Honeycombs', 'In-situ Mech. Testing Tech.', 'Joining', 'Laser Cutting', 'Laser Welding', 'Life Prediction of Materials', 'Mechanical Cutting ', 'Micromechanics of Materials', 'NDE - Electromagnetic Tech.', 'NDE - Magnetic Techniques', 'NDE - Optical Techniques', 'NDE - Ultrasound Techniques', 'Repair/Remediation of Struct.', 'Residual Stress', 'Shape-memory Alloys', 'Shells', 'Smart Materials', 'Smart Structures', 'Soldering', 'Strain (Materials)', 'Stress (Materials)', 'Toughness']
  }, {
    subjectName: 'Soil science',
    topics: ['(null)', 'Fertility fertilizers/manures', 'Soil chemistry & soil physics', 'Plant-soil interactions', 'Rhizosphere biology', 'Soil conservation', 'Soil microbiology', 'Rhizoremediation', 'Soil cultivation', 'Soil ecosystems', 'Soil management', 'Bioremediation', 'Organic matter', 'Soil pollution', 'Soil resources', 'Soil structure', 'Soil acidity', 'Soil biology', 'Soil science']
  }, {
    subjectName: 'Oil & Gas Extraction',
    topics: ['(null)', 'Downhole Technology/Processes', 'Drilling for Oil/Gas', 'Dynamic Positioning', 'Enhanced Oil Recovery', 'Environmental Technology', 'Flowlines & Umbilicals', 'Handling Fluid/Solid Products', 'Hydrodynamics of Oil or Gas', 'Mooring Floating Installations', 'Offshore Construction', 'Offshore Decommissioning', 'Offshore Installations:Design ', 'Offshore Processing', 'Offshore Safety', 'Oil/Gas Reservoir Management', 'Pipelines', 'Pressure (Oil/Gas)', 'Rock Engineering', 'Rock Permeability', 'Scale in Oil Recovery', 'Seismic Oil Recovery', 'Thermal Oil Recovery', 'Well Exploration', 'Well Productivity & Recovery']
  }]
}, {
  areaName: 'Classics',
  subjects: [{
    subjectName: 'Classical Literature',
    topics: ['(null)']
  }, {
    subjectName: 'Classical Reception',
    topics: ['(null)']
  }, {
    subjectName: 'Languages & Linguistics',
    topics: ['(null)']
  }, {
    subjectName: 'Epigraphy & Papyrology',
    topics: ['(null)']
  }, {
    subjectName: 'Philosophy Thought & Religion',
    topics: ['(null)']
  }]
}, {
  areaName: 'Climate & climate change',
  subjects: [{
    subjectName: 'Climate & Climate Change',
    topics: ['(null)']
  }, {
    subjectName: 'Regional & Extreme Weather',
    topics: ['(null)']
  }, {
    subjectName: 'Palaeoenvironments',
    topics: ['(null)']
  }, {
    subjectName: 'Climate & Climate Change',
    topics: ['Atmospheric carbon cycle', 'Atmospheric carbon dioxide', 'Carbon capture and storage', 'Climate modelling', 'Climate variability', 'Deep ocean circulation', 'Dimethyl sulphide chemistry', 'Dissolved organic matter', 'Ecosystem impacts', 'Fossil fuels', 'Glacial processes', 'Greenhouse gases', 'Human health impacts', 'Ice coring', 'Isotopic record', 'Large scale atmospheric modelling', 'Large scale atmospheric circulation', 'Marine ecosystem services', 'Ocean acidification', 'Ocean atmosphere interaction', 'Ocean drilling', 'Ocean modelling', 'Ozone', 'Palaeoclimate observation', 'Palaeoclimate simulation', 'Regional climate', 'Remote sensing', 'Sea level rise', 'Sea surface temperature', 'Sea-ice processes', 'Surface ocean circulation', 'Trace gases', 'Water vapour']
  }, {
    subjectName: 'Palaeoenvironments',
    topics: ['Ancient DNA', 'Anoxic events', 'Cenozoic climate change', 'Climate change', 'Deep water circulation', 'El Nino Southern Oscillation', 'Evolutionary history', 'Fossil record', 'Glacial isostasy', 'Ice ages', 'Ice coring', 'Ice sheets', 'Dating - isotopic', 'Lake sediments', 'Large igneous provinces', 'Marine carbonates', 'Marine sediments', 'Mass extinctions', 'Mesozoic climate change', 'Ocean acidification', 'Ocean drilling', 'Palaeo proxies', 'Palaeoclimatology', 'Palaeoecology', 'Palaeogeology', 'Palaeomagnetism', 'Palaeozoic climate change', 'Precambrian climate change', 'Quaternary climate change', 'Sea level history', 'Surface water circulation']
  }, {
    subjectName: 'Regional & Extreme Weather',
    topics: ['Catchment effects', 'Coastal erosion', 'Communication of uncertainty', 'Convective clouds and precipitation', 'Data assimilation', 'Ensemble forecasting', 'Extratropical cyclones', 'Flood modelling', 'Floods', 'General circulation models', 'Greenhouse gas emission', 'Ice nucleation', 'Land use', 'Mesoscale convective systems', 'Mesoscale processes', 'Orographic processes', 'Poverty alleviation', 'Precipitation modelling', 'Risk management', 'Satellite observation', 'Sea ice', 'Sea surface temperature', 'Storm risk', 'Storm surges', 'Tornadoes', 'Tropical cyclones', 'Uncertainty estimation', 'Volcanic ash', 'Warning systems', 'Water quality', 'Weather forecasting', 'Windstorms']
  }]
}, {
  areaName: 'Complexity science',
  subjects: [{
    subjectName: 'Complexity Science',
    topics: ['(null)', 'Agent-Based Models', 'Cellular Automata', 'Complex System Description', 'Complex System Design', 'Complex System Formation', 'Complexity in Biology', 'Emergent behaviour', 'Human Factors in Complexity', 'Network Theory & Complexity', 'Nonlinear Dynamics & Chaos', 'Physics of Complex Systems', 'Quant. Information Theory', 'Risk in Complex Systems', 'Self-Organising Systems', 'Uncertainty in complex systems', 'Universality & scaling']
  }]
}, {
  areaName: 'Cultural & museum studies',
  subjects: [{
    subjectName: 'Conservation Of Art & Textiles',
    topics: ['(null)']
  }, {
    subjectName: 'Conservation Science',
    topics: ['(null)']
  }, {
    subjectName: 'Cultural Geography',
    topics: ['(null)']
  }, {
    subjectName: 'Cultural Studies & Pop Culture',
    topics: ['(null)']
  }, {
    subjectName: 'Gender & Sexuality Studies',
    topics: ['(null)']
  }, {
    subjectName: 'Heritage Management',
    topics: ['(null)']
  }, {
    subjectName: 'Museum & Gallery Studies',
    topics: ['(null)']
  }, {
    subjectName: 'Policy Arts Mgmt & Creat Ind',
    topics: ['(null)']
  }]
}, {
  areaName: 'Dance',
  subjects: [{
    subjectName: 'Choreography',
    topics: ['(null)']
  }, {
    subjectName: 'Dance Notation',
    topics: ['(null)']
  }, {
    subjectName: 'Dance Performance',
    topics: ['(null)']
  }, {
    subjectName: 'History Of Dance',
    topics: ['(null)']
  }, {
    subjectName: 'Social Dance',
    topics: ['(null)']
  }]
}, {
  areaName: 'Demography',
  subjects: [{
    subjectName: 'Demography (General)',
    topics: ['(null)', 'Population size and structure', 'Pop. estimates & projections ', 'Mortality rates', 'Demographics of Migration', 'Demographics of Ageing', 'Economic demography', 'Historical Demography', 'Nuptiality and partnership', 'Vital registration', 'Families and households', 'Population and development', 'Demographic modelling', 'Population Policy']
  }, {
    subjectName: 'Reproductive and sexual health',
    topics: ['(null)', 'Family planning ', 'Sexual behaviour', 'Contraception data', 'Partnership dynamics', 'Fertility rates', 'Abortion data', 'HIV & STI data', 'Teenage pregnancy rates', 'Birth intervals']
  }]
}, {
  areaName: 'Demography & human geography',
  subjects: [{
    subjectName: 'Demography',
    topics: ['(null)']
  }, {
    subjectName: 'Human Geography',
    topics: ['(null)']
  }]
}, {
  areaName: 'Design',
  subjects: [{
    subjectName: 'Architecture HTP',
    topics: ['(null)']
  }, {
    subjectName: 'Design Engineering',
    topics: ['(null)', 'Automotive Design Engineering', 'Computer Aided Design (CAD)', 'Concurrent Engineering Design', 'Design for Healthcare', 'Design for Manufacture', 'Design for Quality', 'Design for Recycling ', 'Design of Aircraft', 'Design of Biomaterials', 'Design of Built Infrastructure', 'Design of Ships', 'Design Reuse', 'Designing for Risk', 'Embodiment', 'Engineering Design', 'Environmental Impact Design ', 'Industrial Design', 'New Product Development', 'Physical Modelling', 'Production Design', 'Requirements Capture', 'Sports Engineering Design', 'Virtual Modelling']
  }, {
    subjectName: 'Design Processes',
    topics: ['(null)', 'Change Management Design', 'Conceptual Design Processes', 'Constraint Modelling in Design', 'Creativity in Design', 'Design Audit', 'Design Configuration', 'Design Decision Support Tools', 'Design for Sustainability', 'Design for User Need', 'Design Information', 'Design Innovation', 'Design Management', 'Design Processes', 'Design Review', 'Design to Customer Requirement', 'Designing in Human Factors', 'Distributed Design', 'Inclusive Design', 'Integration of Design', 'Knowledge Management (Design)', 'Multi-objective Optimisation', 'Process Management Design', 'Individualisation of technol.']
  }, {
    subjectName: 'Digital Art & Design',
    topics: ['(null)']
  }, {
    subjectName: 'Product Design',
    topics: ['(null)']
  }, {
    subjectName: 'Design HTP',
    topics: ['(null)']
  }]
}, {
  areaName: 'Development studies',
  subjects: [{
    subjectName: 'Area & Development Studies',
    topics: ['(null)']
  }, {
    subjectName: 'Pol.International Rel.&Dev.',
    topics: ['(null)', 'Civil society nongovernmental organisations', 'Conflict Peace Security', 'Democratisation', 'Fragile states', 'Globalisation', 'International relations international cooperation', 'Justice and Reconciliation', 'Participation and Empowerment', 'Political systems & development', 'Rights and Citizenship', 'UN system intergovernmental organisations IFIs']
  }, {
    subjectName: 'Economic Development',
    topics: ['(null)', 'Development aid aid flows and policies', 'Economic growth ', 'Macro-economic policy', 'Micro-economic policy', 'Economic growth theory', 'Entrepreneurship and growth', 'Informal economic sector', 'Microfinance', 'Financial market analysis', 'Household economic analysis', 'Migration and remittances', 'Labour market and relations', 'Land ownership and tenure', 'Poverty and inequality', 'Income distribution', 'Sustainable development', 'Public finance', 'Trade and trade policy', 'Food security']
  }, {
    subjectName: 'Development Studies',
    topics: ['(null)', 'Children and youth in LICs', 'Rural Development', 'Civil society and NGOs', 'Development aid and aid flow', 'Food security', 'Development policy', 'Gender and development', 'Globalisation', 'Housing in LICs', 'Health in LICs', 'Livelihoods wellbeing', 'Media in LICs', 'Microfinance', 'Migration and diasporas', 'Natural disasters', 'Poverty income distribution', 'Rural areas rural development', 'Tourism and LICs', 'Transport in LICs', 'Urban areas urbanisation', 'War and conflict', 'Natural Resources in LICs', 'Humanitarian assistance']
  }, {
    subjectName: 'Sociology and Development',
    topics: ['(null)', 'Children and youth in LICs', 'Culture cultural identity', 'Ethnic groups ethnicity', 'Gender and development', 'Inequality', 'Media in LICs', 'Povertyand measurement', 'Religion and development', 'Urban areas urbanisation', 'Population demographics']
  }, {
    subjectName: 'Nat Resources Env & Rural Dev',
    topics: ['(null)', 'Agriculture agricultural policy', 'Animal production pastoralism', 'Biotechnology & development', 'Climate change in LICs', 'Energy and LICs', 'Sustainable development', 'Fisheries in LICs', 'Food security food supply', 'Land ownership and tenure', 'Forestry & development', 'Natural disasters', 'Natural hazards', 'Plant production crops', 'Rural Livelihoods', 'Rural areas rural development', 'Transport in LICs', 'Pollution in LICs', 'Urban areas urbanisation', 'Water resources in LICs']
  }, {
    subjectName: 'Anthropology and Development',
    topics: ['(null)', 'Agricultural development', 'Art & Anthropology in LICs', 'Children & youth in LICs', 'Cultural identity in LICs', 'Food (access production preference security)', 'Ethnic groups ethnicity', 'Health and Anthropology', 'Gender and Anthropology', 'Indigenous people and cultures', 'Rural and Pastoral development', 'Participant observation', 'Kinship and development', 'Religion and Anthropology', 'Violence and conflict']
  }, {
    subjectName: 'Social policy and Development',
    topics: ['(null)', 'Ageing in LICs', 'Children and youth in LICs', 'Housing in LICs', 'Labour market and relations', 'Governance in LICs', 'Public health systems in LICs', 'Social participation in LICs', 'Social welfare social security in LICs', 'Urban areas urbanisation']
  }, {
    subjectName: 'Global Health and Medicine',
    topics: ['(null)', 'Biomedicine and LICs', 'Biotechnology and LICs', 'Fertility family planning', 'Health- social psychological', 'Health inequalities in LICs', 'Maternal health', 'Medicine diseases in LICs', 'Nutrition in LICs', 'Infectious disease and LICs', 'Public health systems in LICs', 'Stigma', 'Wellbeing in LICs']
  }, {
    subjectName: 'Internat Education and Dev',
    topics: ['(null)', 'Children and youth in LICs', 'Education in LICs', 'Higher Education in LICs', 'Labour market and relations', 'Pedagogy', 'Training in LICs']
  }, {
    subjectName: 'Law Democracy and Development',
    topics: ['(null)', 'Bioethics and LICs', 'Environmental Law', 'Human rights & development', 'International Law', 'Justice and Reconciliation', 'Labour relations', 'Land ownership and tenure', 'Law judicial system', 'Transnational corporations']
  }, {
    subjectName: 'Demography and Development',
    topics: ['(null)', 'Ageing in LICs', 'Demography population', 'Fertility family planning', 'Reproductive Health in LICs']
  }, {
    subjectName: 'Dev Informatics & Technology',
    topics: ['(null)', 'ICTs and LICs', 'R&D in LICs']
  }, {
    subjectName: 'Geography and Development',
    topics: ['(null)', 'Agriculture agricultural policy', 'Climate change in LICs', 'Demography population', 'Environment & development', 'Food security food supply', 'Housing in LICs', 'Indigenous people', 'Land ownership and tenure', 'Migration and diasporas', 'Natural hazards', 'Rural Livelihoods', 'Rural areas rural development', 'Sanitation in LICs', 'Tourism and LICs', 'Transport in LICs', 'Urban areas urbanisation']
  }, {
    subjectName: 'Management & Bus Studies & Dev',
    topics: ['(null)', 'Civil society NGOs', 'Development aid and aid flow', 'Entrepreneurship and growth', 'Industrial production and planning', 'Labour market and relations', 'Microfinance', 'Trade and trade policy', 'Transnational corporations']
  }, {
    subjectName: 'Regional Development',
    topics: ['(null)']
  }]
}, {
  areaName: 'Drama & theatre studies',
  subjects: [{
    subjectName: 'Drama & Theatre - Other',
    topics: ['(null)']
  }, {
    subjectName: 'Dramaturgy',
    topics: ['(null)']
  }, {
    subjectName: 'Performance & Live Art',
    topics: ['(null)']
  }, {
    subjectName: 'Scenography',
    topics: ['(null)']
  }, {
    subjectName: 'Theatre & History',
    topics: ['(null)']
  }, {
    subjectName: 'Theatre & Society',
    topics: ['(null)']
  }, {
    subjectName: 'Theories Of Theatre',
    topics: ['(null)']
  }]
}, {
  areaName: 'Ecol biodivers. & systematics',
  subjects: [{
    subjectName: 'Behavioural Ecology',
    topics: ['(null)']
  }, {
    subjectName: 'Community Ecology',
    topics: ['(null)']
  }, {
    subjectName: 'Conservation Ecology',
    topics: ['(null)']
  }, {
    subjectName: 'Population Ecology',
    topics: ['(null)']
  }, {
    subjectName: 'Systematics & Taxonomy',
    topics: ['(null)']
  }, {
    subjectName: 'Behavioural Ecology',
    topics: ['Altruism', 'Behavioural modelling', 'Competition', 'Cooperative behaviour', 'Defensive strategies', 'Disease dynamics', 'Early life history', 'Environmental factors', 'Evolutionary biology', 'Fitness', 'Food webs', 'Foraging behaviour', 'Gene expression', 'Gene flow', 'Genetic diversity', 'Histocompatibility complex', 'Host-parasite relations', 'Kin selection', 'Mating systems', 'Migration', 'Mutualism', 'Oxidative stress', 'Parent-offspring effects', 'Phenotypic plasticity', 'Population dynamics', 'Population size', 'Predation', 'Quantitative genetics', 'Reproduction', 'Reproductive isolation', 'Reproductive strategy', 'Selection processes', 'Selfish gene', 'Sexual segregation', 'Sexual selection', 'Signal mimicry', 'Social insects']
  }, {
    subjectName: 'Community Ecology',
    topics: ['Benthic communities', 'Biodiversity', 'Community structure', 'Coral reefs', 'Ecosystem function', 'Ecosystem services', 'Environmental stressors', 'Extinction', 'Freshwater communities', 'Fungal communities', 'Genetic diversity', 'Habitat fragmentation', 'Habitat modification', 'Host-parasite relations', 'Infectious disease', 'Invasive species', 'Land use', 'Life history', 'Marine communities', 'Microbes', 'Mutualists', 'Mycorrhizae', 'Nutrient limitation', 'Ocean acidification', 'Organic matter', 'Plant defences', 'Plant-animal interactions', 'Population dynamics', 'Predator-prey interactions', 'Primary production', 'Protected areas', 'Succession', 'Terrestrial communities', 'Trophic relations', 'Trophic structures', 'Tropical forests']
  }, {
    subjectName: 'Conservation Ecology',
    topics: ['Adaptation', 'Anthropogenic pressures', 'Biodiversity conservation', 'Bird migration', 'Community structure', 'Conservation management', 'Coral reefs', 'Ecosystem function', 'Ecosystem services', 'Evolution', 'Extinction', 'Food webs', 'Genetic diversity', 'Habitat change', 'Habitat fragmentation', 'Inbreeding depression', 'Invasive species', 'Land use change', 'Life history', 'Organic farming', 'Population genetics', 'Population structure', 'Protected areas', 'Species diversity', 'Tropical forests']
  }, {
    subjectName: 'Population Ecology',
    topics: ['Biodiversity', 'Ecosystem function', 'Ecosystem services', 'Evolutionary ecology', 'Evolutionary processes', 'Extinction', 'Freshwater populations', 'Genetic diversity', 'Habitat use', 'Host-parasite relations', 'Immunity', 'Indicator species', 'Infectious disease', 'Invasive species', 'Life cycles', 'Local adaptation', 'Marine populations', 'Marine protected areas', 'Population density', 'Population dynamics', 'Population modelling', 'Population structure', 'Predator-prey interactions', 'Primary production', 'Reproductive strategy', 'Responses to acidification', 'Sex ratio', 'Sexual selection', 'Terrestrial populations', 'Trophic relations', 'Trophic structures']
  }, {
    subjectName: 'Systematics & Taxonomy',
    topics: ['Adaptive processes', 'Carbonaceous fossils', 'Computer tomography', 'DNA barcoding', 'Evolutionary biology', 'Evolutionary diversification', 'Evolutionary history', 'Evolutionary rates', 'Extinct species', 'Feeding modes', 'Fossil analysis', 'Fossil embryos', 'Gene expression', 'Genetic diversity', 'Molecular clock', 'Molecular phylogeny', 'Museum collections', 'Natural selection', 'Phylogenetics', 'Reproductive isolation', 'Speciation', 'Species divergence', 'Species richness']
  }]
}, {
  areaName: 'Economics',
  subjects: [{
    subjectName: 'Economics (General)',
    topics: ['(null)', 'Economics', 'Behavioural economics', 'Urban economies', 'Rural economies']
  }, {
    subjectName: 'Development economics',
    topics: ['(null)', 'Capital accumulation', 'Economic nationalism', 'Growth theory', 'Income distribution', 'Lesser developed economies', 'Migration & economics', 'Millennium Development Goals', 'Neo-classical theory of development', 'Poverty', 'Productivity', 'Structural change', 'Technological change', 'Third world debt', 'Transition economies', 'Washington Consensus']
  }, {
    subjectName: 'Econometrics',
    topics: ['(null)', 'Statistical significance', 'Regression analysis', 'Time-series data', 'Cross-sectional data', 'Panel data', 'Stochastic processes', 'Instrumental variables', 'Simultaneous equation models', 'Identification', 'Problem of induction', 'Autocorrelation', 'Nonparametric models', 'Semiparametric models', 'Non additive models', 'Non separable models', 'Heteroskedasticity']
  }, {
    subjectName: 'Financial economics',
    topics: ['(null)', 'Financial instruments', 'Financial markets', 'Risk and uncertainty', 'Expected return', 'Portfolio management', 'Financial regulation', 'Portfolio Theory', 'Capital Asset Pricing Model', 'Efficient Market Hypothesis', 'Behavioural finance', 'Financial econometrics', 'Microfinance', 'Arbitrage', 'Hedging', 'Financial crisis']
  }, {
    subjectName: 'Industrial Organisation (R&D)',
    topics: ['(null)', 'Theory of the firm', 'Industrial structure', 'Industrial policy', 'Oligopoly', 'Imperfect competition', 'Product differentiation', 'Technical change and innovation', 'Mergers and acquisitions', 'Globalisation', 'Outsourcing', 'Collusion', 'Barriers to entry', 'Advertising and marketing', 'Corporate finance', 'Vertical integration', 'Research and development', 'Government regulation']
  }, {
    subjectName: 'International economics',
    topics: ['(null)', 'Terms of trade', 'Foreign Exchange rates', 'Balance of payments', 'Comparative advantage', 'Free trade', 'Economic integration', 'Globalisation', 'Infant industries', 'International finance', 'Capital mobility', 'Migration in economics', 'Tariffs and quotas', 'Washington Consensus', 'Purchasing Power Parity', 'Factor Price Equalisation']
  }, {
    subjectName: 'Macroeconomics',
    topics: ['(null)', 'Open economy', 'Productivity', 'Economic growth', 'Inflation', 'National income', 'Unemployment', 'Savings and investment', 'Government spending and taxation', 'Monetary and fiscal policy', 'Keynesian macroeconomics', 'Consumption function', 'Business cycle', 'Rational expectations', 'Monetary economics', 'Quantitative easing', 'Microeconomic foundations', 'Dynamic Stochastic General Equilibrium']
  }, {
    subjectName: 'Labour economics',
    topics: ['(null)', 'Human capital formation', 'Wage determination', 'Marginal Revenue Product', 'Wage inequality', 'Unemployment rate', 'Labour demand and supply', 'Education and skills', 'Models of unemployment', 'Trade unions', 'Employment protection', 'Labour market flexibility', 'Labour migration', 'Household decision making', 'Job signalling', 'Discrimination']
  }, {
    subjectName: 'Public economics',
    topics: ['(null)', 'Public goods', 'Externalities', 'Public spending', 'Taxation', 'Public choice theory', 'Market failure', 'Welfare economics', 'Distributional effects', 'Health care spending', 'Defence spending', 'Social security spending', 'Education spending', 'Regulated markets']
  }, {
    subjectName: 'Microeconomic theory',
    topics: ['(null)', 'Opportunity cost', 'Economic rationality', 'Dynamic general equilibrium', 'Disequilibrium dynamics', 'Theory of the firm', 'Perfect competition', 'Market failure', 'Asymmetric information', 'Market pricing', 'Welfare economics', 'Household behaviour', 'Individual consumption and saving decisions', 'Overlapping generations', 'Applied microeconomics']
  }, {
    subjectName: 'Law and economics',
    topics: ['(null)', 'Legal regulation of market mechanisms', 'Economic analysis of law', 'Law and economic efficiency', 'Competition policy', 'Competition law', 'Taxation law', 'Commercial law', 'Regulated industries', 'Financial market regulation', 'Employment law', 'Environmental law', 'Anti-discrimination law', 'Contract law', 'Intellectual property', 'European Community', 'Comparative legal frameworks', 'Public choice theory', 'Normative theory of law and economics']
  }, {
    subjectName: 'Behavioural & experimental eco',
    topics: ['(null)', 'Bounded rationality', 'Economic decision making', 'Behavioural finance', 'Prospect theory', 'Inter-temporal choice', 'Systemic bias', 'Cognitive framing', 'Anchoring', 'Risk perception', 'Neuroeconomics', 'Habit formation', 'Game theory', 'Bargaining', 'Auctions', 'Social preferences', 'Natural resources']
  }, {
    subjectName: 'Environmental economics',
    topics: ['(null)', 'Market failure', 'Environmental externalities', 'Economic effects of environmental policies', 'Environmental impact', 'Environmental public goods', 'Environmental valuations', 'Pricing of environmental resources', 'Environmental regulations', 'Environmental law', 'Property rights', 'Sustainable development', 'Environmental enterprises', 'Environmental taxes and quotas', 'Renewable energy', 'Green banking', 'Ecological economics']
  }]
}, {
  areaName: 'Education',
  subjects: [{
    subjectName: 'Education (General)',
    topics: ['(null)']
  }, {
    subjectName: 'Sociology of Education',
    topics: ['(null)', 'Education & Social Class', 'Education & Gender', 'Education & Ethnicity', 'Identities', 'Multicultural education', 'Social Capital', 'Classroom Cultures', 'Classroom Discourse', 'Pupils Voices', 'Pupils Views', 'High Achievers ', 'Low Achievers', 'Globalisation', 'Inequalities', 'Social Exclusion', 'Attainment Gaps', 'Faith Schools', 'Parental Involvement', 'Social Mobility']
  }, {
    subjectName: 'Psychology of Education',
    topics: ['(null)', 'Socio-cognitive Developments', 'Learning Strategies', 'Classroom Behaviour', 'Neurosciences', 'Gifted and Talented', 'Language Development', 'Speech Recognition', 'Autism in education', 'ADHD', 'Dyslexia in education', 'Dyscalculia in education', 'Learning Disorders', 'Special Educational Needs', 'Behavioural Patterns', 'Peer Relationships', 'Bullying']
  }, {
    subjectName: 'Curriculum areas',
    topics: ['(null)', 'Education on Citizenship', 'Humanities curriculum', 'Maths/Numeracy', 'Arts Curriculum', 'Science Curriculum', 'Design and Technology Curriculum', 'Language education', 'Physical education', 'English/literacy', 'Personal Social and Health Education', 'TEFL', 'Religious and moral education', 'Sport education', 'ESOL', 'Financial Education', 'Life Skills']
  }, {
    subjectName: 'Elements of Education',
    topics: ['(null)', 'Educational Assessment', 'Pedagogy', 'Curriculum', 'Examinations and Testing', 'Key Stages', 'Behaviour Management', 'Teaching Methods', 'Teacher-pupil Relationships', 'Pupil Engagement', 'Inclusion', 'Learning', 'Exclusions', 'Social Skills', 'Leadership', 'Truancy', 'Information Advice and Guidance']
  }, {
    subjectName: 'Phases of education',
    topics: ['(null)', 'Pre-school', 'Early Years', 'Nursery Education', 'Home Schooling', 'Primary Schools', 'Middle Schools', 'Secondary Schools', 'Post-compulsory', 'Further Education', 'Roma and traveller Education', 'Vocational Education', 'Apprenticeship', 'Higher Education', 'Work-based Learning', 'Learning Skills', 'Distance Learning', 'Adult and Continuing Education', 'Alternatives to school', 'Informal Learning']
  }, {
    subjectName: 'Education Policy',
    topics: ['(null)', 'Diversity of Schools', 'School Choice', 'League Tables', 'School Effects', 'Segregation in education', 'Widening Participation', 'Free Schools', 'Academies', 'Comprehensive Schools', 'Grammar Schools']
  }, {
    subjectName: 'ICT and education',
    topics: ['(null)', 'Multi-media Technology', 'Mobile learning', 'Digital Technologies', 'Interactive whiteboards', 'Virtual environments', 'Technology Enhanced Learning']
  }]
}, {
  areaName: 'Electrical engineering',
  subjects: [{
    subjectName: 'Bioelectronic Devices',
    topics: ['(null)', 'Bioelectronic nanostructures', 'Biointerfaces', 'Biological Microcircuits', 'Biomaterials for Info Proc ', 'Bio-Molecular Electronics', 'Sensors (Bioelectronics)', 'Silicon-based Electrodes']
  }, {
    subjectName: 'Electric Motor & Drive Systems',
    topics: ['(null)', 'Alternators', 'Drives', 'Electrical Drives', 'Electrical Vehicles', 'Energy efficient motors/drives', 'Magnetic Bearings', 'Motors - Brushless', 'Motors - Induction', 'Motors - Linear', 'Motors - Stepping', 'Motors - Synchronous', 'Switched Reluctance', 'Turbomachinery']
  }, {
    subjectName: 'Power Electronics',
    topics: ['(null)', 'AC/DC drives', 'Active Filtering', 'Capacitors in Power Electron.', 'Convertors (electronics)', 'Electronic Filters', 'FACTS', 'Gate Turn-off Thyristor (GTO)', 'HV Integrated Circuits (HVIC)', 'HVDC', 'Inductors', 'Integrated Gate Comm Thyristor', 'Lifetime Prediction', 'Light Triggered Thyristors', 'Microwave/RF power electronics', 'Phase Control Thyristors', 'power electronics circuits', 'Power Integrated Circuits', 'power Inverters', 'Rectifiers', 'Semiconductor Devices', 'SMPS', 'Thyristors', 'Trench MOS', 'Uninterruptible Power Supplies']
  }, {
    subjectName: 'Power Sys Man Prot & Control',
    topics: ['(null)', 'Intelligent Power Systems', 'Power Condition Monitoring', 'Power control Systems', 'Power fault detection', 'Power fault diagnosis', 'Power Systems - Economics', 'Power Systems - Management', 'Signal Control - Amplifiers', 'Signal Control - Switches', 'Systems Theory; Control']
  }, {
    subjectName: 'Power Systems Plant',
    topics: ['(null)', 'Cables in Power Plant', 'Dielectric Power Systems', 'Energy Substations', 'Insulators (power plant)', 'Power Plant Gas Turbines']
  }, {
    subjectName: 'Robotics & Autonomy',
    topics: ['(null)', 'Actuators', 'Autonomous Road Vehicles', 'Bio-inspired Robotics', 'Dextrous Manipulation', 'Dynamic Manipulation', 'Grasp Planning', 'Haptic Robotics Force Feedback', 'Industrial Robotics', 'Manipulator Dynamics', 'Manipulator Kinematics', 'Mechatronics', 'Medical Robotics', 'Medical Robotics - Assistive', 'Medical Robotics - Rehab.', 'Medical Robotics - Surgery', 'Mobile Robots', 'Multiple Robot Cooperation', 'Nanorobotics', 'Path Planning', 'Personal Robotics', 'Robot Calibration', 'Robot Control', 'Sensor-Guided Robots', 'Service Robotics', 'Swarm Robotics', 'Task-level Software', 'Teleoperation', 'Underwater Autonomous Vehicles', 'Unmanned Aerial Vehicles']
  }, {
    subjectName: 'Optical Devices & Subsystems',
    topics: ['(null)', 'Acoustic/Ultrasonic Sensors ', 'Amplifiers (not semiconductor)', 'Device Design', 'Environmental Biosensors', 'Fibre Gratings', 'Fibre-optic Sensors', 'Gratings (Optics)', 'Gravity Sensors', 'Heat Sensors', 'Lasers - Crystal Waveguide', 'Lasers - Development', 'Lasers - Femtosecond', 'Lasers - Fibre', 'Lasers - Quantum Cascade', 'Lasers - Solid-state', 'Lithium Niobate', 'Medical - Phys.& Chem. Sensing', 'Micro-optical Devices', 'Modulators - Acousto-optic', 'Neural Networks (Power)', 'Nonlinear Devices', 'Optical Biosensors', 'Optical Chemical Sensors', 'Optical Computing', 'Optical Data Storage', 'Optical Diagnostics/Analysis', 'Optical Fibres (Devices)', 'Optical Gas Sensing', 'Optical Parametric Oscillators', 'Optical Switches', 'Photonic Crystals', 'Planar Amplifiers', 'Planar Integration', 'Plasmonics', 'Semiconductor Amplifiers', 'Silica on Silicon', 'Spatial Light Modulators', 'Waveguides (Optical)']
  }, {
    subjectName: 'Optoelect. Devices & Circuits',
    topics: ['(null)', 'Electro-absorption Modulators', 'Gain Switched Laser', 'III-V Nitrides (Optoelect.)', 'III-V Optoelectronic Circuits', 'III-V Semicond. (Optoelect.)', 'Infrared Detectors', 'Laser diodes (Optoelectronic)', 'LEDs', 'Mode-locked Laser Diodes', 'Multiple Quantum Well', 'Optoelect. Detect. & Receivers', 'Optoelect. Integrated Circuits', 'Photodetectors', 'Photodiode', 'Photonic Integration', 'Photonic/Electron. Integration', 'Phototransistors', 'Pulsed Operation/Systems', 'Pump Lasers', 'Receivers/Mixers', 'Semiconductor Laser Amplifiers', 'Semiconductor Lasers', 'Solar Cells (Photovoltaics)', 'Terahertz', 'Ultra-violet (UV) devices']
  }]
}, {
  areaName: 'Energy',
  subjects: [{
    subjectName: 'Bioenergy',
    topics: ['(null)', 'Alternative Energy Biomass', 'Artificial photosynthesis', 'Bioenergy', 'Bioenergy - demand for', 'Bioenergy - distributed Power', 'Bioenergy feedstocks', 'Bioenergy for Clean Transport', 'Bioenergy Pyrolysis', 'Bioenergy Reaction Kinetics', 'Biofuel Life-cycle Analysis', 'Biofuels', 'Biogas', 'Biological Hydrogen Production', 'Biomass', 'Biomass Photoreactors', 'Biorefineries ', 'Bio-Refinery', 'Methane by Anaerobic Digestion', 'Co-Firing', 'Combustion of Biomass/Biofuels', 'Direct-Fired Systems', 'Energy Crops', 'Energy from Landfill', 'Energy from Waste', 'Gasification', 'Microbial hydrogen generation', 'Pollutants from Biomass', 'Pyrolysis', 'Renewables', 'Short rotation coppice', 'Sustainable energy production', 'Thermal Bioenergy Reactors']
  }, {
    subjectName: 'Carbon Capture & Storage',
    topics: ['(null)', 'Adsorbents for carbon capture', 'Aerogels for carbon capture', 'Algae for carbon capture', 'Ammonias for carbon capture', 'Biochar', 'Biomass & CCS', 'Carbon capture', 'Carbon capture from free air', 'Carbon dioxide pipelines', 'Carbon storage', 'CCS power station integration', 'CCS retrofit', 'CCS Storage capacity analysis', 'CCS whole systems', 'Chemical looping for CCS', 'CO2 transport systems', 'Enzymes for carbon capture', 'Hydrogen & carbon capture', 'Impurities in carbon dioxide', 'Injection sites for CO2', 'Membranes for carbon capture', 'Mineralisation -carbon capture', 'Monitoring of CO2 storage', 'Nanotechnology & CCS', 'Oxyfuel combustion', 'Post combustion capture', 'Pre combustion capture', 'Public acceptability of CCS', 'Reservoir modelling for CCS', 'Saline aquifers & CCS', 'Syngas & carbon capture']
  }, {
    subjectName: 'Coal Technology',
    topics: ['(null)', 'Coal - Characterisation', 'Coal - Combustion of', 'Coal - Extraction', 'Coal - Gasification', 'Coal - Handling', 'Coal - liquefaction ', 'Coal - Mass Transfer', 'Coal - Precipitation ', 'Coal - Processing']
  }, {
    subjectName: 'Energy - Conventional',
    topics: ['(null)', 'Coatings for Energy appl.', 'Conventional Power Plants', 'Energy emissions', 'Energy Systems: Engineering ', 'Energy systems: Process Design', 'Fuel cells (Conventional)', 'Gas Cleaning (Energy)', 'Gas Separation (Energy)', 'Lasers (Energy)', 'Optimisation (Energy)', 'Pollutants ', 'Pollution Control & Management', 'Process Control (Energy)', 'Process Technology (Energy)', 'Reliability: Energy generation', 'Thermal Barrier Coatings ']
  }, {
    subjectName: 'Energy - Marine & Hydropower',
    topics: ['(null)', 'Alternative Energy Marine', 'Barrage & Dam hydropower', 'Convergent Channel Systems', 'Float Systems', 'Hydrofoils', 'Hydropower', 'Marine energy maintenance', 'Marine power Hydraulics', 'Micro - Hydropower', 'Near Shore Devices', 'Ocean Mechanical Energy', 'Offshore Devices', 'Oscillating Water Column Sys.', 'Pendular Systems', 'Shoreline Wave Devices', 'Tidal Currents', 'Tidal Farms', 'Wave Action', 'Wave Energy', 'Wave Turbines']
  }, {
    subjectName: 'Energy - Nuclear',
    topics: ['(null)', 'Experimental Nuclear Reactors', 'Gas-Cooled Fast Reactor', 'Isotope Power Supplies', 'Lead-Cooled Fast Reactor', 'Molten Salt Reactor', 'Non-Breeding Reactors', 'Nuclear Breeding Reactors', 'Nuclear Fuel Cycle', 'Nuclear Fuel Feed Processing', 'Nuclear Fuel Handling', 'Nuclear Fuel Reprocessing', 'Nuclear Fuel Safeguards', 'Nuclear Fuels Storage', 'Nuclear Fuels Transport', 'Nuclear life-cycle Analysis', 'Nuclear Reactor Control Sys.', 'Nuclear Reactor Design', 'Nuclear Reactor Theory', 'Nuclear Reactor Propulsion', 'Nuclear Reactors', 'Nuclear structural integrity', 'Physical Isotope Separation', 'Radiation Effects on Instrum.', 'Radiation Sources', 'Radiation Technology', 'Reactor Fuel Elements', 'Sodium-Cooled Fast Reactor', 'Supercritical Water-Cooled FR', 'V High Temp. Nuclear Reactor']
  }, {
    subjectName: 'Energy Efficiency',
    topics: ['(null)', 'Behaviour & Energy Efficiency', 'Energy Efficiency in Buildings', 'Energy Efficiency in Commerce', 'Energy Efficiency in Transport', 'Energy Effiiency in Industry', 'Legislation for Energy Effic.']
  }, {
    subjectName: 'Energy Storage',
    topics: ['(null)', 'Alternative Energy Storage', 'Amperometry in Energy Storage', 'Batteries for Energy Storage', 'Capacitors', 'Compressed Air Energy Storage', 'Diffusion in batteries', 'Energy Storage for Transport', 'Flywheels', 'Hydrogen Storage', 'Kinetic Energy Storage', 'Lithium-Ion batteries', 'Pumped Hydropower Storage', 'Supercapacitors', 'Supercond.Magn. Energy Storage', 'Water/Ice Thermal Storage']
  }, {
    subjectName: 'Fuel Cell Technologies',
    topics: ['(null)', 'Automotive Fuel Cells', 'Diffusion in Fuel Cells', 'Electrolyser', 'Fuel cell electrodes', 'Fuel cell electrolytes', 'Fuel Cell Fault Diagnosis', 'Fuel Cell Life-cycle Analysis', 'Fuel Cell Membranes', 'Fuel Cells - Alkaline', 'Fuel Cells - Direct Methanol', 'Intermed. Temp. Solid Oxide', 'Fuel Cells - Microbial', 'Fuel Cells - Molten Carbonate', 'Fuel Cells - Phosphoric Acid', 'Proton Exchange Membrane', 'Fuel Cells - Protonic Ceramic', 'Fuel Cells - Regenerative', 'Fuel Cells - Solid Oxide', 'Fuel Cells - Solid Polymer', 'Fuel Cells - Zinc Air', 'Fuel Reformers', 'Non-Hydrogen fuel cells', 'Polymer Electrolyte', 'Stack Design', 'Stationary Power Applications']
  }, {
    subjectName: 'Solar Technology',
    topics: ['(null)', "Amorphous Group IV PV's", "Amorphous Silicon PV's", 'Automotive Applications', 'Cadmium Telluride', "Compound Thin Film PV's", 'Copper Indium Diselenide', "Crystalline Silicon PV's", 'Doping of solar cells', 'Dye-Sensitised Solar Cells', 'Excitonic Solar Cells', 'Gallium Arsenide Solar Cells', 'Gallium Indium Phosphide Cells', 'Germanium Solar Cells', 'Growth & Proc. of solar cells', 'III-V - Quantum Devices', 'III-V Thin Films', 'Laser Ablation', 'Organic Dyes', 'Organic Photovoltaic Materials', 'Photoreactors', 'Photovoltaic Devices', 'Photovoltaic Systems', 'Photovoltaics In Buildings', 'Phthalocyanines', 'Porous Silicon Technology', 'Portable Solar Devices', 'Quantum Solar Devices', 'Single Crystal Thin Films', 'Solar Heating', 'Solar Inverters', 'Solar Thermal Technologies', 'Stand-alone Photovoltaics', 'Thermophotovoltaics', "Thin Film PV's"]
  }, {
    subjectName: 'Sustainable Energy Networks',
    topics: ['(null)', 'Alternative Energy Networks', 'Alternative Energy Vectors', 'Decentralised Ops & Control', 'Distributed Power Generation', 'Domestic Scale Energy Gen.', 'Electrical Services', 'Electrical Stability', 'Electricity Supply', 'Energy Distribution', 'Energy network maintenance', 'Energy network simulation', 'Energy Supply', 'Energy transmission', 'Gas Supply', 'Intermittency of Supply', 'Micro-Generation', 'Micro-Grids', 'National Grid', 'Smart metering', 'Underground Energy Infrastruc.']
  }, {
    subjectName: 'Sustainable Energy Vectors',
    topics: ['(null)', "Dist'n of alt. energy vectors", 'Energy Transfer', 'Ethanol', 'Formic Acid', 'Fuel - Renewable or Clean', 'Generation - Renewable (grid)', 'Hydrogen Economy', 'Hydrogen Energy', 'Hydrogen Fuel (Vectors)', 'Hydrogen Infrastructure', 'Hydrogen Production (Vectors)', 'Hydrogen Transportation', 'Methanol', 'Organic energy vectors', 'Sustain. Vectors Supply Chain']
  }, {
    subjectName: 'Wind Power',
    topics: ['(null)', 'Offshore Wind Turbines', 'Onshore Wind Turbines', 'Small Scale/Domestic Wind Sys.', 'Social Accept. of Wind Energy', 'Wind Life-cycle Analysis', 'Wind power maintenance', 'Wind power transmission', 'Wind Turbine Fault Diagnosis', 'Wind Turbine Rotor Dynamics', 'Wind Turbines']
  }]
}, {
  areaName: 'Environmental engineering',
  subjects: [{
    subjectName: 'Assess/Remediate Contamination',
    topics: ['(null)', 'Bioremediation of soils', 'Boundary Layers', 'Chemical Oxidation', 'Climatic Effects', 'Contaminated clay', 'Contaminated Land ', 'Contaminated Landfill Design', 'Contaminated Landfill Practice', 'Contaminated Sites', 'Contaminated Soil', 'Contamination Risk Assessment', 'Geotech Materials Durability ', 'Ground Characteristics', 'Land Assessment', 'Land Drainage', 'Land Remediation', 'Leachate', 'Legislation Contamination', 'Membrane Technol. for Remed.', 'Mining Subsidence Impact', 'Pollution Life-cycle Analysis ', 'Pollution Management', 'Unsaturated Soil']
  }, {
    subjectName: 'Coastal & Waterway Engineering',
    topics: ['(null)', 'Beach Replenishment', 'Beaches', 'Breakwaters', 'Canals', 'Cliffs', 'Climatic Effects', 'Coastal & Waterway Currents', 'Coastal Defences', 'Coastal Engineering', 'Coastal Hydrodynamics', 'Coastal Morphology', 'Coastal Zone Management', 'Dredging', 'Erosion', 'Estuaries', 'Estuary Management', 'Floating Structures', 'Flood Defences', 'Flood Risk Assessment', 'Flooding', 'Flow Around Structures', 'Groynes', 'Harbours', 'Coastal Hydraulics', 'Jetties/Piers', 'Outfalls', 'Pollution Dispersal', 'Reservoir/Dam Engineering', 'River Dynamics', 'River Engineering', 'River Hydraulics', 'Seawalls', 'Sediment', 'Sediment Transport', 'Water & Coastal Structures', 'Waterway Management', 'Wave Impact Forces', 'Wave Over-Topping', 'Waves']
  }, {
    subjectName: 'Waste Management',
    topics: ['(null)', 'Anaerobic Digestion of Waste', 'Bioremediation of Waste', 'Land Use for Waste', 'Landfill Design', 'Landfill Management', 'Leachate Management', 'Recovery of Waste Materials', 'Recycling of Waste Materials', 'Sludge management', 'Soiled Waste', 'Waste Construction Materials ', 'Waste Disposal', 'Waste Legislation', 'Waste Management', 'Waste Pollution Management', 'Waste Waters Management', 'Water Risk Assessment']
  }, {
    subjectName: 'Waste Minimisation',
    topics: ['(null)', 'Construction Waste', 'Contaminated Waste Waters', 'Electrical Waste', 'Landfill Minimisation', 'Landfill Practice', 'Metal Waste', 'Plastic Waste', 'Process Waste Minimisation', 'Reuse of Waste Materials', 'Vehicle Component Waste', 'Waste Design', 'Waste Minimisation Legislation', 'Waste Packaging', 'Waste Sorting Technology', 'Waste Waters Minimisation']
  }, {
    subjectName: 'Soil science',
    topics: ['(null)', 'Fertility fertilizers/manures', 'Soil chemistry & soil physics', 'Plant-soil interactions', 'Rhizosphere biology', 'Soil conservation', 'Soil microbiology', 'Rhizoremediation', 'Soil cultivation', 'Soil ecosystems', 'Soil management', 'Bioremediation', 'Organic matter', 'Soil pollution', 'Soil resources', 'Soil structure', 'Soil acidity', 'Soil biology', 'Soil science']
  }]
}, {
  areaName: 'Environmental planning',
  subjects: [{
    subjectName: 'Env Planning (General)',
    topics: ['(null)']
  }, {
    subjectName: 'Spatial Planning',
    topics: ['(null)', 'Urban planning', 'Rural planning', 'Strategic & Regional Planning', 'Local Planning', 'Development Management', 'Environmental policy/regulation', 'Environmental assessment', 'Planning regulation', 'Climate change adaptation in planning', 'Climate change mitigation', 'European spatial planning', 'Planning governance', 'Urban policy and regeneration', 'Minerals and waste planning', 'Planning of Housing', 'Employment Planning', 'Retail planning', 'Infrastructure Planning', 'Sustainable development', 'Planning in developing countries', 'Environmental governance']
  }, {
    subjectName: 'Urban Design',
    topics: ['(null)', 'Design and cultural heritage', 'Master planning', 'Design and sustainability', 'Public realm design', 'Urban structure & design', 'Accessibility in urban design', 'Legibility & wayfinding', 'Animation of Urban Design', 'Development Frameworks', 'Design Codes', 'Design and conservation']
  }, {
    subjectName: 'LandscapeArchitecture',
    topics: ['(null)', 'Green infrastructure', 'Green corridors', 'Landscape planning and design', 'Sustainable urban drainage systems', 'Park & garden design', 'Play area design', 'Open space design', 'Land reclamation', 'Lanscape restoration', 'Historic parks & gardens', 'Landscape assessment', 'Wildlife corridors', 'Nature conservation']
  }]
}, {
  areaName: 'Facility Development',
  subjects: [{
    subjectName: 'Accelerator R&D',
    topics: ['(null)']
  }, {
    subjectName: 'Central Laser Facility',
    topics: ['(null)']
  }, {
    subjectName: 'Diamond Light Source',
    topics: ['(null)']
  }, {
    subjectName: 'ESRF',
    topics: ['(null)']
  }, {
    subjectName: 'ILL',
    topics: ['(null)']
  }, {
    subjectName: 'ISIS T1',
    topics: ['(null)']
  }, {
    subjectName: 'ISIS T2',
    topics: ['(null)']
  }, {
    subjectName: 'Research complex at Harwell',
    topics: ['(null)']
  }, {
    subjectName: 'X-FEL',
    topics: ['(null)']
  }]
}, {
  areaName: 'Food science & nutrition',
  subjects: [{
    subjectName: 'Diet & health',
    topics: ['(null)', 'Dev. Origins of adult disease', 'Monounsaturated fatty acids', 'Polyunsaturated fatty acids', 'Insulin resist./insensitivity', 'Nutrient-gene interactions', 'Diet-gene interactions', 'Food choice/psychology', 'Saturated fatty acids', 'Metabolic syndrome', 'Fetal programming', 'Consumer studies', 'Eating behaviour', 'Diet & health', 'Vascular health', 'Adipose tissue', 'Energy balance', 'Micronutrients', 'Public health', 'Phytosterols', 'Cholesterol', 'Nutrition', 'Appetite', 'Peptides', 'Vitamins', 'Obesity']
  }, {
    subjectName: 'Food microbiology',
    topics: ['(null)', 'Microbiological assays ', 'Antibiotic resistance', 'Food-borne pathogens', 'Food-borne diseases', 'Food contaminants', 'Food microbiology', 'Fermentation', 'Food safety ', 'Virulence', 'Spoilage', 'Brewing', 'Yeasts']
  }, {
    subjectName: 'Food processing',
    topics: ['(null)', 'Dairy products', 'Flavour manipulation', 'Flavour measurement', 'Food characterisation', 'Food manufacture', 'Food processing', 'Food processing conditions', 'Food storage', 'Food texture', 'Food waste reduction', 'Fruit processing', 'Meat production', 'Packaging', 'Quality related transformation', 'Shelf life of food', 'Supply chain']
  }, {
    subjectName: 'Food structure/composition ',
    topics: ['(null)', 'Carbohydrates in food', 'Cellulose', 'Chemical properties of food', 'Fats fatty acids', 'Fibre', 'Flavour', 'Food appearance', 'Food structure', 'Food Texture', 'Functional metabolites', 'Glassy state', 'Macroscopic structure', 'Material properties', 'Molecular composition of food', 'Nutrients', 'Proteins amino acids', 'Quality attributes/character.', 'Raw materials ingredients', 'Rheology', 'Sensory evaluation', 'Storage product']
  }]
}, {
  areaName: 'Genetics & development',
  subjects: [{
    subjectName: 'Animal developmental biology',
    topics: ['(null)', 'Comparative development', 'Transcription factors', 'CNS development', 'Reprogramming', 'Fibroblast growth factor (FGF)', 'Animal developmental biology', 'Coordinated gene expression', 'Musculoskeletal development', 'Circadian rhythm (animals)', 'Differentiation in animals', 'Invertebrate development', 'Morphogenesis in animals', 'Cell fate determination', 'Blood cell development', 'Mammalian development ', 'Epigenetic imprinting', 'Haematopoietic system', 'Olfactory development', 'Skeletal development', 'Sonic hedgehog (SHH)', 'Cranial development', 'Sensory development', 'Signalling pathways', 'Cell specification', 'Sex determination', 'Limb development', 'Neuronal culture', 'Notch signalling', 'Cell signalling', 'Ear development', 'Eye development', 'Gene expression', 'Axon guidance', 'Embryogenesis', 'Gametogenesis', 'Cytoskeleton', 'Neurogenesis', 'Vertebrates', 'Patterning', 'Hox genes', 'Wnt genes', 'Ectoderm', 'Endoderm', 'Mesoderm', 'miRNA']
  }, {
    subjectName: 'Epigenetics',
    topics: ['(null)', 'Small interfering RNA (siRNA)', 'Reprogramming (epigenetics)', 'Chromosome modification', 'Transcription factors', 'Antisense regulation', 'Cell differentiation', 'Chromosome silencing', 'Polycomb-group genes', 'Retrotransposons', 'Gene silencing', 'non-coding RNA', 'Biodiversity', 'Methylation ', 'Acetylation', 'Centromeres', 'Chromosomes', 'CpG regions', 'Epigenetics', 'Imprinting', 'Chromatin', 'Histones']
  }, {
    subjectName: 'Evolution & populations ',
    topics: ['(null)', 'Evolution & populations ', 'Breeding system evolution', 'Virological systematics', 'Genetic fingerprinting', 'Linkage disequilibrium', 'Bacterial systematics', 'Evolutionary genetics', 'Chemical mutagenisis', 'Statistical genetics', 'Molecular evolution', 'Population genetics', 'Animal systematics', 'Fungal systematics', 'Multigene families', 'Genetic variation', 'Molecular ecology', 'Natural variation', 'Plant systematics', 'Pharmacogenomics', 'Molecular clock', 'Sex chromosomes', 'Gene targeting', 'Phylogeography', 'Genetic drift', 'Hybridisation', 'Phylogenetics', 'Mutagenesis', 'Adaptation', 'Speciation', 'Gene flow', 'Selection', 'Evodevo']
  }, {
    subjectName: 'Gene action & regulation',
    topics: ['(null)', 'Post-transcript. modification', 'Post-translat. modification', 'Quantitative Trait Loci (QTLs)', 'Gene action & regulation', 'Transcriptional regulation', 'DNA double-strand breaks', 'Translational regulation', 'Quantitative genetics', 'Transcription factors', 'Transposable elements', 'DNA binding proteins', 'Regulatory networks', 'Regulatory proteins', 'Regulatory regions', 'Gene translation', 'non-coding RNA', 'RNA processing', 'Gene networks', 'Gene splicing', 'RNA stability', 'RNA transport', 'Transcription', 'Centromeres', 'Polymerase', 'Ribosomes', 'miRNA']
  }, {
    subjectName: 'Gene therapy',
    topics: ['(null)', 'Coordinated gene expression', 'Germline manipulation', 'Nuclear transfer', 'Drug delivery', 'Gene delivery', 'Gene therapy', 'Virology', 'Vectors']
  }, {
    subjectName: 'Genome organisation',
    topics: ['(null)', 'Chromosome duplication', 'Genome rearrangements', 'Chromosome structure', 'Comparative mapping', 'Genome organisation', 'Adult stem cells', 'Genome evolution', 'Gene mapping', 'Telomeres', 'Ploidy']
  }, {
    subjectName: 'Microbial',
    topics: ['(null)', 'Comparative development', 'Dev. Biology in prokaryotes', 'Dev. Biology in eukaryotes', 'Morphogenesis in microbes', 'Microbial']
  }, {
    subjectName: 'Population Genetics/Evolution',
    topics: ['(null)']
  }, {
    subjectName: 'Recombination ',
    topics: ['(null)', 'Comparative develop. biology', 'Homologous recombination', 'Chromosome condensation', 'Chromosomal cross-over', 'DNA binding proteins', 'Chromosome painting', 'Chromosome pairing', 'Development phases', 'Recombination ', 'Cytogenetics', 'Recombinases', 'Cytokinesis', 'Chiasmata', 'Telomeres', 'Meiosis', 'Gyrase']
  }, {
    subjectName: 'Stem cell biology',
    topics: ['(null)', 'Haematopoietic stem cells', 'Mesenchymal stem cells', 'Embryonic stem cells ', 'Neural stem cells', 'Stem cell biology', 'Adult stem cells', 'Cell programming', 'Notch signalling', 'Differentiation', 'Embryoid bodies', 'Retinoblastoma', 'Organogenesis', 'Pluripotency', 'Self-renewal', 'Karyotyping', 'Progenitors', 'Propagation', 'Quiescence', 'Cell fate', 'Teratomas', 'Ontogeny']
  }, {
    subjectName: 'Population Genetics/Evolution',
    topics: ['Adaptive processes', 'Adaptive radiation', 'Ancient DNA', 'Cooperation', 'Disease resistance', 'Ecological communities', 'Ecological networks', 'Epigenetics', 'Evolutionary ecology', 'Evolutionary rates', 'Gene expression', 'Gene flow', 'Genetic diversity', 'Host-parasite interactions', 'Immunity', 'Kin selection', 'Molecular genetics', 'Mutation', 'Natural selection', 'Parental effects', 'Phenotypic plasticity', 'Phylogenetics', 'Population dynamics', 'Population structure', 'Predictive modelling', 'Reproductive isolation', 'Reproductive strategy', 'Selection pressure', 'Sex ratio', 'Sexual conflict', 'Signal mimicry', 'Social behaviour', 'Social insects', 'Speciation', 'Species adaptation', 'Species divergence', 'Sperm competition', 'Sympatric speciation', 'Trait locus quantification']
  }]
}, {
  areaName: 'Geosciences',
  subjects: [{
    subjectName: 'Earth Engineering',
    topics: ['(null)']
  }, {
    subjectName: 'Geohazards',
    topics: ['(null)']
  }, {
    subjectName: 'Glacial & Cryospheric Systems',
    topics: ['(null)']
  }, {
    subjectName: 'Hydrogeology',
    topics: ['(null)']
  }, {
    subjectName: 'Hydrological Processes',
    topics: ['(null)']
  }, {
    subjectName: 'Mantle & Core Processes',
    topics: ['(null)']
  }, {
    subjectName: 'Palaeoenvironments',
    topics: ['(null)']
  }, {
    subjectName: 'Properties Of Earth Materials',
    topics: ['(null)']
  }, {
    subjectName: 'Quaternary Science',
    topics: ['(null)']
  }, {
    subjectName: 'Sediment/Sedimentary Processes',
    topics: ['(null)']
  }, {
    subjectName: 'Tectonic Processes',
    topics: ['(null)']
  }, {
    subjectName: 'Volcanic Processes',
    topics: ['(null)']
  }, {
    subjectName: 'Earth Resources',
    topics: ['(null)']
  }, {
    subjectName: 'Carbon Capture & Storage',
    topics: ['(null)', 'Adsorbents for carbon capture', 'Aerogels for carbon capture', 'Algae for carbon capture', 'Ammonias for carbon capture', 'Biochar', 'Biomass & CCS', 'Carbon capture', 'Carbon capture from free air', 'Carbon dioxide pipelines', 'Carbon storage', 'CCS power station integration', 'CCS retrofit', 'CCS Storage capacity analysis', 'CCS whole systems', 'Chemical looping for CCS', 'CO2 transport systems', 'Enzymes for carbon capture', 'Hydrogen & carbon capture', 'Impurities in carbon dioxide', 'Injection sites for CO2', 'Membranes for carbon capture', 'Mineralisation -carbon capture', 'Monitoring of CO2 storage', 'Nanotechnology & CCS', 'Oxyfuel combustion', 'Post combustion capture', 'Pre combustion capture', 'Public acceptability of CCS', 'Reservoir modelling for CCS', 'Saline aquifers & CCS', 'Syngas & carbon capture']
  }, {
    subjectName: 'Earth Engineering',
    topics: ['Aquifers', 'Avalanching', 'Brittle faulting', 'Carbon dioxide injection', 'Carbon emissions', 'Earthquakes', 'Energy supply', 'Engineering geology', 'Fluid flow', 'Fossil fuel emissions', 'Gas emissions', 'Gas hydrates', 'Geochemistry', 'Geomechanical deformation', 'Geomechanical models', 'Geomechanics', 'Geostorage', 'Geotechnics', 'Geothermal energy', 'Grain boundary dynamics', 'Hydrogeology', 'Interferometry', 'Landslides', 'Leakage risk', 'Microseismicity', 'Pyroclastic flows', 'Reservoir technology', 'Rock fracture', 'Sedimentary properties', 'Seismic analysis', 'Seismic waves', 'Subsurface injection']
  }, {
    subjectName: 'Earth Resources',
    topics: ['Bioenergy', 'Carbon capture and storage', 'Continental margins', 'Crustal processes', 'Enhanced recovery', 'Faulting', 'Gas hydrates', 'Geomechanics', 'Geophysical surveying', 'Geostorage', 'Geothermal energy', 'Heat exchange', 'Heat pump', 'Hydrocarbon reservoirs', 'Hydrothermal fluids', 'Magma chambers', 'Mantle processes', 'Marine renewable energy', 'Mineral deposits', 'Nuclear energy', 'Ocean drilling', 'Ocean ridges', 'Oceanic crust', 'Oil and gas', 'Ore deposits and mineralisation', 'Placer deposits', 'Renewable energy', 'Rheology', 'Seismic waves', 'Shale gas', 'Subduction zones', 'Sulphide minerals', 'Sustainability', 'Virtual seismic reflection']
  }, {
    subjectName: 'Geohazards',
    topics: ['Avalanches', 'Crustal processes', 'Debris flows', 'Digital terrain mapping', 'Earthquakes', 'Eruptive products', 'Faulting', 'Flank collapse', 'Flood risk', 'Fluid modelling', 'Glacial hazards', 'Gravity flows', 'Hazard warning systems', 'Health hazards', 'Ice processes', 'Ice sheet dynamics', 'Magmatism', 'Plate boundary tectonics', 'Pyroclastic flows', 'Remote sensing', 'Risk analysis', 'Risk management', 'Sea level change', 'Seismic reflection', 'Seismic risk analysis', 'Seismicity', 'Subduction zones', 'Submarine landslides', 'Tectonic systems', 'Tsunamis', 'Uncertainty communication', 'Volcanic eruptions', 'Volcano monitoring']
  }, {
    subjectName: 'Glacial & Cryospheric Systems',
    topics: ['Antarctic ice', 'Atmospheric carbon dioxide', 'Climate transitions', 'Glacial cycles', 'Glacial isostasy', 'Glacial lakes', 'Glaciation', 'Ice ages', 'Ice caps', 'Ice coring', 'Ice flow models', 'Ice shelf collapse', 'Ice shelf dynamics', 'Ice shelves', 'Ice streams', 'Icebergs', 'Mass balances', 'Ocean circulation', 'Palaeoclimate', 'Permafrost', 'Polar ice', 'Satellite altimetry', 'Satellite gravimetry', 'Satellite observation', 'Sea ice', 'Sea level change', 'Snow', 'Southern ocean circulation', 'Synthetic aperture radar']
  }, {
    subjectName: 'Hydrogeology',
    topics: ['Aquifers', 'Diagenesis', 'Emerging contaminants', 'Flood risk assessment', 'Flow modelling', 'Flow tracing', 'Geophysical surveying', 'Geothermal processes', 'Groundwater', 'Groundwater abstraction', 'Groundwater contamination', 'Groundwater dependent terrestrial ecosystems', 'Groundwater pollution', 'Groundwater-surface water interaction', 'Heat transport', 'Hyporheic zones', 'Irrigation', 'Lowland catchments', 'Permeability', 'Precipitation patterns', 'Riparian zones', 'River flow', 'River morphology', 'Slips and faults', 'Speleothems', 'Submarine groundwater', 'Uplands', 'Water quality', 'Water resources', 'Water supply', 'Weathering']
  }, {
    subjectName: 'Hydrological Processes',
    topics: ['Catchment management', 'Dissolved organic carbon', 'Ecohydrology', 'Flood risk', 'Flow pathways', 'Forests', 'Groundwater', 'Hillslopes', 'Hydrologic scaling', 'Hydrological cycle', 'Hydropedology', 'Hyporheic processes', 'Ice flow', 'Lakes', 'Peatlands', 'Rainfall events', 'River morphology', 'Runoff modelling', 'Sediment transport', 'Sensor networks', 'Snow and ice flows', 'Soil erosion', 'Soil moisture', 'Tracers', 'Transit times', 'Uplands', 'Water age', 'Water quality', 'Water resources', 'Water storage', 'Weathering']
  }, {
    subjectName: 'Mantle & Core Processes',
    topics: ['Core composition', 'Core dynamics', 'Core models', 'Core-mantle boundary', 'Deep mantle processes', 'Earth history', 'Extreme pressures', 'Extreme temperatures', 'Geochemistry', 'Geodynamics', 'Geomagnetism', 'Gravity', 'Igneous provinces', 'Lithosphere', 'Magmatism', 'Magnetic reversal', 'Magnetisation', 'Mantle composition', 'Mantle convection', 'Mantle plumes', 'Mineral physics', 'Ocean drilling', 'Ocean ridge volcanism', 'Palaeomagnetism', 'Phase transitions', 'Plate tectonics', 'Potential fields', 'Rheology', 'Seafloor spreading', 'Seismic structure', 'Seismicity', 'Siderophile elements', 'Subduction', 'Trace elements', 'Ultra-high pressure metamorphics', 'Volcanic eruptions']
  }, {
    subjectName: 'Palaeoenvironments',
    topics: ['Ancient DNA', 'Anoxic events', 'Cenozoic climate change', 'Climate change', 'Deep water circulation', 'El Nino Southern Oscillation', 'Evolutionary history', 'Fossil record', 'Glacial isostasy', 'Ice ages', 'Ice coring', 'Ice sheets', 'Dating - isotopic', 'Lake sediments', 'Large igneous provinces', 'Marine carbonates', 'Marine sediments', 'Mass extinctions', 'Mesozoic climate change', 'Ocean acidification', 'Ocean drilling', 'Palaeo proxies', 'Palaeoclimatology', 'Palaeoecology', 'Palaeogeology', 'Palaeomagnetism', 'Palaeozoic climate change', 'Precambrian climate change', 'Quaternary climate change', 'Sea level history', 'Surface water circulation']
  }, {
    subjectName: 'Quaternary Science',
    topics: ['Biogeochemical cycling', 'Biomarker', 'Climate change', 'Coral reefs', 'Cosmogenic isotopes', 'Dating', 'Diatom record', 'Glaciers', 'Global vegetation', 'Heinrich events', 'Holocene', 'Ice ages', 'Ice coring', 'Ice sheets', 'Ice shelves', 'Interglacials', 'Isotopic record', 'Macrofossils', 'Marine carbonates', 'Marine sediments', 'Meridional overturning circulation', 'Methane', 'Microfossils', 'Ocean drilling', 'Palaeo circulation', 'Palaeoecology', 'Peat bogs', 'Pleistocene', 'Pollen analysis', 'Dating - radiocarbon', 'Sea level history', 'Sediment coring', 'Stimulated luminescence', 'Subglacial lakes', 'Thermohaline circulation', 'Water mass analysis']
  }, {
    subjectName: 'Sediment/Sedimentary Processes',
    topics: ['Aeolian processes', 'Bedforms', 'Blue carbon', 'Carbon capture and storage', 'Carbon cycling', 'Chemical weathering', 'Coastal processes', 'Estuaries', 'Flank collapse', 'Fluid dynamics', 'Fluvial processes', 'Gas hydrates', 'Glacial processes', 'Gravity currents', 'Ice streams', 'Isotopic analysis', 'Marine carbonates', 'Marine sediments', 'Methanogenesis', 'Ocean drilling', 'Organic carbon', 'Remediation', 'Sea level variation', 'Sediment coring', 'Sediment suspension', 'Sediment transport', 'Sedimentary deposits', 'Sedimentary rocks', 'Seismicity', 'Subglacial lakes', 'Trace metals', 'Turbidity currents', 'Volcanism']
  }, {
    subjectName: 'Tectonic Processes',
    topics: ['Alpine tectonics', 'Asthenospheric processes', 'Collision zones', 'Continental crust', 'Core-mantle boundary', 'Dyke intrusion', 'Earthquakes', 'Extreme pressures', 'Faulting', 'Geomagnetism', 'Glacial isostasy', 'Igneous petrology', 'Intraplate volcanism', 'Large igneous provinces', 'Lithospheric processes', 'Magma chambers', 'Mantle convection', 'Mantle plumes', 'Mantle processes', 'Metamorphic petrology', 'Mid-ocean ridges', 'Noble gases', 'Ocean drilling', 'Oceanic crust', 'Ore deposits', 'Orogenesis', 'Plate margins', 'Plate tectonics', 'Sea level', 'Seafloor spreading', 'Seamount chains', 'Sedimentary basins', 'Sedimentary petrology', 'Seismic hazards', 'Seismicity', 'Subduction', 'Tectonic modelling', 'Volcanic processes']
  }, {
    subjectName: 'Volcanic Processes',
    topics: ['Continental crust', 'Crystal mush', 'Debris flows', 'Eruptive processes', 'Flank collapse', 'Flood basalts', 'Fluid dynamics', 'Fluid inclusions', 'Geomagnetic perturbations', 'Ground deformation', 'Health hazards', 'Hydrothermal circulation', 'Igneous provinces', 'Intrusions', 'Lava domes', 'Lava flows', 'Magma chambers', 'Mantle plumes', 'Mass extinctions', 'Melt inclusions', 'Noble gases', 'Non-radiogenic isotopes', 'Ocean ridge volcanism', 'Oceanic crust', 'Ore deposits and mineralisation', 'Oxygen fugacity', 'Plate tectonics', 'Platinum group elements', 'Pyroclastic flows', 'Radiogenic isotopes', 'Risk assessment', 'Seafloor spreading', 'Seamount chains', 'Seismicity', 'Subduction', 'Trace elements', 'Volcanic gases', 'Volcano monitoring']
  }]
}, {
  areaName: 'History',
  subjects: [{
    subjectName: 'Cultural History',
    topics: ['(null)']
  }, {
    subjectName: 'Economic & Soc Hist (General)',
    topics: ['(null)']
  }, {
    subjectName: 'History of Sci./Med./Technol.',
    topics: ['(null)']
  }, {
    subjectName: 'Imperial/Colonial History',
    topics: ['(null)']
  }, {
    subjectName: 'Industrial History',
    topics: ['(null)']
  }, {
    subjectName: 'Maritime History',
    topics: ['(null)']
  }, {
    subjectName: 'Political History',
    topics: ['(null)']
  }, {
    subjectName: 'Post-Colonial Studies',
    topics: ['(null)']
  }, {
    subjectName: 'Religious History',
    topics: ['(null)']
  }, {
    subjectName: 'War Studies',
    topics: ['(null)']
  }, {
    subjectName: 'American Studies',
    topics: ['(null)']
  }, {
    subjectName: 'Cultural History',
    topics: ['Agrarian and Rural History']
  }, {
    subjectName: 'Economic & Soc Hist (General)',
    topics: ['Black and Ethnic History', 'Cultural and Social History', 'Religious History', 'Business History', 'History of Consumption', 'Economic History', 'Family History', 'Gender History', 'History of Education', 'World History', 'Media & Communications History', 'Environmental History', 'Medical History and Health', 'Historical Demography', 'Labour History', 'Local and Regional History', 'Oral History', 'Technology', 'Urban History', 'Women’s History', 'Medieval History', 'Digital history', 'History of sport', 'Asian history', 'History of technology', 'Transport history', '15th Century History', '16th Century History', '17th Century History', '18th Century History', '19th Century History', '20th Century History']
  }]
}, {
  areaName: 'Human Geography',
  subjects: [{
    subjectName: 'Human Geography (General)',
    topics: ['(null)']
  }, {
    subjectName: 'Demography/Pop Geography',
    topics: ['(null)', 'Migration', 'Mortality rates', 'Morbidity rates', 'Fertility rates', 'Demographic transition', 'Population Composition', 'Generation/inter-generational', 'Census', 'Thomas Malthus', 'Birth rates', 'Population density', 'Population distribution']
  }, {
    subjectName: 'Cultural and Anthrop Geography',
    topics: ['(null)', 'Language geographies', 'Music geographies', 'Art geographies', 'Geography of representation', 'Geography of landscape', 'Nature geographies', 'Museums/ collections/ collecting', 'Actor-Network Theory', 'Non-Representational Theory', 'Embodiment and corporeality', 'Transnationalism and diaspora', 'Geography and identity', 'Indigenous people', 'Geographies of food', 'Performance geographies', 'Geographies of emotion']
  }, {
    subjectName: 'Social Geography',
    topics: ['(null)', 'Social movements', 'Geographies of class', 'Identity geographies', 'Geographies of religion', 'Geographies of gender', 'Geographies of ethnicity', 'Geographies of race', 'Geographies of sexuality', 'Geographies of disability', 'Welfare geographies', 'Age and geography', 'Geographies of mobility', 'Housing geographies', 'Work and employment', 'Health and well-being', 'Geography of deprivation', 'Marginalisation & Segregation', 'Geographies of crime']
  }, {
    subjectName: 'Economic Geography',
    topics: ['(null)', 'Geography of labour', 'Geography of trade', 'Finance geographies', 'Geography and capitalism', 'Geographies of consumption', 'Geographies of production', 'Industrial space', 'Knowledge Economies', 'Geography and political economy', 'Geography of globalisation', 'Energy geographies', 'Network geographies', 'Informal economies', 'Localisation', 'Regional economic development', 'Baby boom', 'Marginalisation & Segregation', 'Geographies of crime']
  }, {
    subjectName: 'Political Geography',
    topics: ['(null)', 'Geopolitics', 'Geographies of citizenship', 'Democratic theory', 'Devolution and nation-building', 'Geographies of the state', 'Geographies of law and justice', 'Territory borders and boundaries', 'Geographies of governance', 'Geographies of resistance', 'Geographies of security', 'Geographies of war and conflict', 'World-systems analysis', 'Military geographies', 'Geographies of risk', 'Inter-Governmental Institutions/Organisations', 'Geographies of power']
  }, {
    subjectName: 'Historical Geography',
    topics: ['(null)', 'Post-Colonialism', 'Historical Geography of Imperialism', 'Enlightenment renaissance', 'Imagination', 'Colonialism and imperialism', 'Museums/ collections/ collecting']
  }, {
    subjectName: 'Environmental Geography',
    topics: ['(null)', 'Geography of natural hazards', 'Geography of climate change', 'Geography and citizen science', 'Geography and ecosystem services', 'Environmental activism', 'Geographies of sustainability', 'Geographies of environmental risk', 'Geog. of environmental Governance & regulation', 'Geography of environmental resilience', 'Geography and environmental justice', 'Geography and climate change mitigation', 'Geography and climate change adaptation', 'Geography of environmental policy', 'Environmental tourism and recreation', 'Geography of waste management', 'Geography of conservation', 'Geography and energy consumption', 'Geography of renewable energy', 'Geography and energy production', 'Geography of geoengineering']
  }, {
    subjectName: 'Development Geography',
    topics: ['(null)', 'Geography of sanitation', 'Geography of grassroots development', 'Geography of agricultural development', 'Dependency theory', 'Geography and food security', 'Post-Colonial Geographies', 'Geography and development policy']
  }, {
    subjectName: 'Urban Geography',
    topics: ['(null)', 'Urbanisation', 'Geography of Crime & fear', 'Urban Regeneration', 'Urban governance', 'Industrial development', 'Urban Movements', 'Urban transport', 'Suburbia', 'Urban Gentrification', 'Urban infrastructure', 'Urban planning', 'Urban housing', 'Mega cities', 'Urban services', 'Urban deprivation', 'Transition towns', 'Urban space', 'Brownfield sites', 'Greenbelt']
  }, {
    subjectName: 'Rural Geography',
    topics: ['(null)', 'Rural idyll', 'Rural deprivation', 'Geographies of agriculture', 'Rural gentrification', 'Rural restructuring', 'Rural planning', 'Counter Urbanisation', 'Rural housing', 'Rural transport', 'Rural space', 'Rural governance', 'Rural accessibility', 'Rural employment', 'Rural recreation']
  }, {
    subjectName: 'Recreation/Tourism Geography',
    topics: ['(null)', 'Sex tourism', 'Tourism development', 'Ecotourism', 'Adventure tourism', 'Heritage tourism', 'Cultural tourism', 'Geographies of sport', 'Nature tourism', 'Food geographies', 'Retail geographies', 'Themed attractions', 'Tourism governance', 'Virtual leisure', 'Geographies of spectacle', 'Place promotion', 'Post-tourist']
  }, {
    subjectName: 'Transport Geography',
    topics: ['(null)', 'Geographies of mobility', 'Freight transport', 'Railways and rail travel', 'Commuting', 'Access to transport', 'Transport infrastructure', 'Transport networks', 'Airports and air travel', 'Road travel', 'Walking and cycling', 'Transport governance']
  }, {
    subjectName: 'Regional Geography',
    topics: ['(null)', 'North Africa', 'West Africa', 'East Africa', 'Central America and the Caribbean', 'Sub-Saharan Africa', 'North America', 'South America', 'Central America', 'Western Europe', 'Eastern Europe', 'Central Europe', 'Oceania', 'Antarctica/Arctic', 'South East Asia', 'Middle East', 'Central Asia', 'Australia and Oceania', 'East Asia', 'Eurasia', 'Oceans', 'Islands']
  }, {
    subjectName: 'Cartography and GIS',
    topics: ['(null)', 'Mapping', 'Digital imagery', 'Visualisation', 'Geomatics', 'Geographic modelling', 'GIS']
  }]
}, {
  areaName: 'Info. & commun. Technol.',
  subjects: [{
    subjectName: 'Artificial Intelligence',
    topics: ['(null)', 'Adaptive Software', 'Adaptive Systems', 'AI Planning', 'Argumentation (AI)', 'Artificial Intelligence', 'Artificial Intelligence Agents', 'Automated Reasoning (AI)', 'Autonomous Agents', 'Bio-inspired Neural Computing', 'Case Based Reasoning', 'Computational Linguistics', 'Computational Search', 'Decision Support (AI)', 'Distributed AI', 'Evolutionary Computation', 'Formal Methods in AI', 'Fuzzy Logic (AI)', 'Genetic Algorithms (CS)', 'Intelligent Systems (AI)', 'Logic for AI', 'Logic-programming (AI)', 'Machine Learning (AI)', 'Meta Heuristics', 'Multi-agent Systems', 'Natural Language Processing', 'Neural Networks (AI)', 'Operational Research (AI)', 'Optimisation (AI)', 'Scheduling (AI)']
  }, {
    subjectName: 'Cognitive Science Appl. in ICT',
    topics: ['(null)', 'Cognitive Engineering for ICT', 'Cognitive Science for ICT']
  }, {
    subjectName: 'Computer Graphics & Visual.',
    topics: ['(null)', 'Display Interaction', 'Graphics - Animation', 'Graphics - Modelling', 'Graphics - Rendering', 'Graphics - Virtual Reality', 'Software Visualisation', 'Visual Computer Languages', 'Visualisation of Info. & Data.']
  }, {
    subjectName: 'Digital Signal Processing',
    topics: ['(null)', 'Acoustic Signal Processing', 'Active Noise Control', 'Active Vibration Control', 'Adaptive Filters', 'Analogue to Digital Conversion', 'Audio/Speech Proc. & Trans.', 'Biomedical Signal Processing', 'Digital to Analogue Conversion', 'DSP for Communications', 'Error Detection & Correction', 'Finite Impulse Response (FIR)', 'Formal Methods (DSP)', 'Fourier Methods (DSP)', 'Image/Video Proc. & Trans.', 'Infinite Impulse Response IIR', 'Interference Suppression', 'Sigma Delta Converters', 'Signal Modulation', 'Signal Theory & Design', 'Statistical Signal Processing']
  }, {
    subjectName: 'Displays',
    topics: ['(null)', 'CRT', 'Display Devices', 'Display Mat. - Field Emitting', 'Display Materials - Flat Panel', 'Display Materials - Other', 'Display Materials - Phosphors', 'Field Emission Displays (FED)', 'Flat Panel displays (FPD)', 'Functional Imaging (Displays)', 'Imaging Displays', 'Infrared Imaging Displays', 'Liquid Crystal Displays', 'Optical Visual./Imaging Tech.', 'Projection Displays', 'Virtual Reality']
  }, {
    subjectName: 'Electronic Devices & Subsys.',
    topics: ['(null)', 'Bipolar Junction Transistor', 'CMOS Devices', 'Device Feature Size', 'Device Modelling & Simulation', 'Device Processing', 'Dynamic Random Access Memory', 'Electromigration', 'Electron Mobility', 'Energy Harvesting Devices', 'Field Effect Transistor', 'Field Programmable Gate Array', 'Gunn Diodes', 'Heterojunction Bipolar Trans', 'High Electron Mobility Trans', 'III-V Arsenides', 'III-V Circuits', 'III-V Nitrides', 'III-V Semiconductors', 'II-VI Semiconductors', 'Insulated Gate Bipolar Trans', 'Interconnects', 'MEMS Devices', 'Microwave Devices', 'Millimetre Wave devices', 'MOSFET Devices', 'Organic Electronics', 'Oscillators', 'Power Electronics', 'Receivers', 'RF & Microwave Devices', 'Schottky Diodes', 'Silicide', 'Silicon Carbide Devices', 'Silicon Germanium', 'Silicon Micromachinery', 'Silicon Semiconductors', 'Silicon Technology', 'Silicon-on-Insulator (SOI)', 'Single Electron Transistors', 'Static Random Access Memory', 'Terahertz Devices', 'Thin Film Transistors', 'Transducers', 'Wafer Bonding']
  }, {
    subjectName: 'Fundamentals of Computing ',
    topics: ['(null)', 'Algebraic Computation', 'Algebraic Methods', 'Algorithms (Computing)', 'Automata Theory', 'Categories in Computing', 'Coding Theory', 'Communication theory', 'Compiler Theory', 'Computational Complexity', 'Concurrency', 'Constraint Satisfaction', 'Cryptography', 'Domain Theory', 'Finite Element Methods', 'Formal Methods', 'Formal Verification', 'Functional Programming', 'Fundamental Computer Science', 'Game Theory (Computing)', 'Graph Colouring', 'Learning Theory (Computing)', 'Logic for Computer Science', 'Modal Logic', 'Model Checking (Computing)', 'Operating Systems (Computing)', 'Programming Languages', 'Programming Lang. - Concurrent', 'Programming Lang.- Distributed', 'Proof Theory in Computing', 'Quantum Cryptography', 'Randomised Algorithms', 'Reasoning in Computer Science', 'Security (Computing)', 'Semantics of Programming Lang.', 'Software Fundamentals', 'Symbolic Computation', 'Temporal Logic', 'Theorem Proving', 'Theoretical Computer Science', 'Type Theory', 'Uncertain Reasoning']
  }, {
    subjectName: 'Human Communication in ICT',
    topics: ['(null)', 'Dialogue Understanding for ICT', 'Language Corpora for ICT', 'Lexicography for ICT', 'Psycholinguistics for ICT', 'Speech Perception for ICT', 'Speech Recognition for ICT', 'Natural language', 'Perceptual language']
  }, {
    subjectName: 'Human-Computer Interactions',
    topics: ['(null)', 'HCI - Control Systems', 'HCI - Design & Eval. of Sys.', 'HCI - User Interaction', 'HCI - User Modelling', 'HCI - User Requirements', 'HCI for Group Decision Making', 'HCI for Rehabilitation', 'Human Aspects of CSCW', 'Multimedia - Human Factors']
  }, {
    subjectName: 'Networks & Distributed Systems',
    topics: ['(null)', 'Cognitive Radio', 'Complexity Mgmt in Systems', 'Distributed Multimedia Appl.', 'Distrib. Programming Environ.', 'Formal Methods (Networking)', 'Internet Protocols & Services', 'Network Coding', 'Network Performance & Eval.', 'Network Protocols', 'Network Security', 'Network/Dist Systems Design', 'Programmable & Active Networks', 'Quality of Service', 'Security for Networks (Comms)', 'Software Eng. for Networks ', 'Support for Multi-modal Appl.', 'WAN/LAN', 'Wireless Sensor Networks']
  }, {
    subjectName: 'Image & Vision Computing',
    topics: ['(null)', 'Biometric Imaging & Analysis', 'Computer Tomography (CT)', 'Comp. Vision - 3D Reconstruct.', 'Comp. Vision - Machine Learn.', 'Computer Vision - Recognition', 'Computer Vision - Tracking', 'Image & Vision Computing - 3D', 'Image & Vision Comp. - Colour', 'Image & Vision Comp.- Hardware', 'Pattern Recognition', 'Image & Vision Comp. - Theory ', 'Image & Vision Comp.- Security', 'Computer Vision Systems', 'Functional Imaging Techniques', 'Image & Video Processing', 'Image Display', 'Image Guided Systems', 'Image Processing for Documents', 'Image Registration', 'Image Restoration', 'Infrared Image Analysis Tech.', 'Optical Coherence Tomog. Tech.', 'PET Imaging Techniques', 'Radionucleide Image Analysis', 'Ultrasonic Imaging Techniques', 'X-ray Image Analysis']
  }, {
    subjectName: 'Information & Knowledge Mgmt',
    topics: ['(null)', 'Data Fusion', 'Data Mining', 'Data Modelling', 'Data Provenance', 'Data Security', 'Database Management Systems', 'Database Theory', 'Deductive Databases', 'Distributed Information Mgmt', 'Information Agents', 'Information & Knowledge Mgmt', 'Information Mgmt (Computing)', 'Information Retrieval', 'Intelligent Systems (Mgmt) ', 'Knowledge Acquisition', 'Knowledge Representation', 'Knowledge-based Computing Sys.', 'Semantic Web', 'Temporal Databases', 'Knowledge gen. - Co-Creation ', 'Knowledge gen. -crowd sourcing', 'Data capture', 'Data integrity']
  }, {
    subjectName: 'Microsystems',
    topics: ['(null)', '3D Microstructures', 'High aspect ratio micromachine', 'Hybrid microsystems', 'MEMS', 'Microengineering', 'Microfabricated devices', 'Microfluidics', 'Micromachining technologies', 'Micromechanics', 'Microsystem design', 'Microsystem fabrication', 'Microsystem interconnects', 'Microsystem modelling & anal.', 'Biomedical applications', 'Chemical applications', 'Communications applications', 'Displays applications', 'Imaging applications', 'Instrumentation applications', 'Measurement applications', 'Microscopy applications', 'Microwave applications', 'Monitoring applications', 'Pharma applications', 'Sensing applications', 'Microsystems integration', 'Multi-chip modules', 'MUMPS', 'Optoelectronic microsystems', 'Polymer microsystems', 'Self-assembling structures', 'Self-test', 'System-on-a-chip (SOC)']
  }, {
    subjectName: 'Mobile Computing',
    topics: ['(null)', 'Caching', 'Delivery of Multimedia service', 'Location services & GPS', 'Mobile Ad Hoc Networks', 'Mobile agents', 'Mobile codes', 'Mobile Data management', 'Mobile security & trust', 'Mobile systems & services', 'Mobility in user environments', 'Mobility of multimedia systems', 'Models for mobile computation', 'Nomadic computing', 'Peer to Peer Computing', 'Service & traffic modelling', 'Support for mobile appl.', 'Ubiquitous Computing', 'Wearable computing', 'Wireless healthcare', 'Internet of things']
  }, {
    subjectName: 'Modelling & simul. of IT sys.',
    topics: ['(null)', 'IT System Markov Models', 'IT System Monte Carlo', 'IT System Performance Eng.', 'IT System Simulation', 'IT System Stochastic Modelling']
  }, {
    subjectName: 'Multimedia',
    topics: ['(null)', 'Multimedia - hypertext', 'Multimedia - Imersive Environ.', 'Multimedia - sound', 'Multimedia - still pictures', 'Multimedia - video', 'Multimedia (general)', 'Multimedia Broadcast', 'Multimedia content search', 'Multimedia content Security', 'Multimedia content storage', 'Multimedia software eng.', 'Multimedia - entertainment', 'Serious games', 'Social technology systems', 'Media platform convergence']
  }, {
    subjectName: 'Music & Acoustic Technology',
    topics: ['(null)', 'Acoustic Modelling', 'Music & Acoustic User Interfa.', 'Sound Synthesis']
  }, {
    subjectName: 'New & Emerging Comp. Paradigms',
    topics: ['(null)', 'Biologically-inspired Comp.', 'Chemical Computing', 'Neuroscience-inspired Comp.', 'New Computing Paradigms', 'Quantum Computing']
  }, {
    subjectName: 'Optical Communications',
    topics: ['(null)', 'Antennae', 'Encryption - Optical Based', 'Fibre Systems', 'Infrared Systems', 'Mid Infrared communications', 'Millimetre Wave (Optical)', 'Mixers/Receivers', 'Multiplexing (WDM/TDM)', 'Navigation & Location Systems', 'Near Infrared Communications', 'Nonlinear Optics', 'Optical Components', 'Optical Frequency Synthesis', 'Optical Interconnects', 'Optical Networks', 'Photonic Subsystems & Networks', 'Transmitters']
  }, {
    subjectName: 'Optical Devices & Subsystems',
    topics: ['(null)', 'Acoustic/Ultrasonic Sensors ', 'Amplifiers (not semiconductor)', 'Device Design', 'Environmental Biosensors', 'Fibre Gratings', 'Fibre-optic Sensors', 'Gratings (Optics)', 'Gravity Sensors', 'Heat Sensors', 'Lasers - Crystal Waveguide', 'Lasers - Development', 'Lasers - Femtosecond', 'Lasers - Fibre', 'Lasers - Quantum Cascade', 'Lasers - Solid-state', 'Lithium Niobate', 'Medical - Phys.& Chem. Sensing', 'Micro-optical Devices', 'Modulators - Acousto-optic', 'Neural Networks (Power)', 'Nonlinear Devices', 'Optical Biosensors', 'Optical Chemical Sensors', 'Optical Computing', 'Optical Data Storage', 'Optical Diagnostics/Analysis', 'Optical Fibres (Devices)', 'Optical Gas Sensing', 'Optical Parametric Oscillators', 'Optical Switches', 'Photonic Crystals', 'Planar Amplifiers', 'Planar Integration', 'Plasmonics', 'Semiconductor Amplifiers', 'Silica on Silicon', 'Spatial Light Modulators', 'Waveguides (Optical)']
  }, {
    subjectName: 'Optoelect. Devices & Circuits',
    topics: ['(null)', 'Electro-absorption Modulators', 'Gain Switched Laser', 'III-V Nitrides (Optoelect.)', 'III-V Optoelectronic Circuits', 'III-V Semicond. (Optoelect.)', 'Infrared Detectors', 'Laser diodes (Optoelectronic)', 'LEDs', 'Mode-locked Laser Diodes', 'Multiple Quantum Well', 'Optoelect. Detect. & Receivers', 'Optoelect. Integrated Circuits', 'Photodetectors', 'Photodiode', 'Photonic Integration', 'Photonic/Electron. Integration', 'Phototransistors', 'Pulsed Operation/Systems', 'Pump Lasers', 'Receivers/Mixers', 'Semiconductor Laser Amplifiers', 'Semiconductor Lasers', 'Solar Cells (Photovoltaics)', 'Terahertz', 'Ultra-violet (UV) devices']
  }, {
    subjectName: 'Parallel Computing',
    topics: ['(null)', 'Models of Parallel Computing', 'Parallel Algorithm Design', 'Parallel Computing', 'Parallel Comp. Apps - HPC', 'Parallel Comp.Apps - Sci./Num.', 'Parallel Comp. Apps-Simulation', 'Parallel Comp. Architectures', 'Parallel Computing Compilation', 'Parallel Databases', 'Parallel Programming Languages', 'Software Tools for Para. Arch.']
  }, {
    subjectName: 'RF & Microwave Technology',
    topics: ['(null)', 'Antenna Design & Perfomance', 'Antenna for Mobile Comms', 'Attenuators', 'Couplers', 'HBT - RF Applications', 'Hybrid PSTN/Internet Systems', 'LDMOS Devices', 'Linearisers', 'Low Power Transmitters', 'MESFETDevices', 'Microstrip (RF)', 'Microwave Comms Technology', 'MIMO', 'Mixers (RF)', 'Monolithic Microwave IC (MMIC)', 'Network Switches', 'Oscillator Devices', 'pHEMT - RF Applications', 'Power Amplifiers', 'Power-Line Communications Sys.', 'Radar & Radio Navigation', 'Radio Communications', 'Radio Propagation', 'RF Filters', 'Satellite & Microwave Systems', 'Spectrum Management', 'Stripline', 'Tagging Techniques (Radio)', 'Transceivers', 'Transmitters/Receivers', 'Ultra Wide Band', 'Waveguides']
  }, {
    subjectName: 'Software Engineering',
    topics: ['(null)', 'Critical Systems - Software', 'Empirical Software Engineering', 'Model-driven Software Eng', 'Real-time Software Systems', 'Reverse Engineering', 'Software Agents', 'Software Architectures', 'Software Business Process', 'Software Dependability', 'Software Engineering', 'Software Eng. Methods & Tools', 'Software Evolution', 'Software Fault Tolerance', 'Software for Parallel Systems', 'Software Interoperability', 'Software Legacy Systems', 'Software Maintenance', 'Software Quality', 'Software Reliability', 'Software Requirements', 'Software Requirements Capture', 'Software Reuse', 'Software Safety', 'Software Security', 'Software Specification', 'Software Systems Development', 'Software Testing', 'Software Verification']
  }, {
    subjectName: 'System on Chip',
    topics: ['(null)', 'Analogue & Mixed-signal ', 'Application Specific IC (ASIC)', 'BiCMOS', 'Deep Sub-micron (DSM)', 'Design Automation', 'Design Methods', 'Digital Logic', 'Embedded DRAM', 'Embedded Flash Memories', 'Embedded IP Cores', 'Hard/Software Co-verification', 'IP Cores', 'IP Reuse', 'Logic Design & Synthesis', 'Low Power Design', 'Network on Chip', 'Reconfigurable/Scalable Design', 'SoC Specific CAD Tools', 'SoC Verification', 'Sync/Async Design', 'System Interconnects', 'System Level Integration', 'Timing Methodologies', 'Very Large-scale Integ. (VLSI)']
  }, {
    subjectName: 'Vision & Senses - ICT appl.',
    topics: ['(null)', 'Auditory Psychophysics for ICT', 'Auditory Scene Analysis - ICT', 'Auditory Virtual Reality', 'Binocular Integration for ICT', 'Cross Modal Perception for ICT', 'Haptic Technology', 'Human Touch for ICT', 'Human Vision for ICT - Colour', 'Human Vision - Light Percep.', 'Human Vision for ICT - Motion', 'Human Vision - Optic Flow', 'Human Vision - Psychophysics', 'Human Vision - Stereopsis', 'Human Vision for ICT - Texture', 'Passive touch for ICT', 'Perception of Complex Sounds', 'Proprioreception for ICT', 'Psychophysics for ICT', 'Shape Perception for ICT', 'Sound Source Separation - ICT', 'Visual Orientation for ICT']
  }, {
    subjectName: 'VLSI Design',
    topics: ['(null)', 'Asynchronous Logic', 'Circuit Design - Analogue', 'Circuit Design - Architecture', 'Circuit Design - ASIC', 'Circuit Design - Digital', 'Circuit Design - Logic', 'Circuit Design - Mixed-signal', 'Circuit Design - Verification', 'Programmable Hardware', 'VLSI CAD Tools', 'VLSI Design Tools', 'VLSI Interconnects']
  }, {
    subjectName: 'Bioelectronic Devices',
    topics: ['(null)', 'Bioelectronic nanostructures', 'Biointerfaces', 'Biological Microcircuits', 'Biomaterials for Info Proc ', 'Bio-Molecular Electronics', 'Sensors (Bioelectronics)', 'Silicon-based Electrodes']
  }, {
    subjectName: 'Computer Sys. & Architecture',
    topics: ['(null)', 'Compilation & Configuration', 'Computer Architecture', 'Computer Middleware', 'Computer Systems Integration', 'Computer Systems Management', 'Computer Systems Security', 'Computer Systems Specification', 'Distributed Architectures', 'Embedded System Synthesis', 'Hardware/Software Co-design', 'Interconnect Architectures', 'Novel Computer Architectures', 'Processor Architectures', 'System Design & Verification']
  }]
}, {
  areaName: 'Instrument. sensor & detectors',
  subjects: [{
    subjectName: 'Instrumentation Eng. & Dev.',
    topics: ['(null)', 'Adaptive Optics', 'Audiology', 'CCD', 'Chemical Biosensors', 'Chemical Sensors ', 'Chemometrics Instrumentation', 'Coherent Optics', 'Crystallography Instrument.', 'Data Collection', 'Data Fusion Instrumentation', 'Diffractive Optics', 'Electromagnetic Sensors ', 'Endocrinology', 'ENT', 'Environmental Sensors ', 'Functional Elect. Stimulation', 'Functional Imaging Instrument.', 'Gas Sensors Instrumentation', 'Genito-urinary Medicine', 'Holography Instrumentation', 'Impedance Sensors', 'Infrared Imaging Instrument.', 'Infrared Sensor Instrument.', 'Intelligent Instrument', 'Intensive Care', 'Micro-optics', 'Microscopy - SEM/TEM/proton', 'Microscopy - Optical', 'Probe Micros.(AFM/STM/thermal)', 'Optical Fibres', 'Optical Sensors', 'Optical Systems', 'Optics - Sol-gel', 'Physical Biosensors', 'Positron Emission Tomog. (PET)', 'Pressure Sensors', 'Process Tomography', 'Process/Manufacturing Sensors', 'Radionucleide Imaging Instrum.', 'Reactor Technology', 'Real-time Monitoring', 'Safe Handling', 'Sensor Arrays', 'Sensor Integration', 'Structural Health Monit. Sens.', 'Tomography Instrumentation', 'Ultrasound Instrumentation', 'X-ray Imaging']
  }, {
    subjectName: 'Astron. & Space Sci. Technol.',
    topics: ['(null)']
  }, {
    subjectName: 'Part. Phys/Astron. Instrument.',
    topics: ['(null)']
  }, {
    subjectName: 'Accelerator R&D',
    topics: ['(null)']
  }, {
    subjectName: 'Exploration Technology',
    topics: ['(null)']
  }, {
    subjectName: 'Survey & Monitoring',
    topics: ['(null)']
  }]
}, {
  areaName: 'Languages & Literature',
  subjects: [{
    subjectName: 'Middle East & African Studies',
    topics: ['(null)']
  }, {
    subjectName: '(null)',
    topics: ['(null)']
  }, {
    subjectName: 'American Studies',
    topics: ['(null)']
  }, {
    subjectName: 'Asiatic & Oriental Studies',
    topics: ['(null)']
  }, {
    subjectName: 'Australasian Studies',
    topics: ['(null)']
  }, {
    subjectName: 'Celtic Studies',
    topics: ['(null)']
  }, {
    subjectName: 'Comparative Literature',
    topics: ['(null)']
  }, {
    subjectName: 'Comparative Studies',
    topics: ['(null)']
  }, {
    subjectName: 'Creative Writing',
    topics: ['(null)']
  }, {
    subjectName: 'English Language & Literature',
    topics: ['(null)']
  }, {
    subjectName: 'Ethnography & Anthropology',
    topics: ['(null)']
  }, {
    subjectName: 'French Studies',
    topics: ['(null)']
  }, {
    subjectName: 'German inc. Dutch & Yiddish',
    topics: ['(null)']
  }, {
    subjectName: 'Hispanic Portguese & Latin',
    topics: ['(null)']
  }, {
    subjectName: 'History & Dev. of English Lang',
    topics: ['(null)']
  }, {
    subjectName: 'Interpreting & Translation',
    topics: ['(null)']
  }, {
    subjectName: 'Italian Studies ',
    topics: ['(null)']
  }, {
    subjectName: 'Language Training/Educational',
    topics: ['(null)']
  }, {
    subjectName: 'Languages & Linguistics',
    topics: ['(null)']
  }, {
    subjectName: 'Lifewriting',
    topics: ['(null)']
  }, {
    subjectName: 'Literary & Cultural Theory',
    topics: ['(null)']
  }, {
    subjectName: 'Medieval Literature',
    topics: ['(null)']
  }, {
    subjectName: 'Russian Slavonic & E European',
    topics: ['(null)']
  }, {
    subjectName: 'Scandinavian Studies',
    topics: ['(null)']
  }, {
    subjectName: 'Post-colonial studies',
    topics: ['(null)']
  }, {
    subjectName: 'Gender & Sexuality',
    topics: ['(null)']
  }]
}, {
  areaName: 'Law & legal studies',
  subjects: [{
    subjectName: 'Common Law inc. Commercial Law',
    topics: ['(null)']
  }, {
    subjectName: 'Comparative Law',
    topics: ['(null)']
  }, {
    subjectName: 'Criminal Law & Criminology',
    topics: ['(null)']
  }, {
    subjectName: 'EU Law',
    topics: ['(null)']
  }, {
    subjectName: 'Human Rights',
    topics: ['(null)']
  }, {
    subjectName: 'International Law',
    topics: ['(null)']
  }, {
    subjectName: 'Jurisprudence/Legal Philosophy',
    topics: ['(null)']
  }, {
    subjectName: 'Law Regulated By Statute',
    topics: ['(null)']
  }, {
    subjectName: 'Law Relating To Property',
    topics: ['(null)']
  }, {
    subjectName: 'Legal History',
    topics: ['(null)']
  }, {
    subjectName: 'Public Law',
    topics: ['(null)']
  }, {
    subjectName: 'Socio Legal Studies',
    topics: ['(null)', 'Access to justice civil and criminal', 'Civil liberty justice and Hum.Rights', 'Corporate Com. and Intellectual Property Law', 'Comparative & International Law', 'Constitutional administration law', 'Criminal law procedures', 'Environmental Law and Sustainability', 'Family and child law', 'Gender & feminist legal studies', 'Governance & Regulation', 'Housing law & policy', 'Information internet law and policy', 'Legal Anthropology & History', 'Legal Professionsedu.& skills', 'Medical ethics & Healthcare Law', 'Socio-legal research methods', 'Transitional justice', 'Conflict & terrorism laws']
  }]
}, {
  areaName: 'Library & information studies',
  subjects: [{
    subjectName: 'Archives',
    topics: ['(null)']
  }, {
    subjectName: 'Computational Studies',
    topics: ['(null)']
  }, {
    subjectName: 'Information Sci. & Retrieval',
    topics: ['(null)']
  }, {
    subjectName: 'Library Studies',
    topics: ['(null)']
  }, {
    subjectName: 'Records Management',
    topics: ['(null)']
  }, {
    subjectName: 'Human Communication in ICT',
    topics: ['(null)', 'Dialogue Understanding for ICT', 'Language Corpora for ICT', 'Lexicography for ICT', 'Psycholinguistics for ICT', 'Speech Perception for ICT', 'Speech Recognition for ICT', 'Natural language', 'Perceptual language']
  }, {
    subjectName: 'Information & Knowledge Mgmt',
    topics: ['(null)']
  }]
}, {
  areaName: 'Linguistics',
  subjects: [{
    subjectName: 'Language Acquisition',
    topics: ['(null)']
  }, {
    subjectName: 'Language Variation & Change',
    topics: ['(null)']
  }, {
    subjectName: 'Applied Linguistics',
    topics: ['(null)']
  }, {
    subjectName: 'Comput./Corpus Linguistics',
    topics: ['(null)']
  }, {
    subjectName: 'Lexicon',
    topics: ['(null)']
  }, {
    subjectName: 'Linguistic Theory',
    topics: ['(null)']
  }, {
    subjectName: 'Morphology & Phonology',
    topics: ['(null)']
  }, {
    subjectName: 'Phonetics',
    topics: ['(null)']
  }, {
    subjectName: 'Psycholinguistics',
    topics: ['(null)']
  }, {
    subjectName: 'Semantics & Pragmatics',
    topics: ['(null)']
  }, {
    subjectName: 'Sociolinguistics',
    topics: ['(null)']
  }, {
    subjectName: 'Syntax',
    topics: ['(null)']
  }, {
    subjectName: 'Textual Editing & Bibliography',
    topics: ['(null)']
  }, {
    subjectName: 'Languages & Linguistics',
    topics: ['(null)']
  }, {
    subjectName: 'Linguistics (General)',
    topics: ['(null)']
  }, {
    subjectName: 'Applied Linguistics',
    topics: ['Literacy Studies', 'Academic Writing', 'Discourse Analysis', 'Language Translation', 'Language Interpreting', 'Forensic Linguistics']
  }, {
    subjectName: 'Sociolinguistics',
    topics: ['Variationist Sociolinguistics', 'Language and Education', 'Multilingualism', 'Interactional Sociolinguistics']
  }, {
    subjectName: 'Computational Linguistics',
    topics: ['(null)']
  }, {
    subjectName: 'Corpus Linguistics',
    topics: ['(null)']
  }, {
    subjectName: 'Language Acquisition',
    topics: ['(null)', 'TEFL', 'TESOL', 'Language for Specific Purposes', 'Second language pedagogy', 'First language acquisition']
  }]
}, {
  areaName: 'Management & business studies',
  subjects: [{
    subjectName: 'Manage & Bus Stud (General)',
    topics: ['(null)', 'Management & Business Studies', 'Organisational theory', 'Retailstudies', 'Risk management', 'Service business models', 'New business models']
  }, {
    subjectName: 'Manufact. Business Strategy',
    topics: ['(null)', 'Agile Manufacturing', 'Asset Management', 'Change Management Strategy', 'Cost Analysis', 'Decision Support for Manufact.', 'Industrial Innovation', 'Internat. Manufact. Strategy', 'Manufacturing Business Culture', 'Manufacturing Business Process', 'Manufact. Business Strategy', 'Manufacturing Globalisation', 'Manufacturing Partnerships', 'Manufacturing Procurement', 'Operations Strategy', 'Organisational Development', 'Service Concepts', 'Total Quality Management', 'Value Management']
  }, {
    subjectName: 'Building Ops & Management',
    topics: ['(null)', 'Accessibility in Buildings', 'Air Conditioning (Buildings)', 'Air Quality (indoors)', 'Building Acoustics', 'Building Control', 'Building Envelope', 'Building Modelling', 'Building Noise & Vibration', 'Building Services', 'Design for Health (Buildings)', 'Efficiency of Buildings', 'Energy Usage by Buildings', 'Fire & Rescue (Buildings)', 'Heating of Buildings', 'Human Behaviour in Buildings', 'Indoor Climatic Effects', 'Indoor Comfort', 'IT in Design of Buildings', 'Lighting (Buildings)', 'Lining Systems (Buildings)', 'Moisture & Condens. in Bldgs', 'Productivity in Buildings', 'Retrofit of Buildings', 'Smart Buildings', 'Ventilation in Buildings', 'Virtual Environments', 'Water Supply in Buildings']
  }, {
    subjectName: 'Construction Ops & Management',
    topics: ['(null)', 'Benchmarking (Construction)', 'Building Information Modelling', 'Communication (Construction)', 'Construction Life Cycle', 'Construction Management', 'Construction Process', 'Construction Procurement', 'Construction Scheduling', 'Construction Supply Chain', 'Cost Modelling (Construction)', 'Culture Issues in Construction', 'Decision Making (Construction)', 'Deconstruction', 'Design Process (Construction)', 'Facilities Management', 'Health & Safety (Construction)', 'Innovation in Construction', 'IT in Construction', 'K&I Management (Construction)', 'Lean Construction', 'Modular Construction', 'Offsite Construction', 'Productivity (Construction)', 'Risk Assessment (Construction)', 'Risk Mgmt in Construction', 'Teamworking (Construction)', 'Whole Life Costing']
  }, {
    subjectName: 'Transport Ops & Management',
    topics: ['(null)', 'Accident Analysis & Modelling', 'Airport Operations', 'Coast & Inland Water Trans.Ops', 'Cycling', 'Discrete Choice Modelling', 'Driver Behaviour', 'Driver Information Systems', 'Environ. Impact of Transport', 'Ferry Operations', 'Freight Operations', 'Image Analysis', 'Inclusive Transport', 'Intelligent Transport Systems', 'Logistics', 'Marine Transport Operations', 'Modal Choice', 'Network Analysis', 'Operational Research (Trans.)', 'Passenger Information Systems', 'Pedestrians', 'Port Operations', 'Public Transport Operations', 'Railway Operations', 'Road Charging Systems', 'Road Safety', 'Road Transport Operations', 'Route Choice', 'Traffic Assignment', 'Traffic Control', 'Traffic Engineering', 'Traffic Impact Assessment', 'Traffic Management', 'Traffic Modelling', 'Traffic Simulation', 'Transport & Land Use', 'Transport Economics', 'Transport Emissions', 'Transport Noise & Vibration', 'Transport Planning', 'Transport Policy', 'Transport Pollution Management', 'Transport Safety', 'Transport Scheduling', 'Transport Telematics', 'Transportation Demand Mgmt', 'Travel Behaviour', 'Vehicle Locationing Systems']
  }, {
    subjectName: 'Manufact. Enterprise Ops& Mgmt',
    topics: ['(null)', 'Assembly Line', 'Automated Manufacturing', 'Automotive Manufacturing', 'Biomaterials Manufacturing', 'Cellular Manufacturing', 'Change Management', 'Composites Manufacturing', 'Computer Aided Manufacture', 'Computer Aided Production Mgmt', 'Concurrent Engineering', 'Costing', 'Digital Manufacturing', 'E-Business Models', 'Enterprise Modelling', 'Factory Organisation', 'Flexible Manufacturing', 'Fuzzy Systems', 'Human Factors in Manufacturing', 'Industrial Sustainability', 'Inspection in Manufacturing', 'Knowledge Based Manufacturing', 'Lean Production', 'Manufacture Process Modelling', 'Manufacturing Benchmarking', 'Manufacturing Control', 'Manufacturing Information Mgmt', 'Manufacturing Logistics', 'Manufacturing Maintenance', 'Manufacturing Networking', 'Manufacturing Processes', 'Manufacturing Project Managing', 'Manufacturing Quality Control ', 'Manufacturing Risk Assessment', 'Manufact. Safety & Environ.', 'Manufacturing Scheduling', 'Manufacturing Strategy', 'Manufacturing System Modelling', 'Manufact. Sys. & Integration', 'Manufacturing Technology Mgmt', 'Mechatronics for Manufacturing', 'Operations Management', 'Operations Modelling', 'Operations Planning', 'Optimisation for Manufacturing', 'Outsourcing', 'Partnerships in Manufacturing', 'Performance Measurement (Man.)', 'Pharmaceutical Manufacturing', 'Polymer Manufacturing', 'Production Management', 'Production Process Simulation', 'Rapid Manufacturing', 'Re-Manufacturing', 'Responsive Production', 'Supply Chain Management', 'Teamworking in Manufacturing', 'Virtual Enterprises', 'Virtual Prototyping']
  }, {
    subjectName: 'Design Engineering',
    topics: ['(null)', 'Automotive Design Engineering', 'Computer Aided Design (CAD)', 'Concurrent Engineering Design', 'Design for Healthcare', 'Design for Manufacture', 'Design for Quality', 'Design for Recycling ', 'Design of Aircraft', 'Design of Biomaterials', 'Design of Built Infrastructure', 'Design of Ships', 'Design Reuse', 'Designing for Risk', 'Embodiment', 'Engineering Design', 'Environmental Impact Design ', 'Industrial Design', 'New Product Development', 'Physical Modelling', 'Production Design', 'Requirements Capture', 'Sports Engineering Design', 'Virtual Modelling']
  }, {
    subjectName: 'Strategic Management',
    topics: ['(null)', 'Corporate Strategy', 'Strategic Decision Making', 'Stategic Implementation', 'Resource Based View and Dynamic Capabilities', 'Strategy and Networks', 'Competitive Strategy', 'Organisational Performance', 'Management Practices', 'Modes of Developments', 'Resource Based Theory', 'Corporate Failure and Recovery', 'Organisational Values', 'Organisational Identity']
  }, {
    subjectName: 'Project Studies',
    topics: ['(null)', 'Project Management', 'Project Capability', 'Project Strategy']
  }, {
    subjectName: 'Entrepreneurship',
    topics: ['(null)', 'Venture Capital', 'New Ventures', 'Family Firms', 'Business Incubators', 'Small and Medium Sized Enterprise', 'Micro Business', 'Business Start Up', 'Women Entrepreneurs', 'Entrepreneurship and Self Employment', 'Franchising', 'Entrepreneurship and Technology', 'Ethnic Entrepreneurship', 'Social Entrepreneurship', 'Social Investment']
  }, {
    subjectName: 'Leadership',
    topics: ['(null)', 'Leadership Theory', 'Entrepreneurial Philanthropy', 'Leadership Development', 'Leadership Style', 'Leadership Assessment', 'Leadership Intervention', 'Public Leadership', 'Cross-Cultural Leadership', 'Gender Leadership', 'Leadership in Partners', 'Leadership in Higher Education', 'High performance working', 'Role of Boards', 'Chief Executive pay']
  }, {
    subjectName: 'Employment Studies',
    topics: ['(null)', 'Pay', 'Discrimination in employment']
  }, {
    subjectName: 'Human Resource Management',
    topics: ['(null)', 'Organisational Development', 'Organisational Culture', 'Organisational Learning Training and Development', 'Diversity in HR', 'Employment Law', 'Employee Relations', 'Female Managers', 'Industrial Relations', 'Manufacturing Management', 'Trade Union Organisation']
  }, {
    subjectName: 'Innovation',
    topics: ['(null)', 'Product Development', 'Change Management', 'Creativity & innovation', 'Diffusion of Innovation', 'Research and Development', 'Life Cycle', 'New Business Models', 'Strategic Innovation', 'Dynamic Capability']
  }, {
    subjectName: 'Marketing',
    topics: ['(null)', 'International Marketing and Emerging Markets', 'Market Orientation', 'Market knowledge processes', 'Strategic Marketing', 'Advertising', 'Communications', 'Product Management', 'Brand Management', 'Customer Relationship Marketing', 'Consumer Behaviour and Psychology', 'Entrepreneurial marketing', 'Services Marketing', 'Fairtrade Consumers']
  }, {
    subjectName: 'Operations Management',
    topics: ['(null)', 'Logistics', 'Supply Chain Management', 'Production Management', 'Operational Research', 'Quality Management', 'Lean production systems', 'Lean Supply', 'Information flow Management']
  }, {
    subjectName: 'Hosp Leisure & tourism manage',
    topics: ['(null)', 'Event Management', 'Attractions Management', 'Recreational Facility Management', 'Travel Management', 'Sustainable Tourism Management']
  }, {
    subjectName: 'Governance',
    topics: ['(null)', 'Public Governance', 'Corporate Governance', 'Non-Profit Governance', 'Project Governance']
  }, {
    subjectName: 'Sustainability Management',
    topics: ['(null)', 'Green Management', 'Business Ethics', 'Managerial Ethics', 'Sustainable Development', 'Corporate Citizenship', 'Corporate Social Responsibility', 'Socially Responsible Investment']
  }, {
    subjectName: 'Knowledge Management',
    topics: ['(null)', 'Organisational Learning', 'Information Systems', 'Intellectual Capital', 'Knowledge Repositories', 'Knowledge Acquisiton', 'Knowledge Exchange', 'Collaborative Technologies']
  }, {
    subjectName: 'Retail Management',
    topics: ['(null)', 'FMCG', 'International Retailing', 'Supply Chain', 'Retail Strategy', 'Merchandising', 'E-commerce', 'Technology for Retail', 'Retail Innovation', 'Green Retailing', 'Retail Ethics', 'Retail History']
  }, {
    subjectName: 'Public Administration',
    topics: ['(null)', 'Public Management', 'Ethics in Public Administration', 'Public Policy Analysis', 'Public Budgeting', 'Public Management Reform', 'Voluntary Sector and Public Services', 'Third Sector and Public Services', 'Charitable Funding and Philanthropy']
  }, {
    subjectName: 'Organisational Studies',
    topics: ['(null)', 'Organisational Psychology', 'Organisational Behaviour', 'Organisational Theory', 'Organisatonal Analysis', 'Organisational Practice', 'Organisational Learning', 'Organisational Design']
  }, {
    subjectName: 'International Business',
    topics: ['(null)', 'International Trade Theory', 'Internationalisation', 'Trade Agreements', 'Organisational Capability', 'Cross Cultural Management', 'MNCs Transnationals and Global Corporations', 'Internat Management HRM HQ Subsidiary Relations', 'International Entrepreneurship', 'International Finance', 'Cross Border Transactions', 'Foreign Direct Investment', 'Firm Performance', 'Importing', 'Exporting']
  }, {
    subjectName: 'Finance and Accounting',
    topics: ['(null)', 'Corporate Finance', 'Financial Markets', 'Financial innovation', 'Market microstructure', 'Fund Management', 'Investment Management', 'Asset pricing', 'Behavioural finance', 'Quantitative Finance', 'Treasury Management', 'Risk Management', 'Public Finance', 'Accountancy', 'Audit', 'Accounting and Taxation', 'International Taxation', 'Accounting and Development', 'Financial Reporting', 'Management Accounting', 'Public Sector Accounting', 'Social and Environmental Accounting', 'Charitable Accounting', 'Accounting History', 'Capital Markets and Auditing', 'Banking', 'Banking Regulation', 'Retail Banking', 'Central Bank', 'Foreign Exchange Markets', 'Financial Services']
  }]
}, {
  areaName: 'Manufacturing',
  subjects: [{
    subjectName: 'Manufact. Enterprise Ops& Mgmt',
    topics: ['(null)', 'Assembly Line', 'Automated Manufacturing', 'Automotive Manufacturing', 'Biomaterials Manufacturing', 'Cellular Manufacturing', 'Change Management', 'Composites Manufacturing', 'Computer Aided Manufacture', 'Computer Aided Production Mgmt', 'Concurrent Engineering', 'Costing', 'Digital Manufacturing', 'E-Business Models', 'Enterprise Modelling', 'Factory Organisation', 'Flexible Manufacturing', 'Fuzzy Systems', 'Human Factors in Manufacturing', 'Industrial Sustainability', 'Inspection in Manufacturing', 'Knowledge Based Manufacturing', 'Lean Production', 'Manufacture Process Modelling', 'Manufacturing Benchmarking', 'Manufacturing Control', 'Manufacturing Information Mgmt', 'Manufacturing Logistics', 'Manufacturing Maintenance', 'Manufacturing Networking', 'Manufacturing Processes', 'Manufacturing Project Managing', 'Manufacturing Quality Control ', 'Manufacturing Risk Assessment', 'Manufact. Safety & Environ.', 'Manufacturing Scheduling', 'Manufacturing Strategy', 'Manufacturing System Modelling', 'Manufact. Sys. & Integration', 'Manufacturing Technology Mgmt', 'Mechatronics for Manufacturing', 'Operations Management', 'Operations Modelling', 'Operations Planning', 'Optimisation for Manufacturing', 'Outsourcing', 'Partnerships in Manufacturing', 'Performance Measurement (Man.)', 'Pharmaceutical Manufacturing', 'Polymer Manufacturing', 'Production Management', 'Production Process Simulation', 'Rapid Manufacturing', 'Re-Manufacturing', 'Responsive Production', 'Supply Chain Management', 'Teamworking in Manufacturing', 'Virtual Enterprises', 'Virtual Prototyping']
  }, {
    subjectName: 'Manufacturing Machine & Plant',
    topics: ['(null)', 'Additive Manufacturing', 'Automatic Inspection', 'Computer Aided Modelling', 'Electronics Assembly', 'Electronics Manufacturing', 'Environmental Factors (Man.)', 'Finishing Processes', 'Fixturing', 'Flexible Machines', 'Food Packaging', 'Glass Manufacturing', 'Grinding Processes', 'High Speed Machining', 'Human-Robot Co-operation', 'Inspection of Plant Machinery', 'Intelligent Machines', 'Kinematics', 'Laser Manufacturing Methods', 'Leather Processing ', 'Lubrication of Machinery', 'Machine Simulation & Modelling', 'Machine Texturing Processes', 'Machine Vision', 'Machining', 'Manufactiring Machine Control', 'Manufacturing Assembly Process', 'Manufacturing Machine Control', 'Manufacturing Machine Design', 'Manufacturing Processes', 'Metal Cutting', 'Metal Forming', 'Metrology (Manufacturing)', 'Nanomanufacturing', 'Packaging Machinery', 'Paper Manufacturing', 'Plastics Manufacturing', 'Powder Jet Machining', 'Printing Techniques', 'Product Handling/Assembly', 'Production Process Technology', 'Rapid Prototyping', 'Reconfigurable Tooling', 'Recycling Machinery/Plant', 'Robotic Assembly', 'Surface Coating', 'Textile Machinery', 'Tooling for Machinery', 'Ultrasonics in Manufacturing', 'Water Jet Machining']
  }, {
    subjectName: 'Manufact. Business Strategy',
    topics: ['(null)', 'Agile Manufacturing', 'Asset Management', 'Change Management Strategy', 'Cost Analysis', 'Decision Support for Manufact.', 'Industrial Innovation', 'Internat. Manufact. Strategy', 'Manufacturing Business Culture', 'Manufacturing Business Process', 'Manufact. Business Strategy', 'Manufacturing Globalisation', 'Manufacturing Partnerships', 'Manufacturing Procurement', 'Operations Strategy', 'Organisational Development', 'Service Concepts', 'Total Quality Management', 'Value Management']
  }, {
    subjectName: 'Design & Testing Technology',
    topics: ['(null)', 'Conceptual Design', 'Cost Estimation', 'Design Optimisation', 'Engineering Design Tools', 'Ergonomic Design', 'Failure Modes Effects Analysis', 'Filters (Design)', 'Footwear & Clothing Testing', 'Geometric Modelling', 'Human Factors Testing', 'Virtual Design', 'Visualisation of Design']
  }]
}, {
  areaName: 'Marine environments',
  subjects: [{
    subjectName: 'Ecosystem Scale Processes',
    topics: ['(null)']
  }, {
    subjectName: 'Land - Ocean Interactions',
    topics: ['(null)']
  }, {
    subjectName: 'Ocean - Atmosphere Interact.',
    topics: ['(null)']
  }, {
    subjectName: 'Ocean Circulation',
    topics: ['(null)']
  }, {
    subjectName: 'Biogeochemical Cycles',
    topics: ['(null)', 'Anoxic events', 'Atmospheric gas cycling', 'Biodiversity', 'Carbon capture and storage', 'Carbon cycling', 'Coastal margins', 'Fossil fuel burning', 'Isotopic analysis', 'Lake sediments', 'Marine sediments', 'Microbial communities', 'Nitrogen cycling', 'Ocean acidification', 'Primary production', 'Soil biochemistry', 'Soil organics', 'Sulphur cycling', 'Water quality', 'Wetlands']
  }, {
    subjectName: 'Ecosystem Scale Processes',
    topics: ['Agriculture', 'Anthropogenic pressures', 'Biodiversity', 'Bioenergy', 'Biogeochemical cycles', 'Catchment management', 'Coastal ecosystems', 'Conservation', 'Deforestation', 'Dissolved organic material', 'Ecosystem function', 'Ecosystem management', 'Ecosystem services', 'Food security', 'Food webs', 'Forest fires', 'Forests', 'Freshwater ecosystems', 'Greenhouse gas emission', 'Land surface modelling', 'Marine renewable energy', 'Nutrient limitation', 'Permafrost', 'Salt marshes', 'Soil carbon', 'Species response', 'Terrestrial ecosystems', 'Tropical ecosystems', 'Urban ecology', 'Vegetation change']
  }, {
    subjectName: 'Land - Ocean Interactions',
    topics: ['Atmospheric carbon', 'Beach processes', 'Carbon fluxes', 'Carbon storage', 'Chemical weathering', 'Climate systems', 'Coastal erosion', 'Coastal flooding', 'Coastal protection', 'Coastal wetlands', 'Dissolved organic matter', 'Earth system modelling', 'Ecosystem modelling', 'Environmental transitions', 'Estuaries', 'Extreme events', 'Fluvial zones', 'Glacial cycles', 'Glaciers', 'Ice sheets', 'Ice streams', 'Landslides', 'Marine sediments', 'Nutrient cycling', 'Ocean circulation', 'Ocean drilling', 'Salt marshes', 'Sea level variation', 'Seawater composition', 'Sediment transport', 'Shelf ocean dynamics', 'Water mass analysis']
  }, {
    subjectName: 'Ocean - Atmosphere Interact.',
    topics: ['Aerosols', 'Atmospheric circulation', 'Atmospheric composition', 'Atmospheric halogens', 'Atmospheric modelling', 'Atmospheric organics', 'Atmospheric oxidants', 'Atmospheric turbulence', 'Carbon cycle', 'Climate modelling', 'Cloud physics', 'Dimethyl sulphide fluxes', 'Dissolved organics', 'El Nino Southern Oscillation', 'Gas exchange', 'Greenhouse gases', 'Heat transport', 'Marine boundary layer', 'Meridional circulation', 'Nitrogen oxides', 'Ocean circulation', 'Ocean modelling', 'Ocean turbulence', 'Particulate organics', 'Phytoplankton', 'Radical chemistry', 'Sea ice', 'Sea level', 'Sea surface temperature', 'Semi-volatile organics', 'Shelf ocean dynamics', 'Snow', 'Solar radiation', 'Surface microlayers', 'Tropical tropopause', 'Volatile organics', 'Wind waves']
  }, {
    subjectName: 'Ocean Circulation',
    topics: ['Benthic foraminifera', 'Carbon cycle', 'Climate transitions', 'Data assimilation', 'Deep convection', 'Deep ocean circulation', 'Ecosystem modelling', 'Heat transport', 'Ice shelves', 'Internal waves', 'Marine biogeochemistry', 'Marine boundary layer', 'Marine carbonates', 'Meridional overturning circulation', 'Ocean drilling', 'Ocean modelling', 'Ocean turbulence', 'Oceanic eddies', 'Organic matter', 'Palaeo-ocean circulation', 'Phytoplankton transport', 'Sea ice', 'Sea level', 'Sedimentary record', 'Shelf ocean dynamics', 'Thermohaline circulation', 'Tracers', 'Water mass analysis', 'Western boundary currents']
  }]
}, {
  areaName: 'Materials processing',
  subjects: [{
    subjectName: 'Materials Processing',
    topics: ['(null)', 'Alloying', 'Annealing', 'Auxetic Materials', 'Bioinspired Materials', 'Casting', 'Ceramic Matrix Composites', 'Cure Monitoring', 'Delamination', 'Dislocations', 'Extrusion Processes', 'Fibre Fabrication', 'Forging', 'High Pressure Processing', 'Laser Processing of Materials', 'Light Alloys', 'Material Fabrication', 'Melt Spinning', 'Melt Texturing', 'Metal Matrix Composites', 'Microfabrication', 'Microwave Processing', 'Nanoindentation', 'Plasma Processing', 'Polymer Matrix Composites', 'Powder Processing', 'Preforming', 'Prepreg Materials', 'Pultrusion', 'Recycling end-of-life Mat.', 'Resins', 'Rolling', 'Rotational Moulding', 'Sintering', 'Steels', 'Structural defects', 'Supercritical Fluid Processing', 'Superplastic Forming', 'Textile Materials', 'Thermal Spraying', 'Thermoforming', 'Thermomechanical Processing', 'Welding/Joining']
  }, {
    subjectName: 'Civil Engineering Materials',
    topics: ['(null)', 'Brick', 'Building Materials from Waste', 'Cement & Concrete (Civil)', 'Coatings (Civil)', 'Corrosion (Civil)', 'Corrosion Protection (Civil)', 'Durable Materials (Civil)', 'Failure Testing (Civil)', 'Finite Element Methods (Civil)', 'Heritage Materials (Civil)', 'Lightweight Materials (Civil)', 'Low Energy Materials (Civil)', 'Materials Fire Testing (Civil)', 'Mechanical Testing (Civil)', 'Mortars', 'Novel Building Materials', 'Polymer Composites (Civil)', 'Reinforced Concrete (Civil)', 'Smart Materials (Civil)', 'Smart Structures (Civil)', 'Stone & Masonry', 'Structural Glass (Civil)', 'Timber']
  }, {
    subjectName: 'Particle Technology',
    topics: ['(null)', 'Aerosol Generation', 'Agglomeration', 'Attrition', 'Bulk Powder Flow', 'Bulk Powder Properties', 'Comminution', 'Compaction', 'Conveying', 'Cross Flow Filtration', 'Dense Phase Conveying', 'Dilute Phase Conveying', 'Discrete Element Modelling', 'Dissipative Particle Dynamics', 'Dust Explosion', 'Electro-separation', 'Electrostatic Precipitation', 'Floatation', 'Flocculation', 'Formulation', 'Gas/Solid Separation', 'Granular Flows', 'Granulation Kinetics', 'Hoppers', 'Interparticle Forces', 'Laser Doppler Anomometry', 'Magnetic Separation', 'On-line Measurement: particles', 'Particle coatings', 'Particle Encapsulation', 'Particle Engineering', 'Particle Filtration', 'Particle Size', 'PEPT', 'Polymer Coatings', 'Powder Diffraction', 'Powder Mixing', 'Powders', 'Sedimentation: particles', 'Surface Property Manipulation', 'Suspensions']
  }]
}, {
  areaName: 'Materials sciences',
  subjects: [{
    subjectName: 'Biomaterials',
    topics: ['(null)', 'Acrylics', 'Adhesion of biomaterials', 'Adsorbents', 'Aggregation products', 'Amalgam', 'Amyloid fibrils', 'Antimicrobial Agents/Materials', 'Bio-artificial Interfaces', 'Bioceramics', 'Biocompatibility', 'Biofibrils', 'Bioglass', 'Bioinorganic compounds', 'Biomaterial Cements', 'Biomaterials', 'Biomaterials - Artery', 'Biomaterials - Breast', 'Biomaterials - Eye', 'Biomaterials - Finger', 'Biomaterials - Heart', 'Biomaterials - Hip', 'Biomaterials - Mouth', 'Biomaterials - Muscle', 'Biomaterials - Neural', 'Biomaterials - Tooth', 'Biomaterials - Vein', 'Biomimetic Materials', 'Biomonomers', 'Biopolymer Biomaterial', 'Biorecognition', 'Bioresponsive Material', 'Calcium Phosphates', 'Cell material interaction', 'Cohesion', 'Collagen', 'Colour - Biomaterials', 'Composite Biomaterials', 'Conductivity of Biomaterials', 'Corrosion of biomaterials', 'Degradable biomaterials', 'Dental Materials', 'Dressings -Biomaterial', 'Elasticity of Biomaterials', 'Fibrin - Biomaterials', 'Gels - Biomaterial', 'Glass Ionomers', 'Gut Biomaterials', 'Haemocompatibility of Biomat.', 'Hard Tissue Replacement', 'Heart Valve biomaterials', 'Heart Valve Replacement', 'Hydrogels', 'Hydroxyapatite', 'Interface Mechanics', 'Membranes - Biomaterials', 'Metal Alloys', 'Metal Matrix Composites BioMa', 'Microleakage', 'Modified Biomaterial Surfaces', 'Non-degradable Biomaterial', 'Polymer Matrix Bimat. Compos.', 'Polymerisation Shrinkage', 'Polymers (Biomaterials)', 'Polyurethanes (Biomaterials)', 'Soft Tissue Replacement', 'Solubility - Biomaterial', 'Sorbents -Biomaterial', 'Surface Roughness/Friction', 'Thermal Expansion', 'Vascular Grafts', 'Viscoelasticity', 'Wear of Biomaterials']
  }, {
    subjectName: 'Materials Characterisation',
    topics: ['(null)', 'Adhesives', 'Antibacterial polymers', 'Atomic Force Microscopy (AFM)', 'Biodegradability', 'Crack Growth', 'Defects', 'Degradable polymers', 'Dielectric Analysis', 'Ductility', 'Elasticity', 'Electrical Properties', 'Electroactive polymers', 'Electrocalorics', 'Electroluminescence', 'Electron Backscatter Diffract.', 'Electron Energy Loss Spect.', 'Electronic Properties', 'Entanglement theory', 'Grain Boundaries', 'Interface Properties', 'Ionic conductivity', 'Josephson Devices', 'Magnetic Force Microscopy', 'Magnetic switching', 'Magnetocalorics', 'Magnetometry', 'Materials morphology', 'Mechanical Properties of Mat.', 'Metrology & standards', 'Microstructure analysis', 'Neutron Scattering', 'Phase Separation', 'Phase Transitions in materials', 'Photoluminescence', 'Polymer explosives', 'Porous Structures', 'Reflection En. Electron Diff.', 'Scanning Electron Microscopy ', 'Scan.Nr-field Opt.Micros. SNOM', 'Secondary Ion Mass Spectrom.', 'Shear', 'Shrinkage', 'SQUIDS', 'Surface Analysis', 'Surface Plasmon Resonance', 'Thermal Properties (materials)', 'Time Resolved Optical Charact.', 'Transmission Electron Microsc.', 'Tube theory', 'Ultrafast time-resolved spect.', 'Ultrasound Analysis', 'UV Photoelectron Spectroscopy', 'X-ray Diffraction (Crystal)', 'X-ray Diffraction (Powder)', 'X-ray Fluorescence', 'X-ray Magn. Angular Scattering', 'X-ray Photoelect. Spect. (XPS)']
  }, {
    subjectName: 'Materials Synthesis & Growth',
    topics: ['(null)', 'Amorphous Materials', 'Antiferromagnetic materials', 'Biomagnetics', 'Bulk Crystal Growth', 'Bulk Single Crystals', 'Carbides', 'Carbon composites', 'Carbon films', 'Carbon nanotubes', 'Ceramic oxide sensors', 'Chemical Vapour Deposition ', 'Colloidal microgels', 'Complex Oxides', 'Conjugated polymers', 'Co-polymers', 'Crystal Growth', 'Cuprates', 'Cyclic polymers', 'Diamonds', 'Dielectric Materials', 'Elastomers', 'Electrochemical synthesis', 'Electrochromic materials', 'Ferroelectric Materials', 'Ferroics', 'Ferromagnetic materials', 'Field-effect transistors', 'Glasses', 'Graphene', 'Graphite', 'High-temperature supercond.', 'Hybrid Materials', 'Hydrophilic polymers', 'Hydrophobic polymers', 'Inorganic Semiconductors', 'Insulating polymers', 'Intercalation', 'Ion Beam Deposition', 'Ionic Materials', 'Langmuir-Blodgett Deposition', 'Light-emitting materials', 'Light-emitting polymers', 'Lignin', 'Liquid Crystal Materials', 'Liquid Phase Epitaxy', 'Low-temperature supercond.', 'Macromolecules', 'Magnetic Random Access Memory', 'Magnetic storage media', 'Mesocrystals', 'Mesoporous materials', 'Metal borides', 'Metal organic frameworks', 'Metal-Organic CVD', 'Metamaterials', 'Microporous materials', 'Molecular Beam Epitaxy', 'Molecular Magnets', 'Molecular Superconductors', 'Molecularly imprinted polymers', 'Multiferroics', 'Nanocomposites', 'Nanofabrication', 'Nanoparticles', 'Nanoporous Materials', 'Nanorods', 'Nanostructures', 'Nanowires', 'Oligomers', 'Organic semiconductors', 'Organic spintronics', 'Organometallic polymers', 'Perovskites', 'Photovoltaic Materials', 'Physical Vapour Deposition', 'Plasma Vapour Deposition', 'Plastic electronics', 'Pnictides', 'Polyethylene Glycol (PEG)', 'Polymer Blends', 'Polymer Membranes', 'Polymer wetting', 'Polyolefins', 'Quantum Dots', 'Quantum Wells', 'Quantum Wires', 'Room temperature spintronics', 'Semicond. Electronic Structure', 'Semicond. Energy Band Calc.', 'Semiconductor Many Body Effect', 'Semiconductor Structure/Growth', 'Semiconductors - Transport', 'Silicon-based semiconductors', 'Soft nanophotonics', 'Sol-gel', 'Sputtering Deposition', 'Synthesis of Block Co-polymers', 'Thick Film Growth', 'Thin Film Growth', 'Titanate (superconducting)', 'Ultra Hard Materials', 'Vapour Phase Epitaxy', 'Zeolites']
  }, {
    subjectName: 'Complex fluids & soft solids',
    topics: ['(null)', 'Aggregation', 'Biomimetic Complex Fluids', 'Cellulose Chemistry', 'Clays', 'Colloid Dispersions', 'Complex Fluids', 'Compressibility', 'Creams', 'Crystallisation', 'Drilling Fluids', 'Droplet Formation', 'Emulsions', 'Fluid Morphology', 'Foams', 'Injection Moulding', 'Interparticle Forces (Fluids)', 'Latex', 'Liquefaction', 'Liquid Crystalline Polymers', 'Liquid Crystals', 'Liquid-Liquid Systems', 'Lyotropes', 'Microemulsion', 'Microporous Structures', 'Organogels', 'Paints', 'Pastes', 'Phase Transformations', 'Porosimetry', 'Process Analysis', 'Processing of Complex Fluids', 'Rheopectic Fluids', 'Shear Thinning Fluids', 'Surfactants', 'Thixotropy']
  }]
}, {
  areaName: 'Mathematical sciences',
  subjects: [{
    subjectName: 'Algebra & Geometry',
    topics: ['(null)', 'Abelian', 'Algebra', 'Algebraic Geometry', 'Algebraic Groups', 'Algebraic Number Theory', 'Algebraic Topology', 'Analytical Number Theory', 'Arithmetic', 'Arithmetic geometry', 'Automorphic forms', 'Burnside', 'Calabi-Yau Manifold', 'Category Theory', 'Clifford Algebra', 'Cohomology', 'Commutative', 'Complexes & buildings', 'Computational Number Theory', 'Differential Geometry', 'Diophantine', 'Dirichlet', 'Elliptic Curves', 'Euclidean', 'Finite', 'Finite Geometry', 'Finsler Spaces', 'Fuchsian Groups', 'Gauge Theory ', 'Geometric Group Theory', 'Geometry', 'Grobner Bases', 'Gromov-Witten Invariant', 'Group Theory', 'Groups', 'Hecke Algebras', 'Homological Algebra', 'Homology', 'Homotopy Theory', 'Hopf Invariants/Algebras', 'Hyperbolic Geometry', 'Infinite Groups & Algebras', 'Kac-Moody Algebra', 'Kahler', 'Knot Theory', 'K-theory', 'Langlands', 'L-function', 'Lie Algebras', 'Linear', 'Low Dimensional Topology', 'Manifolds', 'Matrix Theory', 'Moduli Space', 'Morse Theory', 'Nilpotent', 'Noetherian Ring', 'Non-abelian', 'Non-commutative', 'Number Theory', 'P-adic', 'Permutation', 'Quantum Theory', 'Representation Theory', 'Riemannian Geometry', 'Ring Theory', 'Semigroups', 'Singularity Theory', 'Symplectic Geometry', 'Tensor Product', 'Tiling Theory', 'Topology', 'Twistor', 'Vector Bundle/Space', 'Yang-Mills', 'Zeta functions (group theory)', 'Zeta functions (number theory)']
  }, {
    subjectName: 'Continuum Mechanics',
    topics: ['(null)', 'Acoustic Waves', 'Aerodynamics', 'Boundary Layer Problems', 'Combustion Mechanics', 'Compressible Fluids', 'Computational Fluid Dynamics', 'Continuum Mechanics', 'Convection', 'Crack Propagation Modelling', 'Electrohydrodynamics', 'Fluid Dynamics (Continuum)', 'Fluid Flow', 'Fluid Mechanics (Continuum)', 'Fracture (Continuum)', 'Free-surface Flow', 'Geophysical Modelling', 'Hydrodynamic Theory', 'Hydrological Modelling', 'Incompressibility', 'Inelastic', 'Instability', 'Linearity', 'Materials Modelling', 'Multiphase Flow', 'Newtonian', 'Non-Newtonian Mechanics', 'Phase Transition Modelling', 'Plastic', 'Rotating Fluids', 'Solid Mechanics', 'Structural Mechanics', 'Structures', 'Thin Bodies', 'Turbulent Mechanics', 'Viscoelastic', 'Viscous Fluids', 'Wave Mechanics']
  }, {
    subjectName: 'Logic & Combinatorics',
    topics: ['(null)', 'Automata', 'Boolean Algebras', 'Classification theory', 'Colouring of graphs', 'Combinatorial Methods', 'Combinatorics', 'Complexity Theory', 'Computational Algebra', 'Design Theory', 'Discrete Mathematics', 'Fuzzy Mathematics', 'Fuzzy Set Theory', 'Graph Theory', 'Hierarchies', 'Logic', 'Minimality', 'Modal', 'Model theory', 'Permutation Groups', 'Proof Theory', 'Quantum Logic', 'Ramsey theory', 'Random Graphs', 'Recursion Theory', 'Semigroup Theory', 'Set Theory', 'Theory of Algorithms', 'Trees in Graph Theory', 'Turing']
  }, {
    subjectName: 'Mathematical Analysis',
    topics: ['(null)', 'Asymptotic Analysis', 'Banach Algebras/Lattices', 'Bifurcation Theory', 'Boundary Value Problems', 'Branching Processes', 'Brownian Motion', 'C algebras', 'Calculus', 'Complex Analysis', 'Dynamical Systems', 'Eigenfunction', 'Elliptic Equations/Operators', 'Embedding Theorems', 'Entropy', 'Ergodic Theory', 'Financial Mathematics', 'Fourier Analysis', 'Fractals', 'Functional Analysis', 'Geodesics', 'Global Analysis', 'Hamiltonian', 'Harmonic Analysis', 'Hilbert Spaces/Operators', 'Hyperbolic Function', 'Integral Operators', 'Kleinian Groups', 'Lagrangian', 'Laplace Equation', 'Linear Analysis', 'Mappings', 'Markov', 'Martingales', 'Measure Theory', 'Navier-Stokes Equations', 'Nonstandard Analysis', 'Operator Theory/Algebras', 'Painleve equations', 'Perturbations', 'Potential Theory', 'Probability Theory', 'Quantum Stochastic Calculus', 'Random Matrix Theory', 'Random Walks', 'Real Analysis', 'Riemann Surfaces', 'Sobolev Spaces', 'Spectral Geometry', 'Spectral Theory', 'Stochastic Analysis', 'Stochastic Geometry', 'Stochastic PDEs', 'Von Neumann Algebras', 'Wiener-Hopf Integral', 'Zeta Functions']
  }, {
    subjectName: 'Mathematical Aspects of OR',
    topics: ['(null)', 'Combinatorial Theory', 'Credit scoring', 'Decision Analysis', 'Decomposition algorithms', 'Discrete Event Simulation', 'Dynamic programming', 'Evolutionary Game Theory', 'Finance', 'Flows in networks', 'Forecast Models', 'Game Theory in OR', 'Global Search Heuristics', 'Graph Problems', 'Heuristic Methods', 'Integer Programming', 'Inventory models', 'Linear Programming', 'Local search', 'Markov Decisions', 'Mathematical Algorithms', 'Mathematical programming', 'Matrix Generators', 'Meta Analysis', 'Meta Heuristic Methods', 'Multi-objective Decisions', 'Network Flows', 'Nonlinear Programming', 'Optimisation Problems', 'Performance Analysis', 'Production Modelling', 'Programming (OR)', 'Risk & Reliability', 'Scheduling Theory', 'Search theory', 'Sequencing Problems in OR', 'Stochastic Programming', 'System dynamics']
  }, {
    subjectName: 'Mathematical Physics',
    topics: ['(null)', 'AdS/CFT Correspondence', 'Anti de Sitter (AdS)', 'Black Holes', 'Branes', 'Chaos Theory', 'Conformal Field Theory (CFT)', 'Decoherence', 'Einstein', 'Gauge Theory & Fields', 'Gravitational Fields', 'Instantons', 'Integrable Systems', 'Kac-Moody', 'Lie Derivative', 'Monopoles', 'M-Theory', 'Quantum Chaos', 'Quantum Chromodynamics (QCD)', 'Quantum Gravity', 'Relativity', 'Schrodinger', 'Seiberg-Witten Equation', 'Skyrmions', 'Spinor', 'Stochastic Calculus', 'Supergravity', 'Superstrings', 'Supersymmetry', 'Toda Theory', 'Topolgical Manifold', 'Topological QFT', 'Topological Solitons', 'Twistors & Space Time', 'W-Algebras', 'Wave-Particle Duality', 'Yang-Mills Theory']
  }, {
    subjectName: 'Non-linear Systems Mathematics',
    topics: ['(null)', 'Adaptive/Evol. Math. Process', 'Aeronautics', 'Asymptotic', 'Bifurcations', 'Boundary Values', 'Chaotic Processes', 'Coherence', 'Critical Phenomena', 'Deterministic Systems', 'Feedback Loop', 'Hamiltonian Systems', 'Inertial Manifold', 'Initial Value Problem', 'Integrability', 'Invariance', 'Ising Model', 'Lattice Maps', 'Lattice Systems', 'Liquid Crystal Modelling', 'Mechanics', 'Non-Equilibrium Mechanics', 'Nonlinear Iterative Processes', 'Nonlinear Partial DEs', 'Nonlinear Waves', 'ODEs', 'Painleve', 'Parabolic', 'Pattern Formation', 'Percolation', 'Potts Model', 'Reaction-diffusion', 'Singularities', 'Solitons', 'Spatially Extended Systems', 'Spatio-temporal Instability', 'Spin Glasses', 'Statistical Mechanics', 'Statistical Thermodynamics', 'Stochastic Processes', 'Travelling wave', 'Wavelets', 'Yang-Baxter Equation']
  }, {
    subjectName: 'Numerical Analysis',
    topics: ['(null)', 'Adaptive Grids', 'Approximation Techniques', 'Bifurcation', 'Computational Geometry', 'Convergence', 'Eigenvalues', 'Eigenvectors', 'Electromagnetics', 'Error Analysis', 'Finite Methods', 'Galerkin Methods', 'Hamiltonian Mechanics', 'Improperly Posed Problems', 'Integral', 'Interpolation', 'Interval Analysis', 'Inverse Problems', 'Iterative Methods', 'Linear Algebra', 'Matrix Analysis', 'Mesh Methods', 'Navier-Stokes Solutions', 'Nonlinear Stabilities', 'Optimisation Constraints', 'Ordinary Differential Equ.', 'Parallel Computation', 'Partial Differential Equations', 'Poisson', 'Probabilistic Methods', 'Random Number Generation', 'Spectral Methods', 'Stochastic Differential Eqns', 'Volterra Functions']
  }, {
    subjectName: 'Statistics & Appl. Probability',
    topics: ['(null)', 'Actuarial Sciences', 'Applied Probability', 'Applied Statistics', 'Approximation Theory', 'Bayesian Methods', 'Biostatistics', 'Causality', 'Classification Techniques', 'Cluster Analysis', 'Communications networks', 'Computational Statistics', 'Confidence Intervals', 'Curve Fitting', 'Data Exploration', 'Decision theory', 'Density Estimation', 'Design of Experiments', 'Distribution Theory', 'Environmental Statistics', 'Epidemiological Statistics', 'Extreme Values', 'Financial Modelling', 'Generalised Linear Models', 'Graphical Methods', 'Hypothesis Testing', 'Inference', 'Kernel Mathods', 'Likelihood Function', 'Limit Theorems', 'Linear Inference', 'Markov Chain Monte Carlo', 'Markov Processes', 'Mathematical Statistics', 'Maximum Likelihood', 'Measurement Error Modelling', 'Missing Values', 'Multivariate', 'Nonlinear Statistics', 'Non-Parametric statistics', 'Optimal Design', 'Parametric Estimation', 'Probabilistic Causation', 'Probability', 'Queueing Theory', 'Randomness', 'Ranking', 'Regression', 'Resampling', 'Robustness', 'Sampling', 'Sequential Methods', 'Shape Analysis', 'Smoothing', 'Spatial Statistics', 'Spectral Analysis', 'Statistical Approximation', 'Statistical Ecology', 'Statistical Estimation', 'Statistical Image Analysis', 'Statistical Methodology', 'Statistical Uncertainty', 'Statistics for Clinical Trials', 'Statistics of Genetics', 'Stochastic Methods', 'Survival Analysis', 'Time Series', 'Tolerance', 'Wavelet Transforms']
  }]
}, {
  areaName: 'Mechanical engineering',
  subjects: [{
    subjectName: 'Acoustics',
    topics: ['(null)', 'Acoustics in Design of Devices', 'Aero-acoustics', 'Building/Room Acoustics', 'Loudspeakers & Microphones ', 'Magneto-acoustics', 'Mathematical Acoustics', 'Musical Acoustics', 'Noise & Vibration Control', 'Noise & Vibration Generation', 'Noise-induced Hearing Loss', 'Opto-acoustics', 'Physiological Effects of Noise', 'Sonar', 'Speech Perception', 'Speech Processing', 'Speech Production', 'Ultrasound']
  }, {
    subjectName: 'Aerodynamics',
    topics: ['(null)', 'Acoustic Fatigue', 'Aerodynamic Optimisation', 'Aeroelasticity', 'Aeroengine Compressors', 'Aerofoil Design', 'Aircraft/Engine Icing', 'Airframe Aerodynamics', 'Boundary Layers (Aerodynamics)', 'Buffet Onset', 'Complex Geometry Modelling', 'Comp. Partial Differential Equ', 'Direct Numerical Simulation', 'Drag', 'Dynamic Behaviour', 'Engine Cooling Flows', 'Engine Mixing Flows', 'Environmental Aerodynamics', 'Experimental Aerodynamics', 'Experimental Fluid Dynamics', 'External Aerodynamics', 'Fan Noise', 'Flow Control', 'Flow Instrumentation', 'Flow Measurement', 'Flow Visualisation', 'Flutter', 'Fundamental Fluid Mechanics', 'Gas Turbines', 'Grid Generation', 'Helicopter Aerodynamics', 'High Incidence Flows', 'High Lift', 'High Reynolds Number', 'Industrial Aerodynamics', 'Internal Aerodynamics', 'Jet Noise', 'Laminar Flow', 'Large Eddy Simulation', 'Laser Doppler Velocimetry(LDV)', 'Leakage Flows', 'Low Reynolds Number', 'Multistage Turbomachinery', 'Nacelle', 'Navier-Stokes (Aerodynamics)', 'Near Field/Far Field Noise', 'Noise Prediction', 'Noise Reduction', 'Parallel Processing', 'Performance Modelling', 'Planform Design', 'Prediction Performance', 'Rotating Stall', 'Rotor Dynamics', 'Rotorcraft', 'Separated Bubble', 'Separated Flow', 'Shear Layers', 'Shock Waves', 'Steady Flow', 'Theoretical Model Validation', 'Trailing Edge Flow', 'Transition', 'Transonic/High Lift Flow', 'Turbulence (Aerodynamics)', 'Turbulence Modelling', 'Unsteady Flow', 'Unstructured Grids', 'Vehicle Aerodynamics', 'Vibration (Aerodynamics)', 'Vortical Flow/Interactions', 'Vortices', 'Wakes', 'Wind Tunnel', 'Wing Design']
  }, {
    subjectName: 'Combustion',
    topics: ['(null)', 'Annular Flows in Combustion', 'Applied Catalysis - Combustion', 'Automotive Applications', 'Baffle Tubes', 'Burners (Combustion)', 'Catalytic Reactors -Combustion', 'Circulating Fluidised Beds', 'Combustion - Reaction Kinetics', 'Combustion Catalysis', 'Combustion Chemistry', 'Combustion Diagnostics', 'Combustion Kinematics', 'Compressors in Combustion', 'Condensers (Combustion)', 'Emissions (Combustion)', 'Engines', 'Explosions (Combustion)', 'Fire (uncontrolled combustion)', 'Flames (Combustion)', 'Fluid Power (Combustion)', 'Fluids (Combustion)', 'Fuels for use in combustion', 'Furnaces', 'Gas Turbines in Combustion', 'Incineration', 'Laser Tech. for Combustion', 'Particle Formation-combustion ', 'Particle Imaging Velocimetry ', 'Positron Emission Part. Track.', 'Reforming (Fuel)', 'Sprays', 'Turbulent Combustion']
  }, {
    subjectName: 'Design & Testing Technology',
    topics: ['(null)', 'Conceptual Design', 'Cost Estimation', 'Design Optimisation', 'Engineering Design Tools', 'Ergonomic Design', 'Failure Modes Effects Analysis', 'Filters (Design)', 'Footwear & Clothing Testing', 'Geometric Modelling', 'Human Factors Testing', 'Virtual Design', 'Visualisation of Design']
  }, {
    subjectName: 'Eng. Dynamics & Tribology',
    topics: ['(null)', 'Ageing of Materials', 'Bearings', 'Brakes', 'Buckling (Mechanical)', 'Cams (Mechanical)', 'Coatings (Mechanical)', 'Corrosion (Mechanical)', 'Crack Propagation', 'Creep Deformation ', 'Creep Fracture', 'Damage Mechanisms', 'Damage Tolerance', 'Damping of Vibration/Motion', 'Deformation (Engineering)', 'Drilling (Tribology)', 'Durability of Materials', 'Failure of Materials', 'Fracture Mechanics', 'Fracture of Materials', 'Fretting', 'Friction', 'Gears (Mechanical)', 'Impact Fatigue', 'Impact Fracture', 'Lubricants & Lubrication', 'Nanotribology', 'Rolling Contacts', 'Seals', 'Sliding Contacts', 'Surface Engineering', 'Surface Treatment', 'Thermal Fatigue of Materials', 'Waveloading', 'Wear/Tribology']
  }, {
    subjectName: 'Materials testing & eng.',
    topics: ['(null)', 'Adaptive Structures', 'Adhesion of Materials', 'Construction of Ships', 'Corrosion Protection ', 'Diagnostics (Mechanical)', 'Diffusion Bonding ', 'Dynamic Mech. Test Anal.(DMTA)', 'Grinding (Mechanical)', 'Honeycombs', 'In-situ Mech. Testing Tech.', 'Joining', 'Laser Cutting', 'Laser Welding', 'Life Prediction of Materials', 'Mechanical Cutting ', 'Micromechanics of Materials', 'NDE - Electromagnetic Tech.', 'NDE - Magnetic Techniques', 'NDE - Optical Techniques', 'NDE - Ultrasound Techniques', 'Repair/Remediation of Struct.', 'Residual Stress', 'Shape-memory Alloys', 'Shells', 'Smart Materials', 'Smart Structures', 'Soldering', 'Strain (Materials)', 'Stress (Materials)', 'Toughness']
  }, {
    subjectName: 'Mech. & Fluid Power Transmiss.',
    topics: ['(null)', 'Cavitation', 'Condition Monitoring (Mech)', 'Continuously Variable Trans.', 'Control of Vibration', 'Drivelines', 'Effects Analysis', 'Failure Mode', 'Fluid Power (Mechanical)', 'Gearing', 'Hydraulics (Mechanical)', 'Hydrostatic Transmissions', 'Linear Actuators', 'Mechanical Compressors', 'Mechanical Noise', 'Motion Control', 'Pneumatics', 'Pumps', 'Servohydraulics', 'Servopneumatics', 'Servovalves', 'Valves', 'Vibration (Mechanical)']
  }, {
    subjectName: 'Underwater Engineering',
    topics: ['(null)', 'Design (Underwater)', 'Diving Equipment (eg Scuba)', 'Remote Inspection & Repair', 'Subsea Technology', 'Subsea Working', 'Underwater Vehicles']
  }, {
    subjectName: 'Electric Motor & Drive Systems',
    topics: ['(null)', 'Alternators', 'Drives', 'Electrical Drives', 'Electrical Vehicles', 'Energy efficient motors/drives', 'Magnetic Bearings', 'Motors - Brushless', 'Motors - Induction', 'Motors - Linear', 'Motors - Stepping', 'Motors - Synchronous', 'Switched Reluctance', 'Turbomachinery']
  }, {
    subjectName: 'Robotics & Autonomy',
    topics: ['(null)', 'Actuators', 'Autonomous Road Vehicles', 'Bio-inspired Robotics', 'Dextrous Manipulation', 'Dynamic Manipulation', 'Grasp Planning', 'Haptic Robotics Force Feedback', 'Industrial Robotics', 'Manipulator Dynamics', 'Manipulator Kinematics', 'Mechatronics', 'Medical Robotics', 'Medical Robotics - Assistive', 'Medical Robotics - Rehab.', 'Medical Robotics - Surgery', 'Mobile Robots', 'Multiple Robot Cooperation', 'Nanorobotics', 'Path Planning', 'Personal Robotics', 'Robot Calibration', 'Robot Control', 'Sensor-Guided Robots', 'Service Robotics', 'Swarm Robotics', 'Task-level Software', 'Teleoperation', 'Underwater Autonomous Vehicles', 'Unmanned Aerial Vehicles']
  }, {
    subjectName: 'Instrumentation Eng. & Dev.',
    topics: ['(null)', 'Adaptive Optics', 'Audiology', 'CCD', 'Chemical Biosensors', 'Chemical Sensors ', 'Chemometrics Instrumentation', 'Coherent Optics', 'Crystallography Instrument.', 'Data Collection', 'Data Fusion Instrumentation', 'Diffractive Optics', 'Electromagnetic Sensors ', 'Endocrinology', 'ENT', 'Environmental Sensors ', 'Functional Elect. Stimulation', 'Functional Imaging Instrument.', 'Gas Sensors Instrumentation', 'Genito-urinary Medicine', 'Holography Instrumentation', 'Impedance Sensors', 'Infrared Imaging Instrument.', 'Infrared Sensor Instrument.', 'Intelligent Instrument', 'Intensive Care', 'Micro-optics', 'Microscopy - SEM/TEM/proton', 'Microscopy - Optical', 'Probe Micros.(AFM/STM/thermal)', 'Optical Fibres', 'Optical Sensors', 'Optical Systems', 'Optics - Sol-gel', 'Physical Biosensors', 'Positron Emission Tomog. (PET)', 'Pressure Sensors', 'Process Tomography', 'Process/Manufacturing Sensors', 'Radionucleide Imaging Instrum.', 'Reactor Technology', 'Real-time Monitoring', 'Safe Handling', 'Sensor Arrays', 'Sensor Integration', 'Structural Health Monit. Sens.', 'Tomography Instrumentation', 'Ultrasound Instrumentation', 'X-ray Imaging']
  }, {
    subjectName: 'Manufacturing Machine & Plant',
    topics: ['(null)', 'Additive Manufacturing', 'Automatic Inspection', 'Computer Aided Modelling', 'Electronics Assembly', 'Electronics Manufacturing', 'Environmental Factors (Man.)', 'Finishing Processes', 'Fixturing', 'Flexible Machines', 'Food Packaging', 'Glass Manufacturing', 'Grinding Processes', 'High Speed Machining', 'Human-Robot Co-operation', 'Inspection of Plant Machinery', 'Intelligent Machines', 'Kinematics', 'Laser Manufacturing Methods', 'Leather Processing ', 'Lubrication of Machinery', 'Machine Simulation & Modelling', 'Machine Texturing Processes', 'Machine Vision', 'Machining', 'Manufactiring Machine Control', 'Manufacturing Assembly Process', 'Manufacturing Machine Control', 'Manufacturing Machine Design', 'Manufacturing Processes', 'Metal Cutting', 'Metal Forming', 'Metrology (Manufacturing)', 'Nanomanufacturing', 'Packaging Machinery', 'Paper Manufacturing', 'Plastics Manufacturing', 'Powder Jet Machining', 'Printing Techniques', 'Product Handling/Assembly', 'Production Process Technology', 'Rapid Prototyping', 'Reconfigurable Tooling', 'Recycling Machinery/Plant', 'Robotic Assembly', 'Surface Coating', 'Textile Machinery', 'Tooling for Machinery', 'Ultrasonics in Manufacturing', 'Water Jet Machining']
  }, {
    subjectName: 'Heat & Mass Transfer',
    topics: ['(null)', 'Boiling Fluids', 'Conduction', 'Distillation', 'Geothermal Energy', 'Ground Heat Pumps', 'Heat Diffusion', 'Heat Exchangers', 'Heat from Foundations', 'Heat Pipes', 'Heat Transfer & Thermodynamics', 'Heat Transfer & Bubbles', 'Heat Transfer & Droplets', 'Heat Transfer in Boilers', 'Heat Transfer in Bubbly Flows', 'Heat Transfer in Fixed Beds', 'Heat Transf. in Fluidised Beds', 'Heat Transfer in Pyrolysis', 'Heat Transfer through Foams', 'Heat/mass transfer kinetics', 'Mass Diffusion', 'Mass Transfer', 'Mass Transfer & Thermodynamics', 'Mass Transfer & Bubbles', 'Mass Transfer & Droplets', 'Mass Transfer in Bubbly Flows', 'Mass Transfer through Foams', 'Momentum Transfer', 'Ocean Thermal Energy', 'Ocean Thermal Gradients', 'Refrigeration', 'Single Phase Heat Transfer', 'Single Phase Mass Transfer', 'Thermal Explosions', 'Thermal Measurement Methods', 'Two Phase Heat Transfer', 'Two Phase Mass Transfer']
  }, {
    subjectName: 'Oil & Gas Extraction',
    topics: ['(null)', 'Downhole Technology/Processes', 'Drilling for Oil/Gas', 'Dynamic Positioning', 'Enhanced Oil Recovery', 'Environmental Technology', 'Flowlines & Umbilicals', 'Handling Fluid/Solid Products', 'Hydrodynamics of Oil or Gas', 'Mooring Floating Installations', 'Offshore Construction', 'Offshore Decommissioning', 'Offshore Installations:Design ', 'Offshore Processing', 'Offshore Safety', 'Oil/Gas Reservoir Management', 'Pipelines', 'Pressure (Oil/Gas)', 'Rock Engineering', 'Rock Permeability', 'Scale in Oil Recovery', 'Seismic Oil Recovery', 'Thermal Oil Recovery', 'Well Exploration', 'Well Productivity & Recovery']
  }]
}, {
  areaName: 'Media',
  subjects: [{
    subjectName: 'Journalism',
    topics: ['(null)']
  }, {
    subjectName: 'Media & Communication Studies',
    topics: ['(null)', 'Media & Communication Studies', 'Social networking']
  }, {
    subjectName: 'New Media/Web-Based Studies',
    topics: ['(null)']
  }, {
    subjectName: 'Publishing',
    topics: ['(null)']
  }, {
    subjectName: 'Television HTC',
    topics: ['(null)']
  }, {
    subjectName: 'Film History T & C',
    topics: ['(null)']
  }]
}, {
  areaName: 'Medical & health interface',
  subjects: [{
    subjectName: 'Biomechanics & Rehabilitation',
    topics: ['(null)', 'Assistive Technol. for Rehab.', 'Biomech. of Soft tissue-Exper.', 'Biomechanics for Orthopaedics ', 'Biomech. of Hard Tissue- Comp.', 'Biomech. of Hard Tissue-Exper.', 'Biomech. of Soft tissue- comp.', 'Fracture of hard tissue', 'Gait Analysis', 'Human Implant Design', 'Human Joint Replacement', 'Neuromuscul. Stimul. for rehab', 'Prostheses']
  }, {
    subjectName: 'Biomedical neuroscience',
    topics: ['(null)', 'Addictions', 'ADHD', "Alzheimer's Disease", 'Animal Neurological Diseases', 'Anxiety in humans', 'Autism Spectrum Disorders', 'Behavioural Neuroscience', 'Bipolar Affective Disorder', 'Brain Injury', 'Cerebral Palsy Paralysis', 'Cerebrovascular Disease', 'CFS/ME', 'CJD', 'Clinical Neurology', 'Cognitive decline with age', 'Cognitive Develop. Disorders', 'Dementia', 'Depression in humans', 'Eating Disorders', 'Epilepsy & Seizures', "Huntingdon's Disease", 'Mental Health & Well-Being', 'Migraine/ Headache', 'Multiple Sclerosis', 'Nervous System Infections', 'Neurodevelopmental Syndromes', 'Neuromuscular Disease', "Parkinson's Disease", 'Personality Disorders', 'Prion Diseases', 'Pyschosomatics', 'Schizophrenia', 'Sleep Disorders', 'Suicide & Self-Harm']
  }, {
    subjectName: 'Biomedical sciences',
    topics: ['(null)']
  }, {
    subjectName: 'Drug Formulation & Delivery',
    topics: ['(null)', 'Creams for drug delivery', 'Drug Administration', 'Drug Delivery Devices', 'Drug Delivery Implants', 'Drug emulsions', 'Drug nanoparticles', 'Encapsulation of drugs', 'Flocculation of drugs', 'Formulation of Drugs', 'Liposomes for drugs', 'Micelles for drugs', 'Microparticles for drugs', 'Mucosal Surfaces', 'Polymer Drug Conjugates', 'Polymer Therapeutics', 'Vesicles for drugs']
  }, {
    subjectName: 'Environment & Health',
    topics: ['(null)']
  }, {
    subjectName: 'Med.Instrument.Device& Equip.',
    topics: ['(null)', 'Condition monitoring- health', 'Diagnostic devices- medical', 'Implanted medical devices', 'Medical Audiology', 'Medical Control Systems', 'medical decision support tools', 'medical instrument design', 'Medical instrument development', 'Medical Microsystems ', 'Medical sensors', 'Medical signal analysis', 'Minimally invasive surgery', 'Pain Management', 'Radiotherapy', 'rehabilitation devices', 'Surgical devices', 'Surgical training', 'Telemedicine/Telecare', 'Treatment equipment']
  }, {
    subjectName: 'Medical science & disease',
    topics: ['(null)', 'Antibiotic treatments', 'Arthritis', 'Asthma', 'Bacteriology', 'Cancer (Human disease)', 'Cell Differentiation (disease)', 'Clinical Trials', 'Cystic fibrosis', 'Dentistry', 'Dermatology', 'Diabetes', 'Drug resistance in humans', 'Gastroenterology (Medical)', 'Haematology (Human disease)', 'Immune system', 'Inflammation (Human disease)', 'Mental health (Human disease)', 'Neuroscience (Human disease)', 'Obstetrics', 'Organ systems & function', 'Paediatrics (Human disease)', 'Pathogenesis', 'Pathology', 'Physiotherapy', 'Primary care (Health)', 'Rehabilitation medicine', 'Renal medicine', 'Respiratory disease', 'Sports medicine', 'Tissue growth', 'Trauma', 'Tropical disease', 'Health - behaviours', 'Homecare', 'Hospital care', 'Life styles affecting health']
  }, {
    subjectName: 'Mental Health',
    topics: ['(null)']
  }, {
    subjectName: 'Tissue Engineering',
    topics: ['(null)', '3D reconstruction', 'Angiogenesis', 'Bio-artificial interfaces', 'Bioartificial Organs', 'Bioartificial Tissues', 'Biodegradable', 'Biomaterials - Bladder', 'Biomaterials - Cartilage', 'Biomaterials - Lung', 'Biomimetic Structures', 'Bioreactor Tissue Engingeering', 'Bioresorbable Biocompatible', 'Cell & Tissue Mechanics', 'Cell Communication', 'Cell Function (tissue eng.)', 'Cell Guidance', 'Cell-Matrix Interactions', 'Cell-surface Interactions', 'Cellular Manip. for Tissue Eng', 'Cellular systems in vitro', 'Fibrin', 'Gut', 'Haemocompatibility', 'Immunogenicity', 'Immunology & Biocompatiblity', 'Implants', 'Matrices - Tissue Engineering', 'Mechanical stimuli', 'Mesenchymal tissue', 'Neural Tissue Engineering', 'Non-invasive Stimulation', 'Organ Support', 'Regenerative Medicine', 'Retinal Degeneration', 'Scaffolds & Scaffold Design', 'Skin - Tissue Engineering', 'Stem cell engineering', 'Stress (tissues)', 'Tissue Architecture', 'Tissue engineering ', 'Tissue Engineering of Muscle', 'Tissue regeneration', 'Tissue repair', 'Tumour - Tissue Engineering', 'Ulcer - Tissue Engineering', 'Veins', 'Wound - Tissue Engineering']
  }, {
    subjectName: 'Biomaterials',
    topics: ['(null)', 'Acrylics', 'Adhesion of biomaterials', 'Adsorbents', 'Aggregation products', 'Amalgam', 'Amyloid fibrils', 'Antimicrobial Agents/Materials', 'Bio-artificial Interfaces', 'Bioceramics', 'Biocompatibility', 'Biofibrils', 'Bioglass', 'Bioinorganic compounds', 'Biomaterial Cements', 'Biomaterials', 'Biomaterials - Artery', 'Biomaterials - Breast', 'Biomaterials - Eye', 'Biomaterials - Finger', 'Biomaterials - Heart', 'Biomaterials - Hip', 'Biomaterials - Mouth', 'Biomaterials - Muscle', 'Biomaterials - Neural', 'Biomaterials - Tooth', 'Biomaterials - Vein', 'Biomimetic Materials', 'Biomonomers', 'Biopolymer Biomaterial', 'Biorecognition', 'Bioresponsive Material', 'Calcium Phosphates', 'Cell material interaction', 'Cohesion', 'Collagen', 'Colour - Biomaterials', 'Composite Biomaterials', 'Conductivity of Biomaterials', 'Corrosion of biomaterials', 'Degradable biomaterials', 'Dental Materials', 'Dressings -Biomaterial', 'Elasticity of Biomaterials', 'Fibrin - Biomaterials', 'Gels - Biomaterial', 'Glass Ionomers', 'Gut Biomaterials', 'Haemocompatibility of Biomat.', 'Hard Tissue Replacement', 'Heart Valve biomaterials', 'Heart Valve Replacement', 'Hydrogels', 'Hydroxyapatite', 'Interface Mechanics', 'Membranes - Biomaterials', 'Metal Alloys', 'Metal Matrix Composites BioMa', 'Microleakage', 'Modified Biomaterial Surfaces', 'Non-degradable Biomaterial', 'Polymer Matrix Bimat. Compos.', 'Polymerisation Shrinkage', 'Polymers (Biomaterials)', 'Polyurethanes (Biomaterials)', 'Soft Tissue Replacement', 'Solubility - Biomaterial', 'Sorbents -Biomaterial', 'Surface Roughness/Friction', 'Thermal Expansion', 'Vascular Grafts', 'Viscoelasticity', 'Wear of Biomaterials']
  }, {
    subjectName: 'Environment & Health',
    topics: ['Air pollution', 'Air quality', 'Allergens', 'Atmospheric aerosols', 'Bioaerosols', 'Brominated hydrocarbons', 'Dissolved organics', 'Dose exposure relations', 'Drinking water', 'Environmental nanoscience', 'Free radicals', 'Geological disposal', 'Halogens', 'Algal blooms', 'Health policy', 'Heavy metals', 'Histopathology', 'Human pathogens', 'Infectious disease', 'Labile organics', 'Nanoparticles', 'Organic phosphorus', 'Oxidative stress', 'Ozone production', 'Parasitism', 'Particulates', 'Pathogenic microbes', 'Pharmaceuticals', 'Polycyclic aromatic hydrocarbons', 'Risk assessment', 'Sewage treatment', 'Toxicity', 'Urban areas', 'Volatile organics']
  }]
}, {
  areaName: 'Microbial sciences',
  subjects: [{
    subjectName: 'Extremophiles',
    topics: ['(null)', 'Hyperthermophiles', 'Extremophiles', 'Psychrophiles', 'Alkaliphiles', 'Biocatalysis', 'Thermophiles', 'Acidophiles', 'Barophiles', 'Halophiles', 'Endoliths']
  }, {
    subjectName: 'Microbiology',
    topics: ['(null)', 'Unculturable microorganisms ', 'Fungal pathogenesis', 'Microbial virulence', 'Spoilage organisms', 'Animal pathogens', 'Human pathogens', 'Plant pathogens', 'Antibacterials', 'Antimicrobials', 'Bacteriophage', 'Gram negative', 'Gram positive', 'Soil microbes', 'Bacteriology', 'Microbiology', 'Antifungals', 'Microalgae', 'Endotoxin', 'Exotoxin', 'Mycology', 'Virology', 'Toxin']
  }, {
    subjectName: 'Microorganisms',
    topics: ['(null)', 'Escherichia Coli (E. coli)', 'Schizosaccharomycetes', 'Mycorrhizal fungi', 'Orthomyxoviridae', 'Papillomaviridae', 'Paramyxoviridae', 'Pichia pastoris', 'Hepadnaviridae', 'Microorganisms', 'Picornaviridae', 'Polyomaviridae', 'Staphylococcus', 'Campylobacter', 'Coronaviridae', 'Cyanobacteria', 'Herpesviridae', 'Mycobacteria ', 'Plant viruses', 'Rhabdoviridae', 'Saccharomyces', 'Streptococcus', 'Adenoviridae', 'Agrobacteria', 'Arboviridae ', 'Arenaviridae', 'Astroviridae', 'Bunyaviridae', 'Burkholderia', 'Calicivirdae', 'Enterococcus', 'Flaviviridae', 'Iridoviridae', 'Myxobacteria', 'Parvoviridae', 'Retroviridae', 'Slime moulds', 'Spirochaetes', 'Streptomyces', 'Aspergillus', 'Baculovirus', 'Filoviridae', 'Methanogens', 'Mycoplasmas', 'Pseudomonas', 'Rhodococcus', 'Togaviridae', 'Clostridia', 'Deltavirus', 'Poxviridae', 'Reoviridae', 'Salmonella', 'Saprotroph', 'Oomycetes', 'Wolbachia', 'Agaricus', 'Bacillus', 'Coprinus', 'Listeria', 'Plankton', 'Protozoa', 'Rhizobia', 'Yersinia', 'Candida', 'Erwinia', 'Lichens', 'Yeasts', 'Algae', 'Fungi', 'DNA']
  }, {
    subjectName: 'Responses to environment',
    topics: ['(null)', 'Nutrient deficiency - microbes', 'Reactive oxygen species (ROS)', 'Stress responses in microbes', 'Abiotic stress (microbes)', 'Responses to environment', 'Reactive radical species', 'Environmental niche', 'UV radiation', 'Temperature', 'Osmolarity', 'Radiation', 'UV damage', 'Pressure', 'Light', 'pH']
  }, {
    subjectName: 'Biochemistry & physiology',
    topics: ['(null)', 'Differentiation (microbial)', 'Biochemistry & physiology', 'Microbial photosynthesis', 'Microbial metabolism ', 'Microbial metabolites', 'Microbial substrates', 'Bacterial cell wall', 'Bacterial movement', 'Energy metabolism', 'Transport systems', 'Bacterial growth', 'Fungal cell wall', 'Gene expression', 'Quorum sensing ', 'Fungal growth', 'Fermentation', 'Sporulation', 'Enzymology', 'Biofilm']
  }, {
    subjectName: 'Environmental Microbiology',
    topics: ['(null)', 'Ammonia oxidising bacteria', 'Antibiotic resistance', 'Biofilms', 'Carbon cycling', 'Carbon sequestration', 'Chemosynthesis', 'Decomposer fungi', 'Deep biosphere', 'Dimethyl sulphide chemistry', 'DNA sequencing', 'Forest and woodland', 'Gene expression', 'Genome sequencing', 'Geological disposal', 'Grasslands', 'Health risk', 'Hydrothermal vents', 'Methane chemistry', 'Methylation', 'Microbial biodiversity', 'Microbial communities', 'Mycorrhizae', 'Nitrogen fixation', 'Nutrient cycling', 'Pathogenic bacteria', 'Pathogenic fungi', 'Phytoplankton', 'Primary production', 'Responses to acidification', 'Sea ice communities', 'Soil organic matter', 'Surface microlayers', 'Trace gas uptake and emission', 'Trophic structures', 'Waste', 'Water quality', 'Wetlands']
  }]
}, {
  areaName: 'Music',
  subjects: [{
    subjectName: 'Classical Music',
    topics: ['(null)']
  }, {
    subjectName: 'Composition',
    topics: ['(null)']
  }, {
    subjectName: 'History Of Music',
    topics: ['(null)']
  }, {
    subjectName: 'Music & Society',
    topics: ['(null)']
  }, {
    subjectName: 'Musical Performance',
    topics: ['(null)']
  }, {
    subjectName: 'Musicology',
    topics: ['(null)']
  }, {
    subjectName: 'Popular Music',
    topics: ['(null)']
  }, {
    subjectName: 'Traditional Music',
    topics: ['(null)']
  }, {
    subjectName: 'Music & Acoustic Technology',
    topics: ['(null)', 'Acoustic Modelling', 'Music & Acoustic User Interfa.', 'Sound Synthesis']
  }]
}, {
  areaName: 'Nuclear physics',
  subjects: [{
    subjectName: 'Hadron Physics',
    topics: ['(null)']
  }, {
    subjectName: 'Nuclear Astrophysics',
    topics: ['(null)']
  }, {
    subjectName: 'Nuclear Structure',
    topics: ['(null)']
  }, {
    subjectName: 'Relativistic Heavy Ions',
    topics: ['(null)']
  }]
}, {
  areaName: 'Omic sciences & technologies',
  subjects: [{
    subjectName: 'Environmental Genomics',
    topics: ['(null)']
  }, {
    subjectName: 'Functional genomics',
    topics: ['(null)', 'PTGS', 'SNP', 'Site directed mutagenesis', 'Genetic manipulation', 'Functional genomics', 'Inducible knock-out', 'Positional cloning', 'Sequence databases', 'Gene manipulation', 'Gene disruption', 'Gene shuffling', 'Gene targeting', 'Regulatory RNA', 'Gene trapping', 'Phage display', 'Mutagenesis', 'Knockdowns', 'Knockouts']
  }, {
    subjectName: 'Genomics',
    topics: ['(null)', 'BACs', 'YACs', 'ESTs', 'Single molecule sequencing', 'Genetic mapping/ markers', 'Sequencing technologies', 'Comparative genomics', 'Mutation detection', 'Genome sequencing', 'Nutrigenomics', 'Metagenomics', 'Genome maps', 'Genotyping', 'Sequencing', 'Genomics', '(null)', 'Carbohydrate-protein interact.', 'Glycan profiling', 'Oligosaccharides', 'Glyco-gene chip', 'Glycochemistry', 'Glycoproteins', 'Glyco arrays', 'Glycomics']
  }, {
    subjectName: 'Metabolomics / Metabonomics',
    topics: ['(null)']
  }, {
    subjectName: 'Proteomics',
    topics: ['(null)', 'Sub-cell. organelle proteomics', 'Post-translat. modification', 'Arrays (Proteins Antibodies)', 'Protein function prediction', 'Protein sequence analysis', 'Low copy number proteins', 'Proteomic data standards', '2D Gel electrophoresis', 'Interaction proteomics', 'Protein identification', 'Protein quantification', 'Structural proteomics', 'Chemical proteomics', 'Proteomic databases', 'Protein separation', 'Alkaline proteins', 'Membrane proteins', 'Gene regulation', 'Proteomics']
  }, {
    subjectName: 'Transcriptomics',
    topics: ['(null)', 'Post-transcript. modification', 'Transcriptomics Data Standards', 'Transcriptional regulation', 'Transcriptomics Databases', 'Microarray technologies', 'Quantitative PCR (qPCR)', 'Transcription factors', 'Model plant genetics', 'Transcript profiling', 'Protein regulation ', 'Gene expression', 'Transcriptomics', 'non-coding RNA', 'Splicing', 'mRNA', 'RNAi']
  }, {
    subjectName: 'Metabolomics / Metabonomics',
    topics: ['Comparative metabolomics', 'Drug metabolism', 'Global metabolome', 'Lipid metabolism', 'Metabolic fingerprinting', 'Metabolic networks', 'Metabolomic/metabonomic data standards', 'Metabolomics / Metabonomics', 'Metabolic profiling']
  }, {
    subjectName: 'Environmental Genomics',
    topics: ['Adaptive evolution', 'Bacteria', 'Bacterial genomics', 'Dimethyl sulphide', 'DNA sequencing', 'Endocrine chemistry', 'Environmental conditioning', 'Gene expression', 'Gene flow', 'Gene regulation', 'Genetic diversity', 'Genetic evolution', 'Genome sequencing', 'Hybrid speciation', 'Immune responses', 'Mate competition', 'Microbial communities', 'Molecular biology', 'Natural selection', 'Parasitism', 'Parental effects', 'Phenotypic plasticity', 'Polymorphism', 'Population dynamics', 'Population structure', 'Sex determination', 'Sexual selection', 'Species divergence', 'Sperm competition', 'Sympatric speciation', 'Trait locus analysis']
  }]
}, {
  areaName: 'Optics photonics & lasers',
  subjects: [{
    subjectName: 'Biophysics',
    topics: ['(null)', 'Actin myosin muscle', 'Biofilm physics', 'Biomolecule manipulation', 'Biophysical kinetics', 'Cellular adhesion', 'Cellular morphogenesis', 'Cellular networks', 'Cellular organelles', 'Confocal microscopy', 'DNA topology', 'Elastin', 'Extracellular Matrix Biophys.', 'Fibril biophysics', 'Fluores. lifetime imaging FLIM', 'Fluorescence Spectroscopy', 'Fluorophores', 'FRET', 'Ion Channels & Transporters', 'Lipid Bilayers', 'Macromolecular dynamics', 'Macromolecular hydrodynamics', 'Mechanical properties of cells', 'Membrane biophysics', 'Microtubule Physics', 'Molecular Biophysical Forces', 'Motor Proteins', 'Multicellular Dynamics', 'Nucleic acid biophysics', 'Optical Tweezers', 'Physics of Biophotonics', 'Physics of Biopolymers', 'Physics of Cell motility', 'Physics of Collagen', 'Protein biophysics', 'Protein-DNA interactions', 'Protein-membrane interactions', 'Single molecule imaging', 'Single molecule spectroscopy', 'Time-resolved biophysics', 'Total internal reflection', 'Two-photon processes']
  }, {
    subjectName: 'Lasers & Optics',
    topics: ['(null)', 'High Harmonic Generation', 'Laser Gratings', 'Laser Sensors', 'Lasers - Adaptive Optics', 'Lasers - Biomedical Optics', 'Lasers - Coherence', 'Lasers - Diffractive', 'Lasers - Diode', 'Lasers - High Power', 'Lasers - Laser Speckle', 'Lasers - Nonlinear Optics', 'Lasers - Ultrafast', 'Lasers - Upconversion', 'Lasers - X-ray', 'Light Scattering & Propagation', 'Optics - Biomedical', 'Optics - Biomolecular imaging', 'Optics - Diffractive', 'Optics - Imaging', 'Optics - Interferometry', 'Optics - Light Scattering', 'Optics - Sensors', 'Optics - X-ray', 'Photonic Band Structure', 'Soliton physics']
  }, {
    subjectName: 'Optical Phenomena',
    topics: ['(null)', 'EIT - Slow Light', 'Holography', 'Light Scattering', 'Optical Gratings', 'Optical Pattern Formation', 'Optics - Coherent', 'Optics - Nonlinear', 'Photorefraction', 'Second Harmonic Generation']
  }, {
    subjectName: 'Quantum Optics & Information',
    topics: ['(null)', 'Atomic Physics - Quantum Logic', 'Cavity Quantum Electrodynamics', 'Optics - Quantum', 'Photonic Band Gaps', 'Quantum Algorithms', 'Quantum Error Correction', 'Quantum Information Processing', 'Quantum Metrology', 'Quantum State Characterisation']
  }, {
    subjectName: 'Optical Devices & Subsystems',
    topics: ['(null)', 'Acoustic/Ultrasonic Sensors ', 'Amplifiers (not semiconductor)', 'Device Design', 'Environmental Biosensors', 'Fibre Gratings', 'Fibre-optic Sensors', 'Gratings (Optics)', 'Gravity Sensors', 'Heat Sensors', 'Lasers - Crystal Waveguide', 'Lasers - Development', 'Lasers - Femtosecond', 'Lasers - Fibre', 'Lasers - Quantum Cascade', 'Lasers - Solid-state', 'Lithium Niobate', 'Medical - Phys.& Chem. Sensing', 'Micro-optical Devices', 'Modulators - Acousto-optic', 'Neural Networks (Power)', 'Nonlinear Devices', 'Optical Biosensors', 'Optical Chemical Sensors', 'Optical Computing', 'Optical Data Storage', 'Optical Diagnostics/Analysis', 'Optical Fibres (Devices)', 'Optical Gas Sensing', 'Optical Parametric Oscillators', 'Optical Switches', 'Photonic Crystals', 'Planar Amplifiers', 'Planar Integration', 'Plasmonics', 'Semiconductor Amplifiers', 'Silica on Silicon', 'Spatial Light Modulators', 'Waveguides (Optical)']
  }, {
    subjectName: 'Optoelect. Devices & Circuits',
    topics: ['(null)', 'Electro-absorption Modulators', 'Gain Switched Laser', 'III-V Nitrides (Optoelect.)', 'III-V Optoelectronic Circuits', 'III-V Semicond. (Optoelect.)', 'Infrared Detectors', 'Laser diodes (Optoelectronic)', 'LEDs', 'Mode-locked Laser Diodes', 'Multiple Quantum Well', 'Optoelect. Detect. & Receivers', 'Optoelect. Integrated Circuits', 'Photodetectors', 'Photodiode', 'Photonic Integration', 'Photonic/Electron. Integration', 'Phototransistors', 'Pulsed Operation/Systems', 'Pump Lasers', 'Receivers/Mixers', 'Semiconductor Laser Amplifiers', 'Semiconductor Lasers', 'Solar Cells (Photovoltaics)', 'Terahertz', 'Ultra-violet (UV) devices']
  }]
}, {
  areaName: 'Particle astrophysics',
  subjects: [{
    subjectName: 'Cosmic Microwave Background',
    topics: ['(null)']
  }, {
    subjectName: 'Cosmology',
    topics: ['(null)']
  }, {
    subjectName: 'Direct Dark Matter Detection',
    topics: ['(null)']
  }, {
    subjectName: 'Gamma Ray Astronomy',
    topics: ['(null)']
  }, {
    subjectName: 'Gravitational Waves',
    topics: ['(null)']
  }, {
    subjectName: 'High Energy Cosmic Rays',
    topics: ['(null)']
  }]
}, {
  areaName: 'Particle physics - experiment',
  subjects: [{
    subjectName: 'B Physics/Flavour Physics',
    topics: ['(null)']
  }, {
    subjectName: 'Beyond The Standard Model',
    topics: ['(null)']
  }, {
    subjectName: 'Dark Energy',
    topics: ['(null)']
  }, {
    subjectName: 'Neutrino Physics',
    topics: ['(null)']
  }, {
    subjectName: 'Accelerator R&D',
    topics: ['(null)']
  }]
}, {
  areaName: 'Particle physics - theory',
  subjects: [{
    subjectName: 'Lattice QCD',
    topics: ['(null)']
  }, {
    subjectName: 'Phenomenology',
    topics: ['(null)']
  }, {
    subjectName: 'Quantum Field Theory',
    topics: ['(null)']
  }, {
    subjectName: 'String Theory',
    topics: ['(null)']
  }, {
    subjectName: 'The Standard Model',
    topics: ['(null)']
  }, {
    subjectName: 'Mathematical Physics',
    topics: ['(null)', 'AdS/CFT Correspondence', 'Anti de Sitter (AdS)', 'Black Holes', 'Branes', 'Chaos Theory', 'Conformal Field Theory (CFT)', 'Decoherence', 'Einstein', 'Gauge Theory & Fields', 'Gravitational Fields', 'Instantons', 'Integrable Systems', 'Kac-Moody', 'Lie Derivative', 'Monopoles', 'M-Theory', 'Quantum Chaos', 'Quantum Chromodynamics (QCD)', 'Quantum Gravity', 'Relativity', 'Schrodinger', 'Seiberg-Witten Equation', 'Skyrmions', 'Spinor', 'Stochastic Calculus', 'Supergravity', 'Superstrings', 'Supersymmetry', 'Toda Theory', 'Topolgical Manifold', 'Topological QFT', 'Topological Solitons', 'Twistors & Space Time', 'W-Algebras', 'Wave-Particle Duality', 'Yang-Mills Theory']
  }]
}, {
  areaName: 'Philosophy',
  subjects: [{
    subjectName: 'Aesthetics',
    topics: ['(null)']
  }, {
    subjectName: 'Epistemology',
    topics: ['(null)']
  }, {
    subjectName: 'Ethics',
    topics: ['(null)']
  }, {
    subjectName: 'History Of Ideas',
    topics: ['(null)']
  }, {
    subjectName: 'History Of Philosophy',
    topics: ['(null)']
  }, {
    subjectName: 'Language & Philosophical Logic',
    topics: ['(null)']
  }, {
    subjectName: 'Metaphysics',
    topics: ['(null)']
  }, {
    subjectName: 'Philosophy Of Mind ',
    topics: ['(null)']
  }, {
    subjectName: 'Philosophy Of Religion',
    topics: ['(null)']
  }, {
    subjectName: 'Science & Maths & Math Logic',
    topics: ['(null)']
  }, {
    subjectName: 'Political Philosophy',
    topics: ['(null)']
  }]
}, {
  areaName: 'Planetary science',
  subjects: [{
    subjectName: 'Exploration Technology',
    topics: ['(null)']
  }, {
    subjectName: 'Extra Solar Planets',
    topics: ['(null)']
  }, {
    subjectName: 'Non-Terrestrial Planetary Sci.',
    topics: ['(null)']
  }, {
    subjectName: 'Planetary Atmospheres ',
    topics: ['(null)']
  }, {
    subjectName: 'Planetary Surfaces & Geology',
    topics: ['(null)']
  }, {
    subjectName: 'Solar Bodies',
    topics: ['(null)']
  }, {
    subjectName: 'Planetary Surfaces & Geology',
    topics: ['Core iron', 'Core processes', 'Core turbulence', 'Crustal rocks', 'Earth history', 'Experimental petrology', 'Extreme pressures', 'Extreme temperatures', 'Geochemistry', 'Geodynamo', 'Geological history', 'Geophysics', 'Lava flows', 'Magmatism', 'Mantle composition', 'Mantle convection', 'Mantle dynamics', 'Meteorites', 'Noble gases', 'Palaeomagnetism', 'Plate tectonics', 'Radiogenic isotopes', 'Seismic tomography', 'Siderophile elements', 'Stable isotopes', 'Subduction', 'Volcanism', 'Weathering']
  }]
}, {
  areaName: 'Plant & crop science',
  subjects: [{
    subjectName: 'Environmental Physiology',
    topics: ['(null)']
  }, {
    subjectName: 'Interaction with organisms',
    topics: ['(null)', 'Host pathogen interact.-plants', 'Plant invertebrate interact.', 'Pathogenesis (plant diseases)', 'Plant vertebrate interactions', 'Plant bacterial interactions', 'Plant-herbivore interactions', 'Bacterial diseases (plants)', 'Disease resistance (plants)', 'Interaction with organisms', 'Plant microbe interactions', 'Plant insect interactions', 'Fungal diseases (plants)', 'Plant fungi interactions', 'Plant defence responses', 'Viral diseases (plants)', 'Plant pathology', 'Saprophytism', 'Parasitism', 'Symbionts', 'Grazing']
  }, {
    subjectName: 'Plant cell biology',
    topics: ['(null)', 'Plant cell biology']
  }, {
    subjectName: 'Plant developmental biology',
    topics: ['(null)', 'Comparative development', 'Transcription factors', 'Reprogramming', 'Protein degradation (plants)', 'Coordinated gene expression', 'Plant developmental biology', 'Circadian rhythm (plants)', 'Differentiation in plants', 'Intercellular signalling', 'Reproduction in plants', 'Meristem development', 'Self-incompatibility', 'Signalling pathways', 'Transport processes', 'Photomorphogenesis', 'Fruit development', 'Root development ', 'Shoot development', 'Seed development', 'Leaf morphology', 'Gene networks', 'Gibberellins', 'Gravitropism', 'Polymorphism', 'Germination', 'Flowering ', 'Imprinting', 'Morphology', 'Plasticity', 'Chromatin', 'Pollen', 'Auxin']
  }, {
    subjectName: 'Plant organisms',
    topics: ['(null)', 'Carnivorous plants', 'Flowering plants', 'Parasitic plants', 'Plant organisms', 'Aquatic plants', 'Elephant grass', 'Non-food crops', 'Forage crops', 'Model plants', 'Switch grass', 'Antirrhinum', 'Arabidopsis', 'Fibre crops', 'Fruit crops', 'Miscanthus', 'Vegetables', 'Brassicas', 'Sugarbeet', 'Coconuts', 'Oilseeds', 'Plantain', 'Potatoes', 'Tomatoes', 'Bananas', 'Cassava', 'Cereals', 'Grasses', 'Legumes', 'Sorghum', 'Tobacco', 'Apples', 'Barley', 'Coffee', 'Cowpea', 'Millet', 'Mosses', 'Poplar', 'Pulses', 'Willow', 'Algae', 'Lotus', 'Maize', 'Trees', 'Weeds', 'Wheat', 'Kale', 'Rice', 'Oat']
  }, {
    subjectName: 'Plant physiology',
    topics: ['(null)', 'Resource partitioning', 'Carbon/nitrogen assimilation ', 'Amino acid biosynthesis ', 'Secondary metabolism (plants)', 'Protein degradation (plants)', 'Nitrogen fixation in plants', 'Circadian rhythm (plants)', 'Differentiation in plants', 'Photosynthesis in plants', 'Ion & water transport', 'Respiration (plants)', 'Cell walls (plants)', 'Transport processes', 'Photomorphogenesis', 'Plastid biogenesis', 'Carbon allocation', 'Fruit physiology', 'Plant physiology', 'Plant senescence', 'Lignification', 'Gravitropism', 'Phototropism', 'Germination', 'Guard cells', 'Abscission', 'Morphology', 'Flowering', 'Dormancy', 'Meristem', 'Leaves', 'Pollen', 'Shoots', 'Roots', 'Seeds']
  }, {
    subjectName: 'Plant reproductive biology',
    topics: ['(null)', 'Plant reproductive biology', 'Seeds (plant reproduction)', 'Self incompatibility (SI)', 'Fruit development', 'Pollen tube', 'Pollination', 'Dehiscence', 'Pollen']
  }, {
    subjectName: 'Plant responses to environment',
    topics: ['(null)', 'Plant responses to environment', 'Environment/plant interaction', 'Nutrient deficiency in plants', 'Stress responses in plants', 'Abiotic stress (plants)', 'Heavy metal stress', 'Nutrient sensing', 'Oxidative stress', 'Stress tolerance', 'Dehydration ', 'Water stress', 'Cold stress', 'Heat stress', 'Salt stress', 'Abscission', 'Drought']
  }, {
    subjectName: 'Environmental Physiology',
    topics: ['Biofilms', 'Environmental stress', 'Fish', 'Food chains', 'Forest ecosystems', 'Fossil analysis', 'Freshwater ecosystems', 'Genetic variation', 'Insect physiology', 'Invertebrate physiology', 'Life history', 'Marine ecosystems', 'Metabolism', 'Microbial communities', 'Mycorrhizae', 'Nanomaterials', 'Nutrient limitation', 'Oxygen speciation', 'Phenology', 'Phenotypic plasticity', 'Photosynthesis', 'Plant physiology', 'Polychlorinated biphenyls', 'Predictive models', 'Primary productivity', 'Respiration', 'Responses to acidification', 'Sex determination', 'Soils', 'Stable isotope analysis', 'Trait locus quantification']
  }]
}, {
  areaName: 'Plasma physics',
  subjects: [{
    subjectName: 'Fusion',
    topics: ['(null)', 'Fusion - Computational', 'Fusion - Engineering', 'Fusion - Experimental', 'Fusion - Instrumentation', 'Fusion - Materials', 'Fusion - Modelling/Simulation', 'Fusion - Theoretical', 'Fusion - Waste Generation', 'Magnetic Confinement Fusion', 'Neutron Damage of Materials', 'Nuclear Reactions in Blankets', 'Nuclear Reactions in Materials', 'Plasma - Diagnostics', 'Plasma - Magneto-hydrodynamics', 'Plasma/Beam Interactions', 'Plasma/Materials Interaction', 'Plasma/Microwave Interactions', 'Turbulence in Fusion Plasmas']
  }, {
    subjectName: 'Plasmas - Laser & Fusion',
    topics: ['(null)', 'Fusion Plasma - Masers', 'High Power Laser Ablation', 'High Power Laser Plasmas', 'Inertial Confinement Fusion', 'Magnetically Confined Plasmas', 'Magnetohydrodynamics', 'Plasma-based Accelerators', 'Z-pinches']
  }, {
    subjectName: 'Plasmas - Technological',
    topics: ['(null)', 'High Temp. Technolog. Plasmas', 'Low Temp. Technolog. Plasmas', 'Plasma - Masers', 'Technolog. Plasma Diagnostics', 'Technolog. Plasma Discharges', 'Technolog. Plasma Interactions', 'Technological Plasma Standards']
  }]
}, {
  areaName: 'Pol. sci. & internat. studies',
  subjects: [{
    subjectName: 'Diplomacy & Internat Relations',
    topics: ['(null)']
  }, {
    subjectName: 'Internat. Studies & Relations',
    topics: ['(null)']
  }, {
    subjectName: 'Political Science',
    topics: ['(null)']
  }, {
    subjectName: 'Diplomacy & Internat Relations',
    topics: ['International Diplomacy', 'UK Diplomacy', 'International Organisations', 'Democracy', 'Ideology', 'Regimes', 'Post-Cold War', 'United Nations', 'War on Terror', 'Human Rights', 'Multilateral relations', 'Unilateral policy', 'Bilateral policy', 'Conflict']
  }, {
    subjectName: 'Internat. Studies & Relations',
    topics: ['International Relations', 'IR Theory', 'Nation State', 'Anarchy', 'Hegemony', 'Political Science', 'Governance', 'Political Actors', 'Religion and IR', 'NGOs', 'Aid/Development policy', 'Political Interdependence', 'Migration', 'Regionalism', 'Territory', 'Non-State Actors']
  }, {
    subjectName: 'Political Science',
    topics: ['Political Theory', 'Votingsystems', 'Elections', 'Politicians', 'Clientelism', 'Government', 'Parliament', 'Governance', 'Administration', 'Game Theory', 'Federalism', 'Integration', 'Consociational', 'Presidential', 'Democracy']
  }, {
    subjectName: 'Politics',
    topics: ['(null)', 'European Politics', 'Domestic Politics', 'International Politics', 'Devolution', 'Political Parties', 'Civil Society', 'Consociational', 'Bureaucracy', 'Communication of Politics', 'Conservative party', 'Labour party', 'Liberal Democrats party', 'Green party', 'Feminism', 'Democracy']
  }, {
    subjectName: 'International Organisations',
    topics: ['(null)', 'European Union', 'United Nations', 'Commonwealth', 'ASEAN', 'ALBA', 'The World Bank', 'IMF', 'OPEC', 'ICHR', 'G8/G20', 'TNC', 'Multilateral Organisations', 'Political Integration', 'WTO', 'CIS']
  }, {
    subjectName: 'International Relations Theory',
    topics: ['(null)', 'Globalisation', 'Political Economics', 'TNC/MNC', 'NGO', 'Democracy', 'IR and Development', 'Political Integration', 'Territory', 'NAFTA', 'Migration & IR', 'Political Regulation', 'Neo-Colonial']
  }, {
    subjectName: 'Peace Studies',
    topics: ['(null)', 'Arms Trade/Control', 'Ethnic Conflict', 'Democratic Peace Theory', 'Statebuilding', 'Peacebuilding', 'Peacekeeping', 'Post-Conflict', 'United Nations', 'Sanctions', 'Conflict', 'War Crimes', 'Refugees', 'Weapons Decommissioning', 'ICTY']
  }, {
    subjectName: 'Conflict/War Studies',
    topics: ['(null)', 'Origins of conflict', 'Intra-state conflict/civil war', 'Terrorism and counter-terrorism', 'Military Intervention', 'Peace operations', 'Genocide', 'Insurgency and COIN', 'WMD and proliferation', 'History of war & conflict', 'Deterrence', 'Defence policy', 'Alliances', 'Military affairs', 'Ethics in war & conflict', 'Technology and war']
  }, {
    subjectName: 'Security Studies',
    topics: ['(null)', 'Political Security policy', 'Security Theory', 'Strategic studies', 'Post Cold War', 'Geopolitics', 'Economic Security', 'Military Force', 'Human security', 'Terror', 'Conflict', 'Security Dilemma', 'Critical Security Studies', 'United Nations']
  }, {
    subjectName: 'Internat Political Economy',
    topics: ['(null)', 'Globalisation', 'Political Economics', 'TNC/MNC', 'NGO', 'Political Economy & LICs', 'Political Integration', 'Tariff', 'Territory', 'NAFTA', 'Migration', 'Regulation', 'Trade', 'Debt', 'Neo-Colonial']
  }, {
    subjectName: 'International Law',
    topics: ['(null)', 'WTO', 'ICHR', 'United Nations', 'International Legitimacy', 'Arms Trade/Control', 'Borders/Boundaries', 'Nation State', 'European Court of Justice', 'Trade', 'Human Rights', 'Humanitarian', 'Intervention', 'Sovereignty', 'International Norms', 'Treaty']
  }, {
    subjectName: 'Foreign Policy Studies',
    topics: ['(null)', 'Foreign Policy', 'Intervention', 'Security', 'Trade', 'Diplomacy', 'Post-Soviet', 'Post-9/11', 'Geopolitics', 'Neo-Colonial', 'Globalisation', 'Human Rights', 'Interdependence', 'Foreign Policy & Religion', 'Diaspora', 'Non-State Actors']
  }, {
    subjectName: 'Elections/Electoral studies',
    topics: ['(null)', 'Elections', 'Voters', 'Political Parties', 'Voting Systems', 'Parliamentary', 'Regionalism', 'Irredentism', 'Democracy', 'Devolution', 'Electoral Monitoring', 'Corruption/Fraud', 'Electoral Inclusion', 'Discrimination', 'Civil Society', 'Electoral Reform']
  }, {
    subjectName: 'Middle East Studies',
    topics: ['(null)', 'Israel', 'Palestine', 'Refugees', 'Oil', 'Islam', 'Judaism', 'Arab studies', 'US', 'Peace Process', 'United Nations', 'Al Qaeda', '45239', 'Christianity', 'Muslim']
  }, {
    subjectName: 'European/EU Studies',
    topics: ['(null)', 'Common Market', 'Single Currency (Euro)', 'European Integration', 'EU Member States', 'European Union', 'European Commission', 'European Parliament', 'EU Foreign and Security Policy', 'European Court of Justice', 'European Defence Agency', 'Nationalism', 'Sovereignty', 'Immigration', 'EU Treaty', 'EU Borders/Boundaries']
  }]
}, {
  areaName: 'Pollution waste & resources',
  subjects: [{
    subjectName: '(null)',
    topics: ['(null)']
  }, {
    subjectName: 'Earth Resources',
    topics: ['(null)']
  }, {
    subjectName: 'Ecotoxicology',
    topics: ['(null)']
  }, {
    subjectName: 'Pollution',
    topics: ['(null)']
  }, {
    subjectName: 'Waste Minimisation',
    topics: ['(null)', 'Construction Waste', 'Contaminated Waste Waters', 'Electrical Waste', 'Landfill Minimisation', 'Landfill Practice', 'Metal Waste', 'Plastic Waste', 'Process Waste Minimisation', 'Reuse of Waste Materials', 'Vehicle Component Waste', 'Waste Design', 'Waste Minimisation Legislation', 'Waste Packaging', 'Waste Sorting Technology', 'Waste Waters Minimisation']
  }, {
    subjectName: 'Carbon Capture & Storage',
    topics: ['(null)', 'Adsorbents for carbon capture', 'Aerogels for carbon capture', 'Algae for carbon capture', 'Ammonias for carbon capture', 'Biochar', 'Biomass & CCS', 'Carbon capture', 'Carbon capture from free air', 'Carbon dioxide pipelines', 'Carbon storage', 'CCS power station integration', 'CCS retrofit', 'CCS Storage capacity analysis', 'CCS whole systems', 'Chemical looping for CCS', 'CO2 transport systems', 'Enzymes for carbon capture', 'Hydrogen & carbon capture', 'Impurities in carbon dioxide', 'Injection sites for CO2', 'Membranes for carbon capture', 'Mineralisation -carbon capture', 'Monitoring of CO2 storage', 'Nanotechnology & CCS', 'Oxyfuel combustion', 'Post combustion capture', 'Pre combustion capture', 'Public acceptability of CCS', 'Reservoir modelling for CCS', 'Saline aquifers & CCS', 'Syngas & carbon capture']
  }, {
    subjectName: 'Assess/Remediate Contamination',
    topics: ['(null)', 'Bioremediation of soils', 'Boundary Layers', 'Chemical Oxidation', 'Climatic Effects', 'Contaminated clay', 'Contaminated Land ', 'Contaminated Landfill Design', 'Contaminated Landfill Practice', 'Contaminated Sites', 'Contaminated Soil', 'Contamination Risk Assessment', 'Geotech Materials Durability ', 'Ground Characteristics', 'Land Assessment', 'Land Drainage', 'Land Remediation', 'Leachate', 'Legislation Contamination', 'Membrane Technol. for Remed.', 'Mining Subsidence Impact', 'Pollution Life-cycle Analysis ', 'Pollution Management', 'Unsaturated Soil']
  }, {
    subjectName: 'Ecotoxicology',
    topics: ['Aquatic organisms', 'Bioavailability', 'Biomonitoring', 'Cell culture systems', 'Developmental effects', 'Direct toxicity assessment', 'Discharge regulation', 'Endocrine disruption', 'Environmental pollutants', 'Environmental risk assessment', 'Fish', 'Genetic plasticity', 'Genotoxicity', 'Heavy metals', 'Human health', 'Immunotoxicity', 'Low dose effects', 'Microbial communities', 'Nanomaterials', 'Neurotoxicity', 'Oestrogens', 'Omics', 'Persistent organic compounds', 'Pharmaceuticals and personal care products', 'Polychlorinated biphenyls', 'Polycyclic aromatic hydrocarbons', 'Reproductive effects', 'Sewage effluent', 'Soil ecotoxicology', 'Soil pollution', 'Toxicity testing', 'Wastewater treatment', 'Water quality']
  }, {
    subjectName: 'Pollution',
    topics: ['Air pollution', 'Biodegradation', 'Bioremediation', 'Chemical mobilisation', 'Chemical speciation', 'Diffuse pollution', 'Ecotoxicity', 'Ferruginous discharge', 'Gas emissions', 'Groundwater pollution', 'Landfill', 'Metals', 'Methane emission', 'Nitrates', 'Persistent organic pollutants', 'Pesticides', 'Pollutant budgets', 'Pollutant pathways', 'Pollutant transport', 'Soil pollution', 'Toxic waste', 'Urban emissions', 'Waste disposal', 'Water pollution']
  }]
}, {
  areaName: 'Process engineering',
  subjects: [{
    subjectName: 'Bioprocess Engineering',
    topics: ['(null)', 'Bio-catalysis (Bioprocess)', 'Biofouling (Bioprocess)', 'Bioprocess Control', 'Bioprocessing', 'Bioseparation', 'Directed Evolution', 'Downstream Processing', 'Expression Hosts', 'Formulation', 'Genomics (Bioprocess)', 'High Throughput Techniques', 'Kinetic Models', 'Metabolic Engineering', 'Metabolomics', 'Non-Linear Modelling', 'Proteomics', 'Purification', 'Reactor Design', 'Shear Characteristics of Cells', 'Statistical Modelling', 'Stoichiometric Models', 'Transcriptomics']
  }, {
    subjectName: 'Complex fluids & soft solids',
    topics: ['(null)', 'Aggregation', 'Biomimetic Complex Fluids', 'Cellulose Chemistry', 'Clays', 'Colloid Dispersions', 'Complex Fluids', 'Compressibility', 'Creams', 'Crystallisation', 'Drilling Fluids', 'Droplet Formation', 'Emulsions', 'Fluid Morphology', 'Foams', 'Injection Moulding', 'Interparticle Forces (Fluids)', 'Latex', 'Liquefaction', 'Liquid Crystalline Polymers', 'Liquid Crystals', 'Liquid-Liquid Systems', 'Lyotropes', 'Microemulsion', 'Microporous Structures', 'Organogels', 'Paints', 'Pastes', 'Phase Transformations', 'Porosimetry', 'Process Analysis', 'Processing of Complex Fluids', 'Rheopectic Fluids', 'Shear Thinning Fluids', 'Surfactants', 'Thixotropy']
  }, {
    subjectName: 'Design of Process systems',
    topics: ['(null)', 'Design of process systems', 'Process Systems Analysis', 'Process Systems Control', 'Process Systems Diagnostics', 'Process Systems Engineering', 'Process Systems Modelling', 'Process Systems Optimisation', 'Process Systems Technology']
  }, {
    subjectName: 'Fluid Dynamics',
    topics: ['(null)', 'Baffles', 'Channel Formation', 'Diffusion of Fluids', 'Flow', 'Flow Simulation', 'Flow Visualisation', 'Fluid Dispersions', 'Fluid Dynam. of Annular Flow ', 'Hydrodynamics', 'Image Processing: Flow', 'Magneto Fluid Dynamics', 'Mixing', 'Process Analysis: Flow', 'Process Control: Flow', 'Stirred Tanks', 'Stopped Flow', 'Turbulent Flows']
  }, {
    subjectName: 'Heat & Mass Transfer',
    topics: ['(null)', 'Boiling Fluids', 'Conduction', 'Distillation', 'Geothermal Energy', 'Ground Heat Pumps', 'Heat Diffusion', 'Heat Exchangers', 'Heat from Foundations', 'Heat Pipes', 'Heat Transfer & Thermodynamics', 'Heat Transfer & Bubbles', 'Heat Transfer & Droplets', 'Heat Transfer in Boilers', 'Heat Transfer in Bubbly Flows', 'Heat Transfer in Fixed Beds', 'Heat Transf. in Fluidised Beds', 'Heat Transfer in Pyrolysis', 'Heat Transfer through Foams', 'Heat/mass transfer kinetics', 'Mass Diffusion', 'Mass Transfer', 'Mass Transfer & Thermodynamics', 'Mass Transfer & Bubbles', 'Mass Transfer & Droplets', 'Mass Transfer in Bubbly Flows', 'Mass Transfer through Foams', 'Momentum Transfer', 'Ocean Thermal Energy', 'Ocean Thermal Gradients', 'Refrigeration', 'Single Phase Heat Transfer', 'Single Phase Mass Transfer', 'Thermal Explosions', 'Thermal Measurement Methods', 'Two Phase Heat Transfer', 'Two Phase Mass Transfer']
  }, {
    subjectName: 'Multiphase Flow',
    topics: ['(null)', 'Centrifugual Separation', 'Constricted flow', 'Dispersions', 'Flow optimisation', 'Flow patterns', 'Fluid transport (particle)', 'Gas-liquid (bubbly) flow', 'MRI (multiphase flow)', 'Nonlinear systems', 'On-line measurement: flow', 'Solid/liquid/gas interface', 'Two & Three Phase Flow']
  }, {
    subjectName: 'Oil & Gas Extraction',
    topics: ['(null)', 'Downhole Technology/Processes', 'Drilling for Oil/Gas', 'Dynamic Positioning', 'Enhanced Oil Recovery', 'Environmental Technology', 'Flowlines & Umbilicals', 'Handling Fluid/Solid Products', 'Hydrodynamics of Oil or Gas', 'Mooring Floating Installations', 'Offshore Construction', 'Offshore Decommissioning', 'Offshore Installations:Design ', 'Offshore Processing', 'Offshore Safety', 'Oil/Gas Reservoir Management', 'Pipelines', 'Pressure (Oil/Gas)', 'Rock Engineering', 'Rock Permeability', 'Scale in Oil Recovery', 'Seismic Oil Recovery', 'Thermal Oil Recovery', 'Well Exploration', 'Well Productivity & Recovery']
  }, {
    subjectName: 'Particle Technology',
    topics: ['(null)', 'Aerosol Generation', 'Agglomeration', 'Attrition', 'Bulk Powder Flow', 'Bulk Powder Properties', 'Comminution', 'Compaction', 'Conveying', 'Cross Flow Filtration', 'Dense Phase Conveying', 'Dilute Phase Conveying', 'Discrete Element Modelling', 'Dissipative Particle Dynamics', 'Dust Explosion', 'Electro-separation', 'Electrostatic Precipitation', 'Floatation', 'Flocculation', 'Formulation', 'Gas/Solid Separation', 'Granular Flows', 'Granulation Kinetics', 'Hoppers', 'Interparticle Forces', 'Laser Doppler Anomometry', 'Magnetic Separation', 'On-line Measurement: particles', 'Particle coatings', 'Particle Encapsulation', 'Particle Engineering', 'Particle Filtration', 'Particle Size', 'PEPT', 'Polymer Coatings', 'Powder Diffraction', 'Powder Mixing', 'Powders', 'Sedimentation: particles', 'Surface Property Manipulation', 'Suspensions']
  }, {
    subjectName: 'Reactor Engineering',
    topics: ['(null)', 'Batch Process Plant', 'Bubbles in Reactors', 'Burners for Reactors', 'Catalytic Chemical Reactors ', 'Catalytic Membrane Reactors', 'Chemical Reactor Design', 'Circulating Fluidised Beds', 'Continuous Flow Reactors', 'CST Reactors', 'Distillation Reactors', 'Droplets in Reactors', 'Electrochemical Reactors', 'Energy Efficency of Reactors', 'Fixed Bed Reactors', 'Fluid Bed Reactors', 'Leaching from Reactors', 'Microreactors', 'Reaction Engineering', 'Semibatch Reactors']
  }, {
    subjectName: 'Rheology ',
    topics: ['(null)', 'Extensional Rheology', 'Injection Stretch Blow Mould.', 'Rheology of Pastes', 'Rheometers', 'Rheometry', 'Shear Rheology', 'Suspension Rheology', 'Blow Moulding', 'Brazing & Soldering ', 'Carbon Fibres', 'Casting Rheology', 'Connecting of Metals', 'Copper Alloys', 'Couette Cells', 'Drawing of Fibres', 'Electrorheological Fluids', 'Electrorheology', 'Extrusion', 'Fibre extrusion', 'Fine Particle Suspensions', 'Flow Injection', 'Ion Exchange', 'Materials Design Criteria', 'Nanoceramics', 'Non-Newtonian Flow', 'Particulate Composites', 'Rheological Flow', 'Rheology of Annular Flow', 'Short Fibre Composites']
  }, {
    subjectName: 'Safety & Reliability of Plant',
    topics: ['(null)', 'Design Safety Studies', 'Design Validation', 'Electrical Safety', 'Fault Tree Analysis', 'Formal Safety Assessment', 'Hazard Analysis', 'HAZOP', 'Industrial Accident', 'Machinery Safety', 'Mine Safety', 'Nuclear Safety', 'Occupational Safety', 'Performance in Use of Plant', 'Plant: Safe Working Practice', 'Plant: Safety Audit', 'Plant: Safety Critical Sys.', 'Plant: Safety Hazards', 'Plant: Safety Management', 'Plant: Safety Valve', 'Plant: System Safety Analysis', 'Process Safety', 'Protective Systems Design', 'Reliability of Plant', 'Reliability Technology', 'Reliability: Failure Analysis', 'Reliability: Fault Diagnosis', 'Reliability: Fault Propagation', 'Risk Analysis', 'Risk Assessment of Plant']
  }, {
    subjectName: 'Separation Processes',
    topics: ['(null)', 'Adsorption/Desorption', 'Benefication', 'Biofilms for Separations', 'Biofouling (treatment/removal)', 'Dispersions: Agglomeration', 'Dispersions: Flocculation ', 'Flotation', 'Fouling (treatment/removal)', 'Froth Flotation', 'Froths', 'Highly Selective Separations', 'Industrial Water Purification', 'Membrane Filtration ', 'Microfiltration', 'Nanofiltration', 'Physical Separations', 'Purifications', 'Separation of Gases', 'Separation of Solid-liquid ', 'Separations: Adsorption ', 'Separations: Biological ', 'Separations: Centrifugal ', 'Separations: Chemical ', 'Separations: Filtration', 'Separations: Ionic', 'Separations: Magnetic', 'Separations:Intensified Field ', 'Industrial Ultrafiltration']
  }, {
    subjectName: 'Food processing',
    topics: ['(null)', 'Dairy products', 'Flavour manipulation', 'Flavour measurement', 'Food characterisation', 'Food manufacture', 'Food processing', 'Food processing conditions', 'Food storage', 'Food texture', 'Food waste reduction', 'Fruit processing', 'Meat production', 'Packaging', 'Quality related transformation', 'Shelf life of food', 'Supply chain']
  }, {
    subjectName: 'Food structure/composition ',
    topics: ['(null)', 'Carbohydrates in food', 'Cellulose', 'Chemical properties of food', 'Fats fatty acids', 'Fibre', 'Flavour', 'Food appearance', 'Food structure', 'Food Texture', 'Functional metabolites', 'Glassy state', 'Macroscopic structure', 'Material properties', 'Molecular composition of food', 'Nutrients', 'Proteins amino acids', 'Quality attributes/character.', 'Raw materials ingredients', 'Rheology', 'Sensory evaluation', 'Storage product']
  }]
}, {
  areaName: 'Psychology',
  subjects: [{
    subjectName: 'Psychology (General)',
    topics: ['(null)', 'Aggression', 'Attention', 'Awareness', 'Behaviour', 'Cognition', 'Consciousness', 'Decision making (humans)', 'Developmental psychology', 'Emotion', 'Executive control', 'Experimental psychology', 'Human performance', 'Imitation', 'Language', 'Learning', 'Memory', 'Mood', 'Neuropsychology', 'Perception', 'Priming', 'Psychology', 'Psychology of Communication', 'Psychophysics', 'Recognitions (human)', 'Reward', 'Senses', 'Sensorimotors', 'Social cognition', 'Visual cortex', 'Visual perception', 'Consumer behaviour']
  }, {
    subjectName: 'Biological Psychology',
    topics: ['(null)', 'Evolutionary Psychology', 'Psychology of Sleep']
  }, {
    subjectName: 'Child Psychology',
    topics: ['(null)', 'Adoption and fostering', 'Gender roles', 'Parenting and child care', 'Psychology of Play']
  }, {
    subjectName: 'Cognitive Psychology',
    topics: ['(null)', 'Attachment', 'Attention', 'Awareness', 'Bilingualism', 'Category learning', 'Conceptualisation', 'Decision Making', 'Emotion', 'Executive function', 'Eye movement', 'Face processing', 'Imagination', 'Intuition', 'Knowledge', 'Language acquisition', 'Language production', 'Language comprehension', 'Memory', 'Mental Imagery', 'Motivation', 'Perception', 'Personality', 'Problem solving', 'Reasoning', 'Schema', 'Spatial Cognition', 'Thinking', 'Visual search', 'Word recognition']
  }, {
    subjectName: 'Developmental Psychology',
    topics: ['(null)', 'Ageing & development', 'Child development', 'Cognitive development', 'Developmental disorders', 'Emotional development', 'Executive function', 'Family adaptation', 'Identity', 'Infancy', 'Interventions', 'Language', 'Learning', 'Moral development', 'Parenting and child care', 'Personality development', 'Pre-natal development', 'Sexual development', 'Social and emotional development']
  }, {
    subjectName: 'Education and School',
    topics: ['(null)', 'Autism', 'Bilingual and multilingual', 'Bullying', 'Child safety', 'Drawing', 'Dyscalculia', 'Dyslexia/Dysphasia', 'Interventions in school', 'Family and parenting', 'Individual differences', 'Language development', 'Learning and cognition', 'Learning difficulties', 'Mathematical Ability', 'Learning motivation', 'Peer relations', 'Post-compulsory education', 'Reading', 'School Refusal / truanting', 'Special education needs', 'Speech and hearing science', 'Teaching methods']
  }, {
    subjectName: 'Experimental Psychology',
    topics: ['(null)', 'Attention', 'Eye movements', 'Executive control', 'Face Processing', 'Language in exp. Psychology', 'Learning in exp. Psychology', 'Mental imagery', 'Memory', 'Modelling cognitive processes', 'Motivation', 'Neuropsychology', 'Perception', 'Sleep', 'Social perception', 'Spatial Cognition', 'Timing and time perception', 'Vision in exp. Psychology']
  }, {
    subjectName: 'Forensic Psychology',
    topics: ['(null)', 'Antisocial behaviour', 'Child protection', 'Conduct disorders', 'Custody', 'Crime and deviance', 'Domestic violence', 'Eyewitness memory', 'Group treatment', 'Institutional policy and practice', 'Internet crime', 'Interviewing and interrogation', 'Legal decision making', 'Mental health', 'Offender needs', 'Offender Profiling', 'Probation', 'Resilience', 'Risk assessment and management', 'Sexual offenders', 'Witness Psychology']
  }, {
    subjectName: 'Health Psychology',
    topics: ['(null)', 'Addictive behaviours', 'Alcohol in Psychology', 'Attitudes and attitude change', 'Behavioural change interventions', 'Chronic disorders', 'Critical Health Psychology', 'Drugs in Psychology', 'Eating disorders', 'Health and risk information', 'Health behaviour', 'Health interventions', 'Health technologies', 'Mental health', 'Motivational determinants', 'Motivational interventions', 'Pain in Psychology', 'Physical activity/ exercise', 'Psychological wellbeing', 'Quality of Life', 'Reproductive health', 'Risk perception', 'Self esteem', 'Self Harm', 'Stress in Psychology', 'Substance abuse', 'Wellbeing']
  }, {
    subjectName: 'Industrial-Org/Occupational',
    topics: ['(null)', 'Job satisfaction and commitment', 'Decision Making', 'Group behaviour', 'Assessment and psychometrics', 'Innovation in Psychology', 'Job performance', 'Leadership', 'Managerial Psychology', 'Motivation in the workplace', 'Organisational change', 'Organisational culture', 'Performance management', 'Staff recruitment and selection', 'Occupational Stress', 'Occupational training', 'Workplace wellbeing', 'Work-life balance']
  }, {
    subjectName: 'Social Psychology',
    topics: ['(null)', 'Attitudes', 'Race and Culture', 'Bullying', 'Intergroup Contact', 'Cognitive dissonance', 'Small Group Behaviour', 'Communication Psychology', 'Community Psychology', 'Consumer psychology', 'Critical Psychology', 'Disaster and Trauma Studies', 'Ecological Psychology', 'Economic Psychology', 'Environmental Psychology', 'Family and relationships', 'Ethnic Minorities', 'Feminist Psychology', 'Equality and Diversity', 'Group dynamics', 'Individual differences', 'Internet behaviour', 'Interpersonal attraction', 'Loss and bereavement', 'Media Psychology', 'Military Psychology', 'Motivation', 'Persuasion', 'Political Psychology', 'Implicit Judgements', 'Prejudice and discrimination', 'Psychology of risk', 'Cooperation', 'Self and Identity', 'Self-regulation of behaviour', 'Sexuality', 'Social Catergorisation', 'Social Exclusion', 'Social cognition', 'Social identity', 'Social influence', 'Social neuroscience', 'Stereotyping', 'Transport Psychology and Behaviour', 'Behavioural change']
  }, {
    subjectName: 'Sport and Exercise',
    topics: ['(null)', 'Body image', 'Dietary behaviour', 'Emotion mood and anxiety', 'Exercise in Psychology', 'Gender in Psychology', 'Motivation', 'Performance and skill', 'Sport participation']
  }, {
    subjectName: 'Mathematical & Statistic Psych',
    topics: ['(null)', 'Psychophysics', 'Psychometrics', 'Classification', 'Mathematical Modelling', 'Measurement theory', 'Statistics']
  }, {
    subjectName: 'Gerontology',
    topics: ['(null)', 'Old age', 'Physical Performance', 'Intergenerational Relationships', 'Cognitive function', 'Cognitive decline', 'Memory problems', 'Serious and terminal illness', 'Quality of Life', 'End of Life']
  }]
}, {
  areaName: 'Science and Technology Studies',
  subjects: [{
    subjectName: 'Science & Technology Studies',
    topics: ['(null)', '(null)', 'Energy', 'Food and Agriculture', 'Manufacturing and Industry', 'Mobility and Transport', 'Science and Technology Knowledge', 'Science and Technology Practice', 'Science and Technology Production', 'Science and Technology Consumption', 'Communication Technologies', 'Science and Technology Management', 'Science and Technology Engagement', 'Science and Technology Markets', 'Science and Technology Education', 'Science and Technology Media', 'Research and Development', 'Emerging Technologies', 'Professions', 'Skills and Capabilities', 'Sociotechnical', 'Technonature/Natureculture', 'IT Systems', 'Governance of Science and Technology']
  }]
}, {
  areaName: 'Social anthropology',
  subjects: [{
    subjectName: 'Social Anthropology (General)',
    topics: ['(null)']
  }, {
    subjectName: 'Econ Pol & Env Anthropology',
    topics: ['(null)', 'Political anthropology', 'Ethnicity and Identity', 'Economic Anthropology', 'Environmental Anthropology', 'Ecological Anthropology and Subsistence', 'Applied Anthropology Policy and International Dev', 'Urban Anthropology', 'Science and technology', 'Law and Human Rights', 'Globalisation and transnationalism']
  }, {
    subjectName: 'Kinship Health & relatedness',
    topics: ['(null)', 'Kinship marriage and the family', 'Kinship and Gender', 'Sexuality and Gender', 'Children and childhood', 'Older people Ageing & Health', 'Migration and diaspora', 'Medical Anthropology and the body', 'Anthropological Demography']
  }, {
    subjectName: 'Rel Material & Cog Anthrop',
    topics: ['(null)', 'Religious Beliefs', 'Language Linguistics & Symbolism', 'Cognitive & Psy. Anthropology', 'Anthropology of Education', 'Ethnosciences', 'Space Place and Location', 'Literature and literacy', 'Art and Aesthetics in Anthropology', 'Material Culture Studies', 'Museum Ethnography', 'History and Anthropology', 'Ethnomusicology', 'Visual Media Digital culture', 'Performance']
  }, {
    subjectName: 'Anthropological Methodology',
    topics: ['(null)', 'Ethnographic methodology', 'Quantitative methods (Anth)', 'Mixed and Interdisciplinary methods']
  }]
}, {
  areaName: 'Social policy',
  subjects: [{
    subjectName: 'Social Policy (General)',
    topics: ['(null)', 'Social Policy', 'Social cohesion', 'Children and Young People', 'Community Care', 'Community Development', 'Comparative Studies', 'Crime & social policy', 'Disability and social policy', 'Wealth and inequality', 'Economics/Financing', 'Education and Training', 'Environmental policy', 'Family Policy', 'Gender & social policy', 'Gerontology (Ageing)', 'Health policy', 'History of social policy', 'Migration and social policy', 'Housing policy', 'Global/International Perspectives', 'Informal Care', 'Information Technology', 'Local Government and Public Services', 'Race Ethnicity and Religion', 'Social Care', 'Poverty', 'Social Exclusion', 'Devolution', 'Social Security', 'Teaching and Learning', 'Theoretical perspectives', 'Unemployment and Labour Markets', 'Urban Issues in social policy', 'User Involvement', 'Voluntary Sector', 'Making Implementing Governing Managing Soc Pol']
  }]
}, {
  areaName: 'Social work',
  subjects: [{
    subjectName: 'Social Work (General)',
    topics: ['(null)']
  }, {
    subjectName: 'Children and Families',
    topics: ['(null)', 'Child Abuse and Protection', 'Youth Justice and Young Offenders', 'Community and Youthwork', 'Parenting and Family Support', 'Disabled children & care', 'Carers and Support', 'Assessment in Social Work']
  }, {
    subjectName: 'Social Work with Adults',
    topics: ['(null)', 'Social/Community care', 'Community Social Work', 'Social Work with Offenders', 'Mental health in Social Work', 'Social Work with older people', 'Social Work-Alcohol and Substance Misuse', 'Personalisation of Care', 'Social Work- Disability']
  }, {
    subjectName: 'International Social Work',
    topics: ['(null)', 'Social work education', 'Comparative social work', 'Social work ethics', 'Int. Social Work Practice', 'Care standards']
  }]
}, {
  areaName: 'Sociology',
  subjects: [{
    subjectName: '(null)',
    topics: ['(null)']
  }, {
    subjectName: 'Science & Technology Studies',
    topics: ['(null)']
  }, {
    subjectName: 'Sociology (General)',
    topics: ['(null)', 'Sociology', 'Social psychology']
  }, {
    subjectName: 'Criminology',
    topics: ['(null)', 'Alcohol', 'Crime', 'Criminal justice', 'Drugs', 'Gangs', 'Law', 'Localities and neighbourhoods', 'Offenders', 'Police and policing', 'Prison', 'Rehabilitation', 'Terrorism', 'Victims', 'Violence']
  }, {
    subjectName: 'Cultural Studies',
    topics: ['(null)', 'Creativity', 'Culture', 'Identity', 'Literature', 'Modernity', 'Reflexivity', 'Semiotics', 'Culture and Technology', 'Social Values']
  }, {
    subjectName: 'Economic Sociology',
    topics: ['(null)', 'Capital', 'Economics and Sociology', 'Industrial human and employment relations', 'Innovation', 'Institutions and organisations', 'Management', 'Markets', 'Networks', 'Professions', 'Science and technology', 'Services', 'Vocationalism', 'Work']
  }, {
    subjectName: 'Edu Sociocloy/Sociology of Edu',
    topics: ['(null)', 'Assessment', 'Classroom', 'Curriculum', 'Higher Education', 'Inclusion', 'Learning', 'Literacy', 'Skills', 'SME', 'Teaching', 'Training']
  }, {
    subjectName: 'Ethnicity',
    topics: ['(null)', 'Equality and inequality', 'Hybridity', 'Diasporas', 'Ethnicity', 'Birth intervals', 'Gender', 'Race', 'Racism']
  }, {
    subjectName: 'Environment',
    topics: ['(null)', 'Agriculture', 'Consumption', 'Built environment', 'Planning', 'Climate', 'Sociology of Food', 'Quality of life']
  }, {
    subjectName: 'Globalism and Development',
    topics: ['(null)', '(Post) Communism and socialism', 'Development aid', 'Dependence', 'Development', 'Globalisation', 'Economic Growth', 'Independence', 'Industrialisation', 'Transnationalism', 'Migration', 'Trade']
  }, {
    subjectName: 'Media Studies',
    topics: ['(null)', 'Audience', 'Codes and conventions', 'Film studies', 'Genre studies', 'Ideology', 'Media', 'Narrative', 'News', 'Performance', 'Representation', 'Television', 'Text', 'Theatre']
  }, {
    subjectName: 'Med Soc/Soc Health & Illness',
    topics: ['(null)', 'Hospitals and health care organisations', 'Illness and disease', 'Life course', 'Material and cultural factors', 'Medical profession', 'Medical technologies', 'Psycho-social factors']
  }, {
    subjectName: 'Political Sociology',
    topics: ['(null)', 'Democracy', 'Devolution', 'Nations and states', 'Political engagement', 'Political groups', 'Social groups', 'Social movements', 'Voting']
  }, {
    subjectName: 'Sociology of Religion',
    topics: ['(null)', 'Alienation', 'Belief', 'Buddhism', 'Christianity', 'Hinduism', 'Humanism', 'Islam', 'Judaism', 'Morality', 'New religious movements', 'Secularisation', 'Theology', 'Worship and religious practice']
  }, {
    subjectName: 'Social Theory',
    topics: ['(null)', 'Agency', 'Social Class', 'Colonialism', 'Functionalism', 'Habitus', 'Imperialism', 'Knowledge', 'Realism', 'Risk', 'Structure', 'Theory']
  }, {
    subjectName: 'Stratification',
    topics: ['(null)', 'Employment', 'Difference', 'Influence', 'Opportunity', 'Poverty', 'Sex and sexuality', 'Class', 'Inequality', 'Status', 'Wealth']
  }, {
    subjectName: 'Urbanisation',
    topics: ['(null)', 'Assimilation', 'Cities', 'Environment', 'Demography', 'Globalisation', 'Housing', 'Multiculturalism', 'Segregation', 'Transport']
  }, {
    subjectName: 'Womens and Gender Studies',
    topics: ['(null)', 'Embodiment', 'Exploitation and oppression', 'Family', 'Femininity', 'Feminism', 'LGBT', 'Masculinity', 'Power', 'Queer studies', 'Women']
  }]
}, {
  areaName: 'Solar & terrestrial physics',
  subjects: [{
    subjectName: '(null)',
    topics: ['(null)']
  }, {
    subjectName: 'Solar & Solar-Terrestrial Phys',
    topics: ['(null)']
  }, {
    subjectName: 'Solar Studies',
    topics: ['(null)']
  }]
}, {
  areaName: 'Supercond magn. &quant.fluids',
  subjects: [{
    subjectName: '(null)',
    topics: ['(null)']
  }, {
    subjectName: 'Condensed Matter Physics',
    topics: ['(null)', 'Correlated Electron Systems', 'Electronic Structure of Metals', 'Fractional Quantum Hall Effect', 'Low Dimension Magnetic Systems', 'Magnetics - Thin Films', 'Magnetics - Transport', 'Mesoscopic Physics', 'Quantum Hall Effect', 'Quantum Many Body Theory', 'Schottky Barriers', 'Structural Phase Transitions', 'Superconducting Systems', 'Theoretical Condensed Matter', 'Topological Insulators']
  }, {
    subjectName: 'Electromagnetics',
    topics: ['(null)', 'Computational Electromagnetics', 'Electromagnetic CAD', 'Electromagnetic Compatibility', 'Electromag. Compat. - Testing', 'Field Modelling Software', 'Giant Magnetoresistance (GMR)']
  }, {
    subjectName: 'Magnetism/Magnetic Phenomena',
    topics: ['(null)', 'CMR & GMR', 'Domain Walls', 'Flux vortices', 'Frustrated Magnetism', 'Heavy Fermions', 'Heterostructures', 'Magnetic Multilayers', 'Magnetic Tunnel Junctions', 'Magnetic Vortex Dynamics', 'Magnetism - Standards', 'Magnetoresistance', 'Physics of Magnetic Materials', 'Rare Earth Metals & Alloys', 'Spin Polarised Systems', 'Spin Torque Transfer', 'Thin Magnetic Films', 'Two Dimensional Systems', 'Unconventional Superconductors']
  }, {
    subjectName: 'Quantum Fluids & Solids',
    topics: ['(null)', 'Excitation Interactions in 3He', 'Excitation Interactions in 4He', 'Quantum Fluids - Standards', 'Quantum Solids', 'Quantum Turbulence', 'Superfluid 3He', 'Superfluid 4He', 'Ultra Cold Studies (<100mK)']
  }]
}, {
  areaName: 'Systems engineering',
  subjects: [{
    subjectName: '(null)',
    topics: ['(null)']
  }, {
    subjectName: 'Computer Sys. & Architecture',
    topics: ['(null)', 'Compilation & Configuration', 'Computer Architecture', 'Computer Middleware', 'Computer Systems Integration', 'Computer Systems Management', 'Computer Systems Security', 'Computer Systems Specification', 'Distributed Architectures', 'Embedded System Synthesis', 'Hardware/Software Co-design', 'Interconnect Architectures', 'Novel Computer Architectures', 'Processor Architectures', 'System Design & Verification']
  }, {
    subjectName: 'Control Engineering',
    topics: ['(null)', 'Adaptive Predictive Control', 'Automatic Control', 'Controller Design', 'Digital Control', 'Hierarchical Control', 'Intelligent Control', 'Model Predictive Control', 'Neurofuzzy Control', 'Non-linear Control', 'Optimal Control', 'Real-time Systems Control', 'Robust Control', 'Stochastic Control']
  }, {
    subjectName: 'Intelligent & Expert Systems',
    topics: ['(null)', 'Appl. of Expert Systems (AI)', 'Expert Systems', 'Knowledge Elicitation', 'Medical Appl. Expert Systems']
  }, {
    subjectName: 'Intelligent Measurement Sys.',
    topics: ['(null)', 'Augmented Reality', 'Chemometrics', 'Closed Loop Control', 'Condition Monitoring (Drive) ', 'Controlled Drug Release', 'Data Fusion (Measurement)', 'Defibrillators', 'Flow Monitoring', 'Functional Modelling', 'Gene Delivery System', 'Hyperthermia', 'Hypothermia Gene Therapy', 'Image Reconstruction', 'Image Registration', 'Image Restoration', 'Impedance Sensors', 'In Vivo Monitoring', 'Infrared Sensors', 'Intell. Measure./Sensor Sys.', 'Ionising Radiation Sensors', 'Modulated Drug Release', 'Near Infrared Spectroscopy', 'Open Loop Control', 'Optical Instrument. (Measure.)', 'Pacemakers', 'Piezoceramic', 'Piezoelectric', 'Radiation Sensors', 'Real-time Monitoring of Sys.', 'Sensor Data Fusion', 'Smart Sensors', 'Stimulation']
  }, {
    subjectName: 'Design Engineering',
    topics: ['(null)', 'Automotive Design Engineering', 'Computer Aided Design (CAD)', 'Concurrent Engineering Design', 'Design for Healthcare', 'Design for Manufacture', 'Design for Quality', 'Design for Recycling ', 'Design of Aircraft', 'Design of Biomaterials', 'Design of Built Infrastructure', 'Design of Ships', 'Design Reuse', 'Designing for Risk', 'Embodiment', 'Engineering Design', 'Environmental Impact Design ', 'Industrial Design', 'New Product Development', 'Physical Modelling', 'Production Design', 'Requirements Capture', 'Sports Engineering Design', 'Virtual Modelling']
  }, {
    subjectName: 'Design Processes',
    topics: ['(null)', 'Change Management Design', 'Conceptual Design Processes', 'Constraint Modelling in Design', 'Creativity in Design', 'Design Audit', 'Design Configuration', 'Design Decision Support Tools', 'Design for Sustainability', 'Design for User Need', 'Design Information', 'Design Innovation', 'Design Management', 'Design Processes', 'Design Review', 'Design to Customer Requirement', 'Designing in Human Factors', 'Distributed Design', 'Inclusive Design', 'Integration of Design', 'Knowledge Management (Design)', 'Multi-objective Optimisation', 'Process Management Design', 'Individualisation of technol.']
  }, {
    subjectName: 'Power Sys Man Prot & Control',
    topics: ['(null)', 'Intelligent Power Systems', 'Power Condition Monitoring', 'Power control Systems', 'Power fault detection', 'Power fault diagnosis', 'Power Systems - Economics', 'Power Systems - Management', 'Signal Control - Amplifiers', 'Signal Control - Switches', 'Systems Theory; Control']
  }, {
    subjectName: 'Power Systems Plant',
    topics: ['(null)', 'Cables in Power Plant', 'Dielectric Power Systems', 'Energy Substations', 'Insulators (power plant)', 'Power Plant Gas Turbines']
  }, {
    subjectName: 'Optical Communications',
    topics: ['(null)', 'Antennae', 'Encryption - Optical Based', 'Fibre Systems', 'Infrared Systems', 'Mid Infrared communications', 'Millimetre Wave (Optical)', 'Mixers/Receivers', 'Multiplexing (WDM/TDM)', 'Navigation & Location Systems', 'Near Infrared Communications', 'Nonlinear Optics', 'Optical Components', 'Optical Frequency Synthesis', 'Optical Interconnects', 'Optical Networks', 'Photonic Subsystems & Networks', 'Transmitters']
  }]
}, {
  areaName: 'Terrest. & freshwater environ.',
  subjects: [{
    subjectName: '(null)',
    topics: ['(null)']
  }, {
    subjectName: 'Biogeochemical Cycles',
    topics: ['(null)']
  }, {
    subjectName: 'Earth Surface Processes',
    topics: ['(null)']
  }, {
    subjectName: 'Land - Atmosphere Interactions',
    topics: ['(null)']
  }, {
    subjectName: 'Water Quality',
    topics: ['(null)']
  }, {
    subjectName: 'Soil science',
    topics: ['(null)', 'Fertility fertilizers/manures', 'Soil chemistry & soil physics', 'Plant-soil interactions', 'Rhizosphere biology', 'Soil conservation', 'Soil microbiology', 'Rhizoremediation', 'Soil cultivation', 'Soil ecosystems', 'Soil management', 'Bioremediation', 'Organic matter', 'Soil pollution', 'Soil resources', 'Soil structure', 'Soil acidity', 'Soil biology', 'Soil science']
  }, {
    subjectName: 'Ecosystem Scale Processes',
    topics: ['(null)']
  }, {
    subjectName: 'Land - Ocean Interactions',
    topics: ['(null)']
  }, {
    subjectName: 'Biogeochemical Cycles',
    topics: ['Anoxic events', 'Atmospheric gas cycling', 'Biodiversity', 'Carbon capture and storage', 'Carbon cycling', 'Coastal margins', 'Fossil fuel burning', 'Isotopic analysis', 'Lake sediments', 'Marine sediments', 'Microbial communities', 'Nitrogen cycling', 'Ocean acidification', 'Primary production', 'Soil biochemistry', 'Soil organics', 'Sulphur cycling', 'Water quality', 'Wetlands']
  }, {
    subjectName: 'Earth Surface Processes',
    topics: ['Chemical weathering', 'Continental crust', 'Continental weathering', 'Debris flows', 'Earthquakes', 'Erosion', 'Flood basalts', 'Flood models', 'Floods', 'Fluvial geomorphology', 'Fluvial systems', 'Glacial systems', 'Gravity flows', 'Landslides', 'Mantle dynamics', 'Organic carbon fluxes', 'Past environments', 'Peatlands', 'Physical weathering', 'Plate dynamics', 'Sea level variation', 'Sediment supply', 'Sediment transport', 'Seismicity', 'Slips and faults', 'Soil organic carbon', 'Soil formation']
  }, {
    subjectName: 'Ecosystem Scale Processes',
    topics: ['Agriculture', 'Anthropogenic pressures', 'Biodiversity', 'Bioenergy', 'Biogeochemical cycles', 'Catchment management', 'Coastal ecosystems', 'Conservation', 'Deforestation', 'Dissolved organic material', 'Ecosystem function', 'Ecosystem management', 'Ecosystem services', 'Food security', 'Food webs', 'Forest fires', 'Forests', 'Freshwater ecosystems', 'Greenhouse gas emission', 'Land surface modelling', 'Marine renewable energy', 'Nutrient limitation', 'Permafrost', 'Salt marshes', 'Soil carbon', 'Species response', 'Terrestrial ecosystems', 'Tropical ecosystems', 'Urban ecology', 'Vegetation change']
  }, {
    subjectName: 'Land - Atmosphere Interactions',
    topics: ['Aerosol precursors', 'Aerosols', 'Atmospheric chemistry', 'Atmospheric fluxes', 'Bioenergy crops', 'Biomass burning', 'Carbon fluxes', 'Carbon sequestration', 'Climate modelling', 'Cloud formation', 'Element cycles', 'Energy budgets', 'Forest canopy', 'Forest fires', 'Fossil fuels', 'Greenhouse gases', 'Hydroxyl radical chemistry', 'Land use change', 'Methanogenesis', 'Methylotrophy', 'Microbial communities', 'Monsoonal processes', 'Nitrification & denitrification', 'Numerical weather prediction', 'Nutrient cycling', 'Snow and ice flows', 'Soil organic matter', 'Tropical forests', 'Vegetation management', 'Vegetation modelling', 'Volatile organic compounds', 'Water resources']
  }, {
    subjectName: 'Land - Ocean Interactions',
    topics: ['Atmospheric carbon', 'Beach processes', 'Carbon fluxes', 'Carbon storage', 'Chemical weathering', 'Climate systems', 'Coastal erosion', 'Coastal flooding', 'Coastal protection', 'Coastal wetlands', 'Dissolved organic matter', 'Earth system modelling', 'Ecosystem modelling', 'Environmental transitions', 'Estuaries', 'Extreme events', 'Fluvial zones', 'Glacial cycles', 'Glaciers', 'Ice sheets', 'Ice streams', 'Landslides', 'Marine sediments', 'Nutrient cycling', 'Ocean circulation', 'Ocean drilling', 'Salt marshes', 'Sea level variation', 'Seawater composition', 'Sediment transport', 'Shelf ocean dynamics', 'Water mass analysis']
  }, {
    subjectName: 'Soil science',
    topics: ['Ammonia oxidising bacteria', 'Arbuscular mycorrhizal fungi', 'Carbon capture and storage', 'Chemical weathering', 'Critical load', 'Diffuse pollution', 'Ectomycorrhizal fungi', 'Genetically modified organisms', 'Hydrophobicity', 'Land use', 'Methanogenesis', 'Microbial communities', 'Nanomaterials', 'Nutrient cycling', 'Peat', 'Soil biodiversity', 'Soil compaction', 'Soil contamination', 'Soil erosion', 'Soil fauna', 'Soil formation', 'Soil micromorphology', 'Soil organics', 'Soil process modelling', 'Soil structure', 'Soil types', 'Water quality']
  }, {
    subjectName: 'Water Quality',
    topics: ['Bioavailability', 'Biogeochemical cycles', 'Buffer zones', 'Catchment management', 'Diffuse pollution', 'Dissolved organic carbon', 'Drainage systems', 'Drinking water', 'Ecological status', 'Endocrine disruption', 'Estuary processes', 'Flood modelling', 'Fluvial zones', 'Groundwater pollution', 'Groundwater-surface water interaction', 'Human health', 'Hyporheic zones', 'Lake sediments', 'Nitrate cycling', 'Nutrient enrichment', 'Nutrient leaching', 'Peatlands', 'Pesticide pollution', 'Phosphate cycling', 'Polycyclic aromatic hydrocarbons', 'Recreational waters', 'Sex hormones', 'Shelf seas', 'Soil carbon', 'Storm events', 'Suspended particulates', 'Trace elements', 'Wastewater treatment', 'Water framework directive']
  }]
}, {
  areaName: 'Theology divinity & religion',
  subjects: [{
    subjectName: '(null)',
    topics: ['(null)']
  }, {
    subjectName: 'Alternative Spiritualities',
    topics: ['(null)']
  }, {
    subjectName: 'Atheism/Secularism',
    topics: ['(null)']
  }, {
    subjectName: 'Buddhism',
    topics: ['(null)']
  }, {
    subjectName: 'History of Church & Theology',
    topics: ['(null)']
  }, {
    subjectName: 'Contemporary Religion',
    topics: ['(null)']
  }, {
    subjectName: 'East Asian Religions',
    topics: ['(null)']
  }, {
    subjectName: 'Hinduism',
    topics: ['(null)']
  }, {
    subjectName: 'Inter-faith Relations',
    topics: ['(null)']
  }, {
    subjectName: 'Islam',
    topics: ['(null)']
  }, {
    subjectName: 'Jainism',
    topics: ['(null)']
  }, {
    subjectName: 'Judaism',
    topics: ['(null)']
  }, {
    subjectName: 'Liturgy',
    topics: ['(null)']
  }, {
    subjectName: 'Modern Theology',
    topics: ['(null)']
  }, {
    subjectName: 'New Testament',
    topics: ['(null)']
  }, {
    subjectName: 'Old Testament',
    topics: ['(null)']
  }, {
    subjectName: 'Sikhism',
    topics: ['(null)']
  }, {
    subjectName: 'Systematic Theology',
    topics: ['(null)']
  }]
}, {
  areaName: 'Tools technologies & methods',
  subjects: [{
    subjectName: 'Bioinformatics',
    topics: ['(null)', 'Algorithm Development', 'Biodiversity informatics', 'Bioinformatic Sequence anal.', 'Bioinfor. & Complexity Theory', 'Bioinformatics for genomics', 'Bioinform. for metabolomics', 'Bioinform. for micro arrays', 'Bioinformatics for proteomics', 'Bioinform. for transcriptomics', 'Bioinform. Function Prediction', 'Bioinformatics Taxonomy', 'Biological database design', 'Biological database dev.', 'Biological database management', 'Biomedical Informatics', 'Clustering', 'Competitive Benchmarking', 'Database Normalisation', 'Discrimination Analysis', 'Epidemiology (informatics)', 'Genome annotation', 'Genome databases', 'Genotype to Phenotype', 'GRID Technologies', 'Health Informatics', 'High-throughput image analysis', 'Medical Informatics', 'Neuroinformatics', 'Noise Analysis (informatics)', 'Ontologies', 'Phylogenetics (bioinformatics)', 'Principal Component Analysis', 'Regulatory Networks (bioinf.)', 'Rule Induction', 'Software Design', 'Text Extraction', 'Visualisation (bioinformatics)', 'Web Technol. & Architectures']
  }, {
    subjectName: 'Bionanotechnology',
    topics: ['(null)', 'Surface Plasmon Resonance', 'Individual event methods', 'Multi-parametric methods', 'Bionanotechnology', 'Hard lithography', 'Microcantilevers', 'Molecular motors', 'Single molecules', 'Soft lithography', 'Calcium imaging', 'Miniaturisation', 'Bioelectronics', 'Direct writing', 'Lab on a chip', 'Microfluidics', 'Biophotonics', 'DNA Tweezers', 'Electrospray', 'Quantum dots', 'Nanosensors', 'Photonics']
  }, {
    subjectName: 'Development (Biosciences)',
    topics: ['(null)', "Quantitative 'omics: imaging", 'Instrumentation technology', 'Pharmaceutical technology', 'Development (Biosciences)', 'Biological microcircuits', 'Communication technology', 'Environmental technology', 'Multi-parametric methods', 'Fermentation technology', 'Medical instrumentation', 'Semipermeable membranes', 'Biochemical technology', 'Information technology', 'Measurement technology', 'Laboratory technology', 'Separation technology', 'Fluorescence markers', 'Multiplexing methods', 'Chemical technology', 'Computer technology', 'Biological devices', 'Biological sensing', 'Control techniques', 'Energy technology', 'Laser technology', 'Bioelectronics', 'Flow cytometry', 'Cell cultures', 'Biopolymers', 'Bioreactors', 'Biosensors', 'Filtration', 'Fluidics']
  }, {
    subjectName: 'Environmental Informatics',
    topics: ['(null)']
  }, {
    subjectName: 'eScience ',
    topics: ['(null)', 'Biosecurity ', 'Dev. of eSci. tools & systems', 'Distributed computing', 'eScience (inc. Bioinformatics)', 'Grid computing', 'Interoperability of computers', 'Middleware', 'Virtual Organisations', 'Web interfaces']
  }, {
    subjectName: 'High Performance Computing',
    topics: ['(null)', 'High Performance Computing ', 'HPC Architecure', 'HPC Software', 'Science & Eng. using HPC']
  }, {
    subjectName: 'Medical Imaging',
    topics: ['(null)', 'Combined imaging technologies', 'Computed tomography for health', 'ECG', 'EEG', 'Electric. Impedance Tomography', 'Functional imaging for health', 'in vivo monitoring', 'Medical image display', 'Medical image processing', 'MRI for healthcare', 'Multimedia for healthcare', 'OCT for healthcare', 'Ophthalmic Imaging', 'PET for healthcare', 'Photoacoustic imaging', 'Tomography for healthcare', 'Ultrasound for healthcare', 'X-ray for healthcare']
  }, {
    subjectName: 'Research approaches',
    topics: ['(null)', 'Whole organism biology', 'Hypothesis generation', 'Integrative biology', 'Research approaches', 'Predictive biology', 'Dynamic systems', 'Systems biology', 'Multiscaling']
  }, {
    subjectName: 'Social Stats. Comp. & Methods',
    topics: ['(null)']
  }, {
    subjectName: 'Survey & Monitoring',
    topics: ['(null)']
  }, {
    subjectName: 'Technol. for Environ. Appl.',
    topics: ['(null)']
  }, {
    subjectName: 'Theoretical biology',
    topics: ['(null)', 'Non-linear mathematics in the life sciences', 'Biomolecular struct. predict.', 'Spatio-temporal heterogeneity', 'Computational fluid dynamics', 'Model design & techniques', 'Monte Carlo simulations', 'Biomolecular modelling', 'Mathematical modelling', 'Molecular interactions', 'Quantitative genetics', 'Metabolic modelling', 'Theoretical biology', 'Molecular dynamics', 'Quantum mechanics', 'Systems modelling', 'Protein dynamics', 'Quantum dynamics', 'Virtual systems', 'Biomathematics', 'Data analysis', 'Markov chains', 'Stochasticity', 'Simulations', 'Algorithms', 'Robotics', 'Scaling']
  }, {
    subjectName: 'Tools for the biosciences',
    topics: ['(null)', '2D crystallography', 'Affinity chromatography', 'AFM / SPM microscopy', 'Atomic adsorption spectroscopy', 'Bioassays (inc. Immunoassays)', 'Biochips', 'Biomolecular NMR Spectroscopy', 'Biosensors', 'Calorimetry', 'Capillary chromatography', 'Cell-based assays', 'Cellular probes', 'Centrifugation', 'Charge coupled device (CCD)', 'Chemical probes', 'Chemiluminescence', 'Chemisorption', 'Chemoinformatics', 'Chromatography', 'Computational chemistry', 'Correlated spectroscopy (COSY)', 'Cross-linking', 'Cryobiology', 'Cryomicroscopy', 'Cryoprobe', 'Crystallography', 'Differential scanning calorim.', 'Electrophysiology', 'Electrospray ionisation', 'Elemental composition', 'Fast Atom Bombardment', 'FRAP', 'Fluores-activated cell sorting', 'FTIR Spectroscopy', 'FTICR', 'Fourier Transform Spectrometry', 'Gas permeation chromatography', 'Genetic screening', 'HSQC', 'High field NMR', 'High Perf.Liq.Chromatog.(HPLC)', 'Immunochemistry', 'Immunocytochemistry', 'ImmunoEM', 'Immunofluorescence', 'Immunohistochemistry', 'Immunoprobes', 'Immunosensors', 'In situ hybridization', 'Laser tech. in biosciences', 'Linear dichroism calorimetry', 'Liquid chromatography', 'Luminometry', 'MALDI', 'Microfluidics (biol. appl.)', 'Molecular analysis', 'Molecular modelling', 'Mult. Isomorph. Replace. (MIR)', 'Mult. Wavelen. Anom. Diffract.', 'Non-crystalline diffraction', 'Patch clamping', 'Phosphorescence', 'Photochemistry', 'Polyclonal antibodies', 'Probes', 'Protein struct. determination', 'Pulse sequence', 'Quadrupole - TOF', 'Raman optical activity spect.', 'Single molecule studies ', 'Single wavelen. Anom.Diffract.', 'Tools for the biosciences', 'Transposon mutagenesis', 'TROSY', 'TROESY', 'Wide/small angle diffraction']
  }, {
    subjectName: 'Scattering & Spectroscopy',
    topics: ['(null)', 'Atomic & Molecular Structure', 'Atomic Collisions', 'Atomic Photoionisation', 'Atoms in External Fields', 'Chemical Physics', 'Cluster Physics', 'Electron-Atom Scattering', 'Electron-Ion Scattering', 'Electron-Molecule Scattering', 'Excited States', 'Highly Charged Particles', 'Ionic Collisions', 'Lasers & Prepared States', 'Molecular Collisions', 'Molecular Photoionisation', 'Molecules in External Fields', 'Muon Interactions', 'Parity Nonconservation', 'Photon Interactions ', 'Reactive Scattering', 'R-Matrix', 'VUV Radiation']
  }, {
    subjectName: 'Environmental biotechnology',
    topics: ['(null)', 'Environmental biotechnology', 'Industrial contaminants', 'Environmental sensing', 'Biogeomicrobiology', 'Organic pollutants', 'Phytoremediation', 'Bioavailability', 'Bioremediation', 'Biotreatment', 'Heavy metals', 'Hydrocarbons', 'Water waste', 'Pesticides', 'Sediments', 'Waste']
  }, {
    subjectName: 'Analytical Science',
    topics: ['(null)', 'Acoustic Analysis', 'Acoustic Wave Spectroscopy', 'Affinity Chromatography', 'Analytical Biosensors', 'Analytical Photochemistry', 'Atomic Spectroscopy', 'Capillary Electrophoresis (CE)', 'Catalytic analytical methods', 'Chemical Coupling Techniques', 'Chemical Data Analysis', 'Chemical Sampling Technologies', 'Chiral Chromatography', 'Dichroism', 'Dielectric Techniques', 'Electroanalysis', 'Electrochromatography', 'Electrophoresis', 'Ellipsometry', 'EPR', 'Fluorescence-based anal. tech.', 'FT Mass Spectrometry', 'Gas Chromatography', 'Gas Sensors', 'Gel permeation chromatography', 'HPLC', 'Immunoassay', 'Ion Chromatography', 'Ion Trap Mass spectrometry ', 'Laser Induced Mass Analysis', 'Luminescence', 'Mass Spectrometry', 'Microwave analysis', 'Nuclear Magn. Resonance NMR ', 'Phosphorescence Anal. Tech.', 'Photoelectron Spectroscopy', 'Pore Size Analysis', 'Raman Spectroscopy', 'Scanning Probe Microscopy', 'Scanning Tunnelling Micros STM', '2nd Harmonic Generation Spect.', 'Sum Frequency Spectroscopy ', 'Thermal Analytical Methods', 'Ultra Trace Analysis', 'UV/Visible Spectroscopy', 'Vibrational spectroscopy']
  }, {
    subjectName: 'System on Chip',
    topics: ['(null)', 'Analogue & Mixed-signal ', 'Application Specific IC (ASIC)', 'BiCMOS', 'Deep Sub-micron (DSM)', 'Design Automation', 'Design Methods', 'Digital Logic', 'Embedded DRAM', 'Embedded Flash Memories', 'Embedded IP Cores', 'Hard/Software Co-verification', 'IP Cores', 'IP Reuse', 'Logic Design & Synthesis', 'Low Power Design', 'Network on Chip', 'Reconfigurable/Scalable Design', 'SoC Specific CAD Tools', 'SoC Verification', 'Sync/Async Design', 'System Interconnects', 'System Level Integration', 'Timing Methodologies', 'Very Large-scale Integ. (VLSI)']
  }, {
    subjectName: 'Med.Instrument.Device& Equip.',
    topics: ['(null)', 'Condition monitoring- health', 'Diagnostic devices- medical', 'Implanted medical devices', 'Medical Audiology', 'Medical Control Systems', 'medical decision support tools', 'medical instrument design', 'Medical instrument development', 'Medical Microsystems ', 'Medical sensors', 'Medical signal analysis', 'Minimally invasive surgery', 'Pain Management', 'Radiotherapy', 'rehabilitation devices', 'Surgical devices', 'Surgical training', 'Telemedicine/Telecare', 'Treatment equipment']
  }, {
    subjectName: 'Rheology ',
    topics: ['(null)', 'Extensional Rheology', 'Injection Stretch Blow Mould.', 'Rheology of Pastes', 'Rheometers', 'Rheometry', 'Shear Rheology', 'Suspension Rheology', 'Blow Moulding', 'Brazing & Soldering ', 'Carbon Fibres', 'Casting Rheology', 'Connecting of Metals', 'Copper Alloys', 'Couette Cells', 'Drawing of Fibres', 'Electrorheological Fluids', 'Electrorheology', 'Extrusion', 'Fibre extrusion', 'Fine Particle Suspensions', 'Flow Injection', 'Ion Exchange', 'Materials Design Criteria', 'Nanoceramics', 'Non-Newtonian Flow', 'Particulate Composites', 'Rheological Flow', 'Rheology of Annular Flow', 'Short Fibre Composites']
  }, {
    subjectName: 'Intelligent Measurement Sys.',
    topics: ['(null)', 'Augmented Reality', 'Chemometrics', 'Closed Loop Control', 'Condition Monitoring (Drive) ', 'Controlled Drug Release', 'Data Fusion (Measurement)', 'Defibrillators', 'Flow Monitoring', 'Functional Modelling', 'Gene Delivery System', 'Hyperthermia', 'Hypothermia Gene Therapy', 'Image Reconstruction', 'Image Registration', 'Image Restoration', 'Impedance Sensors', 'In Vivo Monitoring', 'Infrared Sensors', 'Intell. Measure./Sensor Sys.', 'Ionising Radiation Sensors', 'Modulated Drug Release', 'Near Infrared Spectroscopy', 'Open Loop Control', 'Optical Instrument. (Measure.)', 'Pacemakers', 'Piezoceramic', 'Piezoelectric', 'Radiation Sensors', 'Real-time Monitoring of Sys.', 'Sensor Data Fusion', 'Smart Sensors', 'Stimulation']
  }, {
    subjectName: 'Instrumentation Eng. & Dev.',
    topics: ['(null)', 'Adaptive Optics', 'Audiology', 'CCD', 'Chemical Biosensors', 'Chemical Sensors ', 'Chemometrics Instrumentation', 'Coherent Optics', 'Crystallography Instrument.', 'Data Collection', 'Data Fusion Instrumentation', 'Diffractive Optics', 'Electromagnetic Sensors ', 'Endocrinology', 'ENT', 'Environmental Sensors ', 'Functional Elect. Stimulation', 'Functional Imaging Instrument.', 'Gas Sensors Instrumentation', 'Genito-urinary Medicine', 'Holography Instrumentation', 'Impedance Sensors', 'Infrared Imaging Instrument.', 'Infrared Sensor Instrument.', 'Intelligent Instrument', 'Intensive Care', 'Micro-optics', 'Microscopy - SEM/TEM/proton', 'Microscopy - Optical', 'Probe Micros.(AFM/STM/thermal)', 'Optical Fibres', 'Optical Sensors', 'Optical Systems', 'Optics - Sol-gel', 'Physical Biosensors', 'Positron Emission Tomog. (PET)', 'Pressure Sensors', 'Process Tomography', 'Process/Manufacturing Sensors', 'Radionucleide Imaging Instrum.', 'Reactor Technology', 'Real-time Monitoring', 'Safe Handling', 'Sensor Arrays', 'Sensor Integration', 'Structural Health Monit. Sens.', 'Tomography Instrumentation', 'Ultrasound Instrumentation', 'X-ray Imaging']
  }, {
    subjectName: 'Remote Sensing & Earth Obs.',
    topics: ['(null)']
  }, {
    subjectName: 'Social Stats. Comp. & Methods',
    topics: ['Survey Sampling Methods', 'Administrative data', 'Computer Intensive Methods', 'Case studies in Research', 'Cross-sectional methods', 'Data Resources', 'Data linkage', 'Evaluative methods', 'Causal Analysis', 'Experimental methods', 'Geo-spatial methods', 'Longitudinal methods', 'Mixed mode methods', 'Modelling methods', 'Network methods', 'Observational methods in Res.', 'Response rates', 'Transactional data', 'Visual methods', 'Web based resources']
  }, {
    subjectName: 'Theoretical biology',
    topics: ['Quantitative structure activity relationship']
  }, {
    subjectName: 'Tools for the biosciences',
    topics: ['Chemical shift', 'Circular dichroism', 'Electron Spin Resonance Spectroscopy (ESR)', 'Magnetic Resonance Spectroscopy (MRS)', 'Solid state NMR', 'Synchrotron', 'Data integration', 'Data libraries', 'Data repositories', 'Data sampling & reduction', 'Data standardisation', 'Data storage', 'Databases', 'Distributed information management', 'Evolutionary computing', 'Hypermedia', 'Neural computing', 'Search tools', 'Sequence alignment tools', 'Systems development', 'Systems integration', 'Ab initio modelling', 'Information processing', 'Supercomputers', 'Visualisation', 'Cell imaging', 'Diffusion tensor imaging', 'Fluorescent protein tags', 'Functional MRI', 'Infrared Imaging (IR)', 'Scintigraphy/Gamma Camera', 'Phase Emission Tomography (PET)', 'Radionucleide Imaging', 'Real time imaging', 'Real time in vivo functional analysis', 'Security and crime prevention applications', 'Tagging', 'Whole body imaging', 'Whole cell imaging', 'Environmental Scanning Electron Microscopy (ESEM)', 'Electron microscopy', 'Fluorescence microscopy', 'Imaging probes', 'Bioreactors']
  }, {
    subjectName: 'Technology and method dev',
    topics: ['(null)', 'Multiplexing methods', 'Biochemical technology', 'Cell cultures', 'Semipermeable membranes', 'Bioreactors', "Quantitative 'omics and imaging technology", 'Flow cytometry']
  }, {
    subjectName: 'Environmental biotechnology',
    topics: ['Biofilms', 'Cell antibiotic production', 'Endocrine chemistry', 'Extracellular polymeric substances', 'Freshwater microbial communities', 'Genetic structure', 'Hypersaline fluids', 'Marine microbial communities', 'Methylation', 'Microbial degradation', 'Microbial diversity', 'Microbial genetics', 'Nanomaterial manufacture', 'Naphthenic acid', 'Natural resistance', 'Oil sands', 'Polycyclic aromatic hydrocarbons', 'Secondary metabolites', 'Soil contamination', 'Water quality']
  }, {
    subjectName: 'Environmental Informatics',
    topics: ['Aquatic environments', 'Biodiversity monitoring', 'Comparative genomics', 'Data analysis', 'Data visualisation', 'Data-assimilative modelling', 'Databases', 'Ecosystem monitoring', 'Environmental impact assessment', 'Flood risk assessment', 'Genome sequencing', 'Genotypes', 'Geographical information systems', 'Hydrology', 'Jellyfish abundance', 'Lava flows', 'Metabarcoding', 'Metabolomics', 'Metagenetics', 'Metagenomics', 'Phenotypes', 'Pollutants', 'Remote sensing', 'Reproductive systems', 'Sea level observing system', 'Sex determination', 'Uncertainty estimation', 'Volatile organic carbon']
  }, {
    subjectName: 'Survey & Monitoring',
    topics: ['Air quality', 'Aquatic modelling', 'Autonomous underwater vehicles', 'Biodiversity monitoring', 'Circulation mapping', 'Drainage basins', 'Forest inventory', 'Geographical information systems', 'Geomagnetic field', 'Global positioning systems', 'Gravitational field', 'Hyperspectral remote sensing', 'Ice sounding', 'Infrared remote sensing', 'Laser scanning', 'Marine habitats', 'Marine protected areas', 'Nanoparticles', 'Ocean drilling', 'Optical remote sensing', 'Peatland carbon', 'Plankton recorders', 'Primary productivity', 'Risk assessment', 'River morphology', 'Sea level observing system', 'Synthetic aperture radar', 'Tide gauges', 'Trace gas measurement', 'Vegetation monitoring', 'Water flow', 'Water quality']
  }, {
    subjectName: 'Technol. for Environ. Appl.',
    topics: ['Adaptive mesh modelling', 'Autonomous underwater vehicles', 'Carbon storage', 'Chemical analysis', 'Cloud droplets', 'Diffusive gradients in thin films', 'Dimethyl sulphide monitoring', 'Dissolved organic matter', 'Electrical resistivity tomography', 'Fossil fuels', 'Gas chromatography', 'Geomechanical deformation', 'Ground-based networks', 'Laser ablation', 'Laser heterodyne radiometry', 'Laser scanning', 'Leaf area index', 'Lidar sensing', 'Magnetic field modelling', 'Mass spectrometry', 'Nanoparticles', 'Ocean tides', 'Particle size analysis', 'Power generation', 'Radar observation', 'Raman spectroscopy', 'Remote sensing', 'Satellite observation', 'Sondes', 'Stable isotope analysis', 'Synthetic aperture radar', 'Tide gauges', 'Trace gas measurement', 'Water quality', 'Weather balloons', 'Weather forecasting']
  }]
}, {
  areaName: 'Visual arts',
  subjects: [{
    subjectName: 'Applied Arts HTP',
    topics: ['(null)']
  }, {
    subjectName: 'Art History',
    topics: ['(null)']
  }, {
    subjectName: 'Art Theory & Aesthetics',
    topics: ['(null)']
  }, {
    subjectName: 'Design HTP',
    topics: ['(null)']
  }, {
    subjectName: 'Digital Arts HTP',
    topics: ['(null)']
  }, {
    subjectName: 'Fine Art HTP',
    topics: ['(null)']
  }, {
    subjectName: 'Installation & Sound Art HTP',
    topics: ['(null)']
  }, {
    subjectName: 'Photography HTP',
    topics: ['(null)']
  }, {
    subjectName: 'Time-Based Media HTP',
    topics: ['(null)']
  }, {
    subjectName: 'Ethnography & Anthropology',
    topics: ['(null)']
  }, {
    subjectName: 'Film-based media (H T & P)',
    topics: ['(null)']
  }, {
    subjectName: 'Community Art inc A & H',
    topics: ['(null)']
  }]
}];
const allTheCats = exports.allTheCats = massiveCatsList;