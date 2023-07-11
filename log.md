## Prosess, valg og tanker

### Valg av API

Jeg snublet over DnD APIet. Vi er en gjeng som prøver å få til å spille DnD noe regelmessig, men fordi vi kjører en såkalt homebrew campaign så er det mye prep. Så å bruke dette APIet til eget bruk høres gøyt ut.

### Bedre API!

Det første APIet jeg jobbet med var kult, men det andre var bedre. Det andre hadde saklige endepunkter som gjør at slipper å gjøre agregering og slik

### Fikk ikke laget søk

Som `Search.tsx`kanskje avslører ville jeg egentlig gjøre noe med søk istedenfor å bare leke med inifinateFetch fra `react-query`

### Hvordan sikre mot feil

- Denne tjenesten fungerer ikke så mye dersom APIet kaster feil. Jeg lener meg på typesystemet som er inferert i responsen fra APIet, men jeg siden jeg ikke styrer output fra APIet er dette en naiv tilnærming. Kunne lent meg på et bibliotek som gjør noe typevalidering runtime, men det har jeg ikke tid til

- Jeg lener meg på at `react-query` lar meg implementere error-state dersom jeg vil.

### Videre arbeid

- Skulle lekt meg mer med APIet. Søkt, filtrering
- Skulle kunne lagret data i loacleStorage for å faktisk kunne lagre data
- Animasjoner og notifikasjoner på at `state` er endret.
- Lage flere DM verktøy
