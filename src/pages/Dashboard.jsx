import { PrimaryButton, PrimaryButton_outline } from "../components/PrimaryButton";

const hola = () => {
    alert('Hola')
}

const hola2 = () => {
    alert('Hola2')
}

const Dashboard = () => {
    return (
        <div>
            <h1 className="text-3xl">dash : <PrimaryButton text="Hola" event={hola} /> <PrimaryButton_outline text="Hola2" event={hola2} /></h1>
            <PrimaryButton text="Hola" event={hola2} />
        </div>
    );
}

export default Dashboard;