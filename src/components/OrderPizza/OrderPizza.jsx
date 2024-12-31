import Header from "../Header/Header";
import OrderForm from "./OrderForm";

export default function OrderPizza(props) {
    const {pageRouter} = props;
    return (
        <div className="order-page">
            <Header/>
            <main>
                <OrderForm pageRouter={pageRouter}/>
            </main>
        </div>
    )
}