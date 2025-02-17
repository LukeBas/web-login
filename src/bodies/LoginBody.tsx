import './LoginBody.css';
import lock from '../assets/lock.png';
import key from '../assets/key.png';
import {useState} from "react";
import {VerifyLogin} from "../api/LoginVerification.tsx";
import HelpModal from "../modals/HelpModal.tsx";

export const LoginBody = ({changeLogin}:any) => {
    const [senha, setSenha] = useState<string>("");
    const [matricula, setMatricula] = useState<string>("");
    const [isModalOpen, setModalOpen] = useState(false);

    return(
        <div className="flex" id="login-main-body">
            <div className="bg-white flex justify-center" id="login-body">
                <h3 className="text-sky-500 from-blue-500 to-blue-900 mt-7 text-7xl font-delvon">Login</h3>
                    <ul className="fixed" id="auth-login">
                        <li>
                            <input type="number" placeholder="Matrícula" onChange={(e) => {
                                setMatricula(e.target.value);
                            }}/>
                            <img src={lock} alt="lock" id="lock"/>
                        </li>
                        <li>
                            <input type="password" placeholder="Senha" onChange={(e) => {
                                setSenha(e.target.value);
                            }}/>
                            <img src={key} alt="key" id="key"/>
                        </li>
                        <li>
                            <button
                                onClick={() => changeLogin(VerifyLogin({matricula, senha}))}
                                className="text-white font-bold py-2 px-4 rounded-2xl"
                            >
                                Entrar
                            </button>
                        </li>
                        <li>
                            <h3 className="help-button" onClick={()=>{setModalOpen(true)}}><u>Ajuda</u></h3>
                        </li>
                        <HelpModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                            <h3 className="text-2xl font-bold text-white m-auto text-center bg-[#0168dd] pl-3 pr-3 rounded-full w-[min-content]">
                                ?
                            </h3>
                            <p className="text-[#0168dd] mt-7 p-1 text-center leading-tight">
                                O WebLogin é gerenciado pelo departamento de TI. <br/>
                                Qualquer dificuldade no acesso, favor entrar em contato com a equipe responsável
                                através do HelpDesk da organização.
                            </p>
                            <p className="text-[#0168dd] mt-7 p-1 text-center leading-tight">
                                Em casos de esquecimento de senha, um chamado deverá ser aberto para reset.
                            </p>
                            <div className="mt-16 mb-2 text-center">
                                <a href="http://localhost:5173" className="text-black"><u>Link do HelpDesk</u></a>
                            </div>
                        </HelpModal>
                    </ul>
            </div>
        </div>
    )
}