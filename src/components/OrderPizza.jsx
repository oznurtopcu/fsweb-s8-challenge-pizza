import Header from "./Header";
import OrderForm from "./OrderForm";

export default function OrderPizza() {

    return (
        <>
            <Header/>
            <div className="form-section">
                <OrderForm/>
            </div>

        </>
    )
}