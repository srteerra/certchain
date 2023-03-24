import { useState } from 'react';
import { 
    ArrowUpOnSquareIcon,
    BuildingLibraryIcon,
    DocumentDuplicateIcon,
    Square3Stack3DIcon,
    Cog6ToothIcon,
    DocumentIcon,
    PlusCircleIcon
} from '@heroicons/react/24/outline';
import { PrimaryButton_md_fill, PrimaryButton_md_outline } from "../components/PrimaryButton.jsx";

function PrivacyCard({showPrivacy, setShowPrivacy}) {

    const handlePrivacy = async () => {
        setShowPrivacy(!showPrivacy);
    }

    return(
        <div>
            {showPrivacy ?
                <div class="px-5 py-10 fixed bottom-0 bg-slate-700 z-20 text-white">
                    <h2 className="text-2xl font-bold pb-4">Aviso de privacidad</h2>
                    <p>
                    Nosotros, <strong>Certchain</strong>, somos responsables de la
                    protección de los datos personales que se recopilan a través de
                    nuestro sitio web certchain.net. Nos tomamos muy en serio la
                    privacidad de nuestros usuarios y estamos comprometidos en cumplir con
                    las leyes y regulaciones aplicables en cuanto a la protección de
                    datos.
                    </p>
                    <ul className="list-disc pl-10 py-5">
                        <li>
                            En cumplimiento de la Ley de Protección de Datos Personales, se
                            informa a los usuarios de este sitio web que los datos personales
                            proporcionados serán tratados de forma confidencial y se utilizarán
                            únicamente con la finalidad para la cual fueron proporcionados.
                        </li>
                        <li>
                            Los datos personales podrán ser proporcionados por el usuario de
                            forma voluntaria a través de formularios de contacto o suscripción a
                            boletines, y serán utilizados únicamente con fines de comunicación
                            y/o información sobre nuestros productos y servicios.
                        </li>
                        <li>
                            El usuario podrá ejercer sus derechos de acceso, rectificación,
                            cancelación y oposición respecto a sus datos personales, a través de
                            los medios que para tal efecto se pongan a su disposición en este
                            sitio web.
                        </li>
                        <li>
                            Los datos de los certificados se utilizan para garantizar la autenticidad y la integridad de los mismos.
                        </li>
                    </ul>
                    <div className='px-5 gap-3 flex'>
                        <PrimaryButton_md_fill text={"Aceptar y continuar"} event={handlePrivacy} />
                        <a href="/privacy" className="px-10 py-2 text-md underline text-white rounded-full hover:opacity-90 transition duration-200 ease-in-out">Mas informacion</a>
                    </div>
                </div>
            : <></>}
        </div>
    );
}

export {
    PrivacyCard
};
