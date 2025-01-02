import Header from "../Header/Header";
import OrderForm from "./OrderForm";

export default function OrderPizza(props) {
    const {pageRouter, initialData, data, setData, setDataResponse} = props;
    return (
        <>
                <OrderForm pageRouter={pageRouter} initialData={initialData} data={data} setData={setData} setDataResponse={setDataResponse}/>
        </>
    )
}