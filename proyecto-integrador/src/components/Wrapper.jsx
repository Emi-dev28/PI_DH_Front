import CardHome from "@/components/CardHome";

import { Button } from "./ui/button";

export default function Wrapper(props) {

    

    return (
        <div className="mb-16 flex flex-col">

            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Tenemos que ver cómo crear los id, por ahora sirve el nombre porque no se pueden repetir */}
                {props.products.map((product) => (
                    <CardHome key={product.id} product={product} />
                ))}
            </div>

            <div className="self-center flex items-center gap-8">
                <Button onClick={props.prevHandler}>Prev</Button>
                <span>Página {props.currentPage + 1}</span>
                <Button onClick={props.nextHandler}>Next</Button>
            </div>
            
        </div>
    );
}