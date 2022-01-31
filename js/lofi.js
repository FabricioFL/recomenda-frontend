lofi = [
    "https://www.youtube.com/watch?v=XE2IvHxdkDM&ab_channel=thebootlegboy",
    "https://www.youtube.com/watch?v=_ITiwPMUzho&t=1213s&ab_channel=LofiGhostie",
    "https://www.youtube.com/watch?v=NxSDNogkKX0&ab_channel=Dreamy",
    "https://www.youtube.com/watch?v=yFOdkyaoUTg&ab_channel=Hitkend",
    "https://www.youtube.com/watch?v=ZhstyJSNKME&ab_channel=CORTESCANHOTOS",
]

function lofiAleatorio()
{
    window.open(lofi[Math.floor(Math.random() * lofi.length)], '_blank')
}