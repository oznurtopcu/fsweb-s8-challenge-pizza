import Header from "./Header/Header";
import OrderForm from "./OrderForm";

export default function OrderPizza() {

    return (
        <div className="order-page">
            <Header/>
            <main>
                <div className="form-section">
                    <OrderForm/>
                </div>
            </main>
        </div>
    )
}