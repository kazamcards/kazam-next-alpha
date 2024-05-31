import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className=" items-center py-4 px-8 bg-[#f7e219]">
        <div>
          <Image
            src="/images/Kazam_Cards_edited.png"
            alt="Picture of Logo"
            height={200}
            width={200}
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">Kazam Cards</h1>
          <p>your one stop PKMN shop</p>
        </div>
      </header>
    </>
  );
}
