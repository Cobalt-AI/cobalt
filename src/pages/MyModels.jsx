import { MyModelCard } from "../components/MyModelCard"

const MyModels = ({ address, className, contract }) => {
    return (
        <div className={`${className} pt-10 w-full`}>
            <h1 className="text-3xl text-gray-900">Mis modelos</h1>
            <MyModelCard address={address} contract={contract}></MyModelCard>
        </div>
    )
}

export default MyModels