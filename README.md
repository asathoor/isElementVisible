Er elementet synligt?
=====================

Eksemplet følger en tutorial af Bror Arnfast. Hans funktion `elFllVsbl(el){ etc. }` undersøger om et element er synligt på skærmen eller ej. Funktionen kan være nyttig i mange sammenhænge i forbindelse med fx webdocumentaries og andre længere dokumenter, hvor audio og video skal afspilles, når elementet bliver synligt.

## NB: audio-tagget returnerer altid true

Husk at teste for om div-en som indeholder audioelementet er synligt. Derfor:

~~~~
if (elFllVsbl ( lyd )){ ...
~~~~

og ikke:

~~~~
if (elFllVsbl ( mySound )){ ...
~~~~

Audio-elementet returnerer altid `true`, når det testes med `elFllVsbl()`, hvorimod en div vil returnere både `true` og `false`. Derfor skal audiotagget placeres i en div eller lignende, og funktionen skal undersøge om div-tagget som indeholder lyden er synligt.