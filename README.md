<a id="-ai-agent-project"></a>

<p align="center">
  <img src="assets/logo.png" alt="Pokedex CLI" width="200" />
</p>

<h1 align="center">🔴 Pokedex CLI</h1>

<p align="center">
  <strong>A feature-rich, interactive Pokedex built as a REPL (Read-Eval-Print Loop) in TypeScript.</strong>
</p>

<p align="center">
  <a href="https://pokeapi.co/">
    <img src="https://img.shields.io/badge/API-PokéAPI-red?style=for-the-badge&logo=pokemon" alt="PokéAPI" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-7.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  </a>
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge&logo=nodedotjs" alt="Node.js" />
  </a>
  <a href="https://www.boot.dev/certificates/e79ffcb6-a45d-4fac-b964-5c7c9eef8bcf">
    <img src="https://img.shields.io/badge/Boot.dev-Certified-6C47FF?style=for-the-badge" alt="Boot.dev Certificate" />
  </a>
</p>

---

## 📖 Table of Contents

- [📖 Project Overview](#-project-overview)
- [📚 Course Chapters Completed](#-chapter-breakdown)
- [✨ Features](#-features)
- [🧠 How It Works](#-how-it-works)
- [🛠 Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
  - [✅ Prerequisites](#-prerequisites)
  - [📦 Installation](#-installation)
- [🎮 Usage](#-usage)
  - [📋 Available Commands](#-available-commands)
  - [💡 Example Session](#-example-session)
- [🏗️ Project Structure](#%EF%B8%8F-project-structure)
- [🔧 Command Reference](#-command-reference)
- [🧪 Testing](#-testing)
- [🔮 Future Improvements](#-future-improvements)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🎓 Certificate](#-certificate)
- [👨‍💻 About Me](#-about-me)

---

## 📖 Project Overview

**Pokedex CLI** is an interactive command-line application that simulates a Pokédex — the iconic device from the Pokémon universe. It connects to the [PokéAPI](https://pokeapi.co/) to fetch real-time data about Pokémon, location areas, and encounters.

Users interact with the application through a custom-built **REPL** (Read-Eval-Print Loop), typing commands to explore the Pokémon world, catch Pokémon, and build their personal Pokédex — all from the terminal.

> **What will you learn?**
>
> A REPL, or Read-Eval-Print Loop, is a simple interactive programming environment that takes user input, evaluates it, and returns the result to the user. In this guided project, you'll build a Pokedex-like REPL in TypeScript that uses the PokeAPI to fetch data about Pokémon. It's a great way to put your TypeScript knowledge to the test and learn valuable skills like **HTTP networking** and **data serialization**.

### 📚 Chapter Breakdown

| #   | Chapter       | Description |
|-----|---------------|-------------|
| 1   | **REPL**      | A REPL (Read, Eval, Print Loop) is a simple interactive programming environment that takes user inputs, evaluates them, and returns the results. Learn how to implement one from scratch in TypeScript. |
| 2   | **Cache**     | When making network requests, one of the most common performance optimizations is to cache the results. Implement an in-memory cache for the PokeAPI in TypeScript. |
| 3   | **Pokedex**   | Bring your REPL and cache together to complete your fully functional Pokedex CLI. |

---

## 🚀 Getting Started

### ✅ Prerequisites

Before running this project, ensure you have the following installed:

- **[Node.js](https://nodejs.org/)** (v20 or later recommended)
- **npm** (comes bundled with Node.js)

You can verify your installation by running:

```bash
node --version
npm --version
```

### 📦 Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/waleedtarbosh/pokedex-cli.git
    cd pokedex-cli
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Build the project:**

    ```bash
    npx tsc
    ```

4. **Start the Pokedex:**

    ```bash
    node dist/main.js
    ```

    Or use the convenient npm scripts:

    ```bash
    # Build and run in one step
    npm run dev

    # Run (after building)
    npm start
    ```

---

## 🎮 Usage

Once the application starts, you'll be greeted with the interactive REPL prompt:

```
Pokedex >
```

Type any of the available commands and press **Enter** to execute.

### 📋 Available Commands

| Command                     | Description                                        |
|-----------------------------|----------------------------------------------------|
| `help`                      | Displays a help message listing all commands        |
| `map`                       | Displays the **next** 20 location areas             |
| `mapb`                      | Displays the **previous** 20 location areas         |
| `explore <location-area>`   | Lists all Pokémon found in a specific location area |
| `catch <pokemon-name>`      | Attempts to catch a Pokémon and add it to your Pokédex |
| `inspect <pokemon-name>`    | Shows detailed stats of a caught Pokémon            |
| `pokedex`                   | Displays all Pokémon you have caught                |
| `exit`                      | Exits the Pokedex CLI                               |

### 💡 Example Session

```
Pokedex > map
canalave-city-area
eterna-city-area
pastoria-city-area
sunyshore-city-area
...

Pokedex > explore pastoria-city-area
Exploring pastoria-city-area...
Found Pokemon:
 - tentacool
 - tentacruel
 - magikarp
 - gyarados
 ...

Pokedex > catch pikachu
Throwing a Pokeball at pikachu...
pikachu was caught!

Pokedex > inspect pikachu
Name: pikachu
Height: 4
Weight: 60
Stats:
  -hp: 35
  -attack: 55
  -defense: 40
  -special-attack: 50
  -special-defense: 50
  -speed: 90
Types:
  - electric

Pokedex > pokedex
Your Pokedex:
 - pikachu

Pokedex > exit
Closing the Pokedex... Goodbye!
```

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔁 **Custom REPL Engine** | Hand-built Read-Eval-Print Loop — no third-party CLI frameworks |
| 🌐 **Live PokéAPI Integration** | Real-time data fetching for locations, encounters & Pokémon stats |
| 🗄️ **In-Memory Cache** | Generic `Cache<T>` with TTL expiration and automatic reaping |
| 🎯 **Catch Mechanics** | Probability-based catching scaled by Pokémon `base_experience` |
| 📊 **Centralized State** | Single `State` object manages readline, commands, API, pagination & Pokédex |
| 🧪 **Test Suite** | Unit tests with Vitest for input parsing and cache lifecycle |
| 📁 **Modular Commands** | Each command in its own file — easy to add, remove, or modify |

---

## 🧠 How It Works

The app follows a simple **3-step loop**:

```
1️⃣  You type a command       →  e.g. "catch pikachu"
2️⃣  The REPL processes it    →  Parses input → finds the command → runs it
3️⃣  Results are displayed    →  "pikachu was caught!" → back to step 1
```

**Under the hood:**

- 📝 **Input** → The REPL reads your text, trims & lowercases it, and splits it into words
- 🔍 **Lookup** → The first word is matched against the registered commands map
- ⚡ **Execute** → The matching command function runs with the current `State` + any arguments
- 🌐 **API Calls** → Commands like `map`, `explore`, and `catch` fetch data from PokéAPI
- 🗄️ **Caching** → API responses are cached in-memory (5 min TTL) so repeat calls are instant
- 🔁 **Loop** → After every command, the prompt appears again — ready for the next input

---

### Modular Command Architecture — Each command is isolated in its own module (`command_*.ts`). Adding a new command takes 3 steps:

1. Create a new `command_<name>.ts` file
2. Export an async function matching the `CLICommand` callback signature
3. Register it in the `commands` map inside `state.ts`

---

## 🏗️ Project Structure

```
pokedex-cli/
├── 📁 assets/                # Project assets (icons, images)
│   ├── git.svg
│   ├── github.svg
│   ├── linux.svg
│   ├── logo.png
│   ├── profile.webp
│   ├── terminal.svg
│   └── ubuntu.svg
├── 📁 src/                   # Source code
│   ├── main.ts               # 🚀 Entry point
│   ├── repl.ts               # 🔁 REPL engine
│   ├── state.ts              # 📊 State initialization & types
│   ├── pokeapi.ts            # 🌐 PokeAPI client with caching
│   ├── pokecache.ts          # 🗄️ Generic in-memory cache
│   ├── command.ts            # 📝 Base command type
│   ├── command_help.ts       # help
│   ├── command_exit.ts       # exit
│   ├── command_map.ts        # map
│   ├── command_mapb.ts       # mapb
│   ├── command_explore.ts    # explore
│   ├── command_catch.ts      # catch
│   ├── command_inspect.ts    # inspect
│   ├── command_pokedex.ts    # pokedex
│   ├── pokecache.test.ts     # 🧪 Cache unit tests
│   └── repl.test.ts          # 🧪 REPL unit tests
├── .gitignore
├── .nvmrc
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔧 Command Reference

| Command | File | Description |
|---------|------|-------------|
| `help` | `command_help.ts` | Iterates over `state.commands` and prints each command’s name & description |
| `exit` | `command_exit.ts` | Stops the cache reap loop, closes readline, and exits the process |
| `map` | `command_map.ts` | Fetches the next page of location areas and updates pagination cursors |
| `mapb` | `command_mapb.ts` | Fetches the previous page; prints a message if already on page 1 |
| `explore <area>` | `command_explore.ts` | Fetches a location area and lists all Pokémon encounters |
| `catch <name>` | `command_catch.ts` | Fetches Pokémon data, rolls a random catch chance scaled by `base_experience` |
| `inspect <name>` | `command_inspect.ts` | Looks up a caught Pokémon and displays its full stats & types |
| `pokedex` | `command_pokedex.ts` | Lists all Pokémon names stored in `state.pokedex` |

---

## 🧪 Testing

Unit tests are powered by **[Vitest](https://vitest.dev/)** and cover:

| Test File | What It Tests |
|-----------|---------------|
| `repl.test.ts` | `cleanInput()` — trimming, lowercasing, splitting, empty strings |
| `pokecache.test.ts` | Cache `add`/`get` lifecycle and automatic TTL reaping |

```bash
npm test
```

---

## 🔮 Future Improvements

- ⚔️ **Battle Simulation** — Implement turn-based battles between caught Pokémon
- 💾 **Data Persistence** — Save/load your Pokédex to disk (JSON or SQLite)
- 🎒 **Pokéball Variants** — Support different Pokéball types (Great Ball, Ultra Ball, Master Ball) with varying catch rates
- 🗺️ **Detailed Location Info** — Display additional metadata about location areas (region, generation)
- 📈 **Experience & Leveling** — Track Pokémon experience and implement a leveling system
- 🔄 **Pokémon Evolution** — Trigger evolution when conditions are met
- 🎨 **Terminal UI Enhancements** — Add colored output, ASCII art, and loading spinners
- 📊 **Pokédex Completion Tracker** — Show progress toward catching all Pokémon
- 🌐 **Offline Mode** — Expand caching to allow full offline browsing of previously fetched data

---

## 🛠 Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/PokéAPI-EF5350?style=for-the-badge&logo=pokemon&logoColor=white" alt="PokéAPI" />
</p>

<p align="center">
  <img src="assets/terminal.svg" alt="Terminal" width="48" />&nbsp;&nbsp;
  <img src="assets/git.svg" alt="Git" width="48" />&nbsp;&nbsp;
  <img src="assets/github.svg" alt="GitHub" width="48" />&nbsp;&nbsp;
  <img src="assets/linux.svg" alt="Linux" width="48" />&nbsp;&nbsp;
  <img src="assets/ubuntu.svg" alt="Ubuntu" width="48" />
</p>

<p align="center">
  <strong>Terminal</strong> &nbsp;•&nbsp; <strong>Git</strong> &nbsp;•&nbsp; <strong>GitHub</strong> &nbsp;•&nbsp; <strong>Linux</strong> &nbsp;•&nbsp; <strong>Ubuntu</strong>
</p>

---

## 🎓 Certificate

This project was completed as part of the [Boot.dev](https://www.boot.dev/) backend development curriculum.

🏆 **[View Certificate](https://www.boot.dev/certificates/e79ffcb6-a45d-4fac-b964-5c7c9eef8bcf)**

---

## 👨‍💻 About Me

<p align="center">
  <img src="assets/profile.webp" alt="Waleed Tarbosh" width="140" style="border-radius: 50%;" />
</p>

<h3 align="center">Waleed Tarbosh</h3>
<p align="center"><em>Aspiring developer, currently learning backend development through <a href="https://www.boot.dev/">Boot.dev</a>.</em></p>

<p align="center">
  <a href="https://github.com/waleedtarbosh">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  &nbsp;
  <a href="mailto:waleedtarbush@gmail.com">
    <img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
  &nbsp;
  <a href="https://www.boot.dev/certificates/e79ffcb6-a45d-4fac-b964-5c7c9eef8bcf">
    <img src="https://img.shields.io/badge/Boot.dev-6C47FF?style=for-the-badge&logo=bootdotdev&logoColor=white" alt="Boot.dev" />
  </a>
</p>

| | |
|---|---|
| 🐙 **GitHub** | [@waleedtarbosh](https://github.com/waleedtarbosh) |
| 📧 **Email** | [waleedtarbush@gmail.com](mailto:waleedtarbush@gmail.com) |
| 🎓 **Boot.dev** | [View Certificate](https://www.boot.dev/certificates/e79ffcb6-a45d-4fac-b964-5c7c9eef8bcf) |

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m "Add amazing feature"`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <img src="assets/logo.png" alt="Boot.dev" width="120" /><br/>
  Built with ❤️ as part of the <a href="https://www.boot.dev/">Boot.dev</a> curriculum<br/><br/>
  <a href="https://www.boot.dev/certificates/c72ee9f4-a798-49ca-8068-ccd8e5832750">
    🏆 View My Certificate
  </a>
</p>

<p align="center">
  <a href="#-ai-agent-project">⬆️ Back to Top</a>
</p>
