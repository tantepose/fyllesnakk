var questsDilemma = [];
var questsBefaler = [];
var questsBordet = [];
var questsFortell = [];
var questsMobilen = [];
var questsTopptre = [];

var loadQuests = function ()
{
    
    questsTopptre = ["...kollegaer du vil ligge med?",
    "...kjendiser du vil ligge med?",
    "...venner du vil ligge med?",
    "...andres kjærester du vil ligge med?",
    "...dyr du helst ville hatt sex med?",
    "...fetisjer du ville prøvd?",
    "...sportslige prestasjoner?",
    "...akademiske prestasjoner?",
    "...ting du ville bli når du var liten?",
    "...verste ting fra 90-tallet?",
    "...verste ting fra 80-tallet?",
    "...beste ting fra 90-tallet?",
    "...beste ting fra 80-tallet?",
    "...folk du kunne drept?",
    "...sykdommer du ikke vil ha?",
    "...nasjonaliteter du vil ha sex med?",
    "...klær du hater?",
    "...yrker du kunne tenke deg?",
    "...sportsgrener å være proff i?",
    "...folk du ikke vil møte igjen?",
    "...dårlige perioder av livet?",
    "...gode perioder av livet?",
    "...dyreste kjøpene dine de siste åra?",
    "...galeste folkene du kjenner?",
    "...band du ville spilt i?",
    "...imitasjoner av kjendiser du kan?",
    "...populærkulturelle låter du kan synge?",
    "...evner du skulle ønske du hadde?",
    "...valg i livet du skulle ønske å endre?",
    "...familiemedlemmer?",
    "...verste ferieminner?",
    "...beste ferieminner?"]

    questsDilemma = ["Drikke mye tiss eller spise litt bæsj?",
    "Aldri sex eller aldri onani?",
    "Ligge med gammel motkjønnet eller ung medkjønnet?",
    "Leve avholds eller i sølibat?",
    "Være transseksuell eller aseksuell?",
    "Kline med eller kline til sjefen?",
    "Kysse rumpa eller tunga til pappa?",
    "Bli skikkelig dum eller skikkelig feit?",
    "Megapinlig kjønnsykdom eller farlig sykdom?",
    "Være pedofil eller nekrofil?",
    "Ligge med 15- eller 50-åring?",
    "Hvilken tante/onkel vil du helst ligge med?",
    "Miste penis eller hender?",
    "Alltid orgasme etter ett sekund, eller aldri?",
    "Bli døvblind eller velge bekjent som må dø?",
    "Drikke mens eller spise bajs?",
    "Hvilket dyr ville du helst liggi med?",
    "Sex med psykisk eller fysisk funksjonshemma?",
    "Megastort eller megalite kjønnsorgan?",
    "Trekant med to greie eller vanlig med én megafin?",
    "Kjønnshår som skjegg eller skjegg som kjønnshår?",
    "Stor bukake eller medium bæsje-i-fjeset?",
    "Miste anus eller tomlene?",
    "Være pen i fattig land eller stygg i rikt land?",
    "Hvilket familiemedlem ville du helst ligget med?",
    "Megahårete fin kropp eller hårløs stygg kropp?",
    "Store ereksjons- eller konsentrasjons-vansker?",
    "Grønn kjempedigg sæd eller helt vanlig?",
    "Kjæreste med 15- eller 60-åring?",
    "Være gynokolog eller mammograf?",
    "Miste jobben eller kjæresten?",
    "Lukte jævlig eller se jævlig ut?",
    "Aldri oralsex eller aldri onani?",
    "Drepe en katt eller apekatt?",
    "Hjerneskade eller hjerteskade?",
    "Dø gammel og trist eller ung og glad?",
    "Evig førr og fyrrig eller vanlig livsløp?",
    "Leve med vakker FrP-er eller stygg SV-er?"];

    questsBordet = ["...ville du helst klina med?",
    "...tror du har lengst penis?",
    "...tror du er lykkeligst?",
    "...tror du er gladest i deg?",
    "...tror du har ligget med flest?",
    "...ville du hatt som forelder?",
    "...har du pinligst historie om?",
    "...er du oftest irritert på?",
    "...ville du helst ikke ligget med?",
    "...har du vært slemmest med?",
    "...har du vært snillest med?",
    "...tror du er best i senga?",
    "...tror du er mest sjenert i senga?",
    "...tror du har oftest sex?",
    "...tror du er best kjæreste?",
    "...tror du er verst kjæreste?",
    "...synes du er morsomst?",
    "...vil du helst på nach med i natt?",
    "...vil du helst våkne med i morra?",
    "...tror du har hatt mest cybersex?",
    "...tror du har best intimfrisering?",
    "...tror du hater Fyllesnakk mest?",
    "...ville du helst ligget med?",
    "...er hvem i Venner for livet?",
    "...er hvem i Seinfeld?",
    "...er hvem i Mot i Brøstet?",
    "...tror du onanerte sist?",
    "...tror du hadde sist sex?",
    "...veier hva?",
    "...ville du helst møtt i slåsskamp?",
    "...ville du helst ikke møtt i slåsskamp?",
    "...tror du lever lengst?",
    "...tror du lever kortest?",
    "...tror du er rikest?",
    "...tror du er fattigst?",
    "...vil du ikke ha som statsminister?",
    "...vil du ha som statsminister?",
    "...vil du ha som sjef?",
    "...vil du ikke ha som sjef?",
    "...ville du ansatt i selskapet ditt?",
    "...ville du ikke ansatt i selskapet ditt?",
    "...tror du gir best oralsex?",
    "...ville vært mest trolig Trump-velger?",
    "...har heitest kjæreste?",
    "...har morsomst kjæreste?",
    "...har kulest foreldre?"];

    questsFortell = ["...ditt første samleie!",
    "...ditt første kyss!",
    "...ditt første seksuelle minne!",
    "...din pinligste episode!",
    "...din pinligste telefonsamtale!",
    "...din verste date!",
    "...din verste sex!",
    "...din tante/onkel du helst vil ligge med!",
    "...din beste sex!",
    "...dine par-kjælenavn på kjønnsorgan!",
    "...din klinings med størst aldersforskjell!",
    "...din dårligste samvittighet!",
    "...ditt aller tristeste øyeblikk!",
    "...ditt aller lykkeligste øyeblikk!",
    "...din verste fyll!",
    "...ditt beste narkominne!",
    "...din verste fylleskade!",
    "...kollegaen du helst vil ligge med!",
    "...kollegaen du helst vil drepe!",
    "...ditt mest harry russeminne!",
    "...noe du skammer deg over!",
    "...russenavnet ditt!",
    "...russekortet ditt!",
    "...din siste cybersex!",
    "...din intimpleie og -frisering!",
    "...din elskers intimfrisering!",
    "...rareste sted hatt sex!",
    "...hvilken rase helst ligge med!",
    "...hvilken funksjonshemming helst sex med!",
    "...hva enn motspillerne befaler!",
    "...når du sist ville drepe noen!",
    "...når du sist var skikkelig forbanna!",
    "...din verste nyttårsaften!",
    "...din beste nyttårsaften!",
    "...når du sist onanerte!",
    "...din siste bæsjetur!",
    "...når du sist hadde sex!",
    "...dine dovaner, i detalj!",
    "...din årslønn og formue!",
    "...hva du synes om denne festen!",
    "...sist du dumpa noen!",
    "...sist du ble dumpa!",
    "...verste jobben du har hatt!",
    "...hvor ofte du onanerer!",
    "...det som har irritert deg mest siste uke!",
    "...når du sist gråt!",
    "...når du sist så noen gråte!",
    "...hvem du har sagt du elsker!",
    "...din siste prump!",
    "...din siste #metoo-opplevelse!",
    "...noe du angrer skikkelig på!"];

    questsBefaler = ["Kyss personen flaska peker på!",
    "Styrt resten av flaska!",
    "Vis fram tissen!",
    "Vinn en håndbak!",
    "Si fem styggeste orda du kan!",
    "Spis en buse!",
    "Vinn rappe-battle!",
    "Spis motspillernes krav!",
    "Ta på tissen til den flaska peker på!",
    "Ta ti armhevinger eller vis overkroppen!",
    "Fortell en hemmelighet!",
    "Si 6 synonymer på vagina på 10 sekunder!",
    "Gjem deg, ikke bli funnet på 10 sekunder!",
    "Ta en shot, med egenlaget skål!",
    "Kyss puppen til den flaska peker på!",
    "Klar to runder Kims lek!",
    "Tiss! Bevis at du tisser!",
    "Rap i over to sekunder!",
    "Kyss skrittet til den flaska peker på!",
    "Ring på hos naboen, stikk, følg med!",
    "Vinn runde i valgfritt dataspill!",
    "Imponer med et kroppslig triks!",
    "Vis fram kroppslig skavank!",
    "Vis og forklar alle arr!",
    "Ta foten på tissen og fortell vits!",
    "Tunga på øyeeplet til den flaska peker på!",
    "Bodyshot fra den flaska peker på!",
    "Spis din egen, eller andres, navlelo!",
    "Gjør et megafett partytriks!",
    "Si 6 synonymer på penis på 10 sekunder!",
    "Tegn ditt eget kjønnsorgan!",
    "Tegn din egen nakne kropp!",
    "Gå med leppestift neste timen!",
    "Vis brystvorte!",
    "Fortell mest rasistiske vitsen du kan!",
    "Fortell mest sexistiske vitsen du kan!"];

    questsMobilen = ["Vis siste melding fra motkjønnet!",
    "Vis hotteste bildet du har!",
    "Snakk skittent med Siri!",
    "Vis nummeret til mest kjente person!",
    "Søk opp 'sex' blant epostene!",
    "Les siste Facebook-melding!",
    "Vis mest attraktive Facebook-venn!",
    "Flere Facebook-venner enn den flaska peker på?",
    "Les og forklar siste fem anrop!",
    "Forklar i detalj siste bilde!",
    "Vis styggeste du har klina med!",
    "Vis dummeste Facebook-venn!",
    "Ring forelder, forklar Fyllesnakk!",
    "Ring motspillers krav!",
    "Ring fem kontakter, legg på etter første ring!",
    "Legg ut selfie!",
    "Skriv 'skjera :)' til motspilleres krav!",
    "FB-status: 'kose, noen? ;)'",
    "FB-status: 'sykt drita, nach? :-)'",
    "FB-status: 'livet... :('",
    "Få to likes etter ett minutt!",
    "Les og forklar siste notat!",
    "Ring eks, legg på etter ett ring!",
    "Lik gammelt bilde av eks!",
    "Vis siste selfie!",
    "Ventende snapps? Vis! Ikke? Fis!",
    "Send sexy selfie i siste FB-samtale!",
    "Skriv 'kline? :-D' i siste FB-samtale!",
    "Lik alle FB-poster i fem sveip nedover!",
    "Vinn duell i valgfritt mobilspill!",
    "Vis fineste på barneskolen!",
    "Vis dummeste på barneskolen!",
    "Vis Facebook-venn med størst pupper!",
    "Vis Facebook-venn med størst tiss!",
    "Poke eks på Facebook!",
    "Les siste ti meldinger i siste SMS-tråd!",
    "Les siste e-post fra sjefen!",
    "Les den mest romantiske meldingen!",
    "Meld deg inn i Mannegruppa Ottar!",
    "Kommenter :( på øverste FB-innlegg!",
    "Send :'( i siste FB-tråd!",
    "La motspillerne vurdere selfiene dine!",
    "Tegn penis, ta bilde, send i siste tråd!",
    "Plukk kontakt i blinde, ring!",
    "Beskriv siste 5 bilder, ikke vis!",
    "Vis fram alle bankkontoer!",
    "Vis og forklar siste 5 vippsinger!"];
}
