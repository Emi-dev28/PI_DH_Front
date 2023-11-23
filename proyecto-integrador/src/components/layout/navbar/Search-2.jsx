import { DateRangePicker } from "@/components/home/DateRangePicker";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { format, parse } from "date-fns";

export default function Search() {
  const [searchProduct, setSearchProduct] = useState("");
  const [searchDate, setSearchDate] = useState();
  const [search, setSearch] = useSearchParams();

  function handleSearch() {
    // Formatea las fechas antes de asignarlas a searchParams
    const formattedDateFrom = searchDate?.from
      ? format(searchDate.from, "yyyy-MM-dd")
      : "";

    const formattedDateTo = searchDate?.to
      ? format(searchDate.to, "yyyy-MM-dd")
      : "";

    setSearch({
      dateFrom: formattedDateFrom,
      dateTo: formattedDateTo,
      product: searchProduct,
    });
  }

  useEffect(() => {
    const formattedDateFrom = parse(
      search.get("dateFrom"),
      "yyyy-MM-dd",
      new Date()
    );

    const formattedDateTo = parse(
      search.get("dateTo"),
      "yyyy-MM-dd",
      new Date()
    );

    search.get("product")
      ? setSearchProduct(search.get("product"))
      : setSearchProduct("");

    search.get("dateFrom")
      ? setSearchDate({ from: formattedDateFrom, to: formattedDateTo })
      : setSearchDate();
  }, [search]);

  return (
    <search className="flex items-center gap-4">
      {/* Input de búsqueda */}
      <div className="hidden md:flex items-center">
        <Input
          type="text"
          placeholder="¿Qué productos estás buscando?"
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
          className="px-8 w-[450px] h-10 border rounded-2xl shadow-md focus:border-none transition-all duration-300 ease-in-out hover:border-gray-400 bg-gray-100"
        />
      </div>

      <DateRangePicker date={searchDate} setDate={setSearchDate} />

      <Button
        className="flex items-center shadow-md rounded-xl text-base text-white"
        onClick={handleSearch}
      >
        Buscar
      </Button>
    </search>
  );
}
