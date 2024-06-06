import PokeballSpinner from "@/components/PokeballSpinner";

export default function loading() {
  return (
    <div className="loading-container flex flex-col items-center justify-center">
      <h2>Adventuring...</h2>
      <PokeballSpinner />
    </div>
  );
}
