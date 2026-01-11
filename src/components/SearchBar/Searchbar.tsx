import Image from "next/image";
import { useEffect } from "react";
interface SearchProps {
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function SearchBar({
  name,
  value,
  placeholder = "Search based on Type…",
  onChange,
}: SearchProps) {
  const id = `search_${name}`;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        document?.getElementById(id)?.focus();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [id]);

  return (
    <>
      <div role="search" 
      className="border-amber-400 border-1  rounded-md appearance-none"
      >
        <input
          type="search"
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          aria-label="Search cards"
          autoComplete="off"
          enterKeyHint="search"
          className="p-2"
        />
        {value && (
          <button
            type="button"
            onClick={() =>
              onChange({
                target: { value: "" },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            aria-label="Clear search"
            className="cursor-pointer  appearance-none"
          >
            <Image
              src={"/close.svg"}
              width={16}
              height={16}
              alt="clear Image"
            />
          </button>
        )}
      </div>
    </>
  );
}
