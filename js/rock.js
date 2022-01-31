rock = [
"https://www.youtube.com/watch?v=eVTXPUF4Oz4&ab_channel=LinkinPark",
"https://www.youtube.com/watch?v=aCyGvGEtOwc&ab_channel=Paramore",
"https://www.youtube.com/watch?v=_ikArCV_zD0&ab_channel=MotherMother-Topic",
"https://www.youtube.com/watch?v=lv1K0H_4mfw&ab_channel=MotherMother-Topic",
"https://www.youtube.com/watch?v=v8ZAVruZ63M&ab_channel=MotherMother",
"https://www.youtube.com/watch?v=fFt0s7crDfo&ab_channel=MotherMotherVEVO",
"https://www.youtube.com/watch?v=RRKJiM9Njr8&ab_channel=MyChemicalRomance",
"https://www.youtube.com/watch?v=-k9qDxyxS3s&ab_channel=BMTHOfficialVEVO",
"https://www.youtube.com/watch?v=QJJYpsA5tv8&ab_channel=BMTHOfficialVEVO",
"https://www.youtube.com/watch?v=810zk7nqMLI&list=PLBFFB156E473F8A94&index=2&ab_channel=ff8addict1",
"https://www.youtube.com/watch?v=RB-RcX5DS5A&list=PL7JYADiEFo7mOe_dJ0m_XR4lrI_KgI7Rq&ab_channel=Coldplay",
"https://www.youtube.com/watch?v=VUb1p8fm7Ag&list=PLxa1YYCVnUZXxTEfbAnlLtMb2rR0j8A4O&ab_channel=Nightwish",
"https://www.youtube.com/watch?v=8SbUC-UaAxE&list=PLBB13F295B0C02A30&index=1&ab_channel=GunsNRosesVEVO",
"https://www.youtube.com/watch?v=xSQD_IKZzIQ&list=PL6wb5PaEJRC15qCeN4Q0bCp-mNwv8ZCe8&index=1&ab_channel=Skindred-Topic"
]

function rockAleatorio()
{
    window.open(rock[Math.floor(Math.random() * rock.length)], '_blank')
}