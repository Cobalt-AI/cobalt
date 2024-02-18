import { MarketModelCard } from "../components/MarketModelCard"

const ViewModels = ({ className, contract, address }) => {

    return (
        <div className={`${className} pt-10 w-full`}>
            <h2 className="text-3xl my-3 text-gray-900">Modelos disponibles</h2>
            <MarketModelCard className={"my-2"} contract={contract} address={address}/>
        </div>
    )
}

export default ViewModels