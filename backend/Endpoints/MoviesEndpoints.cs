using MovieDb.Api.Services;

namespace MovieDb.Api.Endpoints;

public static class MoviesEndpoints
{
    public static IEndpointRouteBuilder MapMovieEndpoints(this IEndpointRouteBuilder app)
    {

        var movies = app.MapGroup("/api/movies");

        movies.MapGet("/trending", async (MovieService s, CancellationToken ct) =>
            Results.Ok(await s.GetMoviesAsync(MovieFeedType.Trending, null, null, ct)));

        movies.MapGet("/rated", async (MovieService s, CancellationToken ct) =>
            Results.Ok(await s.GetMoviesAsync(MovieFeedType.Rated, null, null, ct)));

        movies.MapGet("/playing", async (MovieService s, CancellationToken ct) =>
            Results.Ok(await s.GetMoviesAsync(MovieFeedType.Playing, null, null, ct)));

        movies.MapGet("/discover", async (int? genredId, MovieService s, CancellationToken ct) =>
            Results.Ok(await s.GetMoviesAsync(MovieFeedType.Discover, genredId, null, ct)));

        movies.MapGet("/search", async (string? q, MovieService s, CancellationToken ct) =>
       {
           if (string.IsNullOrWhiteSpace(q))
               return Results.BadRequest(new { message = "Query parameter 'q' is required." });

           var result = await s.GetMoviesAsync(MovieFeedType.Search, null, q, ct);
           return Results.Ok(result);
       });

        movies.MapGet("/genres", async (MovieService s, CancellationToken ct) =>
            Results.Ok(await s.GetGenresAsync(ct)));

        return app;
    }
}