---
title: Getting Started
description: Schnellstart Anleitung für AstroJS
---
## 🚧Projektinitialisierung

Ein neues Astro-Projekt kann mit folgendem Command initialisiert werden. Wenn ihr nicht bereits in einem leerem Ordner für euer Projekt seid, erstellt der Command diesen Ordner automatisch für euch.

```shell
npm create astro@latest
```

Danach müssen wir noch mit dem `cd` Command in den Ordner wechseln.

## 🚀Starten des Dev-Servers

Der folgende Command startet den Development-Server auf Port `4321`.

```shell
npm run dev
```

## 🏗️Bauen des Projekts

Um aus unseren einzelnen Source-Files eine an den Kunden auslieferbare Web-App zu generieren, nutzen wir:

```shell
npm run build
```

Die Dateien, welche auf dem jeweiligen Hoster hochgeladen werden müssen, landen nach Eingabe des Commands im `/dist` Directory.

