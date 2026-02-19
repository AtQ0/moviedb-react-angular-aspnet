namespace MovieDb.Api.Dtos.Movies;

public record MovieDto(
    int Id,
    string Title,
    string Overview,
    string? ReleaseDate,
    string? PosterUrl,
    string? BackdropUrl,
    double RatingAverage,
    int RatingCount,
    double Popularity,
    int[] GenreIds
)