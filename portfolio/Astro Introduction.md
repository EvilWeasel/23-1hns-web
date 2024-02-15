# 🤔Was ist Astro?

Astro ist geil! Okay, nice. Jetzt der Sales-Pitch:

Astro ist ein Webserver-Framework, wie z.B. auch ***ASP.NET***, **Springboot**, **Django**, **Express.js**, **Ruby on Rails**, **Laravell** oder ähnlichen.

Cool, aber was macht denn Astro so besonderst?

Astro ist ein All-in-One Framework. Heißt direkt, dass es alles inkludiert, was man braucht um fast jede beliebige Seite umzusetzen. Man mag jetzt denken "Das sagen sie alle". Allerdings sprechen einige Punkte für Astro im speziellen:

- Geringer Ressourcenverbrauch, bei Client und Server.
- Einfaches SEO Setup... Ja, wirklich! :)
- Simpel, mit sinnvollen Defaults.

Das alleine sind schon gute Argumente, aber hier einige Features, welche richtig `nice` sind:

- Fokus auf Content - Inhalte können in den verschiedensten Formaten ganz einfach hinzugefügt werden.
- Inseln/Islands - So werden in Astro Komponenten genannt. Mehr zu Komponenten, später.
- Speed als Default - Seiten sind erstmal Static-HTML, was die Seite besonderst schnell laden lässt.
- Easy - Astro ist besonderst Einsteigerfreundlich
- Flexibel - Es gibt für die meisten Use-Cases passende Integrationen, die einem die Arbeit vereinfachen
- Unterstützt verschiedene UI-Frameworks wie React, Svelte, Solid, Lit und mehr.

# 🚧Projektinitialisierung

Ein neues Astro-Projekt kann mit folgendem Command initialisiert werden. Wenn ihr nicht bereits in einem leerem Ordner für euer Projekt seid, erstellt der Command diesen Ordner automatisch für euch.

```shell
npm create astro@latest
```

Danach müssen wir noch mit dem `cd` Command in den Ordner wechseln.

# 🚀Starten des Dev-Servers

Der folgende Command startet den Development-Server auf Port `4321`.

```shell
npm run dev
```

# 🌲Projektstruktur

Astro hat ein bereits definiertes Layout für die Projektstruktur. Ihr könnt natürlich weitere Unter-Ordner hinzufügen und euer Projekt strukturieren wie es für euch am Besten ist. Allerdings gibt es einige kleine Vorgaben.

- `src/*` Source-Code der Website (Komponenten, Seiten, Styles, usw.)
- `public/*` Alle öffentlichen statischen Dateien. Diese Dateien werden einfach durch den Webserver veröffentlicht (Fonts, Icons, usw.)
- `package.json` Das Projekt-Manifest. Hier werden alle Abhängigkeiten deklariert sowie der Projekt-Name, der Author, usw.
- `astro.config.mjs` Eine Astro Konfigurationsdatei
- `tsconfig.json` Eine TypeScript Konfigurationsdatei

## Tree

Output von `tree -I node_modules`:
```shell
.
├── astro.config.mjs
├── package.json
├── package-lock.json
├── public
│   └── favicon.svg
├── README.md
├── src
│   ├── components
│   │   └── Card.astro
│   ├── env.d.ts
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── tsconfig.json

6 directories, 10 files
```

# 🚀 Getting-Started

## Komponenten

Bisher haben wir mit statischen HTML-Seiten gearbeitet. Das heißt wir haben einen einfachen Webserver, der auf eingehende HTTP-GET-Requests mit einer HTML-Datei antworten. Dann verlinken wir in diesen HTML-Dateien noch ein paar Stylesheets und schicken noch ein Script mit und das war's.

Das hat in den 90er Jahren gut funktioniert und kann man heute auch noch machen.
Allerdings haben wir heute meist höhere Ansprüche an unsere Webseiten. Wir wollen ein einheitliches CI, interaktivität und teilweise bauen wir ganze Apps wie ein Discord oder Spotify im Browser.
Das ganze ist mit so einer einfachen Struktur aber sehr mühseelig.

Für genau diesen Zweck hat man sich Webkomponenten ausgedacht.

Um eine Seite mit solchen Komponenten zu bauen, brauchen wir ein UI-Framework wie React, Svelte, Angular oder andere. Diese Frameworks unterscheiden sich in Syntax, Konventionen und Konfiguration. Die Idee bleibt die gleiche:

### Wie ist eine Komponente aufgebaut?

Stellen wir uns vor wir wollen auf unsere Webseite ein Kartendesign bauen und auf mehreren Unterseiten verwenden. Wir erstellen also eine `card.astro` Datei.
Eine `.astro` Datei enthält nicht nur unser HTML, spezifisch nur für die Karte, sondern auch die zugehörigen Styles und JavaScript.

Stellt euch einfach vor ihr habt anstatt einer HTML-Datei in der viele unterschiedliche und gleiche Elemente ineinander geschachtelt habt, habt ihr in modernen Frameworks mit Komponentensystem jeweils genau eine Datei für jedes einzigartige UI-Element, inklusive HTML, CSS und JavaScript.

**navbar.astro**
```astro
---
interface Props {
}
import { Icon } from 'astro-icon/components';
---

<nav>
	<div class="logo">
		<Icon name="devicon:archlinux-wordmark" />
	</div>
	<ul class="link-bar">
		<li><a href="#about-me">About Me</a></li>
		<li><a href="#projects">Projects</a></li>
		<li><a href="#contact">Contact</a></li>
	</ul>
	<div class="switches">
		<Icon name="mdi:lightbulb-on" />
		<Icon name="mdi:lightbulb-night-outline" />
	</div>
</nav>

<style>
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 50px;
    height: 3em;
  }
  nav ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    justify-content: space-around;
    gap: 2rem;
    font-size: 1.2em;
  }
  nav div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    height: 100%;
  }
  nav [data-icon] {
    width: auto;
    height: 100%;
  }
  nav .logo [data-icon] {
    height: 200%;
    margin-top: -20%;
  }
```

## 🌴Astro-Inseln

Astro-Inseln, oder auch Astro-Islands oder Komponenteninseln, bezeichnet eine interaktive UI-Komponente auf einer ansonsten statischen HTML-Seite. Das heißt wir können eine extrem schnelle Seite haben, welche kleine Inseln an Interaktivität bietet, welche dann vielleicht ein wenig langsamer nachladen.
Kuchen bekommen und Kuchen essen in einem.

![[Pasted image 20240215075333.png]]
