import Footer from "../components/Footer.jsx";

const Privacy = () => {
    return (
        <div className="h-5/6 w-full transition">
            <div className="flex text-black flex-col p-32">
                <h1 className="font-bold">Aviso de privacidad</h1>
                <div>
                    <p className="py-3">
                        La solicitud de aprobación del Aviso de Privacidad de Datos tiene una base legal en la Ley de Protección de Datos Personales y su Reglamento. Esta ley establece que toda persona física o moral que recolecte, trate o almacene datos personales de terceros, debe informar de manera clara, precisa y completa a los titulares de dichos datos acerca del tratamiento que se les dará a los mismos.
                        <br/>
                        <br/>
                        El objetivo de esta ley es garantizar el derecho fundamental a la protección de datos personales de los titulares, así como establecer medidas de seguridad y procedimientos para su tratamiento. En este sentido, el Aviso de Privacidad de Datos es un instrumento que permite a los usuarios conocer las condiciones y términos en que se tratarán sus datos personales, así como ejercer sus derechos de acceso, rectificación, cancelación y oposición respecto a los mismos.
                        <br/>
                        <br/>
                        La razón por la que los usuarios deben aceptar estas políticas es porque, al utilizar la plataforma, están proporcionando datos personales y confidenciales que deben ser tratados de manera segura y conforme a las leyes y regulaciones aplicables. Al aceptar las políticas de privacidad, los usuarios están dando su consentimiento informado y explícito para que la empresa recoja, utilice, almacene y comparta sus datos personales, siempre y cuando se haga de acuerdo con lo establecido en las políticas de privacidad y términos de uso.
                        <br/>
                        <br/>
                        En otras palabras, si un usuario no acepta las políticas de privacidad y términos de uso, no podrá utilizar la plataforma, ya que no se podrá garantizar la protección y seguridad de sus datos personales y no se cumplirían las obligaciones legales y contractuales de la empresa. Por lo tanto, aceptar estas políticas es un requisito necesario para utilizar la plataforma de manera segura y legal.
                    </p>
                </div>
            </div>
        </div>
    );
}

export { Privacy };