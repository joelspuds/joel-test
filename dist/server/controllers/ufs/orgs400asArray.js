'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
let limitedList = ['Abertay University', 'Aberystwyth University', 'Abingdon and Witney College', 'Activate Learning', 'Amity University [IN] London', 'Anglia Ruskin University', 'Anglo-European College of Chiropractic', 'Animal Health Trust', 'Anthony Nolan', 'Arden University', 'Argyll College', 'Armagh Observatory', 'Arts University Bournemouth', 'Askham Bryan College', 'Aston University', 'Ayrshire College', 'Babraham Institute', 'Bangor University', 'Barnet & Southgate College', 'Barnsley College', 'Basingstoke College of Technology', 'Bath College', 'Bath Spa University', 'Beatson Institute', 'Bedford College', 'Berkshire College of Agriculture', 'Bexhill College', 'BirdLife international', 'Birkbeck, University of London', 'Birmingham City University', 'Birmingham Metropolitan College', 'Bishop Auckland College', 'Bishop Burton College', 'Bishop Grosseteste University', 'Blackburn College', 'Blackpool and the Fylde College', 'BMC (Brooksby Melton College)', 'Bolton College', 'Borders College', 'Boston College', 'Bournemouth University', 'Bradford College', 'British & Irish Modern Music Institute', 'British Antarctic Survey', 'British Film Institute', 'British Geological Survey', 'British Institute of International and Comparative Law', 'British Library', 'British Museum', 'British Trust for Ornithology', 'Brockenhurst College', 'Brooklands College', 'Brunel University London', 'Buckinghamshire College Group', 'Buckinghamshire New University', 'Burnley College', 'Burton and South Derbyshire College', 'Bury College', 'CAB International', 'Cambridge Crystallographic Data Centre', 'Cambridge Regional College', 'Canterbury Christ Church University', 'Capital City College Group', 'Cardiff Metropolitan University', 'Cardiff University', 'Carshalton College', 'Central Bedfordshire College', 'Centre for Environment', 'Chatham House', 'Cheshire College South and West', 'Chichester College Group', 'Chicken Shed Theatre Company', 'City College Norwich', 'City College Plymouth', 'City of Bristol College', 'City of Glasgow College', 'City of Westminster College', 'City of Wolverhampton College', 'City University of London', 'Cliff College', 'Colchester Institute', 'Conservatoire for Dance and Drama', 'Cornwall College', 'County Training', 'Court Theatre Training Company Ltd', 'Courtauld Institute of Art', 'Coventry College', 'Coventry University', 'Cranfield University', 'Craven College', 'Croydon College', 'DCG', 'De Montfort University', 'Diamond Light Source', 'Doncaster College University Campus North Lincolnshire', 'Dudley College of Technology', 'Dumfries and Galloway College', 'Dundee and Angus College', 'Durham University', 'Hammersmith and West London College, Ealing', 'Earlham Institute', 'Earthwatch Institute', 'East London NHS Foundation Trust', 'East Riding College', 'East Surrey College', 'Easton and Otley College', 'Edge Hill University', 'Edinburgh College', 'Edinburgh Napier University', 'EKC Group', 'European Bioinformatics Institute', 'European Organization for Nuclear Research', 'European Synchrotron Radiation Facility', 'Exeter College', 'Falmouth University', 'Fareham College', 'Fife College', 'Forth Valley College', 'Furness College', 'Futureworks', 'Gateshead College', 'Glasgow Caledonian University', 'Glasgow Clyde College', 'Glasgow Kelvin College', 'Glasgow School of Art', 'Gloucestershire College', 'Glyndwr University', 'Goldsmiths', 'Grantham College', 'Greater Brighton Metropolitan College', 'Grimsby Institute', 'Guildhall School of Music and Drama', 'Hadlow College', 'Halesowen College', 'Hampshire Business School', 'Harlow College', 'Harper Adams University', 'Harrow College Uxbridge College', 'Hartpury University', 'Havant and South Downs College', 'Havering College of Further and Higher Education', 'Health Data Research UK', 'Heart of Worcestershire College', 'Hereford College of Arts', 'Heriot-Watt University', 'Hertford Regional College', 'Highbury College', 'Historic England', 'Historic Environment Scotland', 'Historic Royal Palaces', 'Holy Cross College', 'Hopwood Hall College', 'HR Wallingford', 'Hugh Baird College', 'Hull College Group', 'Imperial College London', 'Imperial War Museum', 'Institute for Fiscal Studies', 'Institute of Cancer Research', 'Institute of Contemporary Music Performance', 'Institute of Development Studies', 'Institute of Occupational Medicine', 'International Institute for Environment and Development', 'Inverness College', 'Isaac Newton Group of Telescopes', 'James Hutton Institute', 'John Innes Centre', 'Joseph Chamberlain Sixth Form College', 'Keele University', 'Kendal College', 'Kensington and Chelsea College', "King's College London", 'Kingston Maurward College', 'Kingston University', 'Kirklees College', 'Lakes College West Cumbria', 'Lamda Limited', 'Lancashire Adult Learning', 'Lancaster University', 'Learning Unlimited', 'Leeds Arts University', 'Leeds Beckett University', 'Leeds City College', 'Leeds College of Building', 'Leeds College of Music', 'Leeds Trinity University', 'Leicester College', 'Lews Castle College', 'Lincoln College', 'Liverpool Hope University', 'Liverpool John Moores University', 'Liverpool School of Tropical Medicine', 'London Bridge Business Academy', 'London Business School', 'London Film School', 'London Institute for Mathematical Sciences', 'London Metropolitan University', 'London School of Economics and Political Science', 'London School of Hygiene & Tropical Medicine', 'London School of Management Education', 'London School of Theology', 'London South Bank University', 'London South East Colleges', 'Loughborough College', 'Loughborough University', 'Luther King House Educational Trust', 'Macclesfield College of Further and Higher Education', 'Manchester Metropolitan University', 'Marine Biological Association of the United Kingdom', 'Medical Research Council Harwell', 'Middlesbrough College', 'Middlesex University', 'MidKent College', 'Milton Keynes College', 'Mont Rose College of Management and Sciences Limited', 'Moorlands College', 'Moray College', 'Moredun Foundation', 'Morley College London', 'Moulton College', 'MRC Laboratory of Molecular Biology', 'MRC London Institute of Medical Sciences', 'Museum of London Archaeology', 'Myerscough College', 'NatCen Social Research', 'National Archives', 'National Film and Television School', 'National Gallery', 'National Institute of Agricultural Botany', 'National Institute of Economic and Social Research', 'National Maritime Museum', 'National Museum Wales', 'National Museums Liverpool', 'National Museums Scotland', 'National Oceanography Centre', 'National Portrait Gallery', 'National Trust', 'Natural History Museum', 'Nazarene Theological College', 'Nelson College London Limited', 'Nesta', 'New City College', 'New College Durham', 'New College Lanarkshire', 'New College of the Humanities', 'New College Stamford', 'New College Swindon', 'Newbattle Abbey College', 'Newbury College', 'Newcastle College', 'Newcastle University', 'Newcastle-under-Lyme College', 'Newman University', 'North East Scotland College', 'North East Surrey College of Technology (NESCOT)', 'North Hertfordshire College Further Education Corporation', 'North Kent College', 'North Warwickshire and South Leicestershire College', 'Northampton College', 'Northumbria University', 'Norwich University of the Arts', 'Nottingham College', 'Nottingham Trent University', 'Oaklands College', 'Office of Health Economics', 'Orkney College', 'Overseas Development Institute', 'Oxford Brookes University', 'Pearson College London', 'Perth College', 'Peter Symonds College', 'Petroc', 'Pirbright Institute', 'Plumpton College', 'Plymouth College of Art', 'Plymouth Marine Laboratory', 'Plymouth Marjon University', 'Plymouth University', "Preston's College ROI Solutions", 'Public Health England', 'Quadram Institute', 'Queen Margaret University', 'Queen Mary University of London', "Queen's University Belfast", 'RAND Europe', 'Ravensbourne University London', 'Reaseheath College', 'Richmond upon Thames College', 'Riverside College Cronton Sixth Form College', 'RNN Group', 'Robert Gordon University', 'Rosalind Franklin Institute', 'Rose Bruford College of Theatre and Performance', 'Rothamsted Research', 'Royal Academy of Dramatic Art', 'Royal Academy of Music', 'Royal Agricultural University', 'Royal Botanic Garden Edinburgh', 'Royal Botanic Gardens', 'Royal Central School of Speech and Drama', 'Royal College of Art', 'Royal College of Music', 'Royal Conservatoire of Scotland', 'Royal Holloway', 'Royal Northern College of Music', 'Royal Society for the Protection of Birds', 'Royal United Services Institute', 'Royal Veterinary College', 'Ruskin College Oxford', 'Sabhal Mor Ostaig', 'SAE Institute UK', 'Salford City College', 'Sandwell College', 'School of Oriental and African Studies', 'Science and Technology Facilities Council', 'Science Museum', "Scotland's Rural College", 'Scottish Association For Marine Science', 'Selby College', 'Sheffield College', 'Sheffield Hallam University', 'Shetland College', 'Shrewsbury Colleges Group', 'Sightsavers', 'SK College Group', 'Solihull College', 'South & City College Birmingham', 'South Devon College', 'South Essex College of Further and Higher Education', 'South Gloucestershire and Stroud College', 'South Lanarkshire College', 'South Tyneside College', 'Southampton City College', 'Southampton Solent University', 'Southport College', 'Sparsholt College', "Spurgeon's College", "St George's", "St Mary's College", "St Mary's University Twickenham London", 'St Mellitus College', 'Staffordshire University', 'Stephenson College', 'Stockport College Trafford College', 'Stranmillis University College', 'Strode College', 'Sunderland College', 'Swansea University', 'Swindon College', 'Tameside College', 'Tate', 'Tavistock Institute', 'Teesside University', 'Telford College', 'The Academy of Contemporary Music', 'The Alan Turing Institute', 'The Bournemouth and Poole College', 'The City of Liverpool College', 'The Faraday Institution', 'The Francis Crick Institute', 'The Liverpool Institute for Performing Arts', 'The London Institute of Banking & Finance', 'The Manchester College', 'The Metanoia Institute', 'The North Highland College', 'The Northern School of Art', 'The Oldham College', 'The Open University', "The Queen's Foundation for Ecumenical Theological Education", 'The University of Law', 'The Welding Institute', 'The Windsor Forest Colleges Group', 'Transport Research Laboratory (United Kingdom)', 'Trinity Laban Conservatoire of Music and Dance', 'Truro and Penwith College', 'UCEM', 'UK Astronomy Technology Centre', 'UK Centre for Ecology & Hydrology', 'United Kingdom Atomic Energy Authority', 'University Centre Calderdale College', 'University Centre Hastings', 'University Centre Peterborough', 'University Centre Somerset', 'University Centre Weston', 'University College Birmingham', 'University College London', 'University College of Osteopathy (The)', 'University for the Creative Arts', 'University of Aberdeen', 'University of Bath', 'University of Bedfordshire', 'University of Birmingham', 'University of Bolton', 'University of Bradford', 'University of Brighton', 'University of Bristol', 'University of Cambridge', 'University of Central Lancashire', 'University of Chester', 'University of Chichester', 'University of Cumbria', 'University of Derby', 'University of Dundee', 'University of East Anglia', 'University of East London', 'University of Edinburgh', 'University of Essex', 'University of Exeter', 'University of Glasgow', 'University of Gloucestershire', 'University of Greenwich', 'University of Hertfordshire', 'University of Huddersfield', 'University of Hull', 'University of Kent', 'University of Leeds', 'University of Leicester', 'University of Lincoln', 'University of Liverpool', 'University of London', 'University of Manchester', 'University of Northampton', 'University of Nottingham', 'University of Oxford', 'University of Portsmouth', 'University of Reading', 'University of Roehampton', 'University of Salford', 'University of Sheffield', 'University of South Wales', 'University of Southampton', 'University of St Andrews', 'University of Stirling', 'University of Strathclyde', 'University of Suffolk', 'University of Sunderland', 'University of Surrey', 'University of Sussex', 'University of the Arts London', 'University of the Highlands and Islands', 'University of the West of England', 'University of the West of Scotland', 'University of Ulster', 'University of Wales', 'University of Wales Trinity Saint David', 'University of Warwick', 'University of West London', 'University of Westminster', 'University of Winchester', 'University of Wolverhampton', 'University of Worcester', 'University of York', 'USP College', 'Victoria and Albert Museum', 'Vision West Nottinghamshire College', 'Wakefield College', 'Walsall College', 'Warrington & Vale Royal College', 'Warwickshire College Group WCG', 'Wellcome Sanger Institute', 'West College Scotland', 'West Herts College', 'West Highland College', 'West Lothian College', 'West Suffolk College', 'West Thames College', 'Weymouth College', 'Wigan and Leigh College', 'Wiltshire College and University Centre', 'Wirral Metropolitan College', 'World Conservation Monitoring Centre', 'Writtle University College', 'Yeovil College', 'York College', 'York St John University', 'Young Foundation', 'Zoological Society of London'];
const limitedOrgList2 = exports.limitedOrgList2 = limitedList;