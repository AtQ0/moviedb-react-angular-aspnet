using MovieDb.Api.Dtos.Movies;

namespace MovieDb.Api.Endpoints;

public static class MoviesEndpoints
{
    public static IEndpointRouteBuilder MapMovieEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapGet("/api/movies", () =>
        {
            MovieDto[] movies =
            [
                new(1, "Alien"),
                new(2, "Blade Runner")
            ];

            return Results.Ok(movies);
        })
        .WithName("GetMovies");

        return app;
    }
}