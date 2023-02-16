import { 
    PrimaryButton_lg_fill,
    PrimaryButton_md_fill,
    PrimaryButton_sm_fill,
    PrimaryButton_lg_outline,
    PrimaryButton_md_outline,
    PrimaryButton_sm_outline
} from "../components/PrimaryButton";

import { 
    SecondaryButton_lg_fill,
    SecondaryButton_md_fill,
    SecondaryButton_sm_fill,
    SecondaryButton_lg_outline,
    SecondaryButton_md_outline,
    SecondaryButton_sm_outline
} from "../components/SecondaryButton";

const hola = () => {
    alert('Hola1')
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
            <div>
                <SecondaryButton_lg_fill text="Connect Wallet" event={hola2} />
                <SecondaryButton_md_fill text="Connect Wallet" event={hola2} />
                <SecondaryButton_sm_fill text="Connect Wallet" event={hola2} />
            </div>
            <div>
                <SecondaryButton_lg_outline text="Connect Wallet" event={hola2} />
                <SecondaryButton_md_outline text="Connect Wallet" event={hola2} />
                <SecondaryButton_sm_outline text="Connect Wallet" event={hola2} />
            </div>
        </div>
    );
}

export default Dashboard;