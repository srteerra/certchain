import { 
    PrimaryButton_lg_fill,
    PrimaryButton_md_fill,
    PrimaryButton_sm_fill,
    PrimaryButton_lg_outline,
    PrimaryButton_md_outline,
    PrimaryButton_sm_outline
} from "../components/PrimaryButton";

const hola = () => {
    alert('Hola')
}

const hola2 = () => {
    alert('Hola2')
}

const Dashboard = () => {
    return (
        <div>
            <div>
                <PrimaryButton_lg_fill text="Connect Wallet" event={hola} />
                <PrimaryButton_md_fill text="Connect Wallet" event={hola} />
                <PrimaryButton_sm_fill text="Connect Wallet" event={hola} />
            </div>
            <div>
                <PrimaryButton_lg_outline text="Connect Wallet" event={hola2} />
                <PrimaryButton_md_outline text="Connect Wallet" event={hola2} />
                <PrimaryButton_sm_outline text="Connect Wallet" event={hola2} />
            </div>
        </div>
    );
}

export default Dashboard;