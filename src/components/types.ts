export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Runtime: string;
}

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export interface GenreStateProps {
  selectedGenreId: number;
  setSelectedGenreId?: (id: number) => void;
}