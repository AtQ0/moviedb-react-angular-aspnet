using System.Text.Json.Serialization;

namespace MovieDb.Api.Models;

internal sealed class TmdbMovieResult
{
    [JsonPropertyName("id")]
    public int Id { get; init; }

    [JsonPropertyName("title")]
    public string Title { get; init; } = "";

    [JsonPropertyName("overview")]
    public string? Overview { get; init; }

    [JsonPropertyName("release_date")]
    public string? ReleaseDate { get; init; }

    [JsonPropertyName("poster_path")]
    public string? PosterPath { get; init; }

    [JsonPropertyName("backdrop_path")]
    public string? BackdropPath { get; init; }

    [JsonPropertyName("vote_average")]
    public double VoteAverage { get; init; }

    [JsonPropertyName("vote_count")]
    public int VoteCount { get; init; }

    [JsonPropertyName("popularity")]
    public double Popularity { get; init; }

    [JsonPropertyName("genre_ids")]
    public int[] GenreIds { get; init; } = [];

}


internal sealed class TmdbMoviePageResponse
{
    [JsonPropertyName("results")]
    public TmdbMovieResult[] Results { get; init; } = [];
}

internal sealed class TmdbGenre
{
    [JsonPropertyName("id")]
    public int Id { get; init; }

    [JsonPropertyName("name")]
    public string Name { get; init; } = "";
}

internal sealed class TmdbGenreListResponse
{
    [JsonPropertyName("genres")]
    public TmdbGenre[] Genres { get; init; } = [];
}