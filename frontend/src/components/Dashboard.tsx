import { useEffect } from "react";
import type { MovieDTO } from "@/lib/shared/movies";
import { useState } from "react";
import { fetchJson } from "@/lib/fetchJson";

export default function Dashboard() {
    const [trendingMovies, setTrendingMovies] = useState<MovieDTO[]>([]);
    const [reqError, setReqError] = useState<string | null>(null);


    useEffect(() => {
        const ac = new AbortController();

        (async () => {
            try {
                setReqError(null);

                const trendingMovies = await fetchJson("/api/movies", { signal: ac.signal }) as MovieDTO[];

                setTrendingMovies(trendingMovies);
            } catch (err) {
                if (err instanceof DOMException && err.name === "AbortError") return;
                setReqError(err instanceof Error ? err.message : "Fetch failed");
                setTrendingMovies([]);
            }
        })();

        return () => ac.abort();
    }, [])

    if (trendingMovies.length === 0) {
        return <div>Loading...</div>;
    };


    return (
        <section className="flex flex-col items-start">
            <h2 className="text-2xl font-bold">Trending</h2>
            {reqError && <div className="text-red-500">{reqError}</div>}
            <ul>
                {trendingMovies.length > 0 && trendingMovies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </section>
    )

}