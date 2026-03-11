# Movie DB

Monorepo with two frontends (React and Angular) and one ASP.NET Core minimal API backend. Both frontends talk to the same API. Browse movies: home (trending, rated, playing) and discover by genre or search.

## Features

- **Home** — Trending, top rated, and now playing movies
- **Discover** — Browse by genre and search
- **Shared API** — Same ASP.NET Core backend for both React and Angular frontends

## Stack

- **Frontend (React):** Vite + React + TypeScript + Tailwind + shadcn/ui
- **Frontend (Angular):** Angular + TypeScript
- **Backend:** ASP.NET Core minimal API + .NET

## Design

UI mockups and sketches: [Figma](https://www.figma.com/design/CRWicww7X51RPQMUclcHtd/movieDb?node-id=0-1&m=dev&t=IQeSOMBBADtV5JlP-1)

## Structure

- `frontend-react/` — React (Vite) SPA
- `frontend-angular/` — Angular SPA
- `backend/` — ASP.NET Core API

In development, both frontends proxy `/api` requests to the backend.

Following is a short preview of the main folder structure. Expand the section below to view the full tree.

```bash
moviedb-react-angular-aspnet/
├── frontend-react/
│   └── src/
│       ├── assets/
│       ├── components/
│       │   └── ui/
│       ├── lib/
│       │   └── shared/
│       ├── pages/
│       ├── App.tsx
│       └── main.tsx
│
├── frontend-angular/
│   └── src/
│       └── app/
│           ├── components/
│           │   ├── ui/
│           │   └── ...
│           ├── pages/
│           ├── services/
│           └── shared/
│               └── models/
│
├── backend/
│   ├── Endpoints/
│   ├── Services/
│   ├── Models/
│   ├── Dtos/
│   ├── Properties/
│   ├── Program.cs
│   └── MovieDb.Api.csproj
│
├── .gitignore
└── README.md
```

<details> <summary><strong>Click to view full project structure</strong></summary>

```bash
moviedb-react-angular-aspnet/
│
├── frontend-react/
│   ├── src/
│   │   ├── assets/
│   │   │   └── react.svg
│   │   │
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   └── input.tsx
│   │   │   │
│   │   │   ├── Dashboard.tsx
│   │   │   ├── GenreFilterButtons.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── MoviesSection.tsx
│   │   │   ├── NavLinks.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── SidebarTrigger.tsx
│   │   │
│   │   ├── lib/
│   │   │   ├── fetchJson.ts
│   │   │   ├── utils.ts
│   │   │   └── shared/
│   │   │       └── movies.ts
│   │   │
│   │   ├── pages/
│   │   │   ├── DiscoverPage.tsx
│   │   │   └── HomePage.tsx
│   │   │
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.tsx
│   │
│   ├── public/
│   │   └── vite.svg
│   │
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   ├── tsconfig.node.json
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   ├── eslint.config.js
│   ├── components.json
│   ├── .gitignore
│   └── README.md
│
├── frontend-angular/
│   ├── src/
│   │   ├── index.html
│   │   ├── main.ts
│   │   ├── styles.css
│   │   │
│   │   └── app/
│   │       ├── app.config.ts
│   │       ├── app.css
│   │       ├── app.html
│   │       ├── app.routes.ts
│   │       ├── app.spec.ts
│   │       ├── app.ts
│   │       │
│   │       ├── components/
│   │       │   ├── dash-board/
│   │       │   │   └── dash-board.ts
│   │       │   │
│   │       │   ├── genre-filter-buttons/
│   │       │   │   └── genre-filter-buttons.ts
│   │       │   │
│   │       │   ├── header/
│   │       │   │   └── header.ts
│   │       │   │
│   │       │   ├── movies-section/
│   │       │   │   └── movies-section.ts
│   │       │   │
│   │       │   ├── nav-links/
│   │       │   │   ├── nav-links.html
│   │       │   │   └── nav-links.ts
│   │       │   │
│   │       │   ├── search-bar/
│   │       │   │   └── search-bar.ts
│   │       │   │
│   │       │   ├── sidebar-trigger/
│   │       │   │   ├── sidebar-trigger.html
│   │       │   │   └── siderbar-trigger.ts
│   │       │   │
│   │       │   └── ui/
│   │       │       ├── button/
│   │       │       │   └── button.ts
│   │       │       └── card/
│   │       │           └── card.ts
│   │       │
│   │       ├── pages/
│   │       │   ├── discover/
│   │       │   │   └── discover.ts
│   │       │   │
│   │       │   └── home/
│   │       │       └── home.ts
│   │       │
│   │       ├── services/
│   │       │   └── movie.service.ts
│   │       │
│   │       └── shared/
│   │           └── models/
│   │               └── movie.dto.ts
│   │
│   ├── public/
│   │   └── favicon.ico
│   │
│   ├── angular.json
│   ├── package.json
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   ├── proxy.conf.json
│   ├── .postcssrc.json
│   ├── .editorconfig
│   ├── .gitignore
│   └── README.md
│
├── backend/
│   ├── Dtos/
│   │   └── Movies/
│   │       └── MovieDto.cs
│   │
│   ├── Endpoints/
│   │   ├── HealthEndpoints.cs
│   │   └── MoviesEndpoints.cs
│   │
│   ├── Models/
│   │   └── TmdbModels.cs
│   │
│   ├── Services/
│   │   ├── MovieService.cs
│   │   └── TmdbClient.cs
│   │
│   ├── Properties/
│   │   └── launchSettings.json
│   │
│   ├── Program.cs
│   ├── MovieDb.Api.csproj
│   ├── MovieDb.Api.http
│   ├── appsettings.json
│   └── appsettings.Development.json.example
│
├── .vscode/
│   ├── launch.json
│   └── tasks.json
│
├── moviedb-react-aspnet.sln
├── .gitignore
└── README.md
```

</details>

## Prerequisites

- .NET SDK
- Node.js (LTS)
- **TMDB read access token** - Backend uses [The Movie Database](https://www.themoviedb.org/settings/api). Add your read access token to `backend/appsettings.Development.json` under `Tmdb:ReadAccessToken`. You can copy `backend/appsettings.Development.json.example` to `appsettings.Development.json` and replace the placeholder with your token.

## Run locally

**Terminal 1 (backend):**

```bash
dotnet run --project backend
```

**Terminal 2 (React frontend):**

```bash
cd frontend-react && npm install && npm run dev
```

Open http://localhost:5173

**Terminal 3 (Angular frontend):**

```bash
cd frontend-angular && npm install && npm start
```

Open http://localhost:4200

Run one frontend at a time (or both in different browsers). Backend runs on port 5223; both frontends proxy /api to it.

## Ports

| Service          | URL                   |
| ---------------- | --------------------- |
| Backend API      | http://localhost:5223 |
| React frontend   | http://localhost:5173 |
| Angular frontend | http://localhost:4200 |

Start the backend first; both frontends proxy `/api` to it.

## Development notes

- Backend must be running before the frontends can load movie data.
- Each frontend’s dev server proxies `/api` to the backend (React: `frontend-react/vite.config.ts`, Angular: `frontend-angular/proxy.conf.json`).

## API (backend)

- GET /api/movies/discover — Discover movies.
- GET /api/movies/genres — List of genres (for filter UI).
- GET /api/movies/trending — Trending movies.
- GET /api/movies/rated — Top rated.
- GET /api/movies/playing — Now playing.
