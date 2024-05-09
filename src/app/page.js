import Jumbotron from "@/components/Jumbotron/Jumbotron";
import MovieList from "@/components/MovieList/MovieList";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Jumbotron></Jumbotron>
      <MovieList></MovieList>
    </main>
  );
}
